# Modern Rails Engineering & Best Practices

This skill outlines the standards for building scalable, high-performance applications using Rails 8+ and modern Ruby (3.3+).

## Hotwire & Reactive UIs
- **Turbo Drive**: Use for SPA-like page transitions without manual JS.
- **Turbo Frames**: Implement partial page updates and lazy loading to improve perceived performance.
- **Turbo Streams**: Facilitate real-time updates via Action Cable (WebSockets) or HTTP responses.
- **Stimulus**: Use Stimulus controllers for lightweight, DOM-linked JavaScript behavior.
- **Strategy**: Prioritize progressive enhancement—the core app should function without JavaScript, with Hotwire providing the enhancement.

## Active Record & Persistence
- **Association Design**: Use Polymorphic associations, Single Table Inheritance (STI), or Delegated Types (Rails 7+) appropriately.
- **Optimization**: Proactively prevent N+1 queries using `.includes`, `.preload`, or `.eager_load`. Use the `Bullet` gem in development.
- **Queries**: Use scopes as composable query builders. Use Arel for generating complex SQL when the DSL is insufficient.
- **Scale**: Leverage multi-database support for read replicas or horizontal sharding as data grows.
- **Migrations**: Enforce `strong_migrations` to prevent unsafe DDL operations in production.

## Background Processing
- **Solid Queue**: Use the default Rails 8 database-backed queue for standard workloads.
- **Sidekiq**: Use Sidekiq for high-throughput requirements. Implement unique jobs and batch processing.
- **Safety**: Ensure all background jobs are idempotent to handle retries gracefully.
- **Monitoring**: Track queue depth, latency, and failure rates. Use Active Job's built-in retry strategies.

## API & Security
- **Serialization**: Use `jbuilder` or `Alba` for fast, flexible JSON responses.
- **Auth**: Implement authentication with `Devise` or the default Rails authentication generators.
- **Authorization**: Use `Pundit` policies for fine-grained resource access control.
- **Credentials**: Manage secrets using Rails encrypted credentials. Never commit plain-text secrets.
- **Protection**: Use `rack-attack` for rate limiting and blocking malicious clients.

## Quality & Performance
- **Ruby 3.3+**: Leverage YJIT in production for significant performance boosts.
- **Static Analysis**: Run `Brakeman` for security scanning and `RuboCop` for style consistency.
- **Testing**: Use `RSpec` with `FactoryBot`. Aim for high coverage on models and request specs.
- **Indexes**: Ensure database indexes exist on all foreign keys and columns used in filtering/sorting.
