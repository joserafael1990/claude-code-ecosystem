# Legacy .NET Framework Development (4.8)

This skill covers best practices for maintaining, stabilizing, and gradually modernizing legacy .NET Framework 4.8 enterprise applications.

## C# 7.3 & Framework Features
- **Language**: Leverage C# 7.3 features like Tuples, Pattern Matching, and `ref` locals where applicable.
- **Runtime**: Ensure target framework is 4.8 to leverage the latest security and performance patches available for the legacy runtime.

## ASP.NET Web Forms
- **Lifecycle**: Manage Page and Control lifecycles to prevent redundant data processing.
- **State**: Optimize `ViewState` to reduce page size. Use `EnableViewState="false"` wherever possible.
- **Controls**: Build reusable User Controls (`.ascx`) and Custom Controls to modularize the UI.
- **Security**: Implement standard ASP.NET Identity or legacy Membership/Role providers.

## WCF & Windows Services
- **WCF**: Use Service and Data contracts. Configure security bindings (Message/Transport) based on enterprise requirements.
- **Services**: Implement Windows Services with clear logging and error handling. Use `TopShelf` for easier installation and debugging if allowed.
- **Hosting**: Properly configure IIS for WCF or Web Forms, including application pool recycling and warm-up.

## Entity Framework 6 (EF6)
- **Patterns**: Use Repository and Unit of Work patterns carefully to avoid excessive database connections.
- **Optimization**: Use `AsNoTracking()` for read-only queries. Manage lazy loading to avoid N+1 issues.
- **Migrations**: Use EF6 migrations for database schema evolution. Ensure a rollback plan is in place.

## Enterprise Integration & Legacy
- **COM Interop**: Use `dynamic` or specific Interop assemblies to communicate with legacy COM+ components.
- **Win32 API**: Use P/Invoke for direct OS interactions when required.
- **Registry**: Manage application configuration securely using the Windows Registry or `app.config`.

## Testing & Quality
- **Frameworks**: Use NUnit or MSTest for unit testing.
- **Mocking**: Use Moq for dependency isolation in legacy codebase.
- **Stability**: Prioritize backward compatibility and zero-downtime deployments.
