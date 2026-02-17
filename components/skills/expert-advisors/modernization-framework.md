# Project Modernization Framework

## 9-Step Workflow
1. **Stack ID**: Analyze manifest files (.csproj, package.json, pom.xml).
2. **Architecture Audit**: Identify patterns (MVC, DDD, Clean, Microservices).
3. **Deep Logic Analysis**: Exhaustive, file-by-file reading of Services/Repos.
4. **Purpose Detection**: synthesize README/Docs to define "The Why".
5. **Feature Documentation**: Create `/docs/features/<name>.md` for every domain.
6. **Master Synthesis**: Re-read all feature docs to create master README.
7. **Human Validation**: Check-point for architectural accuracy.
8. **Recommendation**: Suggest modern stack (.NET 10, React 19, Go 1.23).
9. **Execution Plan**: Create `/modernizedone/` structure and task backlog.

## Migration Strategies
- **Strangler Fig Pattern**: Incrementally replace legacy components with new services behind a facade/proxy.
- **Branch by Abstraction**: Use an abstraction layer to swap implementations without breaking calls.
- **Parallel Run**: Execute legacy and modern logic simultaneously to validate results.
- **Database Refactoring**: Evolve the schema using dual-writes and data synchronization.

## Phase 0: The Foundation Structure
```bash
/modernizedone/
  ├── cross-cuttings/  # Logging, ErrorHandling, Security
  ├── src/             # Domain, Application, Infrastructure, API
  ├── tests/           # Unit, Integration, E2E
  └── docs/            # Modernization-specific decisions
```

## Feature Markdown Template
```markdown
# [Feature Name]
## Files: [List of legacy files]
## Business Rules: [Extracted logic]
## Workflows: [Step-by-step logic]
## Security: [Auth/Authz rules]
```
