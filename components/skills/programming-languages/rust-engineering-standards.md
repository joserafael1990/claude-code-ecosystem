# Rust Engineering Standards & Best Practices

This skill outlines the standards for high-performance systems programming using Rust (2021 edition+).

## Ownership, Borrowing & Lifetimes
- **Borrow Checker**: Design APIs that leverage the borrow checker for compile-time safety. Prioritize stack allocation over heap.
- **Lifetimes**: Use lifetime elision where possible; use explicit annotations only when necessary for clarity or complex relationships.
- **Smart Pointers**: Use `Box` for heap allocation, `Rc`/`Arc` for shared ownership, and `RefCell`/`Mutex` for interior mutability.
- **Optimization**: Use `Cow` (Copy-on-Write) to minimize unnecessary allocations. Use `Pin` for self-referential types.

## Trait System & Generics
- **Design**: Accept `impl Trait` or generic bounds for flexibility. Use Trait Objects (`dyn Trait`) only when dynamic dispatch is required.
- **Patterns**: Leverage Extension Traits for adding functionality to external types. Use Marker Traits for type-system guarantees.
- **Advanced**: Utilize Associated Types for type-safe relationships within traits.

## Error Handling
- **Application**: Use `anyhow` for high-level application error handling where context is key.
- **Libraries**: Use `thiserror` for defining structured, domain-specific error types in libraries.
- **Combinators**: Master `Result` and `Option` combinators (`map`, `and_then`, `ok_or`) to avoid unnecessary pattern matching.

## Asynchronous Programming
- **Runtime**: Use `tokio` as the default runtime for high-performance I/O or `async-std` for smaller utilities.
- **Conventions**: Ensure all futures are `Send` if they need to be spawned across threads. Understand `Pin` and `Unpin` semantics.
- **Control**: Use `select!` for multiplexing and implement proper cancellation patterns.

## Performance & Memory
- **Abstractions**: Adhere to the "Zero-Cost Abstractions" principle—you don't pay for what you don't use.
- **Optimization**: Use `SIMD` intrinsics for vectorizable tasks. Maximize `const` evaluation.
- **Layout**: Use `#[repr(C)]` or `#[repr(transparent)]` when precise memory layout control is required (e.g., FFI).

## Unsafe Code & FFI
- **Discipline**: Minimize `unsafe` blocks. Every `unsafe` block must have a `// SAFETY:` comment explaining why it is safe.
- **Interoperability**: Use `bindgen` for C interactions and `cbindgen` for exporting Rust functions to C.
- **Verification**: Use `Miri` to detect undefined behavior in unsafe code and tests.

## Testing & Quality
- **Suite**: Organize tests into unit (`#[cfg(test)]`) and integration (`tests/` directory) suites.
- **Tools**: Use `cargo-fuzz` for fuzzing, `proptest` for property-based testing, and `criterion` for benchmarking.
- **Linting**: Enforce `clippy::pedantic` and ensure zero warnings in CI.
- **Documentation**: Provide examples in doc comments; they are verified as tests.
