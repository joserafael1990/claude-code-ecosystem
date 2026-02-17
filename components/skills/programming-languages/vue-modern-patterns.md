# Modern Vue & Nuxt Engineering Patterns

This skill outlines the standards for building high-performance, reactive, and type-safe applications using Vue 3 (Composition API) and Nuxt 3.

## Composition API & Reactivity
- **Reactivity Model**: Use `ref` for primitives and reassignment; `reactive` for deep object reactivity. Prefer `shallowRef` for large, static object graphs to reduce overhead.
- **Composables**: Extract reusable logic into composables. Ensure proper cleanup in `onUnmounted` to prevent memory leaks.
- **Side Effects**: Use `watchEffect` for automatic dependency tracking and `watch` for explicit, granular control.
- **VueUse**: Leverage the VueUse library for battle-tested, standard composables.

## State Management (Pinia)
- **Store Design**: Use the `defineStore` pattern with state, getters (computed), and actions (logic).
- **Type Safety**: Enforce strict TypeScript types for state and actions. Leverage Pinia's built-in inference.
- **Orchestration**: Compose stores by calling one within another to handle complex cross-domain state.
- **Persistence**: Use `pinia-plugin-persistedstate` or similar for synchronizing state with local storage/session storage.

## Nuxt 3 & Server-Side Rendering (SSR)
- **Rendering Modes**: Strategically choose between SSR, SSG, ISR (Incremental Static Regeneration), and SWR (Stale-While-Revalidate) on a per-route basis.
- **Data Fetching**: Use `useFetch` or `useAsyncData` for universal data fetching. Benefit from built-in caching, deduplication, and payload extraction.
- **Nitro Engine**: Implement server-side logic and API endpoints within the `server/` directory.
- **Auto-imports**: Maintain a balance between convenience and clarity; use explicit imports for complex external libraries.

## Performance & Optimization
- **Lazy Loading**: Use `defineAsyncComponent` and `Suspense` for heavy components.
- **Component Caching**: Use `<KeepAlive>` for maintaining component state across route navigations without re-renders.
- **Vite Tuning**: Optimize chunks, implement CSS code-splitting, and use `unplugin-vue-components` for automated component registration.
- **Virtualization**: Use virtual scrolling for rendering massive lists without DOM bloat.

## Quality & Standards
- **TypeScript**: Use `<script setup lang="ts">` exclusively. Type component props using `defineProps<T>()` and emits using `defineEmits<T>()`.
- **Testing**: Use Vitest for unit/composable testing and Playwright for reliable E2E integration.
- **Standards**: Enforce `eslint-plugin-vue` (recommended settings) and Prettier for consistent code quality. Avoid the Options API in modern codebases.
