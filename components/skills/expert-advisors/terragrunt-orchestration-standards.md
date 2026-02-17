# Terragrunt Orchestration & DRY Standards

This skill outlines the standards for orchestrating Terraform/OpenTofu infrastructure at scale using Terragrunt, specifically focusing on DRY (Don't Repeat Yourself) configurations and dependency management.

## Stack & Unit Architecture
- **DRY Configuration**: Use `include` blocks and `find_in_parent_folders()` to inherit common settings (remote state, provider configs) from a root `terragrunt.hcl`.
- **Unit Decomposition**: split complex infrastructure into small, manageable units. Each unit should correspond to a single Terraform module.
- **Stacks vs. Units**: leverage the new Terragrunt Stacks feature for multi-region or multi-account orchestration when applicable.
- **Source Management**: use the `source` attribute to reference versioned Terraform modules. Prefer SSH or HTTPS Git URLs with specific tags/shas.

## Dependency Management
- **Output Passing**: Use `dependency` blocks to pass outputs from one unit as inputs to another. This establishes a Directed Acyclic Graph (DAG) for parallel execution.
- **Mocks**: Implement `mock_outputs` for `terragrunt plan` and `validate` commands to allow testing before all dependencies are deployed.
- **Wait/Loops**: Avoid circular dependencies. Optimize the dependency chain to maximize parallelism during `run-all`.

## Advanced Configuration Patterns
- **Generate**: use `generate` blocks to dynamically create Terraform files (e.g., `versions.tf`, `provider.tf`) to ensure consistency across the entire stack.
- **Locals**: use `locals` at multiple levels (root, environment, unit) to manage variables and path-based logic cleanly.
- **read_terragrunt_config**: use this function to import and merge configurations from other HCL files without full `include` inheritance.

## Hooks & Runtime Control
- **Hooks**: Use `before_hook`, `after_hook`, and `error_hook` for custom automation, such as linting, security scanning, or notifying external systems.
- **Retries**: implement `errors` blocks to automatically retry transient failures (e.g., network timeout, eventually consistent APIs).
- **Exclusion**: use `exclude` or `feature` blocks to conditionally skip units based on environment flags or runtime parameters.

## Operational Excellence
- **CI/CD**: integrate with tools like Atlantis, Spacelift, or GitHub Actions. Use `terragrunt run-all plan` and `apply` with concurrency limits.
- **Format**: enforce `terragrunt hclfmt` to maintain consistent HCL styling.
- **Versioning**: strictly pin the required version of Terragrunt and Terraform in the `terraform` or `terragrunt` blocks.
