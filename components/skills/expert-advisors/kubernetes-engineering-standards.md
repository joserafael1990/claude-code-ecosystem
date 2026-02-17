# Kubernetes Engineering & Orchestration Standards

This skill outlines the standards for designing, deploying, and managing production-grade Kubernetes clusters and cloud-native workloads.

## Cluster Architecture & Operations
- **Control Plane**: implement high-availability control planes with multi-master setups and robust etcd backups.
- **Node Management**: Use specialized node pools (e.g., GPU, high-memory) and leverage Cluster Autoscaler for dynamic resource scaling.
- **Networking**: Standardize on a CNI (e.g., Cilium, Calico) that supports Network Policies. Use Ingress Controllers (Nginx, Traefik) for traffic management.
- **Upgrades**: implement zero-downtime cluster upgrades using cordoning, draining, and rolling node replacements.

## Workload Orchestration & Design
- **Workload Types**: Use `Deployments` for stateless apps, `StatefulSets` for ordered/persistent data, and `DaemonSets` for node-level services.
- **Pod Lifecycle**: implement robust `liveness`, `readiness`, and `startup` probes. Ensure graceful shutdown by handling `SIGTERM` and using `preStop` hooks.
- **Resource Discipline**: Always define `requests` and `limits` for CPU and memory. Use `PodDisruptionBudgets` (PDB) to ensure availability during maintenance.
- **Scheduling**: Leverage node affinity, taints, and tolerations for precise workload placement.

## Security & Multi-Tenancy
- **Isolation**: Use Namespaces to logically separate environments and teams. Enforce `ResourceQuotas` and `LimitRanges` per namespace.
- **RBAC**: Implement the Principal of Least Privilege (PoLP) using Role-Based Access Control. Avoid using the default Service Account.
- **Hardening**: enforce Pod Security Standards (PSS). implementation Network Policies to restrict cross-namespace and egress traffic.
- **Governance**: use Admission Controllers (OPA/Gatekeeper) to enforce organizational policies (e.g., mandatory labels, image registry restrictions).

## Observability & GitOps
- **Monitoring**: implement the Prometheus/Grafana stack for cluster and application-level metrics.
- **Logging**: Centrally aggregate logs using Fluentd, Loki, or cloud-native logging services.
- **Deployment Strategy**: Prioritize GitOps (ArgoCD or Flux) for declarative configuration management. Use Helm charts or Kustomize for templating manifests.
- **Release Patterns**: implement Progressive Delivery using Canary or Blue-Green deployments with a service mesh (Istio/Linkerd) where applicable.
