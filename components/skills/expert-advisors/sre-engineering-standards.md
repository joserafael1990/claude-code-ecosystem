# Site Reliability Engineering (SRE) Standards

This skill outlines the standards for establishing and maintaining system reliability through data-driven frameworks, automation, and a culture of continuous learning.

## SLO & Error Budget Management
- **SLIs (Indicators)**: define precise, measurable metrics (Latency, Error Rate, Throughput, Availability) that reflect the user's experience.
- **SLOs (Objectives)**: Set target values for SLIs. SLOs should be realistic and agreed upon by product and engineering teams.
- **Error Budgets**: Use the delta between 100% and the SLO (e.g., 0.1% for a 99.9% SLO) to govern development. If the budget perishes, prioritize reliability fixes over new features.
- **Golden Signals**: Monitor the four golden signals: Latency, Traffic, Errors, and Saturation.

## Toil Reduction & Automation
- **Toil Identification**: Quantify manual, repetitive, tactical work. Target a limit of 50% of SRE time spent on toil; the rest must be spent on engineering/automation.
- **Automation**: Build self-healing systems and self-service platforms to eliminate manual interventions.
- **Runbooks**: Create executable or automated runbooks for common operational tasks and incident response.

## Reliability Architecture
- **Resilience Patterns**: Implement circuit breakers, bulkheads, retries with exponential backoff, and graceful degradation.
- **Failure Isolation**: Design systems with clear failure domains to prevent cascading failures.
- **Load Management**: implement load shedding and prioritization to protect core services during saturation.
- **Chaos Engineering**: Regularly inject controlled failures (Experimentation) to verify system resilience and recovery procedures.

## Incident Management & Learning
- **Blameless Culture**: Focus on identifying systemic causes of failure rather than individual error during postmortems.
- **MTTR/MTTD**: Track Mean Time to Detect and Mean Time to Resolve as key performance indicators for the incident response process.
- **Postmortems**: conduct detailed postmortems for every significant incident. ensure action items are tracked to completion to prevent recurrence.
- **On-Call**: maintain sustainable on-call rotations with clear escalation paths and handoff procedures.

## Capacity & Performance
- **Forecasting**: use historical data and growth projections to forecast resource needs.
- **Load Testing**: Regularly perform load and stress testing to identify system breakpoints.
- **Efficiency**: Continuously optimize resource usage to balance performance with cost (FinOps).
