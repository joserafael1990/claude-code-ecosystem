# Incident Response & Resolution Standards

This skill outlines the standards for managing critical production incidents, from rapid detection to permanent resolution and post-incident learning.

## Detection & Triage
- **MTTD / MTTA**: target a Mean Time to Detect (MTTD) and Mean Time to Acknowledge (MTTA) of under 5 minutes.
- **Golden Signals**: leverage the four golden signals (Latency, Traffic, Errors, Saturation) for high-fidelity detection.
- **Triage**: establish clear severity levels (P0-P4). Perform rapid impact assessment to determine the blast radius and necessary stakeholder involvement.

## Coordination & Communication
- **Incident Command**: designate a single Incident Commander (IC) for every P0/P1 event to lead coordination and decision-making.
- **War Rooms**: initialize dedicated virtual war rooms (Slack/Zoom) to centralize technical discussion and evidence gathering.
- **Stakeholders**: provide regular, structured updates to internal stakeholders and external users (e.g., via Status Pages).
- **Communication Flow**: maintain a clear distinction between the "Technical" channel for responders and the "Update" channel for observers.

## Resolution & Mitigation
- **Mitigation First**: Prioritize returning the service to a healthy state over finding the root cause. Use rollbacks, traffic rerouting, or load shedding.
- **Emergency Procedures**: Maintain executable runbooks for common mitigation strategies (e.g., database failover, cache purging, feature flag toggling).
- **Evidence Preservation**: Capure logs, metrics snapshots, and terminal outputs during the incident to facilitate subsequent analysis.

## Analysis & Prevention
- **Root Cause Analysis (RCA)**: Use "Five Whys" analysis to move beyond superficial errors to systemic vulnerabilities.
- **Blameless Postmortems**: conduct blameless reviews focused on how to improve the system and its operational tools.
- **Action Items**: generate and track "Preventative" action items (e.g., adding monitoring, refactoring code, updated runbooks) with strict completion deadlines.
- **Metrics**: regularly audit MTTR (Mean Time to Resolve) trends to identify bottlenecks in the response pipeline.

## Preparedness
- **Game Days**: regularly conduct failure injection exercises (Chaos Engineering) to test both system resilience and team response patterns.
- **On-Call Health**: Monitor alert noise and fatigue. implement automated alert suppression and correlation logic to ensure on-call sustainability.
