# MCP Implementation Patterns

This skill outlines the architectural patterns and best practices for building robust, secure, and performant Model Context Protocol (MCP) servers.

## Core Principles

### 1. Capability Discovery
- Always implement the `list_tools`, `list_resources`, and `list_prompts` handlers.
- Use detailed, descriptive names and descriptions for tools to help the LLM understand when to use them.

### 2. Transport Standards
- **stdio**: Default for local commands. Ensure all standard logging goes to `stderr`.
- **SSE (Server-Sent Events)**: Use for web-based or remote MCP servers to allow bidirectional streaming.

### 3. Argument Validation
- Use **JSON Schema** strictly for all tool arguments.
- Include `required` fields and specific `types` (e.g., `number`, `integer`, `string`).
- Use `enum` for restricted value sets.

### 4. Security & Isolation
- **Resource Limiting**: Sanitize all file paths. Use absolute path resolution and check against a whitelist of allowed directories.
- **Process Boundaries**: If running external commands, use specific argument lists instead of raw shell strings to prevent command injection.
- **Privacy**: Redact sensitive keys/tokens from logs and error messages.

### 5. Performance
- Implement **Connection Pooling** for database-backed MCPs.
- Use **Pagination** for resource listing if the result set could exceed 50 items.
- Support **JSON-RPC Batching** for high-throughput scenarios.
