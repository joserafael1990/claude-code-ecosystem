# CLI Development & Developer Experience Standards

This skill outlines the standards for designing, building, and distributing high-performance Command Line Interfaces (CLIs) and developer tools.

## CLI Architecture & UX Design
- **Command Hierarchy**: design intuitive hierarchies (e.g., `git <command> <subcommand>`). prioritize common tasks to be accessible with minimal keystrokes.
- **Progressive Disclosure**: start with a simple interface and reveal advanced flags and options through clear documentation and help text.
- **Sensible Defaults**: implement smart defaults that cover 80% of use cases. allow overrides via flags, environment variables, and configuration files.
- **Idempotency**: ensure CLI commands are idempotent where applicable. running the same command twice should not result in inconsistent states or errors.

## Command & Flag Design
- **POSIX Compliance**: follow POSIX standards for flags (short vs. long flags, e.g., `-h` vs `--help`).
- **Required vs. Optional**: minimize required arguments. use flags for optional configuration to maintain a readable command string.
- **Type Safety**: implement strict validation and type coercion for arguments. provide immediate, clear feedback for invalid inputs.
- **Exit Codes**: use standard exit codes (0 for success, non-zero for specific error types) to facilitate shell scripting and automation.

## Terminal UI (TUI) & Interactivity
- **Rich Feedback**: Use color, spinners, and progress bars (e.g., via `Chalk`, `Ora`, or `Inquirer`) to provide visual feedback for long-running tasks.
- **Interactive Prompts**: leverage interactive prompts for complex configuration or sensitive inputs (passwords) to reduce the risk of command-line history exposure.
- **Accessibility**: ensure TUI elements fallback gracefully to plain text for non-TTY or low-capability terminal environments.
- **Shell Completions**: Provide automated shell completions for Bash, Zsh, and Fish to enhance discoverability and reduce typing errors.

## Performance & Optimization
- **Startup Latency**: target sub-50ms startup time. Implement lazy-loading for heavy dependencies and avoid unnecessary I/O or network checks during initialization.
- **Memory Footprint**: Maintain a lean memory footprint (< 50MB) to ensure the tool is fast and responsive even on resource-constrained machines.
- **Binary Distribution**: provide standalone binaries (e.g., via `pkg`, `PyInstaller`, or Go binaries) to eliminate dependency on local runtimes.

## Error Handling & Debugging
- **Helpful Messages**: avoid cryptic errors. provide clear, actionable error messages with pointers to documentation or recovery steps.
- **Debug Mode**: implement a `--verbose` or `--debug` flag that expands logging to provide internal state and stack traces for troubleshooting.
- **Error Reporting**: implement (optional) automated error reporting to track and fix bugs in production.

## Cross-Platform & Distribution
- **Path Handling**: use platform-agnostic path handling. account for shell differences (e.g., Windows vs. Unix line endings and character support).
- **Environment Variables**: support configuration via standard environment variables (e.g., `APP_CONFIG`, `DEBUG`, `NO_COLOR`).
- **Universal Distribution**: support multiple package managers (NPM, Homebrew, Chocolatey, Scoop) and provide easy installation scripts.
