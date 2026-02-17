# Refactoring & Code Quality Standards

This skill outlines the standards for transforming legacy or complex code into clean, maintainable, and testable software without altering its external behavior.

## Safe Refactoring Protocols
- **Test-Driven Refactoring**: Never refactor without test coverage. If tests are missing, write "Characterization Tests" (Golden Master) first to capture current behavior.
- **The "Two Hats" Rule**: Distinctly separate refactoring (structuring) from feature development (behavior change). Never do both in the same commit.
- **Micro-Commits**: Refactor in small, verifiable steps. Commit after every successful test pass to allow easy rollback.

## Code Smell Detection
- **Bloaters**: Identify Long Methods (>20 lines), Large Classes, and Long Parameter Lists (>3 args).
- **OO Abusers**: Detect Switch Statements (replace with Polymorphism), Temporary Fields, and Refused Bequest.
- **Change Preventers**: Eliminate Divergent Change (confusion of concerns) and Shotgun Surgery (coupling).
- **Couplers**: Break Feature Envy, Inappropriate Intimacy, and Message Chains.

## Core Refactoring Patterns
- **Composing Methods**:
    - **Extract Method**: Group code fragments into a method with a descriptive name.
    - **Inline Temp**: Replace temporary variables with queries to improve readability.
    - **Replace Temp with Query**: Extract expressions into methods to promote reuse.
- **Simplifying Conditionals**:
    - **Decompose Conditional**: Extract complex if/else logic into named boolean methods.
    - **Replace Nested Conditional with Guard Clauses**: Return early to avoid "arrow code" indentation.
- **Moving Features**:
    - **Move Method**: Move a method to the class that uses it most (addressing Feature Envy).
    - **Extract Class**: Split classes that violate the Single Responsibility Principle (SRP).

## Legacy Code Techniques
- **Seams**: Identify or create seams (interfaces, virtual methods) to break dependencies and enable testing.
- **Sprout Method/Class**: Implement new functionality in fresh, testable methods/classes rather than modifying existing spaghetti code.
- **Wrap Method**: Wrap legacy calls with a new method to add behavior before/after without touching the old code.

## Metrics & Quality Gates
- **Cyclomatic Complexity**: Target a complexity score of < 10 per method.
- **Cognitive Complexity**: Optimize for readability. Avoid deep nesting and complex boolean logic.
- **Duplication (DRY)**: Target 0% copy-pasted logic. Extract shared logic into helper functions or base classes.
