# C++ Engineering Standards & Best Practices

This skill outlines the standards for high-performance systems programming using modern C++ (20/23).

## Modern C++ Mastery (C++20/23)
- **Concepts**: Use concepts and constraints to define clear template interfaces and improve error messages.
- **Ranges**: Prefer the Ranges library (`std::ranges`) for composable, lazy-evaluated algorithms.
- **Coroutines**: Implement high-performance asynchronous tasks and generators using `co_await`, `co_yield`, and `co_return`.
- **Modules**: Transition to C++20 modules to improve build times and encapsulation.
- **Three-way Comparison**: Use `operator<=>` (spaceship operator) for efficient and consistent comparisons.

## Template Metaprogramming
- **Variadic Templates**: Master parameter packs for generic programming.
- **Compile-time Logic**: Use `if constexpr` and `constexpr` functions to shift computation from runtime to compile-time.
- **SFINAE/Concepts**: Use concepts as the primary tool for template specialization and overloading.
- **CRTP**: Use the Curiously Recurring Template Pattern for static polymorphism.

## Memory Management & Safety
- **RAII**: Apply Resource Acquisition Is Initialization universally for all resource management (memory, files, locks).
- **Smart Pointers**: Prefer `std::unique_ptr` for exclusive ownership and `std::shared_ptr` for shared ownership. Avoid raw pointers for owning data.
- **Allocators**: Design custom allocators or use `std::pmr` (Polymorphic Memory Resources) for performance-critical memory pooling.
- **Move Semantics**: Optimize for performance by implementing efficient move constructors and assignment operators.

## Performance Optimization
- **Cache Locality**: Design data structures to be cache-friendly (e.g., contiguous memory in `std::vector`).
- **SIMD**: Leverage vectorization intrinsics or compiler auto-vectorization hints.
- **Inlining**: Use `inline` and `LTO` (Link Time Optimization) to reduce function call overhead.
- **Profiling**: Use tools like `gprof`, `perf`, or `VTune` to identify hotspots.

## Concurrency & Multithreading
- **Atomics**: Master `std::atomic` and memory ordering (relaxed, acquire/release, seq_cst) for lock-free programming.
- **Lock-free Data Structures**: Prefer lock-free designs for high-contention scenarios.
- **Executors/Parallel STL**: Use execution policies (`std::execution::par`) for parallelizing algorithms.
- **Thread Pools**: Use thread pools to manage task execution and resource consumption.

## Build Systems & Quality
- **CMake**: Use "Modern CMake" (target-based) for build configuration.
- **Sanitizers**: Integrate AddressSanitizer (ASan), ThreadSanitizer (TSan), and UndefinedBehaviorSanitizer (UBSan) into the development workflow.
- **Static Analysis**: Use `clang-tidy`, `cppcheck`, and the C++ Core Guidelines to enforce code quality.
