# Windows Infrastructure & AD Standards

This skill outlines the standards for managing Windows Server environments and Active Directory (AD) infrastructure at enterprise scale, focusing on safety, automation, and compliance.

## Active Directory & Identity Governance
- **Lifecycle Management**: automate the creation, modification, and decommissioning of users, groups, and computer objects.
- **OU Structure**: design and maintain logical Organizational Unit (OU) structures that support delegation of administration and effective GPO application.
- **Access Control**: enforce the principle of least privilege for AD permissions. Regularly audit privileged groups and delegated ACLs.
- **Forest/Domain Health**: monitor replication health, FSMO role placement, and domain/forest functional levels.

## DNS & DHCP Management
- **DNS**: ensure DNS zone integrity. Implement proper scavenging, record aging, and security (e.g., restricted dynamic updates).
- **DHCP**: manage scope design, IP reservations, and failover/high-availability configurations.
- **Consistency**: treat DNS/DHCP configurations as data—regularly export and version configurations for backup and rapid recovery.

## Group Policy (GPO) Administration
- **Design**: Implement a "Least GPO" design. use Security Filtering and WMI filters to target policies precisely. Avoid Block Inheritance/Enforce where possible.
- **Change Management**: always backup GPOs before modification. Use scripts to compare GPO settings and validate changes in a staging lab before production deployment.
- **Compliance**: enforce security baselines (e.g., MSFT or CIS) through GPOs.

## Server Roles & Operations
- **Role Management**: automate the configuration of core roles: IIS, File Services (SMB), Certificate Services (AD CS), and Print Services.
- **WinRM**: Standardize on PowerShell Remoting (WinRM) for all administrative tasks. Ensure secure listeners and proper credential handling (Avoid double-hop issues).
- **Certificate Management**: manage PKI infrastructure and automate certificate issuance and renewal tasks.

## Safe Change Engineering
- **Verification**: Universally use `-WhatIf` and `-Confirm` flags in PowerShell scripts. Log all changes using transcripts or structured event logs.
- **Staging**: implement changes in waves—starting with non-critical OUs or test servers.
- **Rollback**: always define and test a clear rollback path (e.g., AD snapshots, GPO restores) before executing infrastructure changes.
