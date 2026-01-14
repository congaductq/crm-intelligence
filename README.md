# CRM Intelligence

AI-powered sales analytics and product knowledge system built with MCP (Model Context Protocol), Next.js, MongoDB, and Supabase.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Next.js Frontend                          │
│                     (MCP Host / Orchestrator)                    │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                     Chat Interface                           │ │
│  │  • Message input/display with Markdown rendering             │ │
│  │  • Export chat history as .md                                │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                              │                                    │
│                    ┌─────────▼─────────┐                         │
│                    │   /api/chat       │                         │
│                    │   (API Route)     │                         │
│                    └─────────┬─────────┘                         │
└──────────────────────────────│───────────────────────────────────┘
                               │ stdio
                    ┌──────────▼──────────┐
                    │     MCP Server      │
                    │  (Tool Provider)    │
                    ├─────────────────────┤
                    │ get_sales_analytics │──────▶ MongoDB
                    │ search_products     │──────▶ Supabase (vectors)
                    │ add_product         │──────▶ Supabase
                    └─────────────────────┘
```

## Prerequisites

- Node.js 18+
- MongoDB database with a `crm` database and `orders` collection
- Supabase project with vector extension enabled
- Gemini API key (Google AI Studio)


## Database Setup

### Supabase (Vector DB)

Run this SQL in your Supabase SQL Editor:
<no change to sql>

### MongoDB
<no change>

## Installation

1. **Install MCP Server dependencies:**
```bash
cd mcp-server
npm install
```

2. **Install Web Client dependencies:**
```bash
cd web-client
npm install
```

3. **Configure environment variables:**

Create `mcp-server/.env`:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-supabase-anon-key
GEMINI_API_KEY=your_gemini_key
```

Create `web-client/.env.local`:
```
GEMINI_API_KEY=your-gemini-key
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-supabase-anon-key

```

## Running the Application

```bash
cd web-client
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Tools
<no change>

## How It Works

1. **User sends message** → Frontend sends to `/api/chat`
2. **API spawns MCP server** → Connects via stdio transport
3. **Gemini reasons** → Decides which tools to call
4. **MCP executes tools** → Queries MongoDB/Supabase
5. **Gemini synthesizes** → Formats response with data
6. **Frontend renders** → Displays Markdown response
