# Infrastructure as Code (IaC) Security Baselines

This skill outlines the standards for securing infrastructure as code deployments, focusing on AWS with Terraform.

## Terraform & AWS Baseline
- **Provider Versioning**: Always pin provider versions to a specific major/minor release (e.g., `~> 5.0`) to prevent breaking changes and ensure consistent deployments.
- **State Management**: Encrypt state files at rest (S3 bucket with SSE-KMS) and in transit. Use DynamoDB for state locking to prevent concurrent modifications.

## Core Security Services
- **CloudTrail**: Enable CloudTrail for all regions and log to a centralized S3 bucket with MFA delete and versioning enabled.
- **Config**: Activate AWS Config to continuously monitor resource configurations against compliance rules.
- **Security Hub**: Enable Security Hub to aggregate security alerts and findings from multiple AWS services.
- **IAM**: Follow the principle of least privilege. Avoid using long-lived credentials (use IAM Roles and temporary credentials instead).

## Secrets Management
- **No Hardcoding**: Never commit secrets (API keys, passwords) to Git.
- **Secrets Manager/Parameter Store**: Use AWS Secrets Manager or SSM Parameter Store to manage sensitive configuration values. Inject secrets as environment variables at runtime.
- **KMS**: Use Customer Managed Keys (CMK) for granular control over encryption key access policies.
