# Claude Code Ecosystem — Development Guide

## Overview

This repository is the unified Claude Code component ecosystem. It combines quality-curated agents with comprehensive tooling (commands, MCPs, hooks, settings, skills).

## Essential Commands

```bash
# Install dependencies
npm install

# Run the CLI tool locally
node tools/cli/src/index.js

# Validate all components
npm run validate

# Generate components.json catalog
npm run generate-catalog

# Run tests
npm test

# Lint
npm run lint
```

## Project Structure

```
claude-code-ecosystem/
├── components/           # All installable components
│   ├── agents/           # Organized in 10 categories
│   ├── commands/         # Slash commands
│   ├── mcps/             # MCP server configurations
│   ├── hooks/            # Automation hooks
│   ├── settings/         # Configuration presets
│   └── skills/           # Knowledge modules
├── tools/
│   ├── cli/              # NPM CLI tool (main package)
│   └── installer/        # Bash installer (offline use)
├── plugins/              # Claude plugin marketplace
├── docs/                 # Website and documentation
├── api/                  # Vercel serverless functions
├── scripts/              # Build and maintenance scripts
└── .github/workflows/    # CI/CD pipelines
```

## Security Guidelines

### CRITICAL: Never hardcode secrets

```javascript
// ❌ NEVER DO THIS
const API_KEY = "sk-1234567890";

// ✅ ALWAYS DO THIS
const API_KEY = process.env.API_KEY;
```

### Required Environment Variables

```
SUPABASE_URL              # Database hosting
SUPABASE_SERVICE_ROLE_KEY  # Database auth
DISCORD_BOT_TOKEN         # Discord integration
GITHUB_TOKEN              # CI/CD access
```

- Store secrets in `.env` files (already in `.gitignore`)
- Never commit `.env` files
- Use environment variables in code
- If a secret is accidentally committed, **revoke it immediately**

## Component System

### Agent Template (Hybrid Format)

All agents use a hybrid template combining concise, expert-level instructions with rich invocation examples:

```yaml
---
name: agent-name
description: "Concise description of when to invoke.

<example>
Context: [scenario]
user: \"[request]\"
assistant: \"[approach]\"
<commentary>
[When to use this agent vs alternatives]
</commentary>
</example>"
tools: Read, Write, Edit, Bash, Glob, Grep
model: sonnet
tier: core
category: 02-language-specialists
---

[Expert-level, specific, opinionated instructions]
[Include version numbers, tool names, anti-patterns]
[Keep it under 100 lines — every word must earn its place]
```

### Quality Tiers

| Tier | Requirements |
|------|-------------|
| `core` | Hand-curated, expert-level, specific version numbers, named tools, opinionated advice |
| `verified` | Community-contributed, reviewed by maintainers, passes automated validation |
| `community` | Community-contributed, basic validation, experimental |

### Naming Conventions

- **Agents**: kebab-case, descriptive (`python-pro.md`, `api-designer.md`)
- **Commands**: kebab-case, action-oriented (`generate-tests.md`)
- **MCPs**: kebab-case with service name (`github-integration.json`)
- **Hooks**: kebab-case with trigger (`pre-commit-lint.json`)
- **Settings**: kebab-case with scope (`allow-npm-commands.json`)

## Development Workflows

### Adding a New Agent

1. Choose the appropriate category (01-10)
2. Copy the template: `docs/templates/agent-template.md`
3. Write expert-level, specific instructions
4. Include version numbers and named tools
5. Add at least 2 usage examples in the description
6. Run validation: `npm run validate -- --file your-agent.md`
7. Submit PR

### Adding a New Command

1. Create file in `components/commands/<category>/`
2. Include clear instructions for Claude
3. Test the command locally
4. Submit PR

### Adding a New MCP

1. Create JSON in `components/mcps/<category>/`
2. Include `mcpServers` configuration
3. Document required environment variables
4. Submit PR

## Code Standards

- **JavaScript**: ES2022+, async/await, no var
- **Node.js**: 18+ required
- **TypeScript**: Strict mode preferred for new code
- **Testing**: Jest, 70%+ coverage target
- **Linting**: ESLint + Prettier
- **Comments**: JSDoc for public APIs

## API Architecture

API endpoints are Vercel serverless functions in `/api`:

- `POST /api/track-download` — Track component downloads
- `POST /api/discord/interactions` — Discord bot handler
- `GET /api/health` — Health check endpoint

## Deployment

- **NPM**: `npm publish` (manual, after version bump)
- **Website**: Auto-deploy via Vercel on push to main
- **API**: Deploys with Vercel
- **Cloudflare Workers**: Manual deploy via Wrangler
