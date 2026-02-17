# Fintech & Payment Systems Engineering Standards

This skill outlines the standards for building secure, compliant, and highly reliable financial software systems.

## Data Integrity & Precision
- **Numerical Precision**: Never use floating-point types (`float`, `double`) for monetary values. Use `Decimal` types or `Integer` (representing minor units like cents) to prevent rounding errors.
- **Double-Entry Bookkeeping**: Architect ledgers using double-entry principles (Debits = Credits). Ensure every transaction entry has a corresponding counter-entry.
- **Idempotency**: Implement strict idempotency keys for all mutation endpoints to prevent duplicate payments or concurrent processing race conditions.
- **Concurrency Control**: Use database locks (Optimistic or Pessimistic) to prevent "Double Spend" attacks and race conditions during balance updates.

## Security & Compliance
- **PCI DSS**: Never store raw credit card numbers. Use tokenization via payment gateways. If Cardholder Data Environment (CDE) is required, ensure network segmentation.
- **Encryption**: Encrypt PII and sensitive financial data at rest (AES-256) and in transit (TLS 1.3). Manage keys using a dedicated KMS.
- **Audit Trails**: Implement immutable audit logs for all financial actions. Record *who*, *what*, *when*, and *why* for every balance change.
- **KYC/AML**: Integrity with identity verification providers. Implement velocity checks and sanctions screening for anti-money laundering compliance.

## System Architecture
- **Distributed Transactions**: Avoid distributed transactions across microservices if possible. Use the Saga Pattern (Orchestration or Choreography) with compensating transactions for failures.
- **Resiliency**: Implement Circuit Breakers to prevent cascading failures when external banking APIs are down. Use exponential backoff for retries.
- **Reconciliation**: automated reconciliation jobs (N+1) to verify internal ledgers against external payment gateway reports.

## API & Integration
- **Webhooks**: Verify webhook signatures from payment providers to prevent spoofing. Respond with 200 OK immediately and process events asynchronously.
- **Error Handling**: Mask internal system errors in API responses. standard error codes should be mapped to user-friendly messages without leaking stack traces.
