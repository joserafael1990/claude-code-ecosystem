# Code Review Engineering Standards

This skill outlines the standards for conducting comprehensive code reviews across various programming languages, focusing on quality, security, and maintainability.

## Review Philosophy & Conduct
- **Constructive Feedback**: focus on the code, not the author. Provide clear rationale and suggest alternative implementations.
- **Priority**: categorize feedback into "Critical" (must fix), "Important" (should fix), and "Nit" (optional/stylistic).
- **Communication**: acknowledge good practices and provide positive reinforcement alongside improvement suggestions.

## Correctness & Quality
- **Logic**: verify algorithmic correctness and edge-case handling. ensure appropriate error handling and resource cleanup (e.g., closing file handles/sockets).
- **Complexity**: flag high cyclomatic complexity and overly long functions. Advocate for decomposition and the Single Responsibility Principle.
- **Standards**: Enforce language-specific idioms (e.g., Python's PEP8, effective Java, Go's Clean Code).

## Security & Vulnerability Review
- **Input Validation**: ensure all external data is validated and sanitized to prevent injection attacks (SQLi, XSS, Command Injection).
- **Access Control**: verify that authentication and authorization checks are present and robust.
- **Sensitive Data**: check for hardcoded secrets, insecure storage of credentials, and leakage of PII (Personally Identifiable Information).
- **Cryptography**: review the use of encryption algorithms and ensure secure key management practices.

## Performance & Optimization
- **Efficiency**: Analyze time and space complexity. identify redundant database queries (N+1) and unnecessary memory allocations.
- **Concurrency**: review thread safety, potential race conditions, and deadlocks.
- **Caching**: Verify appropriate use of caching and eviction strategies.

## Design & Style
- **SOLID & DRY**: Ensure code adheres to SOLID principles and does not duplicate logic unnecessarily.
- **Naming**: Enforce descriptive, consistent naming for variables, functions, and classes.
- **Readability**: Prioritize code that is easy to read and understand over clever or obscure optimizations.
- **Documentation**: Verify that public APIs are documented and that complex logic is explained with inline comments.

## Testing & Verification
- **Coverage**: ensures that new code is covered by automated tests (unit, integration).
- **Quality**: Review the tests themselves—verify that assertions are meaningful and that edge cases are exercised.
- **Isolation**: ensure tests are isolated and do not depend on external state or specific execution order.
