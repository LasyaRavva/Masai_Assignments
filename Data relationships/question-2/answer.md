# Database Relationships for E-commerce

## What is a database relationship?
A database relationship links rows across tables so data stays normalized, consistent, and queryable. Relationships are enforced with primary keys (uniquely identify a row) and foreign keys (reference another table’s primary key). They ensure referential integrity—orders cannot point to a non-existent customer, for example.

## Core relationship types (with e-commerce examples)

### 1. One-to-One (1:1)
- Definition: A row in table A relates to at most one row in table B, and vice versa.
- E-commerce example: `users` ↔ `user_profiles` (extended profile data kept separate for size/privacy).
- Diagram (FK in profile):
  - users(id PK) ──1───┐
  - user_profiles(id PK, user_id FK→users.id) ──1───┘
- Notes: Keep the FK unique in the child table to preserve the 1:1 guarantee.

### 2. One-to-Many (1:N)
- Definition: One row in table A can relate to many rows in table B; each row in B points back to exactly one row in A.
- E-commerce examples:
  - `customers` → `orders` (one customer, many orders).
  - `orders` → `payments` (one order, multiple payment attempts/records).
- Diagram (customer-orders):
  - customers(id PK) ──1───< orders(id PK, customer_id FK→customers.id)
- Notes: FK on the “many” side; index the FK for faster joins.

### 3. Many-to-Many (M:N)
- Definition: Rows in table A can relate to many rows in table B, and vice versa; implemented via a junction (bridge) table.
- E-commerce examples:
  - `products` ↔ `categories` via `product_categories`.
  - `orders` ↔ `products` via `order_items` (also stores qty, price at time of purchase).
- Diagram (orders-products):
  - orders(id PK) ──1───< order_items(order_id FK) >───1── products(id PK)
- Notes: Junction table holds two FKs; add a composite unique index to prevent duplicate pairs.

### 4. Self-referencing (hierarchical)
- Definition: A table relates to itself through a FK to its own PK.
- E-commerce examples:
  - `categories` table with `parent_category_id` to build category trees.
  - `users` table with `referred_by_user_id` for referral tracking.
- Diagram (categories):
  - categories(id PK, parent_category_id FK→categories.id)
- Notes: Add a partial index to speed subtree queries; consider a closure table or nested sets for deep hierarchies.

## How these apply together (mini schema sketch)
- customers(id PK)
- user_profiles(id PK, user_id FK unique)
- products(id PK)
- categories(id PK, parent_category_id FK)
- product_categories(product_id FK, category_id FK, unique(product_id, category_id))
- orders(id PK, customer_id FK)
- order_items(order_id FK, product_id FK, qty, unit_price)
- payments(id PK, order_id FK, status, amount)

## Practical guidelines
- Use `ON DELETE CASCADE` cautiously (e.g., safe for order_items when an order is deleted; avoid cascading customers → orders in production).
- Always index foreign keys; add composite indexes on junction tables.
- Store historical facts in junction tables (unit_price in order_items) to preserve point-in-time data.
- Validate cardinality in application and via constraints (unique FKs for 1:1, composite uniques for M:N pairs).

## Simple ASCII flow for a checkout
customers → orders → order_items → products
                  └→ payments

This chain combines 1:N (customers→orders, orders→payments) and M:N via `order_items` (orders↔products).
