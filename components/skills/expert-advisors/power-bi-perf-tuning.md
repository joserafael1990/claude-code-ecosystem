# Power BI Performance & DAX Engineering Standards

This skill outlines the standards for optimizing Power BI reports, DAX queries, and underlying data models for enterprise-scale performance.

## Systematic Troubleshooting
- **Performance Analyzer**: Use the built-in Performance Analyzer to identify if bottlenecks are in "DAX Query", "Visual Display", or "Other" (e.g., network latency).
- **DAX Studio Profile**: Use DAX Studio's "Server Timings" to analyze the split between the **Formula Engine (FE)** (single-threaded, complex logic) and the **Storage Engine (SE)** (multi-threaded, VertiPaq scans). Aim for >90% SE execution for optimal speed.
- **VertiPaq Audit**: Use Bravo or DAX Studio to analyze memory footprints. Remove high-cardinality columns (e.g., GUIDs, long strings) that aren't used in visuals or relationships.

## High-Performance DAX Patterns
- **Safe Division**: Use `DIVIDE(a, b)` instead of the `/` operator to handle zero-division errors gracefully and slightly faster due to internal optimizations.
- **Variables (VAR)**: Store intermediate calculations in `VAR` to prevent redundant computations and improve code readability. Variables are evaluated once and their result is reused.
- **Context Filtering**: Use `KEEPFILTERS` when you want to add a filter to an existing context without replacing it, preserving the original visual filter context.
- **Iterator Optimization**: Prefer standard aggregations (`SUM`, `AVERAGE`) over iterators (`SUMX`, `AVERAGEX`) unless complex row-by-row logic or multiple table lookups are strictly required.

## Data Model Hardening
- **Auto Date/Time**: Disable the global "Auto Date/Time" setting in Power BI Desktop to reduce model bloat. Use a dedicated, enterprise-standard Calendar/Date table instead.
- **Surrogate Keys**: Replace string-based GUIDs or long keys with Integer surrogate keys. Integers compress significantly better in the VertiPaq engine, reducing memory usage and query time.
- **Star Schema**: Enforce a clean Star Schema (Fact and Dimension tables). Avoid "Flat" tables (one giant table) or deep "Snowflake" schemas which increase relationship traversal costs.
- **Aggregation Grain**: Summarize Fact tables at the highest required business grain (e.g., Daily instead of Transaction-level) to reduce row counts.

## Capacity & Monitoring (KQL)
- **Log Analysis**: Monitor Fabric/Power BI Capacity metrics using Kusto (KQL) to identify slow-running reports and peak usage periods across the workspace.
