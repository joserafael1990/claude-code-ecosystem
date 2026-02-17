# Modern PHP Engineering & Best Practices

This skill outlines the standards for building high-performance, strictly typed applications using PHP 8.3+ and industry-leading frameworks like Laravel and Symfony.

## Modern PHP 8.3+ Fundamentals
- **Strict Typing**: Mandatory `declare(strict_types=1)` in all files. Leverage DNF types and intersection types for precise constraints.
- **Immutability**: Use `readonly` classes and properties for DTOs and value objects.
- **Language Features**: Prioritize `match` expressions, named arguments, and constructor property promotion.
- **Enums**: Use Backed Enums with methods for domain-specific logic.
- **Fibers**: Use Fibers for cooperative multitasking in high-concurrency or async contexts.

## Laravel Patterns
- **Service Container**: Master dependency injection, contextual binding, and service providers.
- **Eloquent**: Use Custom Casts, Model Scopes, and Global Scopes. Optimize relationships to prevent N+1 issues.
- **Queues**: Implement robust background processing with job batching, chaining, and rate limiting.
- **API Resources**: Use Eloquent Resources for consistent, versioned API response structures.
- **Security**: Implement authentication with Sanctum or Passport. Use Gates and Policies for authorization.

## Symfony Patterns
- **Dependency Injection**: Leverage autowiring, tagged services, and compiler passes.
- **Messenger**: Use the Messenger component for async message handling with transports like Redis or RabbitMQ.
- **Forms & Validation**: Design complex form types with data transformers and custom validation constraints.
- **Security**: Build fine-grained authorization logic using Security Voters.

## Quality & Static Analysis
- **PHPStan**: Target PHPStan level 9. Enforce strict type checking and avoid "baseline" growing.
- **Coding Standards**: Enforce PSR-12 or PER Coding Style using PHP-CS-Fixer or Pint.
- **Composer**: Regularly run `composer audit` to identify vulnerable dependencies. Use `composer.lock` for deterministic builds.

## Performance & Monitoring
- **OPcache**: Enable OPcache preloading in production to eliminate bootstrap overhead.
- **JIT**: Tune JIT compilation settings for compute-heavy workloads.
- **Profiling**: Use Blackfire.io or Xdebug profiling to identify and resolve performance bottlenecks.
- **Caching**: Implement multi-layer caching using Redis or Memcached.

## Testing
- **Frameworks**: Use Pest or PHPUnit for unit and feature testing.
- **Database**: Use database transactions or RefreshDatabase traits to ensure test isolation.
- **Mocks**: Leverage Mockery or framework-provided mocking utilities for external service isolation.
