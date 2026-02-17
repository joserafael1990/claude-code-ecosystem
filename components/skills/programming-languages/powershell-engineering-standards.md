# PowerShell Engineering Standards & Best Practices

This skill outlines the standards for building reliable, enterprise-grade automation using PowerShell 5.1 (Windows PowerShell) and PowerShell 7+ (PowerShell Core).

## Core Scripting Standards (Universal)
- **Advanced Functions**: Always use `[CmdletBinding()]` and define appropriate `[Parameter()]` attributes with types.
- **Side-Effect Management**: Implement `SupportsShouldProcess` to support `-WhatIf` and `-Confirm` for all operations that modify state.
- **Error Handling**: Use `try/catch/finally` blocks with `ErrorAction Stop`. Provide descriptive, actionable error messages.
- **Output & Logging**: Use `Write-Verbose` for detailed execution logs and `Write-Information` for structured progress. Avoid `Write-Host` unless for UI-specific coloring.
- **Idempotency**: All scripts should be safe to run multiple times. Check for existence before creating and compare state before updating.

## Windows PowerShell 5.1 (Legacy & Infrastructure)
- **Infrastructure**: Master RSAT modules (ActiveDirectory, DnsServer, DhcpServer, GroupPolicy). 
- **Compatibility**: Adhere to .NET Framework 4.8 APIs. Maintain compatibility with older Windows Server versions.
- **Authentication**: Use Kerberos/WinRM for remote management in local domains.
- **Environment**: Validate domain membership and local permissions before executing destructive tasks.

## PowerShell 7+ (Modern & Cloud)
- **Modern Syntax**: Leverage ternary operators (`? :`), pipeline chains (`&&`, `||`), and null-coalescing operators (`??`).
- **Parallelism**: Use `ForEach-Object -Parallel` for high-performance task execution.
- **Cross-Platform**: Ensure scripts are path-aware (use `Join-Path`) and encoding-aware (`UTF8NoBOM`) for Windows, macOS, and Linux.
- **Cloud & Graph**: Use the `Az` module for Azure and `Microsoft.Graph` for Entra ID/M365 automation. Prioritize Managed Identities and Service Principals for authentication.

## Security & Operations
- **Secret Management**: Use the `Microsoft.PowerShell.SecretManagement` module or cloud vaults (Azure Key Vault). Never hardcode credentials.
- **Execution Policy**: Scripts should run under `RemoteSigned` or `AllSigned` in production.
- **Auditability**: Implement transcripts (`Start-Transcript`) and structured logging (JSON/Event Log) for historical audits.
- **Testing**: Use `Pester` for unit and infrastructure-as-code (IaC) validation.
