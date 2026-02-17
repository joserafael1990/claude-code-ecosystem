# Test Automation Engineering Standards

This skill outlines the standards for designing, implementing, and maintaining robust automated test frameworks and strategies.

## Framework Design & Strategy
- **Architecture**: choose appropriate framework patterns (e.g., Page Object Model (POM), Screenplay, Keyword-Driven) based on the application type and team skills.
- **Coverage**: target > 80% automated coverage for critical business paths. prioritize "high-value, repetitive" tests for automation.
- **Speed**: target total execution time under 30 minutes. utilize parallel execution and selective test suites to maintain fast feedback loops.
- **Independence**: Ensure tests are atomic and independent. each test must set up its own state and clean up after itself to prevent lateral interference.

## UI Automation Standards
- **Wait Strategies**: Avoid hardcoded sleeps. Use explicit waits (wait for element visibility/readiness) to handle asynchronous UI transitions.
- **Locators**: Use stable, unique attributes (e.g., `data-testid`) for element identification. Avoid fragile CSS/XPath selectors that change with layout updates.
- **Visual Testing**: Integrate visual regression tools to catch unintended UI changes that element-level checks might miss.
- **Cross-Browser**: automate cross-browser and responsive layout testing using cloud-based grids or containerized browsers.

## API & Integration Testing
- **Contract Testing**: implement contract tests to ensures that services adhere to their defined API specifications (e.g., OpenAPI/Swagger).
- **Data-Driven**: Use data-driven patterns to exercise APIs with multiple permutations of input and edge-case values.
- **Mocking**: Leverage service virtualization or mocking (e.g., MockServer, Prism) to isolate the system under test from unreliable external dependencies.

## Performance & Load Testing
- **Baseline**: Establish performance baselines and automate checks to detect latency regressions in every build.
- **Scaling**: automate load and stress testing scenarios to verify system behavior under peak demand and identify breakpoints.

## CI/CD & Operations
- **Pipeline Integration**: automate test execution in the CI/CD pipeline. ensure that test results are surfaced and failures block subsequent deployment stages.
- **Reporting**: Implement detailed, structured reporting (e.g., Allure, ExtentReports) with screenshots and logs for rapid failure analysis.
- **Flakiness**: aggressively monitor and quarantine flaky tests. implement retry mechanisms with clear logging of transient failures.
- **Maintenance**: Treat test code with the same rigor as production code—apply SOLID principles, perform code reviews, and refactor regularly.
