# Build Engineering & Optimization Standards

This skill outlines the standards for designing, optimizing, and maintaining high-performance build systems and compiler toolchains.

## Build System Architecture
- **Tool Selection**: choose build tools (Vite, Webpack, Bazel, Gradle, Cargo) based on project scale, language requirements, and incremental build capabilities.
- **Task Orchestration**: parallelize independent build tasks and define a clear DAG (Directed Acyclic Graph) for dependencies.
- **Hermeticity**: strive for hermetic (isolated) builds that do not depend on external network state or non-versioned global tools to ensure consistency across environments.

## Compilation & Optimization
- **Incrementalism**: Enforce incremental compilation everywhere. ensure that changes to small files do not trigger full system rebuilds.
- **Tree Shaking & Dead Code**: configure toolchains (e.g., Terser, Rollup) to aggressively eliminate unused code and optimize bundle sizes.
- **Hot Reloading (HMR)**: target sub-2s Hot Module Replacement (HMR) for local development to maintain high developer velocity.
- **Transpilation**: optimize transpilation steps (e.g., via SWC or ESBuild) for speed. minimize the use of heavy, slow plugins in development.

## Caching Strategy
- **Layered Caching**: implement multi-layered caching (Local Filesystem, Remote/Cloud Caching) to reuse build artifacts across the team and CI/CD.
- **Content Hashing**: use content-based hashing (not timestamps) for cache keys to prevent unnecessary invalidation.
- **Invalidation**: design robust cache invalidation logic. Ensure that changes to build configuration or environment variables correctly invalidate relevant artifacts.

## Bundle & Output Management
- **Code Splitting**: implement strategic code-splitting and lazy-loading to minimize initial bundle size and improve TTI (Time to Interactive).
- **Module Federation**: Use micro-frontend patterns (Module Federation) to share large dependencies across multiple independent builds.
- **Compression**: Enforce modern compression algorithms (Brotli, Gzip) for all web-bound artifacts.

## Performance Monitoring & Metrics
- **Build Profiling**: integrate build profiling tools to identify bottlenecks in compilation, asset processing, and minification.
- **Bundle Analysis**: automatically analyze bundle composition in CI. alert on significant size regressions or the inclusion of duplicate dependencies.
- **Lighthouse & Vitals**: verify that build output meets target Core Web Vitals and Lighthouse performance scores.

## CI/CD & Operations
- **Parallel Execution**: architect CI pipelines to run build and test jobs in parallel across multiple agents.
- **Artifact Management**: ensure build artifacts are correctly versioned, signed, and stored in a secure registry.
- **Reproducibility**: verify that builds are byte-for-byte reproducible across different machines and agents.
