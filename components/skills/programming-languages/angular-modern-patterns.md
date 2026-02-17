# Modern Angular Development (17+)

This skill covers best practices for Angular 17 and 18+, emphasizing signals, standalone components, and enterprise-scale architectures.

## Modern Angular Patterns
- **Standalone Components**: Use `standalone: true` as the default. Minimize or eliminate `NgModules` in new projects.
- **Signals**: Leverage `signal()`, `computed()`, and `effect()` for reactive state. Use `toSignal` and `toObservable` to bridge with RxJS.
- **New Control Flow**: Replace `*ngIf`, `*ngFor`, and `*ngSwitch` with `@if`, `@for`, and `@switch` blocks for better performance and readability.
- **Deferrable Views**: Use `@defer` for granular, declarative lazy-loading of component subtrees based on triggers (e.g., `viewport`, `idle`, `hover`).
- **Functional Patterns**: Prefer functional route guards and interceptors over class-based implementations.

## State Management
- **NgRx Store**: Use `createFeature()` and `on()` for concise reducer definitions.
- **NgRx Signals**: Use `SignalStore` for lightweight, local, or global state.
- **Entity Management**: Use `@ngrx/entity` for normalized collection management and efficient CRUD operations.
- **RxJS Discipline**: Manage subscriptions using `takeUntilDestroyed` or the `async` pipe. Prefer Signals for synchronous state.

## Performance & Scaling
- **Change Detection**: Enforce `ChangeDetectionStrategy.OnPush` globally. Prepare for zoneless Angular by minimizing `NgZone` dependencies.
- **Optimization**: Implement virtual scrolling (CDK) for large lists. Optimize image loading with `NgOptimizedImage`.
- **Budgets**: Set and enforce bundle budgets in `angular.json` to prevent performance regression.
- **Nx Monorepo**: Use Nx for managing internal libraries, enforcing boundaries, and optimizing CI with "affected" commands and caching.

## Enterprise Architectures
- **Micro-Frontends**: Implement Module Federation for independent scaling of UI teams. Ensure shared dependency versioning.
- **Component Libraries**: Build shared UI libraries (Storybook, Nx) with clear API boundaries and accessibility standards.
- **Testing**: Use Playwright/Cypress for E2E and Jest/Vitest for unit testing. Focus on component testing for high-value UI logic.
