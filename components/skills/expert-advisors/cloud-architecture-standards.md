# Cloud Architecture & Well-Architected Standards

This skill outlines the standards for designing, evaluating, and optimizing scalable, resilient, and secure cloud infrastructures across AWS, Azure, and GCP.

## Well-Architected Framework Pillars
- **Operational Excellence**: focus on automating changes, responding to events, and defining standards to manage daily operations.
- **Security**: implement a strong identity foundation, maintain traceability, apply security at all layers, and protect data in transit and at rest.
- **Reliability**: Design for failure. Scale horizontally to increase aggregate workload availability. Implement automated recovery from failures.
- **Performance Efficiency**: Use serverless architectures to remove operational burden. Experiment more often with various resource types.
- **Cost Optimization**: Adopt a consumption model. Measure overall efficiency and stop spending money on undifferentiated heavy lifting.
- **Sustainability**: Optimize workloads for environmental impact by reducing resource waste and choosing efficient regions.

## Multi-Cloud & Hybrid Strategies
- **Workload Placement**: distribute workloads based on data sovereignty, latency requirements, and cloud-unique services.
- **Interconnectivity**: implement secure tunnels (VPN) or dedicated lines (Direct Connect/ExpressRoute) for low-latency hybrid communication.
- **Abstraction**: Use Infrastructure as Code (Terraform) and Container Orchestration (Kubernetes) to minimize vendor lock-in.

## Governance & FinOps
- **Landing Zones**: establish multi-account structures with centralized logging, identity federation, and shared network services.
- **Resource Tagging**: Enforce a strict tagging policy for cost allocation, automation, and security auditing.
- **FinOps**: Continuous rightsizing, utilization of Savings Plans/Reserved Instances, and Spot instance integration for fault-tolerant batch workloads.

## Disaster Recovery (DR) & Business Continuity
- **RTO/RPO**: define clear Recovery Time Objectives and Recovery Point Objectives per application tier.
- **Strategies**: Implement Backup & Restore, Pilot Light, Warm Standby, or Multi-Site Active/Active strategies based on criticality.
- **Automation**: automate failover and recovery procedures. Regularly test DR plans without manual intervention.

## Migration (6Rs)
- **Strategy**: Re-host (Lift & Shift), Re-platform, Re-purchase, Re-architect, Retire, or Retain.
- **Phases**: Discovery (dependency mapping), Pilot (POC), Migration Waves, and Performance/Cost Optimization post-cutover.
