# Documentation Engineering Standards

This skill outlines the standards for creating, maintaining, and automating comprehensive documentation systems for software projects.

## Architecture & Content Strategy
- **Information Hierarchy**: Structure documentation with clear pathways: Getting Started -> Tutorials -> Guides -> API Reference -> Architecture.
- **Searchability**: Enhance discoverability with Algolia DocSearch or specialized search indexes. Ensure metadata and keywords are optimized.
- **Diagrams as Code**: Use Mermaid, PlantUML, or C4 models to create maintainable, version-controlled architecture diagrams.

## API Documentation
- **OpenAPI/Swagger**: enforce OpenAPI 3.0+ specs for REST APIs. Auto-generate reference docs using tools like Redoc or Swagger UI.
- **Code Annotations**: Maintain docs close to code (JSDoc, GoDoc, Rustdoc). Ensure every public interface has clear examples and descriptions.
- **Interactive Playgrounds**: Embed interactive request runners (e.g., GraphiQL, Swagger) to allow developers to test endpoints instantly.

## Content Quality & Accessibility
- **Style Guide**: Adhere to the Google Developer Documentation Style Guide or Microsoft Style Guide. Enforce consistency via linters (Vale).
- **Accessibility (a11y)**: Ensure documentation sites meet WCAG AA standards. Verify keyboard navigation and screen reader compatibility.
- **Edge Cases**: Document error responses, rate limits, and authentication flows explicitly, not just happy paths.

## Automation & Operations (Docs-as-Code)
- **CI/CD Integration**: Treat documentation as code. Run link checkers, spell checkers, and build verifications in CI pipelines.
- **Version Control**: maintain docs in the same repo as code (monorepo) or synchronized via submodules. Support versioned docs for multiple software releases.
- **Feedback Loops**: Integrate "Was this helpful?" widgets and analytics to track engagement and identify gaps.
