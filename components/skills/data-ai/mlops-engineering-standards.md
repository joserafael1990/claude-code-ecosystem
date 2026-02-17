# MLOps Engineering & Platform Standards

This skill outlines the standards for designing, automating, and maintaining production-grade Machine Learning (ML) platforms and lifecycles.

## ML Infrastructure & Platform
- **IaC for ML**: use Infrastructure-as-Code (Terraform/Crossplane) to provision GPU clusters (Kubernetes), feature stores, and model registries.
- **Resource Orchestration**: optimize GPU utilization through intelligent scheduling, multi-instance GPU (MIG) configurations, and resource quotas.
- **Scalability**: implement auto-scaling policies for both training (Data-parallel) and inference (HPA) to minimize idle resources and costs.
- **Isolation**: enforce multi-tenancy and environment isolation (Dev/Staging/Prod) to prevent experimental workloads from impacting production models.

## CI/CD for Machine Learning
- **Automated Pipelines**: implement versioned ML pipelines (Kubeflow, ZenML, Flyte) that orchestrate data ingestion, training, and validation.
- **CT (Continuous Training)**: Enable automated retraining triggers based on schedule, performance drift, or data volume milestones.
- **Model Validation**: integrate "Quality Gates" into the CI/CD pipeline. verify model accuracy, latency, and bias before allowing promotion to the registry.
- **Deployment Patterns**: Use Canary, Blue-Green, or Shadow deployments for model rollout to minimize risk and allow real-world performance validation.

## Experiment Tracking & Versioning
- **Reproducibility**: mandate the versioning of datasets (DVC/Pachyderm), code (Git), and hyperparameters (MLflow/Weights & Biases).
- **Model Registry**: Centralize model storage and metadata. trace every production model back to its specific training run, dataset version, and environment.
- **Feature Store**: Use a feature store (Feast, Hopsworks) to ensure consistent feature engineering between training and inference and to facilitate feature reuse.

## Operational Excellence & Monitoring
- **Drift Detection**: implement automated monitoring for feature drift (input distribution changes) and prediction drift (performance degradation).
- **Observability**: combine system metrics (GPU, Memory, Latency) with model-specific metrics (Confidence, Accuracy) in unified dashboards.
- **Cost Management**: Implement cost attribution by team/project. Leverage spot instances for non-critical training and optimize inference through model quantization.
- **Incident Response**: Define clear rollback procedures for model performance regressions or system failures.
