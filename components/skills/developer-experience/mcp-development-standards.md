# Model Context Protocol (MCP) Development Standards

This skill outlines the standards for building, testing, and deploying servers and clients that adhere to the Model Context Protocol (MCP), enabling seamless integration between AI models and external data/tools.

## Protocol Fundamentals
- **JSON-RPC 2.0**: Strictly adhere to the JSON-RPC 2.0 specification for all transport messages. Ensure correct error codes and message structures.
- **Transport Layer**: Support standard transports like Stdio (for local/CLI integration) and SSE (Server-Sent Events) for remote/HTTP-based connections.
- **Capabilities**: Explicitly declare server capabilities (e.g., `resources`, `tools`, `prompts`) during the initialization handshake to ensure client compatibility.

## Server Implementation
- **Resources**: Expose data as "Resources" with valid URIs. Implement `resources/read` and `resources/list` with proper pagination if applicable.
- **Tools**: Define "Tools" with rigorous JSON semantics schemas. Ensure strict input validation using libraries like Zod (TS) or Pydantic (Python).
- **Prompts**: Template reusable context as "Prompts" to guide the LLM's interaction with the server's resources.
- **Error Handling**: Return structured errors. Do not crash the server on invalid inputs; catch exceptions and return meaningful JSON-RPC error responses.

## Client & Integration
- **Connection Management**: Implement robust reconnection logic for SSE transports. Handle process lifecycle management for Stdio transports (spawning/killing subprocesses).
- **Sampling**: If implementing a client, support the `sampling/createMessage` capability to allow servers to request LLM completions (agentic behaviors).
- **Security**:
    - **Input Validation**: Never trust client inputs. Validate all arguments against the declared schema.
    - **Authorization**: Implement authentication (e.g., Bearer tokens) for HTTP-based transports (SSE).
    - **Sandboxing**: Run local MCP servers with least-privilege permissions, especially when file system access is involved.

## Testing & Debugging
- **MCP Inspector**: Validate server implementations using the official MCP Inspector tool to interactively test tools and resources.
- **Unit Testing**: Mock the transport layer to unit test tool logic and resource retrieval without spawning full subprocesses.
- **Logging**: Use the `notifications/message` method to send log events to the client for debugging, rather than printing to stdout (which breaks Stdio transport).
