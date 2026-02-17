# Database Performance Optimization Standards

This skill outlines the standards for identifying, analyzing, and resolving performance bottlenecks across relational and non-relational database systems.

## Query & Execution Analysis
- **Execution Plans**: universally analyze `EXPLAIN (ANALYZE)` (Postgres), `EXPLAIN EXTENDED` (MySQL), or equivalent. identify sequential scans, nested loops, and expensive sorts.
- **Query Patterns**: Rewrite inefficient queries. Avoid `SELECT *`, eliminate unneeded subqueries/CTEs, and ensure join orders are optimized for cardinality.
- **Profiling**: Use slow query logs, `pg_stat_statements`, or `PERFORMANCE_SCHEMA` to identify high-impact query hotspots.

## Indexing Strategy
- **Covering Indexes**: design indexes that include all columns required by a query (Index-Only Scans) to eliminate secondary table lookups.
- **Partial & Expression Indexes**: Use partial indexes to index only relevant subsets of data and expression indexes for queries using functions in predicates.
- **Maintenance**: regularly audit and remove redundant or unused indexes. monitor for index bloat and ensure statistics are up to date via `ANALYZE`.

## Schema & Data Type Optimization
- **Data Types**: Use the most compact data types possible (e.g., `INT` vs `BIGINT`, `JSONB` vs `TEXT`).
- **Partitioning**: implement declarative partitioning (Range, List, Hash) for large tables to improve pruning and maintenance efficiency.
- **Denormalization**: selectively denormalize or use materialized views for high-read, low-concurrency analytical workloads.

## System & Memory Tuning
- **Buffer Management**: optimize buffer/cache sizes (e.g., `shared_buffers`, `innodb_buffer_pool_size`) based on available RAM and working set size.
- **Connection Mastery**:universally use connection pooling (PgBouncer, ProxySQL) to minimize handshake overhead and resource exhaustion.
- **I/O Optimization**: align tablespaces with storage characteristics. prioritize SSDs for data and high-IOPS volumes for transaction logs.

## Scaling & Replication
- **Read Replicas**: offload read-heavy traffic to replicas. Ensure application routing logic accounts for replication lag.
- **Sharding**: Implement horizontal sharding patterns for datasets that exceed the capacity of a single instance.
- **Consistency vs Perf**: Balance isolation levels (Read Committed vs Serializable) to maximize throughput without compromising required data integrity.
