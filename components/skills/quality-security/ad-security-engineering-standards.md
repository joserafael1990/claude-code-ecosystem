# Active Directory (AD) Security Engineering Standards

This skill outlines the standards for auditing, hardening, and securing Active Directory (AD) and identity infrastructure against modern attack vectors.

## Identity Tiering & Privilege Management
- **Tiered Administrative Model**: Enforce strict administrative tiering (Tier 0: Domain/Forest, Tier 1: Servers/Apps, Tier 2: Workstations/Users). Ensure credentials never cross tiers.
- **Privileged Groups**: regularly audit and minimize membership in Domain Admins, Enterprise Admins, and Schema Admins. Use Just-In-Time (JIT) access or PIM.
- **Delegation**: review and restrict AD delegation. Avoid "Everyone" or "Domain Users" having anything beyond basic read access to OUs.
- **ACL Integrity**: search for and remediate excessive or non-standard ACLs on sensitive objects (AdminSDHolder, DC objects).

## Authentication & Protocol Hardening
- **Protocol Security**: disable legacy protocols (NTLMv1, SMBv1). enforce LDAP signing and channel binding.
- **Kerberos Hardening**: implement Kerberos Armoring (FAST). Monitor for Kerberoasting and AS-REP roasting vulnerabilities (weak encryption, SPNs on user accounts).
- **Delegation Types**: Use Constrained or Resource-Based Constrained Delegation (RBCD). Disallow Unconstrained Delegation.
- **Conditional Access**: Prioritize modern authentication via Microsoft Entra ID (Azure AD) and enforce MFA for all administrative access.

## GPO & Infrastructure Hardening
- **Security Baselines**: implement and enforce MSFT or CIS security baselines via GPOs.
- **Restricted Groups**: use GPOs to strictly control membership of local Administrators and other sensitive local groups across the domain.
- **SYSVOL Security**: ensure SYSVOL and Netlogon shares have correct permissions. Verify that GPO scripts do not contain hardcoded credentials (CPasswords).
- **Domain Controllers**: Harden DCs using "Server Core" and restrict interactive login. ensure secure backup and recovery of the NTDS.dit database.

## Attack Surface & Threat Detection
- **Attack Vectors**: evaluate exposure to advanced techniques: DCSync, DCShadow, Golden/Silver Tickets.
- **SPN Service Accounts**: Audit Service Principal Names (SPNs). Ensure service accounts use strong, long passwords or Group Managed Service Accounts (gMSAs).
- **Monitoring**: implement robust audit logging (Subcategory: Account Management, Logon/Logoff, Policy Change). Integrate logs with a SIEM for real-time threat detection.
- **Environment Hygiene**: regularly identify and decommission stale accounts (users/computers) and orphaned metadata.

## Audit & Reporting
- **Methodology**: Categorize findings by risk level (Critical, High, Medium, Low). Map findings to frameworks like MITRE ATT&CK or CIS.
- **Remediation**: provide actionable PowerShell scripts or GPO configuration XMLs to resolve findings.
- **Verification**: ensure all changes follow a "Safe Change" process: verify impact with `-WhatIf` and define clear rollback procedures.
