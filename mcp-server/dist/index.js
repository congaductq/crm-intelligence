import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { MongoClient } from "mongodb";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();
// --- Configuration ---
const mongoClient = new MongoClient(process.env.MONGO_URI);
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const server = new McpServer({
    name: "crm-intelligence-backend",
    version: "1.0.1", // Increment for version check
});
// --- RESOURCES ---
// Resource 1: System Schema Documentation
server.resource("system-schema", "schema://main", { description: "The full MongoDB and Supabase schema documentation" }, async (uri) => {
    const fs = await import("fs/promises");
    const path = await import("path");
    const schemaPath = path.join(process.cwd(), "mongo_full_schema.md");
    const content = await fs.readFile(schemaPath, "utf-8");
    return {
        contents: [{
                uri: uri.href,
                text: content,
                mimeType: "text/markdown"
            }]
    };
});
// Resource 2: Active Stores List
server.resource("active-stores", "stores://all", { description: "List of all active stores across the CRM" }, async (uri) => {
    const matching_logs = [];
    const { data, error } = await supabase.from("stores").select("id, store_name, location");
    if (error)
        throw error;
    return {
        contents: [{
                uri: uri.href,
                text: JSON.stringify(data, null, 2),
                mimeType: "application/json"
            }]
    };
});
// --- Helper: Generate Embeddings ---
async function generateEmbedding(text) {
    try {
        const model = genAI.getGenerativeModel({ model: "text-embedding-004" });
        const result = await model.embedContent(text);
        return result.embedding.values;
    }
    catch (error) {
        console.error("Embedding generation failed:", error);
        return new Array(768).fill(0.01);
    }
}
// --- Helper: Retryable Supabase caller ---
async function supabaseCallWithRetry(fn, matching_logs, label) {
    const maxAttempts = 2;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            const res = await fn();
            // Supabase client often returns { data, error } instead of throwing
            if (res && res.error) {
                const emsg = res.error?.message || JSON.stringify(res.error);
                matching_logs.push(`${label} returned error: ${emsg}`);
                throw res.error;
            }
            return res;
        }
        catch (err) {
            const msg = err && err.message ? err.message : String(err);
            matching_logs.push(`${label} attempt ${attempt} error: ${msg}`);
            if (err && err.stack) {
                // push a few stack lines for context
                const stackLines = err.stack.split('\n').slice(0, 3).map(l => l.trim()).join(' | ');
                matching_logs.push(`${label} stack: ${stackLines}`);
            }
            console.error(`${label} attempt ${attempt} failed:`, err);
            if (attempt < maxAttempts)
                await new Promise(r => setTimeout(r, 200));
        }
    }
    // return a fallback shaped like a Supabase response
    const failure = { data: null, error: { message: `${label} failed after retries` } };
    matching_logs.push(`${label} failed after retries`);
    return failure;
}
// --- Helper: Robust Store Resolver (Supabase First) ---
async function resolveStore(nameOrId, matching_logs) {
    if (!nameOrId || nameOrId.trim() === "")
        return { id: null, name: null };
    matching_logs.push(`RESOLVER_INPUT: "${nameOrId}"`);
    // 1. Try exact ID match
    const isObjectId = /^[0-9a-fA-F]{24}$/.test(nameOrId.trim());
    if (isObjectId) {
        matching_logs.push(`Phase 1: Attempting exact ID match for: ${nameOrId}`);
        const idRes = await supabaseCallWithRetry(() => supabase.from("stores").select("id, store_name").eq("id", nameOrId.trim()), matching_logs, 'Supabase ID lookup');
        const idData = idRes?.data;
        const idError = idRes?.error;
        if (idError && idError.message)
            matching_logs.push(`Supabase ID lookup error: ${idError.message}`);
        if (idData && idData.length > 0) {
            matching_logs.push(`RESOLVED: Found by ID in Supabase.`);
            return { id: idData[0].id, name: idData[0].store_name };
        }
    }
    // 2. Try Name matching
    matching_logs.push(`Phase 2: Attempting Name match logic...`);
    // Tier 1: Fuzzy (preserved character sequence with wildcards)
    const fuzzy = nameOrId.replace(/[^a-zA-Z0-9]/g, "%").replace(/%+/g, "%");
    matching_logs.push(`Tier 1 (Fuzzy): ilike %${fuzzy}%`);
    const d1Res = await supabaseCallWithRetry(() => supabase.from("stores").select("id, store_name").ilike("store_name", `%${fuzzy}%`).limit(1), matching_logs, 'Supabase fuzzy lookup');
    if (d1Res?.error && d1Res.error.message)
        matching_logs.push(`Supabase fuzzy lookup error: ${d1Res.error.message}`);
    const d1 = d1Res?.data;
    if (d1 && d1.length > 0) {
        matching_logs.push(`RESOLVED: Found by Tier 1 (Fuzzy) in Supabase.`);
        return { id: d1[0].id, name: d1[0].store_name };
    }
    // Tier 2: Word Breakdown & Fallback
    const stopwords = [
        "includes", "location", "info", "show", "data", "store", "sales", "details",
        "query", "find", "the", "and", "for", "with", "from", "that", "this", "those",
        "which", "what", "where", "when", "who", "how", "it", "is", "of", "a", "an",
        "to", "in", "on", "at", "by", "as"
    ];
    const words = nameOrId.split(/[^a-zA-Z0-9]/).filter(w => w.length > 1 && !stopwords.includes(w.toLowerCase()));
    if (words.length > 0) {
        matching_logs.push(`Significant words: [${words.join(", ")}]`);
        const tryMatchResult = async (cnt) => {
            const segment = words.slice(0, cnt).join("%");
            matching_logs.push(`Tier 2 (Words x${cnt}): ilike %${segment}%`);
            const res = await supabaseCallWithRetry(() => supabase.from("stores").select("id, store_name").ilike("store_name", `%${segment}%`).limit(1), matching_logs, `Supabase tier2 lookup x${cnt}`);
            if (res?.error && res.error.message)
                matching_logs.push(`Supabase tier2 lookup error: ${res.error.message}`);
            return res?.data;
        };
        // Try segments but skip if the segment is just common junk we missed
        const d2 = await tryMatchResult(Math.min(words.length, 3));
        if (d2 && d2.length > 0) {
            matching_logs.push(`RESOLVED: Found by Tier 2 (Longer Segment) in Supabase.`);
            return { id: d2[0].id, name: d2[0].store_name };
        }
        if (d2 && d2.length > 0) {
            matching_logs.push(`RESOLVED: Found by Tier 2 (Longer Segment) in Supabase.`);
            return { id: d2[0].id, name: d2[0].store_name };
        }
        if (words.length >= 2) {
            const d3 = await tryMatchResult(2);
            if (d3 && d3.length > 0) {
                matching_logs.push(`RESOLVED: Found by Tier 2 (Short Segment) in Supabase.`);
                return { id: d3[0].id, name: d3[0].store_name };
            }
        }
    }
    // 3. Last Resort Fallback to MongoDB
    matching_logs.push(`Supabase resolution failed. Falling back to MongoDB search...`);
    await mongoClient.connect();
    const db = mongoClient.db("bs_int");
    const collection = db.collection("stores");
    if (isObjectId) {
        try {
            const { ObjectId } = await import("mongodb");
            const s = await collection.findOne({ _id: new ObjectId(nameOrId) });
            if (s) {
                matching_logs.push(`RESOLVED: Found by ID in MongoDB.`);
                return { id: s._id.toString(), name: s.store_name };
            }
        }
        catch (e) { }
    }
    const ms = await collection.findOne({ store_name: { $regex: nameOrId, $options: "i" } });
    if (ms) {
        matching_logs.push(`RESOLVED: Found by name in MongoDB.`);
        return { id: ms._id.toString(), name: ms.store_name };
    }
    matching_logs.push(`RESOLUTION FAILED: Store not found in Supabase or MongoDB.`);
    return { id: null, name: null };
}
// --- TOOL 1: Sales Analytics ---
// @ts-ignore - Zod schema with deep type instantiation
server.tool("get_sales_analytics", {
    season: z.string().optional().describe("The season to analyze: winter, spring, summer, or fall"),
    month: z.string().optional().describe("Specific month number (1-12) to analyze"),
    year: z.string().optional().describe("Specific year (e.g., 2024, 2025) to analyze"),
    limit: z.string().optional().describe("Number of top products to return (default: 5)"),
    storeName: z.string().optional().describe("Optional store name to filter sales data"),
}, async ({ season, month, year, limit, storeName }) => {
    const limitNum = limit ? parseInt(limit, 10) : 5;
    const matching_logs = [];
    try {
        // 1. Resolve Store
        const { id: resolvedId, name: resolvedName } = await resolveStore(storeName, matching_logs);
        if (storeName && !resolvedId) {
            return { content: [{ type: "text", text: JSON.stringify({ error: "Store not found", matching_logs }, null, 2) }] };
        }
        // 2. Query Orders (Priority: Supabase > MongoDB)
        let sbQuery = supabase.from("orders").select("*");
        if (resolvedId)
            sbQuery = sbQuery.eq("store_id", resolvedId);
        let startDate = null;
        let endDate = null;
        if (month && year) {
            const m = parseInt(month, 10);
            const y = parseInt(year, 10);
            startDate = new Date(y, m - 1, 1);
            endDate = new Date(y, m, 1);
        }
        else if (season) {
            const currentYear = new Date().getFullYear();
            if (season === "winter") {
                startDate = new Date(currentYear - 1, 11, 1);
                endDate = new Date(currentYear, 2, 1);
            }
            else if (season === "spring") {
                startDate = new Date(currentYear, 2, 1);
                endDate = new Date(currentYear, 5, 1);
            }
            else if (season === "summer") {
                startDate = new Date(currentYear, 5, 1);
                endDate = new Date(currentYear, 8, 1);
            }
            else if (season === "fall") {
                startDate = new Date(currentYear, 8, 1);
                endDate = new Date(currentYear, 11, 1);
            }
        }
        if (startDate && endDate) {
            sbQuery = sbQuery.gte("date_created", startDate.toISOString()).lt("date_created", endDate.toISOString());
        }
        const sbOrdersRes = await supabaseCallWithRetry(() => sbQuery.limit(1000), matching_logs, 'Supabase orders query');
        const sbOrders = sbOrdersRes?.data;
        if (sbOrders && sbOrders.length > 0) {
            const productStats = new Map();
            for (const order of sbOrders) {
                const items = Array.isArray(order.line_items) ? order.line_items : [];
                for (const item of items) {
                    const pid = item.product_id?.toString();
                    if (!pid)
                        continue;
                    const existing = productStats.get(pid) || { name: item.name, totalSold: 0, totalRevenue: 0 };
                    existing.totalSold += (item.quantity || 0);
                    existing.totalRevenue += parseFloat(item.total || "0");
                    productStats.set(pid, existing);
                }
            }
            const results = Array.from(productStats.entries())
                .map(([id, stats]) => ({ id: parseInt(id), productName: stats.name, totalSold: stats.totalSold, totalRevenue: stats.totalRevenue }))
                .sort((a, b) => b.totalSold - a.totalSold)
                .slice(0, limitNum);
            return {
                content: [{
                        type: "text",
                        text: JSON.stringify({
                            source: "Supabase_ORDERS_VERIFIED",
                            matching_logs,
                            store: resolvedName || "All Stores",
                            filter: (month && year) ? `${month}/${year}` : (season || "all-time"),
                            topProducts: results,
                            summary: `Found ${results.length} top-selling products in Supabase.`
                        }, null, 2)
                    }]
            };
        }
        // Fallback to MongoDB
        matching_logs.push("Supabase orders empty or found nothing. Falling back to MongoDB...");
        await mongoClient.connect();
        const db = mongoClient.db("bs_int");
        const collection = db.collection("woocommerce_order");
        let matchQuery = {};
        if (resolvedId) {
            const { ObjectId } = await import("mongodb");
            try {
                matchQuery.store_id = new ObjectId(resolvedId);
            }
            catch (e) {
                matchQuery.store_id = resolvedId;
            }
        }
        let timeFilter = {};
        if (month && year) {
            const m = parseInt(month, 10);
            const y = parseInt(year, 10);
            matchQuery.date_created_from_str = { $gte: new Date(y, m - 1, 1), $lt: new Date(y, m, 1) };
        }
        else if (season) {
            let months = [];
            if (season === "winter")
                months = [12, 1, 2];
            else if (season === "spring")
                months = [3, 4, 5];
            else if (season === "summer")
                months = [6, 7, 8];
            else if (season === "fall")
                months = [9, 10, 11];
            timeFilter = { month: { $in: months } };
        }
        const pipeline = [
            { $project: { line_items: 1, store_id: 1, date_created_from_str: 1, month: { $month: "$date_created_from_str" } } },
            { $match: { ...matchQuery, ...timeFilter } },
            { $unwind: "$line_items" },
            { $group: { _id: "$line_items.product_id", productName: { $first: "$line_items.name" }, totalSold: { $sum: "$line_items.quantity" }, totalRevenue: { $sum: { $toDouble: "$line_items.total" } } } },
            { $project: { _id: 0, id: "$_id", productName: 1, totalSold: 1, totalRevenue: 1 } },
            { $sort: { totalSold: -1 } },
            { $limit: limitNum },
        ];
        const mongoResults = await collection.aggregate(pipeline).toArray();
        return {
            content: [{
                    type: "text",
                    text: JSON.stringify({
                        source: "MongoDB_FALLBACK_ORDERS",
                        matching_logs,
                        store: resolvedName || "All Stores",
                        filter: (month && year) ? `${month}/${year}` : (season || "all-time"),
                        topProducts: mongoResults,
                        summary: `Found ${mongoResults.length} top-selling products in MongoDB.`
                    }, null, 2)
                }]
        };
    }
    catch (error) {
        return { content: [{ type: "text", text: `Error: ${error instanceof Error ? error.message : "Analysis error"}` }] };
    }
});
// --- TOOL 2: Semantic Search (Supabase Vector) ---
server.tool("search_product_knowledge", {
    query: z.string().describe("The semantic description of the product to search for"),
}, async ({ query }) => {
    try {
        const embedding = await generateEmbedding(query);
        const { data, error } = await supabase.rpc("match_products", {
            query_embedding: embedding,
            match_threshold: 0.5,
            match_count: 5,
        });
        if (error || !data || data.length === 0) {
            await mongoClient.connect();
            const db = mongoClient.db("bs_int");
            const fallbackResults = await db.collection("woocommerce_product").find({
                name: { $regex: query, $options: "i" }
            }).limit(5).toArray();
            return {
                content: [{
                        type: "text",
                        text: JSON.stringify({
                            source: "MongoDB_FALLBACK_PRODUCT",
                            results: fallbackResults.map(p => ({
                                id: p.id,
                                content: p.name || p.description,
                                metadata: { price: p.price, sku: p.sku }
                            })),
                            message: "Supabase vector search failed, fallback to MongoDB regex."
                        }, null, 2)
                    }]
            };
        }
        return {
            content: [{
                    type: "text",
                    text: JSON.stringify({ source: "Supabase_VECTOR_VERIFIED", results: data }, null, 2)
                }]
        };
    }
    catch (error) {
        return { content: [{ type: "text", text: `Error: ${error instanceof Error ? error.message : "Search error"}` }] };
    }
});
// --- TOOL 3: Add Knowledge ---
server.tool("add_product_knowledge", {
    content: z.string().describe("Product description"),
    name: z.string().optional(),
    price: z.string().optional(),
    category: z.string().optional(),
}, async ({ content, name, price, category }) => {
    try {
        const embedding = await generateEmbedding(content);
        const { data, error } = await supabase.from("product_embeddings").insert({
            content,
            metadata: { name, price: price ? parseFloat(price) : undefined, category },
            embedding,
        }).select();
        if (error)
            throw error;
        return { content: [{ type: "text", text: JSON.stringify({ success: true, data }, null, 2) }] };
    }
    catch (error) {
        return { content: [{ type: "text", text: `Error: ${error instanceof Error ? error.message : "Error"}` }] };
    }
});
// --- TOOL 4: Get Store Info (Supabase First) ---
server.tool("get_store_info", {
    store_id: z.string().optional().describe("The Store ID (ObjectId) to look up"),
    store_name: z.string().optional().describe("The Store Name to search for"),
}, async ({ store_id, store_name }) => {
    try {
        const matching_logs = [];
        const input = store_id || store_name;
        // 1. Resolve Store Identity
        const { id: rid, name: rname } = await resolveStore(input, matching_logs);
        if (!rid) {
            return {
                content: [{
                        type: "text",
                        text: JSON.stringify({ error: "Store not found", matching_logs }, null, 2)
                    }]
            };
        }
        // 2. Fetch Detailed Data from Supabase
        const sbRes = await supabaseCallWithRetry(() => supabase.from("stores").select("*").eq("id", rid).single(), matching_logs, `Supabase detail fetch ID ${rid}`);
        const sbStore = sbRes?.data;
        const sbError = sbRes?.error;
        if (sbError && sbError.message) {
            matching_logs.push(`Supabase detail fetch error for ID ${rid}: ${sbError.message}`);
        }
        if (sbStore) {
            return {
                content: [{
                        type: "text",
                        text: JSON.stringify({
                            source: "Supabase_STORE_VERIFIED",
                            matching_logs,
                            store: {
                                store_id: sbStore.id,
                                store_name: sbStore.store_name,
                                organization_id: sbStore.organization_id,
                                email: sbStore.email,
                                locations: Array.isArray(sbStore.location) ? sbStore.location : (sbStore.location ? [sbStore.location] : [])
                            }
                        }, null, 2)
                    }]
            };
        }
        // 3. Last Resort Fallback to MongoDB for details
        matching_logs.push(`Details missing in Supabase for ID ${rid}. Fetching from MongoDB...`);
        await mongoClient.connect();
        const { ObjectId } = await import("mongodb");
        let mStore;
        try {
            mStore = await mongoClient.db("bs_int").collection("stores").findOne({ _id: new ObjectId(rid) });
        }
        catch (e) { }
        if (!mStore && rname)
            mStore = await mongoClient.db("bs_int").collection("stores").findOne({ store_name: rname });
        if (mStore) {
            return {
                content: [{
                        type: "text",
                        text: JSON.stringify({
                            source: "MongoDB_STORE_FALLBACK",
                            matching_logs,
                            store: {
                                store_id: mStore._id,
                                store_name: mStore.store_name,
                                organization_id: mStore.organization_id,
                                location: mStore.location
                            }
                        }, null, 2)
                    }]
            };
        }
        return {
            content: [{
                    type: "text",
                    text: JSON.stringify({ error: "Store details not found", matching_logs }, null, 2)
                }]
        };
    }
    catch (error) {
        return { content: [{ type: "text", text: `Error: ${error instanceof Error ? error.message : "Fetch error"}` }] };
    }
});
// --- TOOL 5: Search Stores by Location ---
server.tool("search_stores_by_location", {
    city: z.string().optional(),
    state: z.string().optional(),
    country: z.string().optional(),
}, async ({ city, state, country }) => {
    try {
        let query = supabase.from("stores").select("id, store_name, location");
        if (city)
            query = query.filter("location", "cs", JSON.stringify([{ city }]));
        if (state)
            query = query.filter("location", "cs", JSON.stringify([{ state }]));
        if (country)
            query = query.filter("location", "cs", JSON.stringify([{ country }]));
        const { data, error } = await query.limit(10);
        if (error)
            throw error;
        return {
            content: [{
                    type: "text",
                    text: JSON.stringify({ source: "Supabase_LOCATION_SEARCH", results: data, count: data.length }, null, 2)
                }]
        };
    }
    catch (error) {
        return { content: [{ type: "text", text: `Error: ${error instanceof Error ? error.message : "Location search error"}` }] };
    }
});
// --- TOOL 6: Order Analytics ---
server.tool("get_order_analytics", {
    status: z.string().optional().describe("Filter by order status (e.g., pending, processing, completed, refunded)"),
    startDate: z.string().optional().describe("Start date (YYYY-MM-DD or ISO string)"),
    endDate: z.string().optional().describe("End date (YYYY-MM-DD or ISO string)"),
    storeName: z.string().optional().describe("Optional store name"),
}, async ({ status, startDate, endDate, storeName }) => {
    const matching_logs = [];
    try {
        const { id: resolvedId, name: resolvedName } = await resolveStore(storeName, matching_logs);
        if (storeName && !resolvedId) {
            return { content: [{ type: "text", text: JSON.stringify({ error: "Store not found", matching_logs }, null, 2) }] };
        }
        let sbQuery = supabase.from("orders").select("*");
        if (resolvedId)
            sbQuery = sbQuery.eq("store_id", resolvedId);
        if (status)
            sbQuery = sbQuery.eq("status", status);
        if (startDate)
            sbQuery = sbQuery.gte("date_created", startDate);
        if (endDate)
            sbQuery = sbQuery.lte("date_created", endDate);
        const sbRes = await supabaseCallWithRetry(() => sbQuery.limit(100), matching_logs, 'Supabase orders analytics');
        if (sbRes?.data && sbRes.data.length > 0) {
            return {
                content: [{
                        type: "text",
                        text: JSON.stringify({
                            source: "Supabase_ORDERS",
                            matching_logs,
                            store: resolvedName || "All Stores",
                            count: sbRes.data.length,
                            orders: sbRes.data
                        }, null, 2)
                    }]
            };
        }
        // Mongo Fallback
        await mongoClient.connect();
        const { ObjectId } = await import("mongodb");
        const collection = mongoClient.db("bs_int").collection("woocommerce_order");
        let match = {};
        if (resolvedId)
            try {
                match.store_id = new ObjectId(resolvedId);
            }
            catch (e) {
                match.store_id = resolvedId;
            }
        if (status)
            match.status = status;
        if (startDate || endDate) {
            match.date_created_from_str = {};
            if (startDate)
                match.date_created_from_str.$gte = new Date(startDate);
            if (endDate)
                match.date_created_from_str.$lte = new Date(endDate);
        }
        const mongoResults = await collection.find(match).limit(100).toArray();
        return {
            content: [{
                    type: "text",
                    text: JSON.stringify({
                        source: "MongoDB_ORDERS",
                        matching_logs,
                        store: resolvedName || "All Stores",
                        count: mongoResults.length,
                        orders: mongoResults
                    }, null, 2)
                }]
        };
    }
    catch (error) {
        return { content: [{ type: "text", text: `Error: ${error instanceof Error ? error.message : "Order analytics error"}` }] };
    }
});
// --- TOOL 7: Customer Insights ---
// @ts-ignore - Zod schema with deep type instantiation
server.tool("get_customer_insights", {
    minCLV: z.number().optional().describe("Minimum Customer Lifetime Value"),
    storeName: z.string().optional().describe("Optional store name filter"),
    limit: z.number().optional().describe("Number of customers to return (default: 10)"),
}, async ({ minCLV, storeName, limit = 10 }) => {
    const matching_logs = [];
    try {
        const { id: resolvedId, name: resolvedName } = await resolveStore(storeName, matching_logs);
        // 1. Try Supabase
        let sbQuery = supabase.from("customers").select("*");
        if (resolvedId)
            sbQuery = sbQuery.eq("store_id", resolvedId);
        if (minCLV)
            sbQuery = sbQuery.gte("clv", minCLV);
        const sbRes = await supabaseCallWithRetry(() => sbQuery.order('clv', { ascending: false }).limit(limit), matching_logs, 'Supabase customers query');
        if (sbRes?.data && sbRes.data.length > 0) {
            return {
                content: [{
                        type: "text",
                        text: JSON.stringify({
                            source: "Supabase_CUSTOMERS",
                            store: resolvedName || "All Stores",
                            count: sbRes.data.length,
                            customers: sbRes.data.map(c => ({
                                name: `${c.first_name || ""} ${c.last_name || ""}`.trim() || c.username || "Unknown",
                                email: c.email,
                                clv: c.clv,
                                total_orders: c.total_orders,
                                last_order_date: c.last_order_date
                            }))
                        }, null, 2)
                    }]
            };
        }
        // 2. Fallback to MongoDB
        await mongoClient.connect();
        const db = mongoClient.db("bs_int");
        const collection = db.collection("woocommerce_customer");
        let query = {};
        if (resolvedId) {
            try {
                const { ObjectId } = await import("mongodb");
                query.store_id = new ObjectId(resolvedId);
            }
            catch (e) {
                query.store_id = resolvedId;
            }
        }
        if (minCLV)
            query.clv = { $gte: minCLV };
        const customers = await collection.find(query)
            .sort({ clv: -1 })
            .limit(limit)
            .toArray();
        return {
            content: [{
                    type: "text",
                    text: JSON.stringify({
                        source: "MongoDB_CUSTOMERS_FALLBACK",
                        store: resolvedName || "All Stores",
                        count: customers.length,
                        customers: customers.map(c => ({
                            name: `${c.first_name || ""} ${c.last_name || ""}`.trim() || c.username || "Unknown",
                            email: c.email,
                            clv: c.clv,
                            total_orders: c.total_orders,
                            last_order_date: c.last_order_date
                        }))
                    }, null, 2)
                }]
        };
    }
    catch (error) {
        return { content: [{ type: "text", text: `Error: ${error instanceof Error ? error.message : "Customer insights error"}` }] };
    }
});
// --- TOOL 8: Promotion Analytics ---
server.tool("get_promotion_analytics", {
    storeName: z.string().optional().describe("Store name"),
}, async ({ storeName }) => {
    const matching_logs = [];
    try {
        const { id: resolvedId, name: resolvedName } = await resolveStore(storeName, matching_logs);
        // 1. Try Supabase
        let sbQuery = supabase.from("coupons").select("*");
        if (resolvedId)
            sbQuery = sbQuery.eq("store_id", resolvedId);
        const sbCouponsRes = await supabaseCallWithRetry(() => sbQuery.limit(50), matching_logs, 'Supabase coupons query');
        if (sbCouponsRes?.data && sbCouponsRes.data.length > 0) {
            return {
                content: [{
                        type: "text",
                        text: JSON.stringify({
                            source: "Supabase_PROMOTIONS",
                            store: resolvedName || "All Stores",
                            coupons: sbCouponsRes.data.map(c => ({ code: c.code, amount: c.amount, usage_count: c.usage_count, expiry: c.date_expires })),
                            message: "Note: Extended promotions (composite) still require MongoDB lookup."
                        }, null, 2)
                    }]
            };
        }
        // 2. Fallback to MongoDB
        await mongoClient.connect();
        const db = mongoClient.db("bs_int");
        const couponCollection = db.collection("woocommerce_coupon");
        let query = {};
        if (resolvedId) {
            const { ObjectId } = await import("mongodb");
            try {
                query.store_id = new ObjectId(resolvedId);
            }
            catch (e) {
                query.store_id = resolvedId;
            }
        }
        const coupons = await couponCollection.find(query).limit(50).toArray();
        const promoCollection = db.collection("promotion_composite_product");
        const promos = await promoCollection.find(query).limit(50).toArray();
        return {
            content: [{
                    type: "text",
                    text: JSON.stringify({
                        source: "MongoDB_PROMOTIONS_FALLBACK",
                        store: resolvedName || "All Stores",
                        coupons: coupons.map(c => ({ code: c.code, amount: c.amount, usage_count: c.usage_count, expiry: c.date_expires })),
                        promotions: promos.map(p => ({ name: p.name, type: p.type, status: p.status, price: p.price }))
                    }, null, 2)
                }]
        };
    }
    catch (error) {
        return { content: [{ type: "text", text: `Error: ${error instanceof Error ? error.message : "Promotion analytics error"}` }] };
    }
});
// --- Start Server (IIFE to avoid Top-Level await issues in some environments) ---
(async () => {
    try {
        const transport = new StdioServerTransport();
        await server.connect(transport);
        console.error("CRM Intelligence MCP Server (v1.0.1) running...");
    }
    catch (err) {
        console.error("Failed to start MCP server:", err);
        process.exit(1);
    }
})();
