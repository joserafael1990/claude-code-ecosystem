# System Architecture Review Standards

This skill outlines the standards for evaluating high-level system designs, architectural decisions, and technology choices.

## Core Architectural Principles
- **Separation of Concerns**: Ensure distinct system functions are isolated into modular components.
- **Dependency Inversion**: High-level modules should not depend on low-level modules; both should depend on abstractions.
- **SOLID & DRY**: Evaluate if the four pillars of object-oriented design and the principle of not repeating logic are upheld.
- **KISS & YAGNI**: Discourage over-engineering and the inclusion of features that are "not needed yet."

## Scalability & Performance Review
- **Bottlenecks**: Identify single points of failure or performance bottlenecks in data flow and service communication.
- **Scaling Strategy**: evaluate the effectiveness of horizontal vs. vertical scaling and the use of load balancers and CDNs.
- **Data Partitioning**: Review sharding and partitioning strategies for large-scale data storage.
- **Caching**: Assess the placement and eviction policies of caching layers (CDN, Redis, Browser).

## Patterns & Integration
- **Service Boundaries**: validate microservice boundaries based on bounded contexts (DDD). Minimize cross-service coupling.
- **Communication**: Evaluate the choice between synchronous (REST/gRPC) and asynchronous (Message Queues/Event Streams) communication.
- **Patterns**: identify appropriate use of patterns like CQRS, Hexagonal Architecture, and Sagas for distributed transactions.

## Security & Resilience
- **Defense in Depth**: Verify multi-layered security controls (Network, Identity, Data).
- **Failure Analysis**: Review circuit breaking, retries, and graceful degradation strategies.
- **Identity**: evaluate the robustness of authentication and authorization models (OAuth 2.0, OIDC, RBAC/ABAC).

## Evolution & Technical Debt
- **Fitness Functions**: Define metrics (fitness functions) to measure how well the architecture meets its business goals over time.
- **Debt Management**: identify "architecture smells" and quantify technical debt. prioritize remediation based on risk and maintenance burden.
- **Strategic Modernization**: Use patterns like the Strangler Fig to migrate from legacy systems incrementally.
- **ADRs**: Insist on Architectural Decision Records (ADRs) to document the "why" behind critical choices.
