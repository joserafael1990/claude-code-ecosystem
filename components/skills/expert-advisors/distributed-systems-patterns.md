# Distributed Systems & Microservices Patterns

This skill outlines strategies for designing, decomposing, and maintaining resilient microservices architectures.

## Service Decomposition & Boundaries
- **Bounded Contexts**: Identify service boundaries using domain analysis (DDD) and Event Storming.
- **Strangler Fig**: Extract components from monoliths incrementally behind a proxy.
- **Data Ownership**: Adhere to the Database-per-Service pattern. Avoid cross-service database joins.
- **Conway's Law**: Align service boundaries with team structures to reduce communication overhead.

## Inter-Service Communication
- **Synchronous RPC**: Use gRPC for high-performance internal calls and REST/OpenAPI for public-facing APIs.
- **Asynchronous Messaging**: Leverage Kafka, RabbitMQ, or Amazon SQS for event-driven decoupling.
- **Distributed Transactions**: Implement the Saga pattern (Orchestration or Choreography) for cross-service consistency.
- **CQRS**: Use Command Query Responsibility Segregation with event sourcing for complex domain states.
- **API Gateway**: Centralize concerns like authentication, rate limiting, and BFF (Backend-for-Frontend) aggregation.

## Resilience & Stability
- **Circuit Breakers**: Prevent cascading failures by failing fast when a dependency is unhealthy.
- **Retries & Backoff**: Use exponential backoff with jitter for retrying transient failures.
- **Bulkheads**: Isolate resources (thread pools, connections) for different services to prevent a single service from exhausting system resources.
- **Health Checks**: Implement Liveness, Readiness, and Startup probes for orchestration (Kubernetes).

## Observability
- **Distributed Tracing**: Use OpenTelemetry to propagate context across service boundaries.
- **Correlation IDs**: Log unique IDs across every hop of a request for easier debugging.
- **Structured Logging**: Emit logs in machine-readable formats (JSON) with standard metadata.
- **SLIs/SLOs**: Define Service Level Indicators and Objectives based on critical user journeys.

## Service Mesh (Istio/Linkerd)
- **Traffic Management**: Implement canary releases, blue-green deployments, and traffic mirroring.
- **Zero Trust**: Enforce mutual TLS (mTLS) for all inter-service communication.
- **Mesh Policies**: Apply authorization and security policies at the infrastructure level.
- **Chaos Testing**: Use fault injection (delays, 5xx responses) to validate system resilience.
