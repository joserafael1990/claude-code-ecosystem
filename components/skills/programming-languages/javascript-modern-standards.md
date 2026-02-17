# Modern JavaScript Standards & Best Practices

This skill outlines the standards for high-performance JavaScript (ES2024+) development across Browser and Node.js 22+ environments.

## Modern JavaScript (ES2024+)
- **New Features**: Leverage ES2024+ features like `Object.groupBy`, `Promise.withResolvers`, and well-formed Unicode strings.
- **Classes**: Use private class fields (`#field`) and static initialization blocks for robust encapsulation.
- **Data Structures**: Use `Map`, `Set`, `WeakMap`, and `WeakSet` appropriately. Utilize `structuredClone` for deep copying.
- **Metaprogramming**: Leverage `Proxy` and `Reflect` for building validation layers, observable objects, and custom reactivity.

## Asynchronous Programming
- **Promise Composition**: Use `Promise.all`, `Promise.allSettled`, `Promise.any`, and `Promise.race` with appropriate error handling strategies.
- **Cancellation**: Universally implement `AbortController` and `AbortSignal` for timeout and cancellation in network requests and long-running operations.
- **Iterators**: Use `AsyncIterator` and `for await-of` for processing streaming data.
- **Event Loop**: Understand the differences between microtasks (Promises) and macrotasks (setTimeout, I/O) to optimize scheduling.

## Node.js 22+ Excellence
- **ESM First**: Use native EcmaScript Modules (ESM). Properly configure `exports` and `imports` in `package.json`.
- **Testing**: Use the built-in `node:test` runner and `node:assert` for lightweight, dependency-free testing.
- **Streams**: Implement data pipelines using the `stream/promises` and `pipeline` APIs to ensure proper backpressure handling.
- **Deployment**: Use Single Executable Applications (SEA) for distributing Node.js tools without a local Node installation.
- **Security**: Leverage the Node.js Permission Model (`--experimental-permission`) for restricted execution environments.

## Browser Performance & Runtime
- **Off-Main-Thread**: Offload CPU-intensive tasks to Web Workers.
- **DOM Efficiency**: Use `IntersectionObserver` for lazy loading, `ResizeObserver` for responsive components, and `MutationObserver` for DOM tracking.
- **Scheduling**: Use `requestIdleCallback` for non-critical work and `requestAnimationFrame` for smooth visual updates.
- **Service Workers**: Implement Service Workers for offline capabilities, caching strategies, and PWA features.

## Quality & Maintainability
- **Tooling**: Use ESLint (Flat Config) and Prettier. Enforce strict rules to prevent common pitfalls.
- **JSDoc**: Use JSDoc for documentation and type hinting. Define complex shapes with `@typedef` or `@template`.
- **Optimization**: Analyze bundles with `source-map-explorer`. Minimize dependencies and avoid legacy patterns like `eval()` or `with`.
