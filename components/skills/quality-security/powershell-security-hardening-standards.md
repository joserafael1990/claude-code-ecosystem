# PowerShell Security & Hardening Standards

This skill outlines the standards for securing PowerShell automation, WinRM remoting, and Windows systems using PowerShell-based controls.

## PowerShell Foundation Hardening
- **Execution Policy**: Enforce `AllSigned` or `RemoteSigned` as a baseline. Use Code Signing for production scripts to ensure integrity.
- **Logging**: Universally enable and verify Script Block Logging (ID 4104), Module Logging, and Transcription. Ensure transcript logs are stored in a secure, centralized location.
- **Language Mode**: Use `ConstrainedLanguage` mode for non-privileged users to restrict access to sensitive .NET types and APIs.
- **Antimalware Scan Interface (AMSI)**: ensure AMSI is active to detect and block malicious script execution in memory.

## Secure Remoting (WinRM & JEA)
- **Encryption**: always use HTTPS (SSL/TLS) for WinRM listeners or ensure Kerberos encryption is active. Disable insecure HTTP listeners.
- **Just Enough Administration (JEA)**: implement JEA endpoints to restrict users to specific cmdlets, functions, and external commands. eliminate the need for interactive administrator logins.
- **Constrained Endpoints**: define custom session configurations that expose only the minimum necessary surface area for specific administrative tasks.

## Credential & Secret Management
- **Zero Plaintext**: Never store credentials, API keys, or secrets in plaintext within scripts or configuration files.
- **SecretManagement Module**: Leverage the `Microsoft.PowerShell.SecretManagement` and `SecretStore` modules to abstract secret retrieval.
- **Vault Integration**: integrate scripts with enterprise vaults (Azure Key Vault, HashiCorp Vault, CyberArk) for dynamic secret injection.
- **Managed Identities**: Use Managed Identities or Service Principals with certificate-based authentication for automation in cloud/hybrid environments.

## Script Engineering for Security
- **Least Privilege**: Design scripts to run with the minimum necessary permissions. avoid using `RunAs Administrator` unless absolutely required.
- **Input Validation**: strictly validate and sanitize all script parameters to prevent injection attacks (e.g., via `Invoke-Expression` or `Start-Process`).
- **Error Handling**: Use `try/catch` blocks. ensure error messages do not leak sensitive system information or secrets.
- **Output Sanitization**: carefully review `Write-Host`, `Write-Verbose`, and `Write-Debug` outputs to ensure they do not expose sensitive data to logs.

## System Hardening & Compliance
- **Baselines**: Use PowerShell to apply and audit CIS or DISA STIG security baselines.
- **Resource Hardening**: automate the decommissioning of legacy protocols (SMBv1, NTLMv1, TLS 1.0/1.1) and the configuration of host firewalls.
- **Audit & Remediation**: develop idempotent scripts that regularly audit system state and automatically remediate non-compliant configurations (e.g., local admin membership).
