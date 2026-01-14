import { MongoClient } from "mongodb";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
if (!MONGO_URI || !SUPABASE_URL || !SUPABASE_KEY) {
    console.error("Missing env vars");
    process.exit(1);
}
const mongoClient = new MongoClient(MONGO_URI);
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
// Check for --full flag
const isFullMigration = process.argv.includes("--full");
async function migrate() {
    try {
        await mongoClient.connect();
        console.log("Connected to MongoDB");
        const db = mongoClient.db("bs_int");
        if (isFullMigration) {
            console.log("!!! RUNNING FULL MIGRATION !!!");
        }
        else {
            console.log("Running partial migration (Last 5000 items). Use --full for complete migration.");
        }
        // 0. Pre-fetch Warehouses and Links for Multi-Location mapping
        console.log("Fetching Warehouses...");
        const warehousesArr = await db.collection("warehouses").find({}, {
            projection: { _id: 1, name: 1, address_1: 1, address_2: 1, city: 1, state: 1, country: 1, postal_code: 1, latitude: 1, longitude: 1 }
        }).toArray();
        const warehouseMap = new Map(warehousesArr.map(w => [w._id.toString(), w]));
        console.log("Fetching Warehouse Links...");
        const links = await db.collection("warehouses_links").find({}, {
            projection: { warehouse_id: 1, store_id: 1, priority: 1 }
        }).toArray();
        const storeToLocationsMap = new Map();
        for (const link of links) {
            const sid = link.store_id?.toString();
            const wid = link.warehouse_id?.toString();
            if (sid && wid) {
                const wh = warehouseMap.get(wid);
                if (wh) {
                    const locations = storeToLocationsMap.get(sid) || [];
                    locations.push({
                        warehouse_id: wid,
                        warehouse_name: wh.name,
                        address_1: wh.address_1,
                        address_2: wh.address_2,
                        city: wh.city,
                        state: wh.state,
                        country: wh.country,
                        postal_code: wh.postal_code,
                        lat: wh.latitude,
                        lng: wh.longitude,
                        priority: link.priority
                    });
                    storeToLocationsMap.set(sid, locations);
                }
            }
        }
        console.log(`Mapped multi-locations for ${storeToLocationsMap.size} stores.`);
        // 1. STORES
        console.log("Migrating all Stores...");
        const storeCursor = db.collection("stores").find({});
        let sBatch = [];
        let sCount = 0;
        const migratedStoreIds = new Set();
        while (await storeCursor.hasNext()) {
            const s = await storeCursor.next();
            if (!s)
                break;
            const sid = s._id.toString();
            migratedStoreIds.add(sid);
            sBatch.push({
                id: sid,
                store_name: s.store_name,
                organization_id: s.organization_id?.toString(),
                email: s.email,
                time_zone: s.time_zone,
                currency: s.currency,
                location: storeToLocationsMap.get(sid) || (s.location ? [s.location] : [])
            });
            if (sBatch.length === 100) {
                const { error } = await supabase.from("stores").upsert(sBatch);
                if (error)
                    console.error("Store batch error:", error.message);
                sCount += sBatch.length;
                if (sCount % 500 === 0)
                    console.log(`Migrated ${sCount} stores...`);
                sBatch = [];
            }
        }
        if (sBatch.length > 0) {
            await supabase.from("stores").upsert(sBatch);
            sCount += sBatch.length;
        }
        console.log(`Done Stores: ${sCount}`);
        // 2. PRODUCTS
        console.log(isFullMigration ? "Migrating ALL Products..." : "Migrating last 5000 Products...");
        const productFind = db.collection("woocommerce_product").find({});
        if (!isFullMigration) {
            productFind.sort({ _id: -1 }).limit(5000);
        }
        const productCursor = productFind;
        let pBatch = [];
        let pCount = 0;
        while (await productCursor.hasNext()) {
            const p = await productCursor.next();
            if (!p)
                break;
            const sid = p.store_id?.toString();
            if (sid && !migratedStoreIds.has(sid))
                continue;
            pBatch.push({
                id: p.id,
                name: p.name,
                price: p.price?.toString(),
                status: p.status,
                stock_status: p.stock_status,
                total_sales: p.total_sales,
                categories: p.categories,
                date_created: p.date_created ? new Date(p.date_created) : null,
                parent_id: p.parent_id,
                store_id: sid,
                original_mongo_id: p._id.toString()
            });
            if (pBatch.length === 100) {
                const { error } = await supabase.from("products").upsert(pBatch);
                if (error)
                    console.error("Product batch error:", error.message);
                pCount += pBatch.length;
                if (pCount % 500 === 0)
                    console.log(`Migrated ${pCount} products...`);
                pBatch = [];
            }
        }
        if (pBatch.length > 0) {
            const { error } = await supabase.from("products").upsert(pBatch);
            if (error)
                console.error("Final product batch error:", error.message);
            pCount += pBatch.length;
        }
        console.log(`Done Products: ${pCount}`);
        // 3. ORDERS
        console.log(isFullMigration ? "Migrating ALL Orders..." : "Migrating last 5000 Orders...");
        const orderFind = db.collection("woocommerce_order").find({});
        if (!isFullMigration) {
            orderFind.sort({ date_created_from_str: -1 }).limit(5000);
        }
        const orderCursor = orderFind;
        let oBatch = [];
        let oCount = 0;
        while (await orderCursor.hasNext()) {
            const o = await orderCursor.next();
            if (!o)
                break;
            const sid = o.store_id?.toString();
            if (sid && !migratedStoreIds.has(sid))
                continue;
            oBatch.push({
                id: o.id,
                status: o.status,
                currency: o.currency,
                total: parseFloat(o.total) || 0,
                date_created: o.date_created_from_str,
                customer_id: o.customer_id,
                line_items: o.line_items,
                store_id: sid,
                original_mongo_id: o._id.toString()
            });
            if (oBatch.length === 100) {
                const { error } = await supabase.from("orders").upsert(oBatch);
                if (error)
                    console.error("Order batch error:", error.message);
                oCount += oBatch.length;
                if (oCount % 500 === 0)
                    console.log(`Migrated ${oCount} orders...`);
                oBatch = [];
            }
        }
        if (oBatch.length > 0) {
            const { error } = await supabase.from("orders").upsert(oBatch);
            if (error)
                console.error("Final order batch error:", error.message);
            oCount += oBatch.length;
        }
        console.log(`Done Orders: ${oCount}`);
        // 4. CUSTOMERS
        console.log(isFullMigration ? "Migrating ALL Customers..." : "Migrating last 5000 Customers...");
        const customerFind = db.collection("woocommerce_customer").find({});
        if (!isFullMigration) {
            customerFind.sort({ _id: -1 }).limit(5000);
        }
        const customerCursor = customerFind;
        let cBatch = [];
        let cCount = 0;
        while (await customerCursor.hasNext()) {
            const c = await customerCursor.next();
            if (!c)
                break;
            const sid = c.store_id?.toString();
            if (sid && !migratedStoreIds.has(sid))
                continue;
            cBatch.push({
                id: c.id,
                email: c.email,
                first_name: c.first_name,
                last_name: c.last_name,
                username: c.username,
                clv: c.clv || 0,
                total_orders: c.total_orders || 0,
                last_order_date: c.last_order_date,
                store_id: sid,
                original_mongo_id: c._id.toString()
            });
            if (cBatch.length === 100) {
                const { error } = await supabase.from("customers").upsert(cBatch);
                if (error)
                    console.error("Customer batch error:", error.message);
                cCount += cBatch.length;
                if (cCount % 500 === 0)
                    console.log(`Migrated ${cCount} customers...`);
                cBatch = [];
            }
        }
        if (cBatch.length > 0) {
            await supabase.from("customers").upsert(cBatch);
            cCount += cBatch.length;
        }
        console.log(`Done Customers: ${cCount}`);
        // 5. COUPONS
        console.log("Migrating all Coupons...");
        const couponCursor = db.collection("woocommerce_coupon").find({});
        let cpBatch = [];
        let cpCount = 0;
        while (await couponCursor.hasNext()) {
            const cp = await couponCursor.next();
            if (!cp)
                break;
            const sid = cp.store_id?.toString();
            if (sid && !migratedStoreIds.has(sid))
                continue;
            cpBatch.push({
                id: cp.id,
                code: cp.code,
                amount: cp.amount?.toString(),
                discount_type: cp.discount_type,
                usage_count: cp.usage_count || 0,
                date_expires: cp.date_expires,
                store_id: sid,
                original_mongo_id: cp._id.toString()
            });
            if (cpBatch.length === 100) {
                const { error } = await supabase.from("coupons").upsert(cpBatch);
                if (error)
                    console.error("Coupon batch error:", error.message);
                cpCount += cpBatch.length;
                if (cpCount % 500 === 0)
                    console.log(`Migrated ${cpCount} coupons...`);
                cpBatch = [];
            }
        }
        if (cpBatch.length > 0) {
            await supabase.from("coupons").upsert(cpBatch);
            cpCount += cpBatch.length;
        }
        console.log(`Done Coupons: ${cpCount}`);
        console.log("ALL FINISHED!");
    }
    catch (err) {
        console.error("FAILED:", err);
    }
    finally {
        await mongoClient.close();
    }
}
migrate();
