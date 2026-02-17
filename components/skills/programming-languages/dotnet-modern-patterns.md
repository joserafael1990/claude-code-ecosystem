# Modern .NET Development (8/10+)

This skill covers best practices for building cloud-native, high-performance applications using .NET 8, .NET 10, and modern C# (12+).

## ASP.NET Core & Minimal APIs
- **Design**: Use Minimal APIs for concise, high-performance endpoints. Group routes using `MapGroup` and apply filters for cross-cutting concerns.
- **Middleware**: Implement standard middleware for Rate Limiting, Response Compression, and Output Caching.
- **Identity**: Secure APIs using ASP.NET Core Identity, JWT, or OpenID Connect (OIDC).
- **Documentation**: Generate OpenAPI/Swagger documentation using `Swashbuckle` or `Scalar`.

## Entity Framework Core (EF Core)
- **Migrations**: Use `dotnet ef migrations` for schema management. Implement safe rollback strategies.
- **Performance**: Use Split Queries for complex joins, Compiled Queries for hot paths, and Interceptors for audit/soft-delete logic.
- **Resilience**: Implement execution strategies (retries) for transient database failures.
- **Relationships**: Properly configure owned types, value objects, and inheritance patterns (TPH/TPT).

## Modern C# Patterns (12+)
- **Constructors**: Use Primary Constructors for concise dependency injection.
- **Types**: Use `record` types for immutable DTOs and value objects.
- **Expressions**: Leverage Collection Expressions and Switch Expressions for cleaner code.
- **Safety**: Enforce Nullable Reference Types (`<Nullable>enable</Nullable>`) across the entire solution.

## Cloud-Native & Infrastructure
- **AOT**: Use Native AOT compilation for ultra-fast startup and minimal container footprints.
- **Containerization**: Use multi-stage Docker builds. Target `dotnet/runtime-deps` for AOT-published apps.
- **Messaging**: Use gRPC for high-throughput internal communication and SignalR for real-time UI updates.
- **Observability**: Implement OpenTelemetry for tracing, Health Checks for orchestration, and structured logging with Serilog.

## Development Lifecycle
- **Package Management**: Use Central Package Management (`Directory.Packages.props`) for version consistency.
- **Analyzers**: Enforce `dotnet format` and use Roslyn Analyzers to maintain code quality in CI.
- **Testing**: Use xUnit for testing. Leverage `WebApplicationFactory` for integration testing.
