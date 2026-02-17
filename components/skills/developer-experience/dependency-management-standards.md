# Dependency Management & Software Supply Chain Standards

This skill outlines the standards for auditing, managing, and securing third-party dependencies across multiple programming language ecosystems.

## Dependency Audit & Analysis
- **Tree Analysis**: universally analyze dependency trees to identify version conflicts, circular dependencies, and duplicate packages (e.g., using `npm list`, `pipdeptree`, `mvn dependency:tree`).
- **Unused Packages**: regularly audit and remove unused dependencies to minimize bundle size, attack surface, and build times.
- **Breaking Change Detection**: use automated tools to evaluate the impact of dependency updates. prioritize checking for breaking changes in peer dependencies and transitive requirements.

## Security & Supply Chain Defense
- **Vulnerability Scanning**: implement automated, continuous scanning for known CVEs (e.g., via `Snyk`, `GitHub Dependabot`, `npm audit`). target zero "High" or "Critical" vulnerabilities in production.
- **Lock Files**: universally enforce the use of lock files (`package-lock.json`, `poetry.lock`, `Cargo.lock`) to ensure deterministic builds and prevent "dependency drift."
- **Package Verification**: verify package integrity using checksums and signatures. implement defense against dependency confusion and typosquatting.
- **SBOM**: Generate and maintain a Software Bill of Materials (SBOM) for all production artifacts to facilitate rapid incident response.

## Versioning & Update Strategy
- **Semantic Versioning (SemVer)**: follow SemVer principles when defining version ranges. favor conservative ranges (e.g., `~` or `^`) to balance stability with security patches.
- **Update Lag**: target an update lag of < 30 days for security patches and < 90 days for minor/major updates.
- **Automated Updates**: implement automated PR creation for dependency updates (e.g., via `Renovate` or `Dependabot`) integrated with the CI test suite.
- **Pinned Versions**: pin critical infrastructure or highly unstable dependencies to specific versions to prevent unexpected regressions.

## License & Compliance
- **License Audit**: automatically audit dependency licenses to ensure compatibility with the project's legal requirements (e.g., avoiding GPL in proprietary products without deliberate choices).
- **Policy Enforcement**: define and automate the enforcement of allowed/forbidden licenses.
- **Attribution**: automate the generation of license attribution files for production releases.

## Optimization & Performance
- **Tree Shaking**: Ensure dependencies are ESM-compatible where possible to facilitate aggressive tree-shaking and dead code elimination.
- **Deduplication**: implement deduplication strategies to resolve multiple versions of the same package within the same project.
- **Lazy Loading**: configure dependencies for lazy-loading to minimize initial bundle size and application startup time.
