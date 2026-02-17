# Modern Python Engineering & Best Practices

This skill outlines the standards for high-performance, strictly typed Python development using Python 3.12+ and current ecosystem tools.

## Modern Python (3.12+) Fundamentals
- **Typing**: Use static type hints universally. Leverage `ParamSpec`, `TypeVarTuple`, and `Protocol` for advanced generic designs.
- **Pattern Matching**: Utilize structural pattern matching (`match/case`) for complex conditional logic and data extraction.
- **Data Structures**: Prefer `dataclasses` with `slots=True` and `kw_only=True` for memory efficiency and safety.
- **Error Handling**: Use `ExceptionGroup` and `except*` for handling multiple concurrent or complex error scenarios.
- **Syntactic Sugar**: Use f-string debugging (`f"{var=}"`) and parenthesized context managers.

## Async & Concurrency
- **Asynchronous I/O**: Master `asyncio`. Use `asyncio.TaskGroup` for structured concurrency.
- **Parallelism**: Use `concurrent.futures.ProcessPoolExecutor` for CPU-bound tasks to bypass the GIL.
- **Lifecycle**: Use async context managers and async generators to manage resources cleanly.
- **Abstraction**: Use `anyio` for writing async-backend-agnostic code (compatible with both asyncio and trio).

## Web Frameworks & Persistence
- **FastAPI**: Implement services using Pydantic v2 models, dependency injection, and async endpoints.
- **Django**: Leverage async views and the async ORM interface. Optimize database queries to prevent "N+1" problems.
- **SQLAlchemy 2.0**: Use the async API with `mapped_column` and strictly typed queries.
- **Database Migrations**: Use Alembic for SQLAlchemy or Django's built-in migration system. Ensure migrations are deterministic and reversible.

## Tooling & Environment
- **Package Management**: Use `uv` or `rye` for fast, reproducible dependency management and environment isolation.
- **Project Structure**: Use `pyproject.toml` as the single source of truth for project metadata, dependencies, and tool configuration.
- **Linting & Formatting**: Use `ruff` as the unified linter and formatter.
- **Static Analysis**: Enforce `mypy` (strict mode) or `pyright` in the CI pipeline.

## Testing & Quality
- **Unit Testing**: Use `pytest` with fixtures and parametrization. Leverage `hypothesis` for property-based testing.
- **Integration**: Use `pytest-asyncio` for testing asynchronous code.
- **Coverage**: Maintain high test coverage (>85%) with branch coverage enabled.
- **Security**: Regularly scan for vulnerabilities using `bandit` and `pip-audit`.

## Observability & Config
- **Logging**: Use structured logging (e.g., `structlog`) to emit machine-readable logs.
- **Configuration**: Avoid hardcoded secrets. Use environment variables with `python-dotenv` or Pydantic Settings.
