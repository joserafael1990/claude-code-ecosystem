# Systematic Debugging & Root Cause Analysis Standards

This skill outlines the standards for diagnosing and resolving complex software issues using systematic and evidence-based methodologies.

## Diagnostic Methodology
- **Symptom Collection**: Document the exact symptoms, error messages, and system behavior. Gather logs, stack traces, and environmental state.
- **Hypothesis formation**: develop testable hypotheses for the root cause based on gathered evidence.
- **Systematic Elimination**: Use techniques like binary search (bisecting code/history) or divide-and-conquer to isolate the problematic component or change.
- **Reproduction**: Prioritize creating a minimal, reliable reproduction case for the issue.

## Root Cause Analysis (RCA)
- **Code Path Audit**: analyze stack traces to identify the exact code path leading to the failure. Review relevant source code for logic errors, off-by-one conditions, or incorrect assumptions.
- **Data Flow Analysis**: trace the flow of data through the system to identify corruption or unexpected state transitions.
- **Concurrency & Timing**: identify race conditions, deadlocks, and synchronization issues using thread-safe debugging tools and timing analysis.
- **Five Whys**: Apply the "Five Whys" technique to move beyond superficial fixes to the underlying systemic cause.

## Specialized Debugging Techniques
- **Memory Analysis**: use tools like Valgrind or heap profilers to identify memory leaks, buffer overflows, and double-free errors.
- **Protocol Analysis**: Use Wireshark or tcpdump to diagnose network-level communication issues.
- **Database Profiling**: analyze slow query logs and execution plans to resolve persistence-related performance issues.
- **Binary Bisection**: Use `git bisect` to identify the specific commit that introduced a regression.

## Resolution & Prevention
- **Fix Validation**: Ensure the fix resolves the primary issue without introducing side effects or performance regressions.
- **Regression Testing**: add automated test cases that cover the reproduction scenario to prevent future regressions.
- **Knowledge Capture**: Document the issue, investigation process, and fix in a blameless postmortem or bug database.
- **Monitoring**: implement new alerts or observability metrics to detect similar issues faster in the future.
