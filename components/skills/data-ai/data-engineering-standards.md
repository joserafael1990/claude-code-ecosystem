# Data Engineering & Pipeline Standards

This skill outlines the standards for designing, building, and optimizing production-grade data pipelines, ETL/ELT processes, and distributed data infrastructure.

## Pipeline Architecture & Design
- **Processing Patterns**: choose between Batch (ETL), Stream (ELT), or Lambda/Kappa architectures based on latency and volume requirements.
- **Idempotency**: ensure every pipeline stage is idempotent. Rerunning a job with the same input must produce the same output without duplication or side effects.
- **Data Modeling**: implement appropriate schemas (Star, Snowflake, Data Vault) for the target warehouse (Snowflake, BigQuery, Redshift).
- **Partitioning**: Optimize storage and compute by implementing intelligent partitioning and clustering strategies.

## ETL/ELT & Processing
- **Extraction**: Implement incremental loading patterns (CDC, Watermarking) to minimize source system impact and transfer volume.
- **Transformation**: Use specialized tools (dbt, Spark, Flink) for modular and testable transformations. Favor SQL for warehouse-native transformations (ELT).
- **Validation**: Integrate data quality checks at every stage (Source, Silver, Gold). Validate schema, nulls, uniqueness, and referential integrity.
- **Formats**: Prioritize columnar, compressed formats (Parquet, Avro, ORC) for efficient I/O and storage.

## Orchestration & Workflow
- **Scheduling**: use modern orchestrators (Airflow, Dagster, Prefect) to manage complex dependency graphs (DAGs).
- **Error Handling**: implement robust retry policies with exponential backoff and dead-letter queues (DLQs) for failed records.
- **SLA Management**: track and alert on pipeline latency, data freshness, and success rates.
- **Dependencies**: Manage cross-pipeline dependencies to ensure data consistency and downstream readiness.

## Data Quality & Governance
- **Observability**: implement comprehensive monitoring for data health, volume anomalies, and schema drift.
- **Lineage**: track data lineage from source to consumption to facilitate impact analysis and debugging.
- **Security**: Enforce fine-grained access control (IAM, RBAC) and encrypt sensitive data at rest and in transit.
- **Retention**: Define and automate data lifecycle policies for storage optimization and compliance.

## Performance & Cost Optimization
- **Compute**: optimize cluster sizing and resource allocation. Leverage spot instances and auto-scaling where applicable.
- **Queries**: Optimize SQL and Spark code through predicate pushdown, join optimization, and minimizing data shuffling.
- **Storage Tiering**: implement lifecycle rules to move old or infrequently accessed data to lower-cost storage tiers.
