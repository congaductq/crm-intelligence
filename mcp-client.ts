
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";

// Load .env from project root if not already loaded
if (!process.env.MONGO_URI || !process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
    console.log("Loading environment from root .env...");
    const rootEnvPath = path.resolve(process.cwd(), ".env");

    if (fs.existsSync(rootEnvPath)) {
        dotenv.config({ path: rootEnvPath });
        console.log("✓ Loaded root .env");
    } else {
        console.warn("Warning: .env not found at:", rootEnvPath);
    }
}

export async function createMCPClient() {
    console.log("=== Creating MCP Client ===");

    // DEBUG: Log environment info
    console.log("Current directory:", process.cwd());
    console.log("Environment variables check:", {
        MONGO_URI: process.env.MONGO_URI ? `${process.env.MONGO_URI.substring(0, 20)}...` : "❌ MISSING",
        SUPABASE_URL: process.env.SUPABASE_URL || "❌ MISSING",
        SUPABASE_KEY: process.env.SUPABASE_KEY ? `${process.env.SUPABASE_KEY.substring(0, 20)}...` : "❌ MISSING",
        NODE_ENV: process.env.NODE_ENV,
        NODE_PATH: path.resolve(process.cwd(), "node_modules"),
    });

    // 1. Verify MCP server exists
    const mcpServerPath = path.resolve(process.cwd(), "index.js");

    if (!fs.existsSync(mcpServerPath)) {
        throw new Error(
            `MCP server not found at: ${mcpServerPath}\n` +
            `Please run: npm run build:mcp`
        );
    }

    console.log("✓ MCP server found at:", mcpServerPath);

    // 2. Verify environment variables
    const required = ["MONGO_URI", "SUPABASE_URL", "SUPABASE_KEY"];
    const missing = required.filter(v => !process.env[v]);

    if (missing.length > 0) {
        throw new Error(
            `Missing environment variables: ${missing.join(", ")}\n\n` +
            `Your .env file location: ${path.resolve(process.cwd(), ".env")}\n` +
            `File exists: ${fs.existsSync(path.resolve(process.cwd(), ".env"))}\n\n` +
            `TROUBLESHOOTING:\n` +
            `1. Verify .env file exists in project root\n` +
            `2. Check variable names are correct (no typos)\n` +
            `3. Restart your dev server\n` +
            `4. For Vercel: Set variables in Dashboard`
        );
    }

    console.log("✓ Environment variables verified");

    // 3. Create transport
    const transport = new StdioClientTransport({
        command: "node",
        args: [mcpServerPath],
        env: {
            ...process.env,
            MONGO_URI: process.env.MONGO_URI!,
            SUPABASE_URL: process.env.SUPABASE_URL!,
            SUPABASE_KEY: process.env.SUPABASE_KEY!,
            GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",
            NODE_PATH: path.resolve(process.cwd(), "node_modules"),
        },
    });

    console.log("✓ Transport created");

    // 4. Create client
    const client = new Client(
        {
            name: "crm-intelligence-client",
            version: "1.0.0",
        },
        {
            capabilities: {},
        }
    );

    // 5. Connect with timeout
    console.log("Connecting to MCP server...");

    const connectionPromise = client.connect(transport);
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Connection timeout after 10s")), 10000);
    });

    try {
        await Promise.race([connectionPromise, timeoutPromise]);
        console.log("✓ Connected to MCP server");

        // 6. Verify connection by listing tools
        const tools = await client.listTools();
        console.log(`✓ Found ${tools.tools.length} tools:`, tools.tools.map(t => t.name).join(", "));

        return client;
    } catch (error) {
        console.error("❌ MCP Connection failed:", error);
        throw new Error(
            `Failed to connect to MCP server: ${error instanceof Error ? error.message : String(error)}`
        );
    }
}