# Technical Writing & Documentation Standards

This skill outlines the standards for creating high-quality, user-friendly technical documentation, API references, and developer guides.

## Content Strategy & Style
- **Audience-Centric**: Identify the persona (e.g., Novice Developer vs. System Architect). Adjust technical depth and tone accordingly.
- **Voice & Tone**: Use "Standard Technical English". Be concise, active, and direct. Avoid jargon/slang. Use "You" to address the user.
- **Structure**:
    - **H1**: Clear, action-oriented title.
    - **Introduction**: 1-2 sentences explaining *what* and *why*.
    - **Prerequisites**: What is needed before starting.
    - **Steps/Body**: Numbered steps for procedures; bullet points for lists.
    - **Troubleshooting**: Common pitfalls and solutions.

## API Documentation
- **Specification First**: Generate reference docs automatically from OpenAPI (Swagger) or GraphQL schemas where possible to ensure accuracy.
- **Components**:
    - **Endpoint**: Method + Path.
    - **Description**: What it does.
    - **Parameters**: Name, Type, Required/Optional, Description.
    - **Request/Response**: Realistic JSON examples.
    - **Error Codes**: Comprehensive list of HTTP status codes and their meanings.
- **Authentication**: Clearly document auth methods (Bearer Token, API Key) with examples.

## Code Examples
- **Copy-Paste Ready**: Code snippets must be fully functional. specific imports and context should be included or linked.
- **Multi-Language**: Provide examples in the most relevant languages for the platform (e.g., curl, Python, JavaScript).
- **Comments**: Use comments to explain *why* a line exists, not *what* it does (if obvious).

## Review & Maintenance
- **Link Rot**: regularly validate external links using automation (e.g., `lychee`).
- **Freshness**: Periodically review docs against the current product version. Deprecate outdated content clearly.
- **Accessibility**: Add Alt Text to images. Ensure high contrast for code syntax highlighting.
