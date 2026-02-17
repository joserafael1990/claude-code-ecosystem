# Terraform Engineering & IaC Standards

This skill outlines the standards for building, refactoring, and scaling infrastructure as code (IaC) using Terraform.

## Module Engineering & Design
- **Reusability**: Build modular, composable code. Favor small, focused modules over monolithic ones.
- **Contracts**: Define clear `variables.tf` (inputs with validation) and `outputs.tf` (well-named return values).
- **Versioning**: strictly pin provider and module versions. Use semantic versioning for internal modules.
- **Logic**: Leverage `dynamic` blocks and `for_each`/`count` patterns for DRY code. Avoid `null_resource` and local provisioners unless absolutely necessary.

## State Management & Workflows
- **Remote State**: Always use remote backends (S3/GCS/Azure Blob) with state locking and encryption at rest.
- **Isolation**: use Workspaces or separate state files for environment isolation (Dev, Staging, Prod).
- **Automation**: implement CI/CD for plan/apply cycles. Enforce mandatory `terraform plan` reviews before `apply`.
- **Drift**: Regularly run drift detection to identify out-of-band infrastructure changes.

## Security & Compliance
- **Secrets**: Never commit secrets to version control. Use `.tfvars` (ignored), environment variables, or secret management providers (Vault, AWS Secrets Manager).
- **Least Privilege**: Configure providers with the minimum necessary permissions. Use IAM roles rather than static credentials.
- **Scanning**: Integrate `trivy`, `checkov`, or `tfsec` into CI to identify security misconfigurations before deployment.
- **Policies**: implementation Policy as Code (Sentinel or OPA) to enforce organizational guardrails.

## Testing & Quality
- **Linter**: run `terraform fmt` and `tflint` in CI to ensure code consistency and catch provider-specific errors.
- **Unit Testing**: Use `terraform test` or `terratest` to validate infrastructure logic and resource creation.
- **Documentation**: Generate documentation automatically using `terraform-docs`. Maintain a `README.md` for every module.
- **Tagging**: Enforce a global tagging strategy for cost tracking, ownership, and automation.

## Operational Excellence
- **Naming**: Follow consistent naming conventions (`provider_resource_name`). Avoid generic names like "main" or "resource".
- **Refactoring**: Use `moved` blocks to rename or refactor resources without triggering destructive recreations.
- **Plan Analysis**: utilize tools like `infracost` in merge requests to estimate the financial impact of infrastructure changes.
