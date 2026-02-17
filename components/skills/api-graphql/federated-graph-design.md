# Federated Graph Design Patterns

This skill covers best practices for designing and maintaining Apollo Federation 2.x supergraphs and distributed GraphQL architectures.

## Federation Architecture
- **Subgraphs**: Define boundaries aligned to domain ownership. Each subgraph should own its domain data.
- **Entity Keys**: Use the `@key` directive to define primary keys for entities that need to be resolved across subgraphs.
- **Reference Resolvers**: Implement `__resolveReference` using `DataLoader` for efficient batching and to avoid N+1 problems.
- **Composition**: Validate schema composition in CI/CD using `rover supergraph compose` to ensure subgraph changes don't break the supergraph.
- **Gateway/Router**: Configure query planning, deduplication, and timeouts at the gateway level.

## Schema Design Principles
- **Domain Modeling**: Use domain-driven types with a discipline for nullability (prefer nullable for external dependencies).
- **Interfaces & Unions**: Use Interfaces for types that share fields, and Unions for disparate types that return in the same context.
- **Custom Scalars**: Define scalars for domain primitives like `DateTime`, `Email`, `URL`, or `Currency`.
- **Deprecation**: Use the `@deprecated` directive with clear migration notes and removal timelines.
- **Input Types**: Design specialized input types for mutations (e.g., `CreateUserInput` vs `UpdateUserInput`) to handle partial updates correctly.

## Performance & Scaling
- **DataLoader**: Mandatory for all resolvers that fetch data from external sources.
- **APQ & Persisted Queries**: Use Automatic Persisted Queries (APQ) or static persisted query lists for production clients.
- **Query Complexity**: Implement complexity scoring using directives like `@cost` or `@listSize` to prevent depth-based DDoS attacks.
- **Caching**: Use field-level cache control hints to optimize response times.
- **Subscriptions**: Scale real-time updates using Redis PubSub or Kafka-backed event streams.

## Observability & Governance
- **Tracing**: Implement operation-level tracing with Apollo Studio or OpenTelemetry.
- **Metrics**: Track resolver-level performance and set alerts for slow queries.
- **Analytics**: Use schema usage analytics to determine when fields can be safely removed.
- **Client Awareness**: Track client names and versions to manage rollouts and breaking changes.
