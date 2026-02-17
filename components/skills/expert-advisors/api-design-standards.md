# API Design & Engineering Standards

This skill outlines the standards for designing scalable, high-performance, and developer-friendly REST and GraphQL APIs.

## REST API Design Principles
- **Resource Orientation**: Use plural nouns for resources (e.g., `/users`) and appropriate HTTP verbs (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).
- **OpenAPI 3.1**: maintain a single source of truth using OpenAPI. Include detailed schemas, security definitions, and usage examples.
- **Pagination**: Prefer cursor-based or keyset pagination for large datasets to ensure stability and performance.
- **Versioning**: implement explicit versioning strategies (URI path, Header-based, or Media Type).
- **Idempotency**: Use idempotency keys (`Idempotency-Key`) for mutating operations to handle retries safely.

## GraphQL Schema Design
- **Type Modeling**: Design expressive schemas using Interfaces and Unions. Define custom scalars for domain-specific primitives.
- **Performance**: Implement query complexity analysis and depth limiting to prevent resource exhaustion.
- **Evolution**: Prioritize additive changes over breaking ones. Use the `@deprecated` directive for field sunsetting.
- **Batching**: Universally implement the `DataLoader` pattern to prevent N+1 resolver issues.

## Authentication & Security
- **Identity**: Use OAuth 2.0 and JWT (JSON Web Tokens) for stateless authentication.
- **Throttling**: implement rate limiting (Token Bucket/Sliding Window) and expose rate limit headers (`X-RateLimit-Limit`, `X-RateLimit-Remaining`).
- **Standards**: Follow RFC 7807 (Problem Details for HTTP APIs) for standardized error responses.
- **CORS & Headers**: Configure strict Cross-Origin Resource Sharing (CORS) and security headers (CSP, HSTS).

## API Lifecycle Management
- **Backward Compatibility**: Ensure all changes are verified for breaking effects in CI/CD.
- **Documentation**: Prioritize developer experience (DX) with interactive docs (Swagger/Redoc) and clear migration guides.
- **Deprecation**: Establish clear sunsetting policies and communicate timelines through response headers and developer portals.
- **Monitoring**: Track usage metrics, latency, and error rates per endpoint.
