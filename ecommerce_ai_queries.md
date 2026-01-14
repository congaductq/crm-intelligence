# Top 50 AI Queries for E-commerce: Technical Specification

This document provides the technical details for each of the top 50 AI queries, including the primary database resources and the logic required for implementation.

---

## 📊 Sales & Revenue

### 1. Top 5 best-selling products this month
- **Status**: [x] Supported
- **Tool**: `get_sales_analytics(month: string, year: string, limit: 5)`
- **Resources**:
  - Supabase: `products`
  - MongoDB: `woocommerce_order`
- **Logic**: Unwind `line_items`, group by `product_id`, sum `quantity`, sort DESC.

### 2. Total revenue for the current year
- **Status**: [x] Supported
- **Tool**: `get_sales_analytics(year: string)`
- **Resource**: Supabase `orders`
- **Logic**: Filter by year, sum the `total` column across all orders.

### 3. Compare sales revenue between this month and last month
- **Status**: [ ] Not Supported
- **Resource**: Supabase `orders`
- **Logic**: Run two `SUM(total)` queries for the respective date ranges and compute the delta.

### 4. Which store location has the highest sales volume?
- **Status**: [x] Supported
- **Tool**: `get_sales_analytics(storeName: string)`
- **Resources**: `stores`, `orders`
- **Logic**: Group `orders` by `store_id`, join with `stores.store_name`.

### 5. Average Order Value (AOV) for the last 30 days
- **Status**: [ ] Not Supported
- **Resource**: Supabase `orders`
- **Logic**: `SUM(total) / COUNT(*)` for orders where `date_created > now() - 30 days`.

---

## 📦 Orders & Logistics

### 11. How many orders are currently in 'pending' status?
- **Status**: [x] Supported
- **Tool**: `get_order_analytics(status: "pending")`
- **Resources**: `orders`
- **Logic**: `SELECT count(*) FROM orders WHERE status = 'pending'`.

### 12. List all orders that have been 'processing' for more than 48 hours
- **Status**: [x] Supported
- **Tool**: `get_order_analytics(status: "processing", endDate: "now-48h")`
- **Resource**: Supabase `orders`
- **Logic**: Filter by `status = 'processing'` and `date_created < current_timestamp - interval '48 hours'`.

### 13. Total number of refunded orders this month
- **Status**: [x] Supported
- **Tool**: `get_order_analytics(status: "refunded", startDate: "YYYY-MM-01")`
- **Resource**: `woocommerce_order_refunds`, `orders`
- **Logic**: Count entries in `woocommerce_order_refunds` or orders with 'refunded' status.

---

## 👥 Customers & CRM

### 21. Top 10 customers by lifetime value (CLV)
- **Status**: [x] Supported
- **Tool**: `get_customer_insights(limit: 10)`
- **Resources**:
  - Supabase: `customers`
  - MongoDB: `woocommerce_customer`
- **Logic**: Sort `clv` descending in `woocommerce_customer` collection.

### 22. Customers who haven't made a purchase in over 6 months
- **Status**: [x] Supported
- **Tool**: `get_customer_insights()`
- **Resources**:
  - Supabase: `customers`
  - MongoDB: `woocommerce_customer`
- **Logic**: Filter where `last_order_date < now() - 6 months`.

### 23. Average number of orders per customer
- **Status**: [x] Supported
- **Tool**: `get_customer_insights()`
- **Resources**:
  - Supabase: `customers`
  - MongoDB: `woocommerce_customer`
- **Logic**: `AVERAGE(total_orders)` across the collection.

---

## 🛒 Inventory & Products

### 31. Which products are currently out of stock?
- **Status**: [x] Supported
- **Tool**: `get_order_analytics()` (via product filter) or `search_product_knowledge`
- **Resource**: Supabase `products`
- **Logic**: `SELECT name FROM products WHERE stock_status = 'outofstock'`.

### 32. Forecast products out of stock in next 14 days
- **Status**: [ ] Not Supported
- **Logic**: Calculate daily run rate (Sales last 30 days / 30) and compare with current stock.

### 35. Inventory value by category
- **Status**: [x] Supported
- **Resource**: Supabase `products`
- **Logic**: Group by `categories`, sum `(stock_quantity * price)`.

---

## 🎟️ Promotions & Marketing

### 41. Which promotion code has been used the most?
- **Status**: [x] Supported
- **Tool**: `get_promotion_analytics()`
- **Resources**:
  - Supabase: `coupons`
  - MongoDB: `woocommerce_coupon`
- **Logic**: Sort `woocommerce_coupon` by `usage_count` DESC.

### 42. Total discount amount given this month
- **Status**: [x] Supported
- **Tool**: `get_promotion_analytics()`
- **Resources**:
  - Supabase: `coupons`
  - MongoDB: `woocommerce_coupon`
- **Logic**: Sum `amount` from usage logs or coupon metadata.

---

## 🛠️ MCP Resources Mapping

| AI Query Category | Database / Collection | Key Fields |
|-------------------|-----------------------|------------|
| Sales             | `orders`              | `total`, `date_created`, `line_items` |
| Products          | `products`            | `price`, `stock_status`, `categories`, `parent_id` |
| Customers         | `customers`           | `clv`, `last_order_date`, `total_orders` |
| Promotions        | `coupons`             | `code`, `usage_count`, `amount` |
| Store Info        | `stores`              | `store_name`, `location`, `organization_id` |

---
*Note: Some queries require complex aggregations across multiple collections which are optimized via the MCP analytic tools.*
