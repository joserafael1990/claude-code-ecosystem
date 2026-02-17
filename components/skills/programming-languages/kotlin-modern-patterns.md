# Modern Kotlin Engineering Patterns

This skill covers best practices for building cross-platform and server-side applications using Kotlin 2.0+, Coroutines, and Multiplatform (KMP).

## Coroutines & Structured Concurrency
- **Scopes**: Use `CoroutineScope` tied to a specific lifecycle. Avoid `GlobalScope`. Use `supervisorScope` when child failures should not cancel siblings.
- **Dispatchers**: Choose correctly: `Dispatchers.IO` for I/O, `Dispatchers.Default` for CPU-bound tasks, and `Dispatchers.Main` for UI updates.
- **Flow**: Leverage `StateFlow` and `SharedFlow` for reactive state management. Use cold `Flow` for data streams.
- **Testing**: Use `kotlinx-coroutines-test` and `runTest` for predictable coroutine testing.

## Kotlin Multiplatform (KMP)
- **Shared Logic**: Isolate business logic, networking, and data persistence in the `commonMain` source set.
- **Platform Abstraction**: Use `expect`/`actual` declarations for platform-specific APIs.
- **Libraries**: Use KMP-compatible libraries like `Ktor` (networking), `SQLDelight` (database), and `kotlinx.serialization`.
- **Compose Multiplatform**: Share UI code across Android, iOS, Desktop, and Web using Compose Multiplatform.

## Android & Jetpack Compose
- **State Management**: Use `remember`, `rememberSaveable`, and `derivedStateOf`. Minimize side effects using `LaunchedEffect` and `DisposableEffect`.
- **Navigation**: Implement type-safe navigation using the latest Jetpack Navigation APIs.
- **Architecture**: Follow the recommended app architecture with `ViewModels`, `Repositories`, and dependency injection (Hilt/Koin).
- **Performance**: Use Baseline Profiles to optimize app startup and frame rates.

## Server-Side Kotlin (Ktor)
- **Ktor Server**: Use the Ktor DSL for routing, plugins, and content negotiation.
- **Serialization**: Use `kotlinx.serialization` as the default for JSON and Protobuf handling.
- **Persistence**: Use `Exposed` or `ktorm` for type-safe database access.
- **Messaging**: Implement WebSockets or gRPC using Flow-based paradigms.

## Quality & Tooling
- **K2 Compiler**: Enable the K2 compiler for faster build times and improved language features.
- **Static Analysis**: Enforce `Detekt` (logic) and `ktlint` (style) in the CI pipeline.
- **Explicit API**: Use `explicitApi()` mode in libraries to ensure all public signatures have explicit visibility and types.
- **Functional Patterns**: Favor sealed classes/interfaces, extension functions, and higher-order functions for expressive code.
