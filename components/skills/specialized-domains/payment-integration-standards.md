# Payment Integration & Gateway Standards

This skill outlines the standards for integrating third-party payment gateways (Stripe, PayPal, Adyen) securely and reliably.

## Checkout Architecture
- **Hosted Payment Pages**: Prefer hosted checkout pages (e.g., Stripe Checkout) to minimize PCI DSS compliance scope.
- **Custom UI**: If building a custom UI, use provider-supplied UI components (Stripe Elements, PayPal Buttons) rooted in iFrames to ensure raw card data never touches your servers (SAQ A compliance).
- **SCA Compliance**: Implement 3D Secure 2.0 (SCA) flows. Handle "incomplete" payment states where the user must authenticate via their banking app.

## Webhook & Event Handling
- **Asynchronous Fulfillment**: Never fulfill orders solely based on the synchronous API response. Always wait for the asynchronous `payment_intent.succeeded` (or equivalent) webhook event.
- **Signature Verification**: Validate the cryptographic signature of every incoming webhook to prevent spoofing.
- **Idempotency**: Process webhooks idempotently. Use the `event.id` to ensure you don't trigger side effects (e.g., shipping physical goods) twice for the same payment.

## Subscription & Recurring Billing
- **Dunning Management**: Configure dunning logic (smart retries) for failed recurring payments. Send email notifications before cancelling subscriptions.
- **Proration**: handle upgrades/downgrades by calculating proration lines accurately. conform to the gateway's proration behavior (e.g., credit notes).
- **Grandfathering**: maintain support for legacy pricing plans for existing customers while migrating new customers to current pricing.

## Testing & Validation
- **Test Modes**: Use provider-specific test card numbers to simulate success, declines, fraud blocks, and 3DS challenges.
- **Disputes**: Test the dispute/chargeback flow. Ensure the system can programmatically respond to evidence requests if supported.
- **Currency Handling**: Explicitly define the reconciliation currency vs. the presentation currency. Handle FX conversion fees transparently.
