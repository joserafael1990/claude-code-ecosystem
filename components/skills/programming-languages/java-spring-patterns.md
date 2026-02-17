# Modern Java & Spring Boot Patterns

This skill covers best practices for building enterprise-grade applications using Java 21+ and the Spring Boot 3.x ecosystem.

## Modern Java (21+) Features
- **Virtual Threads (Project Loom)**: Use virtual threads to handle high-concurrency blocking I/O without the overhead of carrier threads.
- **Pattern Matching**: Leverage record patterns and switch pattern matching for cleaner data processing.
- **Records**: Use `record` types for immutable DTOs and value objects.
- **Sealed Classes**: Use sealed hierarchies to define rigid domain models.

## Spring Boot 3.x Fundamentals
- **Spring Security 6**: Implement OAuth2 resource servers, method-level security, and custom filter chains.
- **Spring Data JPA**: Use Projections, Specifications, and custom repositories. Manage database schema evolution with Flyway or Liquibase.
- **Spring Boot Actuator**: Expose health, metrics, and info endpoints. Integrate with Micrometer for Prometheus/Grafana monitoring.
- **Configuration**: Use `@ConfigurationProperties` for type-safe configuration. Leverage Profiles for environment-specific settings.

## Reactive Stack (WebFlux)
- **Programming Model**: Use functional router functions or annotation-based controllers.
- **R2DBC**: Implement non-blocking database access for true end-to-end reactive flows.
- **Operators**: Master Project Reactor operators (`flatMap`, `switchIfEmpty`, `zip`). Ensure proper backpressure handling.

## Microservices & Resilience
- **Spring Cloud Gateway**: Centralize routing, rate limiting, and cross-cutting concerns at the edge.
- **Resilience4j**: Protect services with Circuit Breakers, Retries, Bulkheads, and Timeouts.
- **Cloud Stream**: Implement event-driven architectures using Spring Cloud Stream with Kafka or RabbitMQ.
- **Tracing**: Use Micrometer Tracing (formerly Sleuth) for distributed tracing across service boundaries.

## Performance & Native
- **GraalVM**: Target GraalVM Native Images for near-instant startup and reduced memory footprint in serverless or containerized environments.
- **JVM Tuning**: Optimize garbage collection (G1, ZGC) and heap settings based on application workload.
- **Caching**: Implement local caching with Caffeine and distributed caching with Redis.

## Testing & Quality
- **Integration Testing**: Use Testcontainers to spin up real instances of databases, Kafka, or Redis during integration tests.
- **Unit Testing**: Use JUnit 5 and Mockito. Leverage `@WebMvcTest` or `@DataJpaTest` for sliced testing.
- **Documentation**: Generate OpenAPI definitions automatically using SpringDoc.
