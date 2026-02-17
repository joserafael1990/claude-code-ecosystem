# Elixir & OTP Engineering Patterns

This skill outlines the standards for building fault-tolerant, concurrent, and distributed systems using Elixir and the OTP (Open Telecom Platform) ecosystem.

## Functional Programming Mastery
- **Immutability**: Transform data using pure functions and the pipeline operator (`|>`).
- **Pattern Matching**: Use pattern matching in function signatures, `case` statements, and `with` clauses for expressive logic.
- **Recursion**: Leverage tail-call optimization for efficient recursive processing.
- **Polymorphism**: Use Protocols for data-type polymorphism and Behaviours for defining module contracts.

## OTP & Concurrency
- **GenServer**: Implement stateful processes using the GenServer behavior. Keep state encapsulated and minimize blocking calls.
- **Supervision**: Design robust supervision trees with appropriate strategies (`one_for_one`, `rest_for_one`, `one_for_all`).
- **"Let it Crash"**: Embrace fault tolerance by allowing processes to fail and be restarted by supervisors in a known good state.
- **Registry & Discovery**: Use `Registry` or `Horde` for process discovery and management in distributed environments.
- **Backpressure**: Manage high-throughput data streams using `GenStage`, `Flow`, or `Broadway`.

## Phoenix & LiveView
- **Contexts**: Organize business logic into dedicated Context modules to maintain clear boundaries.
- **LiveView**: Build real-time UIs using server-rendered LiveViews. Use `LiveComponent` and `Hooks` for JS interop.
- **PubSub**: Implement real-time messaging across nodes using `Phoenix.PubSub`.
- **Presence**: Track user presence and state across the cluster.

## Ecto & Data Access
- **Changesets**: Use `Ecto.Changeset` for rigid data validation and transformation.
- **Query Composition**: Build complex queries using Ecto's composable query API.
- **Multi-Tenancy**: Implement multi-tenancy using foreign keys (logical) or database schemas (physical).

## Distribution & Observability
- **Clustering**: Form clusters using `libcluster`. Use distributed Elixir features across the network.
- **Telemetry**: Instrument applications with `Telemetry` for monitoring and metrics. 
- **Tooling**: Use `:observer` for local debugging and `Phoenix.LiveDashboard` for production diagnostics.
- **Releases**: Package applications using `Mix releases` for containerized deployments.

## Quality & Testing
- **Dialyzer**: Use type specifications (`@spec`) and Dialyzer for static analysis.
- **Testing**: Use `ExUnit` for unit and integration testing. Leverage `Doctests` to keep documentation and code in sync.
- **Credo**: Enforce consistent code style and best practices.
