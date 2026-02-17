# Database Administration & Operational Standards

This skill outlines the standards for managing, optimizing, and securing enterprise-grade database infrastructures across SQL (Postgres, MySQL) and NoSQL (MongoDB, Redis) systems.

## High Availability & Resilience
- **Replication**: Implement Master-Slave, Streaming, or Logical replication based on read/write requirements. Ensure zero data loss (RPO < 5min) and rapid recovery (RTO < 1h).
- **Failover**: Use automatic failover mechanisms (e.g., Repmgr for Postgres, Orchestrator for MySQL) with split-brain protection.
- **Load Balancing**: Distribute read traffic across replicas using ProxySQL or pg-bouncer.

## Performance Tuning
- **Parameter Optimization**: Tune shared buffers, work memory, and wal settings based on hardware and workload profiles.
- **Connection Management**: Universally use connection pooling (PgBouncer, HikariCP) to handle high concurrency and prevent resource exhaustion.
- **Maintenance**: Optimize background tasks like Autovacuum (Postgres) and binary log purging (MySQL). Maintain accurate statistics for the query planner.
- **Query Profiling**: Use `slow_query_log` and `performance_schema` to identify and resolve query hotspots.

## Backup & Recovery
- **Automation**: implement automated, validated backups with point-in-time recovery (PITR) capabilities.
- **Verification**: Regularly perform automated recovery tests to ensure backups are actually restorable.
- **Retention**: Define clear retention policies aligned with compliance requirements (GDPR, SOC2).

## NoSQL Operations
- **MongoDB**: Manage replica sets for availability and sharding for horizontal scale. Optimize aggregation pipelines and custom indexes.
- **Redis**: Implement Redis Sentinel for HA or Redis Cluster for distributed state. Optimize memory limits and eviction policies.

## Security & Compliance
- **Access Control**: Enforce the principle of least privilege. Use Row-Level Security (RLS) and dynamic masking where sensitive data is present.
- **Encryption**: Implement pervasive encryption for data at rest (TDE) and data in transit (TLS/SSL).
- **Auditing**: Enable detailed audit logging for DDL and sensitive DML operations.

## Operations & Automation
- **Schema Management**: manage database schema changes via versioned migrations. Ensure zero-downtime deployment patterns.
- **Monitoring**: implement 24/7 monitoring for lock contention, replication lag, disk I/O, and CPU saturation.
- **Capacity Planning**: Use historical growth trends to forecast resource needs and plan scaling events proactively.
