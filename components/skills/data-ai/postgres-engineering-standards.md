# PostgreSQL Engineering & Operational Standards

This skill outlines the standards for managing, optimizing, and securing enterprise-grade PostgreSQL deployments.

## Core Architecture & Configuration
- **Memory Tuning**: optimize `shared_buffers`, `work_mem`, and `maintenance_work_mem` based on available RAM and concurrency requirements.
- **WAL & Checkpointing**: Tune `max_wal_size` and `checkpoint_completion_target` to balance recovery time with write performance.
- **MVCC & Vacuum**: aggressively tune `autovacuum` parameters to prevent bloat and transaction ID wraparound. monitor bloat regularly using `pg_repack` or similar.
- **Connection Management**: universally use connection pooling (PgBouncer) with "Transaction" or "Session" pooling modes.

## Query Optimization & Indexing
- **EXPLAIN Mastery**: analyze query plans using `EXPLAIN (ANALYZE, BUFFERS)`. identify and eliminate sequential scans on large tables.
- **Index Selection**: utilize B-tree for standard indexing, GIN for JSONB and array fields, and BRIN for very large, sorted datasets.
- **Advanced Indexing**: leverage partial indexes for common filters and expression indexes for function-based predicates.
- **Statistics**: Ensure the query planner has accurate data. Tune `default_statistics_target` for complex, skewed data distributions.

## High Availability & Replication
- **Replication Modes**: implement Streaming Replication for high availability (HA) and Logical Replication for selective data movement or zero-downtime upgrades.
- **Automatic Failover**: Use tools like Patroni, Repmgr, or cloud-native HA solutions for robust cluster management and leader election.
- **Scalability**: offload read-heavy traffic to streaming replicas. implement cascading replicas for multi-region scale.

## Backup, Recovery & Safety
- **PITR**: universally implement Point-In-Time Recovery (PITR) via continuous WAL archiving (e.g., using pgBackRest or Wal-G).
- **RPO/RTO**: verify that backups meet defined RPO (< 5 min) and RTO (< 1 hour) targets. perform regular, automated recovery verification.
- **Migrations**: Use versioned, idempotent migration scripts. design migrations to be non-blocking (e.g., `CREATE INDEX CONCURRENTLY`).

## Security & Extension Mastery
- **Access Control**: Enforce Row-Level Security (RLS) and the Principle of Least Privilege for database users.
- **Extension Strategy**: Leverage the rich extension ecosystem (`pg_stat_statements`, `PostGIS`, `TimescaleDB`, `pg_trgm`) to extend core functionality safely.
- **Auditing**: Enable detailed logging (`log_statement`, `pgAudit`) for sensitive operations to meet compliance requirements.
