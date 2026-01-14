-- Create stores table
CREATE TABLE IF NOT EXISTS stores (
    id TEXT PRIMARY KEY, -- Maps to MongoDB _id (ObjectId string)
    store_name TEXT,
    organization_id TEXT,
    email TEXT,
    time_zone TEXT,
    currency TEXT,
    location JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
    id BIGINT PRIMARY KEY, -- Maps to WooCommerce ID
    name TEXT,
    price TEXT,
    status TEXT,
    stock_status TEXT,
    total_sales NUMERIC,
    categories JSONB, -- Storing array of categories as JSON
    date_created TIMESTAMP WITH TIME ZONE,
    parent_id BIGINT, -- If set, this is a variation of the parent product
    store_id TEXT REFERENCES stores(id),
    original_mongo_id TEXT -- Storing original _id just in case
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
    id BIGINT PRIMARY KEY, -- Maps to WooCommerce Order ID
    status TEXT,
    currency TEXT,
    total NUMERIC,
    date_created TIMESTAMP WITH TIME ZONE, -- Maps to date_created_from_str
    customer_id BIGINT,
    line_items JSONB, -- Storing line items as JSON
    store_id TEXT REFERENCES stores(id),
    original_mongo_id TEXT
);

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
    id BIGINT PRIMARY KEY,
    email TEXT,
    first_name TEXT,
    last_name TEXT,
    username TEXT,
    clv NUMERIC,
    total_orders INTEGER,
    last_order_date TIMESTAMP WITH TIME ZONE,
    store_id TEXT REFERENCES stores(id),
    original_mongo_id TEXT
);

-- Create coupons table
CREATE TABLE IF NOT EXISTS coupons (
    id BIGINT PRIMARY KEY,
    code TEXT,
    amount TEXT,
    discount_type TEXT,
    usage_count INTEGER,
    date_expires TIMESTAMP WITH TIME ZONE,
    store_id TEXT REFERENCES stores(id),
    original_mongo_id TEXT
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_products_store_id ON products(store_id);
CREATE INDEX IF NOT EXISTS idx_orders_store_id ON orders(store_id);
CREATE INDEX IF NOT EXISTS idx_orders_date_created ON orders(date_created);
CREATE INDEX IF NOT EXISTS idx_customers_store_id ON customers(store_id);
CREATE INDEX IF NOT EXISTS idx_coupons_store_id ON coupons(store_id);
