# GraphQL Hardening & Security Patterns

## Query Defense (DoS Mitigation)
- **Depth Limiting**: Enforce a maximum nesting depth (e.g., 7-10).
- **Cost Analysis**: Assign weights to fields/resolvers. Reject queries exceeding a Max Cost (e.g., 1000).
- **Timeouts**: Enforce a 30s query execution wall-time.
- **Allowlisting**: (Production) Only run hashes of pre-approved queries.

## Authorization Patterns
```javascript
// Field-Level Guard (Schema Directive)
directive @auth(requires: Role = USER) on FIELD_DEFINITION

// Resolver logic
if (context.user.role !== 'ADMIN' && source.userId !== context.user.id) {
    return null; // Mask sensitive field or throw ForbiddenError
}
```

## Input Hardening
- **Custom Scalars**: Use `EmailAddress`, `NonEmptyString`, and `URL` scalars instead of `String`.
- **Sanitization**: Apply `DOMPurify` or similar to string inputs before database persistence.
- **Validation**: Enforce `@constraint(min: 0, max: 120)` style logic on numeric inputs.

## Information Disclosure Prevention
- **Introspection**: Disable `introspection: true` in production.
- **Error Masks**: Strip stack traces and internal database error messages before sending to client.
- **Headers**: Enforce strict CORS and CSP headers for the `/graphql` endpoint.
