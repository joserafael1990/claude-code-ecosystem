# Modern Swift Engineering & Best Practices

This skill outlines the standards for building native iOS/macOS applications and server-side services using Swift 6+ and modern Apple platform frameworks.

## Swift 6 Concurrency
- **Strict Checking**: Enable strict concurrency mode. Ensure all types crossing isolation boundaries conform to `Sendable`.
- **Actors**: Use `actor` for protecting mutable state and preventing data races. Leverage `MainActor` for UI-bound code.
- **Structured Concurrency**: Use `async let` for parallel tasks and `TaskGroup` for managing dynamic sets of concurrent operations.
- **Async Sequences**: Leverage `AsyncSequence` and `AsyncStream` for event-driven flows.

## SwiftUI & Modern UI
- **Observation**: Use the `@Observable` macro for reactive state management (replacing legacy `ObservableObject`).
- **State Flow**: Correctly use `@State`, `@Binding`, and `@Environment`. Avoid state duplication.
- **Navigation**: Implement type-safe navigation using `NavigationStack` and `navigationDestination`.
- **Layout**: Use the `Layout` protocol for complex, reusable layout logic.
- **Animations**: Prioritize `withAnimation` and `matchedGeometryEffect` for fluid user experiences.

## Persistence & Platform Features
- **SwiftData**: Use the `@Model` macro for lightweight persistence. Leverage its built-in predicates and relationship management.
- **WidgetKit**: Implement Home Screen and Lock Screen widgets with proper timeline management.
- **App Intents**: Expose app functionality to Siri and Shortcuts through App Intents.
- **StoreKit 2**: Use the modern async/await StoreKit 2 APIs for in-app purchases and subscriptions.

## Server-Side Swift (Vapor)
- **Vapor Framework**: Use Vapor 4 with async/await route handlers.
- **Fluent ORM**: Define models and migrations for PostgreSQL, MySQL, or SQLite.
- **Real-time**: Implement WebSockets using actor-based connection management to ensure thread safety.
- **Cloud-Native**: Deploy Vapor services using Docker with optimized Swift runtime images.

## Quality & Performance
- **Memory Management**: Use Instruments to detect memory leaks and retain cycles. Master the use of `weak` and `unowned` references.
- **Testing**: Use `XCTest` with async testing patterns. Focus on high-value unit tests and UI tests.
- **Static Analysis**: Enforce `SwiftLint` in the CI pipeline to maintain consistent code style.
- **Modern Standards**: Adhere to Protocol-Oriented Programming (POP) and prioritize type safety and clarity.
