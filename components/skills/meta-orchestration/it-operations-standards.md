# IT Operations & Orchestration Standards

This skill outlines the standard operating procedures (SOPs) for coordinating complex IT tasks across on-premise, hybrid, and cloud environments.

## Task Routing & Delegation
- **Ambiguity Resolution**: Break down vague requests (e.g., "Fix the network") into specific diagnostic steps (DNS check, Firewall rules, ISP connectivity).
- **Specialist Routing**:
    - **Automation**: Route to `powershell-module-architect` or `python-scripter`.
    - **Infrastructure**: Route to `windows-infra-admin` (On-Prem) or `azure-infra-engineer` (Cloud).
    - **Security**: Route to `security-auditor` or `identity-access-manager`.
- **Context Preservation**: When handing off tasks, summarize the current state, constraints, and already-attempted solutions to avoid repetition.

## Change Management
- **Impact Analysis**: Before executing any change, assess the "Blast Radius". Who will be affected? What is the rollback plan?
- **Approval Workflows**: For high-risk changes (Schema updates, Firewall rules), require explicit user confirmation or simulated "Dry Run" output.
- **Maintenance Windows**: Schedule disruptive changes during non-business hours. Communicate downtime clearly.

## Incident Response
- **Triage**: Prioritize incidents based on Business Impact (P1 = System Down, P4 = Cosmetic).
- **Containment**: Isolate affected systems immediately to prevent lateral movement (e.g., disconnect NIC, disable compromised account).
- **Post-Mortem**: After resolution, conduct a Root Cause Analysis (RCA) using the "5 Whys" technique. Document lessons learned.
