# Agent Installation & Management Procedures

This skill outlines the procedures for discovering, installing, and managing Claude Code agents from the `awesome-claude-code-subagents` repository.

## Installation Workflows
- **Discovery**: Use the GitHub API to list available agents by category or keyword search.
    - **API URL**: `https://api.github.com/repos/VoltAgent/awesome-claude-code-subagents/contents/categories/{category}`
    - **Raw Content**: `https://raw.githubusercontent.com/VoltAgent/awesome-claude-code-subagents/main/categories/{category}/{agent}.md`
- **Verification**: Display the agent's description and tool requirements before installation. Ensure the user understands what the agent can do.
- **Target Directory**:
    - **Global**: `~/.claude/agents/` (Available across all projects).
    - **Local**: `.claude/agents/` (Specific to the current project/workspace).
    - **Conflict Resolution**: If an agent with the same name exists, ask for confirmation before overwriting.

## Best Practices
- **Atomic Writes**: Download to a temporary file first, verify integrity (if possible), then move to the target location to prevent partial writes.
- **Rate Limits**: Handle GitHub API probability. If unauthenticated requests are limited (60/hr), fallback to searching a cached list or asking the user for a token.
- **Dependency Check**: Warn the user if the installed agent requires tools that are not present in the current environment (e.g., `docker`, `kubectl`).

## Uninstallation
- **Safe Removal**: Confirm the file path before deletion.
- **Cleanup**: Remove any associated configuration files or skills if they were installed alongside the agent (though currently, most agents are single-file).
