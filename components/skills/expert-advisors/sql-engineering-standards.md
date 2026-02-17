# SQL Engineering & Query Optimization Standards

This skill outlines the standards for designing efficient schemas and optimizing complex SQL queries across major RDBMS platforms (PostgreSQL, MySQL, SQL Server, Oracle).

## Advanced Query Design
- **CTEs**: Use Common Table Expressions for readability and managing complex subqueries. Use RECURSIVE CTEs for hierarchical data and graph traversals.
- **Window Functions**: Leverage `ROW_NUMBER`, `RANK`, `LEAD`, `LAG`, and aggregate windows for complex analytical tasks without self-joins.
- **Modern SQL**: Use JSON/B types for semi-structured data, Temporal tables for historical audit trails, and Graph extensions where supported.

## Query Optimization & Performance
- **Execution Plans**: Always analyze EXPLAIN/EXPLAIN ANALYZE output to identify table scans, high-cost joins, and spooling.
- **Set-Based Thinking**: Avoid row-by-row processing (cursors/loops). Use set-based operations for maximum parallel efficiency.
- **Filters**: Apply filters (`WHERE`) as early as possible in the query pipeline. Use `EXISTS` over `COUNT(*)` for existence checks.
- **Joins**: Understand the performance trade-offs between Hash, Merge, and Nested Loop joins. Ensure join columns are indexed.

## Indexing Strategy
- **Covering Indexes**: Design indexes that include all columns required by frequent queries to avoid table lookups (Index-Only Scans).
- **Composite Indexes**: Pay attention to column order in composite indexes; lead with the most selective columns or those used in equality filters.
- **Specialized Indexes**: Use Filtered (partial) indexes for skewed data and Function-based indexes to optimize queries using expressions.

## Transaction & Lock Management
- **Isolation Levels**: Select the appropriate isolation level (Read Committed, Repeatable Read, Serializable) based on consistency vs. performance needs.
- **Deadlock Prevention**: Access tables in a consistent order and keep transactions as short as possible.
- **Concurrency**: Use Optimistic Concurrency (version/timestamp columns) for high-contention environments.

## Data Modeling & Warehousing
- **Normalization**: Adhere to 3NF for OLTP systems to ensure data integrity.
- **Denormalization**: Target Star or Snowflake schemas for OLAP/Data Warehousing. Use Columnstore indexes for fast analytical aggregation.
- **Partitioning**: Use table partitioning (range, list, hash) to improve performance on large datasets and enable efficient data aging.

## Security & Governance
- **Access Control**: Implement Row-Level Security (RLS) and Dynamic Data Masking (DDM) for sensitive environments.
- **Injection**: Universally use parameterized queries or prepared statements to prevent SQL injection.
- **Integrity**: Enforce strong constraints (Foreign Keys, Check, Unique) at the database layer.
