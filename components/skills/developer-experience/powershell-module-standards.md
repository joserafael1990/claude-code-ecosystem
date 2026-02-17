# PowerShell Module & Profile Engineering Standards

This skill outlines the standards for designing, packaging, and maintaining robust PowerShell modules and optimized user profiles.

## Module Architecture
- **Structure**: Separate public (exported) and private (internal) functions into distinct folders. Use a build script (Invoke-Build or similar) to compile the `.psm1` file.
- **Manifests**: Always include a module manifest (`.psd1`) with comprehensive metadata (Author, Version, Description, CompatiblePSEditions).
- **Versioning**: Adhere to Semantic Versioning. Use `RequiredModules` for hard dependencies and `NestedModules` for internal libraries.
- **Cross-Version Compatibility**: Explicitly target `Desktop` (Windows PowerShell 5.1) and `Core` (PowerShell 7+) editions in the manifest. ensure code compatibility or use `#requires` statements.

## Advanced Function Design
- **CmdletBinding**: Decorate all public functions with `[CmdletBinding()]` to support common parameters (`-Verbose`, `-Debug`, `-ErrorAction`).
- **SupportsShouldProcess**: Implement `-WhatIf` and `-Confirm` for any function that changes system state. Wrap state-changing logic in `if ($PSCmdlet.ShouldProcess(...))`.
- **Parameter Validation**: Use rigorous parameter attributes (e.g., `[ValidateSet()]`, `[ValidateScript()]`, `[ValidateNotNullOrEmpty()]`) to catch errors early.
- **Pipeline Support**: Design functions to accept input from the pipeline (`ValueFromPipeline`, `ValueFromPipelineByPropertyName`) for composability.

## Profile Optimization
- **Lazy Loading**: Avoid importing heavy modules directly in `$PROFILE`. Use module auto-loading or `Import-Module` only when necessary commands are invoked.
- **Prompt Customization**: Keep the prompt function lightweight (sub-10ms execution time). avoid synchronous network calls in the prompt.
- **Organization**: Split the profile into logical scripts (e.g., `aliases.ps1`, `functions.ps1`, `theme.ps1`) and dot-source them.

## Testing & CI/CD
- **Pester**: Write unit tests for all private functions and integration tests for public endpoints using Pester 5+.
- **Analysis**: Enforce code quality using PSScriptAnalyzer. Fail the build on any "Error" or "Warning" severity rule violations.
- **Publishing**: Automate the publishing of modules to a private repository (Azure Artifacts, NuGet) or public PowerShell Gallery via CI pipelines.
