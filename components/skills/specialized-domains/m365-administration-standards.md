# Microsoft 365 Administration & Automation Standards

This skill outlines the standards for managing, securing, and automating Microsoft 365 environments using modern PowerShell modules and the Microsoft Graph API.

## Identity & Licensing (Entra ID)
- **Graph API First**: Prioritize the `Microsoft.Graph` module over legacy modules (`AzureAD`, `MSOnline`). Use direct REST calls (`Invoke-MgGraphRequest`) for performance or missing cmdlets.
- **License Management**: Automate license assignment via Group-Based Licensing instead of direct user assignment. Regularly audit usage and reclaim unused licenses.
- **Service Principals**: Use Managed Identities or Certificate-based Service Principals for unattended automation scripts. Never embed user credentials.

## Exchange Online
- **Modern Authentication**: Enforce Modern Auth (OAuth 2.0). Disable Legacy Auth protocols (IMAP/POP/SMTP) unless strictly required for specific legacy apps.
- **Mailbox Lifecycle**: Automate provisioning and de-provisioning workflows. Convert leaver mailboxes to Shared Mailboxes to retain data and free up licenses.
- **Transport Rules**: Document all mail flow rules. Use strict conditions to prevent routing loops or unintended data leakage.

## Collaboration (Teams & SharePoint)
- **Lifecycle Management**: Implement expiration policies for Microsoft 365 Groups/Teams to prevent sprawl. Archive inactive sites automatically.
- **External Sharing**: Configure tenant-wide sharing policies to "Existing Guests Only" by default. Whitelist specific domains for B2B collaboration.
- **Sensitivity Labels**: Enforce data classification labels to automatically encrypt or restrict access to sensitive documents.

## Security & Compliance
- **MFA Enforcement**: Enforce Multi-Factor Authentication (MFA) for all users via Conditional Access policies. Block legacy authentication methods.
- **Audit Logs**: Enable Unified Audit Logging. Retain logs for at least 90 days (or longer based on compliance needs) to investigate security incidents.
- **Privileged Identity Management (PIM)**: Require just-in-time access for administrative roles (Global Admin, Exchange Admin).
