# Azure Engineering & Infrastructure Standards

This skill outlines the standards for designing, deploying, and managing secure and scalable infrastructure within the Microsoft Azure ecosystem.

## Azure Resource Design & Governance
- **Naming & Tagging**: Enforce a strict naming convention (e.g., `resourcetype-app-env-region`) and comprehensive tagging for cost center, ownership, and criticality.
- **Hierarchy**: Organize resources using Management Groups, Subscriptions, and Resource Groups to enable effective policy inheritance and access control.
- **Azure Policy**: use Azure Policy to enforce organizational guardrails (e.g., restricted regions, mandatory tags, allowed SKU sizes).

## Hybrid Identity & Security
- **Entra ID (Azure AD)**: Implement secure identity foundations using Conditional Access, Managed Identities, and Service Principals with least-privilege RBAC.
- **Hybrid Sync**: manage identity synchronization via Microsoft Entra Connect or Cloud Sync for hybrid environments.
- **Networking**: Design hub-spoke architectures with VNet Peering, Azure Firewall, and Network Security Groups (NSGs). Leverage Private Links for secure service access.

## Automation & IaC (Bicep/PowerShell)
- **Infrastructure as Code**: Prioritize Bicep or ARM templates for declarative resource management. Modularize Bicep code for reusability.
- **PowerShell Az**: Use the modern `Az` module for operational automation and scripting. Ensure scripts are idempotent and leverage `Connect-AzAccount` with managed identities in CI/CD.
- **Pipelines**: automate deployments via Azure Pipelines or GitHub Actions. Implement "What-If" analysis before applying infrastructure changes.

## Monitoring & Cost Management
- **Azure Monitor**: implement centralized logging using Log Analytics Workspaces and Application Insights. Create actionable dashboards and alerts.
- **Cost Optimization**: utilize Azure Advisor and Cost Management to identify underutilized resources. Leverage Reserved Instances and Azure Hybrid Benefit for cost savings.
- **Governance**: regularly audit resource compliance against established security benchmarks (e.g., CIS Microsoft Azure Foundations).
