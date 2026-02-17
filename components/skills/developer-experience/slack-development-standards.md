# Slack App Development Standards

This skill outlines the standards for building, securing, and deploying production-grade Slack applications using the Bolt framework and modern platform features.

## Architecture & Transport
- **Bolt Framework**: Use strict type-safety with `@slack/bolt` (TypeScript) or the official Python SDK.
- **Socket Mode vs. HTTP**:
    - Use **Socket Mode** for local development and behind-the-firewall enterprise apps (no public URL required).
    - Use **HTTP/Request URL** for high-volume production public apps to avoid WebSocket connection limits.
- **Deferred Processing**: Ack all incoming requests (Interactions, Slash commands) within 3 seconds. Use `clound functions`, `background jobs`, or `response_url` for long-running tasks.

## UI & Interaction Design
- **Block Kit**: Exclusively use Block Kit for UI. Avoid legacy "Attachments". Use the Block Kit Builder to prototype layouts.
- **Home Tab**: Always implement an "App Home" view to give users a dashboard for their settings and state.
- **Modals**: Use Modals for complex data input. Implement strict input validation and update the view in place (`views.update`) rather than stacking errors.

## Security & Authentication
- **Signing Secrets**: Verify the `X-Slack-Signature` header on every incoming HTTP request to prevent replay attacks and spoofing.
- **OAuth V2**: Use the V2 OAuth flow. Request the minimum necessary scopes (Granular Bot Permissions). Never request `admin` or classic scopes unless absolutely required.
- **Token Storage**: Never hardcode tokens (`xoxb-`, `xoxp-`). Store them in a secure KMS or environment variables. Rotate tokens periodically.

## API & Event Handling
- **Events API**: Subscribe only to necessary events to reduce noise. Handle `url_verification` challenges automatically.
- **Rate Limiting**: Implement "Exponential Backoff" for all Web API calls. Respect the `Retry-After` header.
- **Conversations API**: Use `conversations.*` methods instead of deprecated `channels.*` or `groups.*` methods to ensure compatibility with Shared Channels/Slack Connect.

## Operational Best Practices
- **Error Handling**: Catch all errors from `client.chat.postMessage`. If a user cannot be DM'd (e.g., they disabled DMs), downgrade gracefully or log the error.
- **Logging**: Log payload metadata (User ID, Team ID, Channel ID) but redact PII and message content in production logs.
