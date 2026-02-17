# Electron Development Standards & Best Practices

This skill outlines the standards for building secure, performant, and native-grade desktop applications using Electron.

## Security Hardening (Mandatory)
- **Context Isolation**: Must be enabled in all renderer processes.
- **Node Integration**: Must be disabled in renderers. Use preload scripts for secure IPC.
- **IPC Validation**: Validate all incoming and outgoing messages. Use an "Allow List" for IPC channels.
- **CSP**: Implement a strict Content Security Policy to prevent XSS.
- **Sandboxing**: Enable Electron's sandboxing feature for renderer processes.
- **External Links**: Prevent direct navigation to external URLs; use `shell.openExternal` with validation.

## Process Architecture
- **Main Process**: Handle system lifecycle, native OS integrations, and window management.
- **Renderer Process**: Focus exclusively on UI rendering. Isolate from Node.js APIs.
- **Preload Scripts**: Bridge the gap between Main and Renderer processes securely using `contextBridge`.
- **Worker Threads**: Offload CPU-intensive tasks to Node.js Worker Threads to keep the UI responsive.

## Native OS Integration
- **Menus**: Implement platform-specific system menus and context menus.
- **System Tray**: Efficient use of tray icons for background status and quick actions.
- **Notifications**: Use native OS notification systems with proper fallback.
- **Shortcuts**: Register global and local keyboard shortcuts following OS conventions (e.g., `Cmd+Q` on macOS).
- **File System**: Implement file associations, protocol handlers, and native drag-and-drop.

## Window Management & UX
- **Multi-window**: Coordinate state between multiple windows.
- **Persistence**: Save and restore window positions and sizes across sessions.
- **Frameless Windows**: Handle custom title bars and window controls while maintaining native accessibility.
- **Dialogs**: Use native `dialog` modules for file selection and alerts.

## Performance & Optimization
- **Startup**: Target cold start time under 3 seconds. Use lazy loading for non-essential modules.
- **Memory**: Idle memory usage should be below 200MB. Clean up resources and event listeners.
- **Render Performance**: Target 60 FPS for animations. Use GPU acceleration where appropriate.
- **IPC Efficiency**: Batch IPC messages to reduce overhead.

## Auto-Update & Distribution
- **Auto-Updater**: Implement `electron-updater` with delta update support.
- **Signing & Notarization**: Must sign binaries for Windows and macOS. Notarization is mandatory for macOS apps.
- **Distribution**: Package using `electron-builder` or `electron-forge`. Support MSI, DMG, and AppImage/Snap formats.
- **CI/CD**: Automate the build, sign, and release process using GitHub Actions or similar.
