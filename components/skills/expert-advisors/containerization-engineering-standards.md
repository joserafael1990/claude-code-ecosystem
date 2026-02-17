# Containerization Engineering & Security Standards

This skill outlines the standards for building, optimizing, and securing production-grade container images and orchestration using Docker and modern OCI-compliant tools.

## Dockerfile Design & Optimization
- **Multi-Stage Builds**: Universally adopt multi-stage builds to separate build dependencies from the final runtime image. Aim for minimal runtime footprints.
- **Base Images**: Prioritize minimal base images like Alpine, Distroless, or Docker Hardened Images (DHI). Avoid "fat" distributions.
- **Layer Caching**: Order instructions from least to most frequent changes. Group related `RUN` commands to minimize layer count.
- **BuildKit**: Leverage modern BuildKit features: `--mount=type=cache` for package managers and `--mount=type=secret` for sensitive data.
- **Context**: Use `.dockerignore` to exclude unnecessary files from the build context.

## Container Security & Supply Chain
- **Least Privilege**: Always execute as a non-root user. Drop unnecessary Linux capabilities.
- **Scanning**: Integrate automated vulnerability scanning (e.g., Docker Scout, Trivy, Grype) into the CI/CD pipeline.
- **Immutability**: Use specific image tags and immutable digests (e.g., `image@sha256:...`) in production.
- **Provenance**: implement image signing (Cosign) and generate Software Bill of Materials (SBOM) for every production image.
- **Secret Management**: Never hardcode secrets in Dockerfiles or environment variables; use vault-based injection or BuildKit secret mounts.

## Orchestration (Docker Compose)
- **Service Isolation**: Use internal networks to isolate services. Only expose necessary ports to the host or load balancer.
- **Resource Limits**: Define CPU and memory limits/reservations to prevent container sprawl or resource exhaustion.
- **Health Checks**: Implement robust `HEALTHCHECK` instructions that verify application readiness, not just process existence.
- **Configs**: Use Compose `configs` and `secrets` for managing sensitive or environment-specific data without re-building images.

## Performance & Operations
- **Build Times**: Target builds under 5 minutes. Use remote cache backends for distributed CI environments.
- **Registry Management**: implement lifecycle policies for container registries (ECR, GCR, ACR) to prune old/untagged images.
- **Observability**: implement structured (JSON) logging for easy aggregation. Expose metrics and health endpoints.
- **Multi-Architecture**: Support multi-platform builds (linux/amd64, linux/arm64) for cross-environment compatibility.
