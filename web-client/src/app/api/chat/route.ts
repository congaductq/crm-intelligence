import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { NextRequest } from "next/server";
import path from "path";
import { fileURLToPath } from "url";
import { createMCPClient } from "../../../../lib/mcp-client";

// Lazy initialization of Gemini client
let genAI: GoogleGenerativeAI | null = null;
function getGemini(): GoogleGenerativeAI {
    if (!genAI) {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error("GEMINI_API_KEY is not set");
        }
        genAI = new GoogleGenerativeAI(apiKey);
    }
    return genAI;
}

// Helper to convert JSON Schema type to Gemini SchemaType
function mapTypeToGemini(type: string): SchemaType {
    switch (type) {
        case "string": return SchemaType.STRING;
        case "number": return SchemaType.NUMBER;
        case "integer": return SchemaType.INTEGER;
        case "boolean": return SchemaType.BOOLEAN;
        case "array": return SchemaType.ARRAY;
        case "object": return SchemaType.OBJECT;
        default: return SchemaType.STRING;
    }
}

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json();

        const mcpClient = await createMCPClient();

        // 2. Fetch Tools from MCP Server and convert to Gemini format
        const toolsList = await mcpClient.listTools();

        const geminiTools = toolsList.tools.map((t) => {
            // Map properties for Gemini format
            const validationProperties: Record<string, any> = {};
            const required = t.inputSchema.required || [];

            if (t.inputSchema.properties) {
                Object.entries(t.inputSchema.properties).forEach(([key, schema]: [string, any]) => {
                    validationProperties[key] = {
                        type: mapTypeToGemini(schema.type),
                        description: schema.description,
                    };
                });
            }

            return {
                name: t.name,
                description: t.description,
                parameters: {
                    type: SchemaType.OBJECT,
                    properties: validationProperties,
                    required: required,
                },
            };
        });

        // 3. Initialize Gemini Model
        const model = getGemini().getGenerativeModel({
            model: "gemini-3-flash-preview",
            tools: [{ functionDeclarations: geminiTools }],
            systemInstruction: `You are a Breadstack Intelligence Assistant. You help analyze sales data and search product knowledge bases.
Current Date: ${new Date().toISOString()} (User's local time). Use this to resolve relative dates like "this month" or "last month".

Available capabilities:
- Analyze sales: seasonal (Winter, Spring...) OR monthly (e.g., January 2025) to find top-selling products
- Search product knowledge base for details (e.g., "wireless headphones")
- Add new products to the knowledge base
- Look up store details by ID (e.g., "what is store name for ID 6699...")

IMPORTANT:
- When listing products, ALWAYS display the Product ID (e.g., "ID: 12345") alongside the name.
- Use Markdown tables when comparing products or showing lists of data (e.g., sales reports).
- If one source fails (e.g., Supabase), try to use the data provided by the fallback source transparently.

DATA SCHEMAS (bs_int Database):

1. **stores** Collection:
   - \`_id\`: ObjectId (Unique Store ID)
   - \`store_name\`: String (e.g., "Dummy store")
   - \`organization_id\`: ObjectId
   - \`email\`: String
   - \`time_zone\`: String (e.g., "Asia/Bangkok")
   - \`currency\`: String (e.g., "USD")
   - \`location\`: JSONB Array (Array of warehouse locations: { city, country, lat, lng, etc. })

2. **woocommerce_product** Collection:
   - \`id\`: Number (WooCommerce Product ID)
   - \`name\`: String (Product Name)
   - \`price\`: String/Number
   - \`status\`: String (e.g., "publish")
   - \`stock_status\`: String ("instock" or "outofstock")
   - \`total_sales\`: Number
   - \`categories\`: Array<{ id: Number, name: String, slug: String }>
   - \`date_created\`: String (ISO)
   - \`store_id\`: ObjectId (Refers to \`stores._id\`)

3. **woocommerce_order** Collection:
   - \`id\`: Number (Order ID)
   - \`status\`: String (e.g., "completed", "processing")
   - \`currency\`: String
   - \`total\`: String (Total Order Value)
   - \`date_created_from_str\`: ISODate (CRITICAL for monthly/seasonal analysis)
   - \`customer_id\`: Number
   - \`line_items\`: Array<{
        product_id: Number,
        name: String,
        quantity: Number,
        total: String,
        price: Number
     }>
   - \`store_id\`: ObjectId (Refers to \`stores._id\`)

4. **product_embeddings** (Supabase Table):
   - \`id\`: UUID
   - \`content\`: String (Text description used for vector search)
   - \`metadata\`: JSON ({ name, price, category, etc. })
   - \`embedding\`: Vector(768)

When presenting data, format it nicely with Markdown tables and clear headings.
Always explain your findings in a helpful, business-focused way.`
        });

        // 4. Convert History to Gemini Format
        const history = messages.slice(0, -1).map((m: any) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: m.role === "tool"
                ? [{ functionResponse: { name: m.tool_call_id, response: { content: m.content } } }] // Simplified for history
                : [{ text: m.content }],
        }));

        const lastMessage = messages[messages.length - 1];

        // Start Chat Session
        const chat = model.startChat({
            history: history,
        });

        // 5. Send Message (First Turn)
        let result = await chat.sendMessage(lastMessage.content);
        let response = await result.response;
        let functionCalls = response.functionCalls();

        const toolsUsed: string[] = [];

        // 6. Handle Function Calls Loop
        while (functionCalls && functionCalls.length > 0) {
            const functionResponses = [];

            for (const call of functionCalls) {
                try {
                    // Execute on MCP Server
                    const mcpResult = await mcpClient.callTool({
                        name: call.name,
                        arguments: call.args as any,
                    });

                    // Text content find
                    const contentArray = mcpResult.content as Array<{ type: string; text?: string }>;
                    const content = contentArray.find(c => c.type === 'text');
                    const textResult = content && content.type === 'text' && content.text ? content.text : JSON.stringify(mcpResult.content);

                    const parsed = JSON.parse(textResult);
                    const sourceLabel = parsed.source ? ` (${parsed.source})` : "";
                    console.log(`[MCP Tool Result] ${call.name} Result:`, JSON.stringify(parsed, null, 2));
                    toolsUsed.push(`${call.name}${sourceLabel}`);

                    functionResponses.push({
                        functionResponse: {
                            name: call.name,
                            response: { result: parsed }
                        }
                    });
                } catch (error) {
                    functionResponses.push({
                        functionResponse: {
                            name: call.name,
                            response: { error: error instanceof Error ? error.message : "Unknown error" }
                        }
                    });
                }
            }

            // Send function results back to Gemini
            result = await chat.sendMessage(functionResponses);
            response = await result.response;
            functionCalls = response.functionCalls();
        }

        await mcpClient.close();

        // 7. Return Final Response
        return Response.json({
            choices: [
                {
                    message: {
                        role: "assistant",
                        content: response.text(),
                    },
                },
            ],
            toolsUsed: [...new Set(toolsUsed)],
        });

    } catch (error) {
        console.error("Chat API Error:", error);
        return new Response(
            JSON.stringify({
                error: error instanceof Error ? error.message : "Internal Server Error",
            }),
            { status: 500 }
        );
    }
}
