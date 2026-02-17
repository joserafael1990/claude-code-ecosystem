# Modern React Engineering & Best Practices

This skill outlines the standards for building high-performance, accessible, and scalable applications using React 19+ and its modern ecosystem.

## Modern React (19+) Fundamentals
- **Server Components (RSC)**: Use Server Components for zero-bundle data fetching. Keep client-side components ("use client") minimal and only for interactivity.
- **Server Actions**: Use Server Actions with `useActionState` for form mutations and server-side logic management.
- **`use()` Hook**: Leverge the `use()` hook for reading promises and context directly in render functions.
- **Optimistic UI**: Use `useOptimistic` to provide immediate feedback during asynchronous mutations.
- **Ref Forwarding**: Use the simplified ref forwarding patterns in React 19 (no `forwardRef` needed).

## State Management Strategies
- **Server State**: Use TanStack Query (React Query) for data fetching, caching, and revalidation. Avoid `useEffect` for data loading.
- **Global State**: Use Zustand for lightweight, selector-based global state.
- **Dependency Injection**: Use Context strictly for DI, not as a frequent-update global state store.
- **URL State**: Keep shareable UI state (filters, sorting, pagination) in the URL using `useSearchParams`.

## Performance Optimization
- **Concurrent Features**: Use `useTransition` for non-urgent updates and `useDeferredValue` to keep UI responsive during heavy renders.
- **Code Splitting**: Implement `lazy()` and `Suspense` at route and component boundaries.
- **Memoization**: Apply `React.memo`, `useMemo`, and `useCallback` judiciously. Base these decisions on Profiler metrics rather than premature optimization.
- **Virtualization**: Use `react-window` or `TanStack Virtual` for rendering large datasets efficiently.

## Component Architecture
- **Composition**: Prefer Compound Components and Headless UI patterns (e.g., Radix UI, TanStack Table) for flexible and reusable APIs.
- **Error Handling**: Implement Error Boundaries with descriptive fallbacks and recovery mechanisms.
- **Accessibility**: Use semantic HTML, manage focus with `useRef`, and ensure ARIA compliance across all interactive elements.

## Quality & Testing
- **TypeScript**: Enforce strict typing. Avoid `any` and favor interface definitions for props and state.
- **Testing**: Use React Testing Library (RTL) with `user-event`. Focus on testing user behavior rather than implementation details.
- **Tooling**: Use Storybook for isolated component development and Playwright for E2E testing.
- **Bundle Analysis**: Monitor bundle sizes. Avoid large library imports (e.g., use `date-fns` over `moment`).
