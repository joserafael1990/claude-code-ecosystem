# Go Engineering Standards & Best Practices

This skill outlines the standards for building efficient, concurrent, and idiomatic Go systems (1.21+).

## Idiomatic Go Patterns
- **Interfaces**: Accept interfaces, return structs. Keep interfaces small and focused.
- **Composition**: Use embedding and composition rather than inheritance.
- **Explicit over Implicit**: Avoid "magic" or hidden behaviors. Error values are preferred over exceptions.
- **Functional Options**: Use the functional options pattern for clean, extensible API configurations.
- **Proverbs**: Follow the Go Proverbs (e.g., "Don't communicate by sharing memory, share memory by communicating").

## Concurrency & Synchronization
- **Goroutines**: Manage goroutine lifecycles carefully. Avoid goroutine leaks.
- **Channels**: Use channels for orchestration and signal passing. Use `select` for multiplexing.
- **Context**: Propagate `context.Context` through all blocking operations for cancellation and timeouts.
- **Primitives**: Use `sync.Mutex` for protecting shared state and `sync.WaitGroup` or `errgroup` for coordinating multiple goroutines.

## Error Handling
- **Wrapped Errors**: Use `fmt.Errorf("...: %w", err)` to wrap errors with context. Use `errors.Is` and `errors.As` for checking.
- **Sentinels**: Define sentinel errors for known conditions that callers should handle specifically.
- **Slog**: Use the standard `slog` package for structured, leveled logging.
- **Panics**: Use `panic` only for unrecoverable programming errors, never for control flow.

## Performance & Memory
- **Efficiency**: Use `pprof` for CPU and memory profiling. Focus on benchmark-driven development.
- **Allocations**: Minimize dynamic allocations in hot paths. Use `sync.Pool` to reuse objects.
- **Slices**: Pre-allocate slices with `make([]T, 0, capacity)` when the size is known.
- **Escape Analysis**: Understand and minimize variables escaping to the heap.

## Microservices & Cloud-Native
- **gRPC**: Implement gRPC services with versioned Protobuf definitions. Use interceptors for cross-cutting concerns.
- **REST**: Build RESTful APIs using standard middleware for auth, rate limiting, and observability.
- **Observability**: Integrate OpenTelemetry for tracing and Prometheus for metrics.
- **Lifecycle**: Implement graceful shutdown by catching OS signals and closing listeners/connections.

## Build & Quality
- **Tooling**: Enforce `gofmt` and `golangci-lint` in CI. Run the race detector (`-race`) during tests.
- **Testing**: Use table-driven tests for comprehensive scenario coverage. Use fuzz testing for edge cases.
- **Modules**: Manage dependencies strictly using `go.mod` and `go.sum`. Avoid unnecessary external dependencies.
