# Contributing to Claude Code Ecosystem

Thank you for contributing! This guide covers how to add, improve, or review components.

---

## Quick Start

### 1. Fork & Clone

```bash
git clone https://github.com/YOUR-FORK/claude-code-ecosystem.git
cd claude-code-ecosystem
npm install
```

### 2. Create Your Component

```bash
# Agent
cp docs/templates/agent-template.md components/agents/02-language-specialists/my-agent.md

# Command
cp docs/templates/command-template.md components/commands/testing/my-command.md
```

### 3. Validate

```bash
npm run validate -- --file components/agents/02-language-specialists/my-agent.md
```

### 4. Submit PR

```bash
git checkout -b add/my-agent
git add .
git commit -m "feat: add my-agent to language specialists"
git push origin add/my-agent
```

---

## Agent Contribution Guidelines

### Quality Standards

Our agents are **opinionated by design**. We prioritize **specific, actionable guidance** over generic checklists.

#### ✅ DO

```markdown
### Python 3.12+ Features
- Use `match` statement for structural pattern matching
- Use `asyncio.TaskGroup` instead of `gather()` for structured concurrency
- Use `tomllib` (built-in) for TOML parsing, not `toml` package
- Type hints with `type` keyword (PEP 695): `type Vector = list[float]`
```

#### ❌ DON'T

```markdown
### Python Patterns
- Pattern matching
- Async programming
- Configuration handling
- Type system
```

### Required Elements

Every agent must have:

1. **YAML Frontmatter**
   ```yaml
   ---
   name: kebab-case-name
   description: "When to use, with <example> blocks"
   tools: Read, Write, Edit, Bash, Glob, Grep
   model: sonnet  # or opus for review/security agents
   tier: core     # or verified, community
   category: 02-language-specialists
   ---
   ```

2. **Expert-Level Body** (aim for 50-80 lines)
   - Specific version numbers (e.g., "React 19+", not "React")
   - Named tools (e.g., "ruff replaces black+isort+flake8")
   - Opinionated advice (e.g., "No useEffect for data fetching")
   - Anti-patterns to avoid
   - Concrete metrics and targets

3. **Sections** (recommended)
   - Core Capabilities (specific, versioned)
   - Checklists (actionable, measurable)
   - Example Use Cases (4+ concrete scenarios)
   - Integration with Other Agents (cross-references)

### Model Selection

| Model | Use For |
|-------|---------|
| `sonnet` | Most agents — coding, development, specialized tasks |
| `opus` | Code review, security auditing, architecture review — tasks needing deep reasoning |
| `haiku` | Simple, fast tasks — formatting, linting, quick checks |

### Category Selection

| Category | For Agents That... |
|----------|-------------------|
| `01-core-development` | Design systems, APIs, architecture |
| `02-language-specialists` | Focus on a specific language or framework |
| `03-infrastructure` | Handle DevOps, containers, cloud, databases |
| `04-quality-security` | Review code, find bugs, check security |
| `05-data-ai` | Work with data, ML, AI, LLMs |
| `06-developer-experience` | Improve DX, tooling, documentation |
| `07-specialized-domains` | Domain-specific (fintech, IoT, embedded, etc.) |
| `08-business-product` | Product management, business analysis |
| `09-meta-orchestration` | Coordinate other agents, workflows |
| `10-research-analysis` | Research, analysis, evaluation |

---

## Command Contribution Guidelines

### Structure

```markdown
---
name: command-name
description: "What this command does"
---

# Command: command-name

## Purpose
What this command accomplishes.

## Process
1. Step one
2. Step two
3. Step three

## Output
What the command produces.
```

---

## MCP Contribution Guidelines

### Structure

```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "@package/name"],
      "description": "What this MCP server provides"
    }
  }
}
```

---

## Automated Validation

Every PR runs automated checks:

1. **Structural Validation** — YAML frontmatter, required fields
2. **Naming Convention** — kebab-case, no spaces
3. **Content Quality** — Minimum line count, no hardcoded secrets
4. **Semantic Check** — Description matches content
5. **Security Scan** — No API keys, passwords, or tokens

### Running Locally

```bash
# Validate a single file
npm run validate -- --file path/to/agent.md

# Validate all components
npm run validate

# Validate a category
npm run validate -- --category 02-language-specialists
```

---

## Review Process

1. **Automated checks** must pass
2. **Maintainer review** checks for:
   - Specificity (version numbers, tool names)
   - Actionability (can Claude act on this?)
   - Signal-to-noise ratio (no generic filler)
   - Correct categorization
3. **Tier assignment**:
   - `core` — Only assigned by maintainers
   - `verified` — After review approval
   - `community` — Default for new contributions

---

## Code of Conduct

Be respectful, constructive, and inclusive. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

---

## Questions?

- Open an [issue on GitHub](https://github.com/joserafael1990/claude-code-ecosystem/issues)
