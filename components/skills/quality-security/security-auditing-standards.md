# Security Auditing & Hardening Standards

This skill outlines the standards for conducting security audits, vulnerability assessments, and system hardening using a defense-in-depth approach.

## Security Architecture Pillars
- **Zero Trust**: assume no network is safe. enforce continuous verification for every access request, regardless of origin.
- **Least Privilege (PoLP)**: restrict access rights for users, accounts, and processes to only the resources absolutely necessary for their function.
- **Secure Defaults**: configure systems and applications to be secure out-of-the-box. disable unnecessary services, ports, and default credentials.
- **Defense in Depth**: Implement multi-layered security controls (Physical, Network, Host, Application, Data) so that a failure in one layer does not lead to a total compromise.

## Vulnerability Assessment & Audit
- **Methodology**: Follow industry-standard frameworks like OWASP Top 10 for applications and CIS Benchmarks for infrastructure.
- **Surface Analysis**: map the attack surface by identifying all entry points, public-facing assets, and internal trust boundaries.
- **SAST/DAST**: integrate Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST) into the development lifecycle.
- **Audit Findings**: Document every finding with clear evidence, impact assessment (CVSS), and mapping to compliance frameworks (e.g., SOC2, GDPR).

## Identity & Infrastructure Hardening
- **IAM**: Audit multi-factor authentication (MFA), role-based access control (RBAC), and session management. Prioritize short-lived credentials and Managed Identities.
- **Cloud Hardening**: verify VPC isolation, S3 bucket privacy, and least-privilege IAM policies. Ensure audit logging (e.g., CloudTrail) is enabled.
- **Container Security**: audit container images for vulnerabilities. Enforce non-root execution and restricted security contexts in orchestration (K8s).
- **Secrets Management**: universally use vault-based systems (HashiCorp Vault, AWS Secrets Manager) for secret storage and injection.

## Data Protection & Encryption
- **Transit**: Enforce TLS 1.2+ (ideally 1.3) for all data in transit. monitor for insecure protocols (HTTP, Telnet).
- **At Rest**: verify encryption at rest for databases, file systems, and backups using robust KMS-managed keys.
- **PII / Sensitive Data**: Audit the handling and storage of Personally Identifiable Information (PII) to ensure compliance with privacy regulations.

## Remediation & Governance
- **Prioritization**: focus remediation efforts on "Critical" and "High" findings first. Provide clear, actionable code or configuration patches.
- **Continuous Monitoring**: implement automated security scanning and real-time alerting for configuration drift or suspicious activity.
- **Incident Support**: lead security-related incident response and conduct forensic analysis to prevent recurrence.
