# Modern Django Engineering & Best Practices

This skill outlines the standards for building secure, high-performance web applications using Django 5+ and Django REST Framework (DRF).

## Django Core & ORM Optimization
- **ORM Excellence**: Proactively eliminate N+1 queries using `select_related` (single-valued relationships) and `prefetch_related` (multi-valued relationships).
- **Model Design**: Use custom Managers and QuerySets for reusable query logic. Enforce data integrity with complex `Constraints` and proper indexing.
- **Async Django**: Leverage async views and the async ORM interface for I/O-bound operations in ASGI environments.
- **Migrations**: Manage schema evolution strictly. Use data migrations for complex state changes and ensure all migrations are reversible.

## Django REST Framework (DRF)
- **Serializers**: Always declare fields explicitly in `ModelSerializer` (never use `fields = "__all__"`). Optimize `to_representation` for nested data.
- **Views & Routing**: Use ViewSets for standard RESTful patterns and custom `@action` decorators for domain-specific logic.
- **Authentication**: Implement JWT (SimpleJWT) or Session authentication with robust `PermissionClasses`.
- **Filtering & Throttling**: Use `django-filter` for granular list filtering. Implement rate limiting to protect endpoints from abuse.

## Background Processing (Celery)
- **Task Design**: Ensure all tasks are idempotent—safe to retry multiple times without side effects.
- **Retries**: Implement proper exponential backoff retry strategies for transient failures.
- **Workflows**: Use Celery Signatures (chains, groups, chords) to model complex asynchronous pipelines.
- **Scheduling**: Manage periodic tasks using `django-celery-beat` for database-managed schedules.

## Security & Operations
- **Security Defaults**: Rely on Django's built-in protections for CSRF, XSS, and SQL Injection. Supplement with strict Content Security Policy (CSP) headers.
- **Auth Security**: Use `django-axes` or similar to prevent brute-force attacks on sensitive endpoints.
- **Configuration**: Strictly separate configuration from code. Use environment variables and tools like `python-decouple` or `django-environ`.
- **Caching**: Implement multi-layer caching (Template, View, Low-level) using Redis as the backend.

## Quality & Testing
- **Test Suite**: Use `pytest-django` for a modern testing experience. Leverage `factory_boy` for reproducible test data.
- **Analysis**: Use `django-debug-toolbar` in development and `EXPLAIN ANALYZE` for query performance profiling.
- **Formatting**: Enforce `ruff` for linting and formatting to maintain Python standards across the Django project.
