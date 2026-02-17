# 🚀 Claude Code Ecosystem

> A curated, unified collection of 660+ agents, commands, MCPs, hooks, settings, and skills for Claude Code — with custom-built developer tooling.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## What is this?

Claude Code Ecosystem is a **curated and reorganized** collection of components sourced from the Claude Code open-source community — primarily [claude-code-templates](https://github.com/davila7/claude-code-templates) by Daniel Ávila and the [comfy-claude-prompt-library](https://github.com/Comfy-Org/comfy-claude-prompt-library) by Comfy-Org — plus **original developer tooling** I built on top.

The curation work involved:
- Reorganizing 660+ components into a **13-category professional taxonomy**
- Applying a **standardized YAML frontmatter schema** across all agents
- Establishing a **quality tier system** (Core/Verified/Community/Legacy)
- Building **custom CLI tooling, an analytics dashboard, and monitoring interfaces** from scratch

### Components

- 🤖 **99 Agents** — Specialized AI personas across 13 categories
- ⚡ **291 Commands** — Slash commands for common workflows
- 🔌 **65 MCPs** — External service integrations
- 🪝 **54 Hooks** — Automation triggers
- ⚙️ **65 Settings** — Configuration presets
- 🧠 **88 Skills** — Knowledge modules

### Quality Tiers

Every component is categorized by quality:

| Tier | Badge | Meaning |
|------|-------|---------|
| **Core** | 🏆 | Hand-curated, expert-level, specific, opinionated. |
| **Verified** | ✅ | Community-contributed, reviewed and validated. |
| **Community** | 🌟 | Community-contributed, basic validation passed. |
| **Legacy** | 🏛️ | Maintained for backward compatibility. |

## 🛠️ What I Built (Original Work)

Beyond curation, the following are **original engineering contributions**:

| Tool | Description |
|------|-------------|
| **Analytics Dashboard** | Full JavaScript web app with real-time WebSocket updates, session monitoring, and interactive charts |
| **Mobile Chat Monitor** | Responsive interface for monitoring Claude Code sessions from mobile devices |
| **2025 Year-in-Review** | Canvas-based animated data visualization of yearly Claude Code activity |
| **CLI Orchestrator** | Node.js CLI for installing/managing agents, running health checks, and launching dashboards |
| **Skills Dashboard** | Web UI for browsing and managing Claude Code skills with 3-level progressive loading |
| **Plugin Dashboard** | Web UI for discovering, installing, and managing plugins across marketplaces |
| **Teams Dashboard** | Agent orchestration visualization for multi-agent sessions |
| **Validation Pipeline** | Automated quality checks for component contributions |
| **Unified Taxonomy** | 13-category classification system with standardized YAML frontmatter |

## 🌟 Why the Ecosystem?

*   **⚡ CLI Orchestration**: Install specialized expert agents into any project — or your entire system — in seconds.
*   **🧠 Standardized Format**: Every agent uses a consistent high-density instruction format with YAML frontmatter.
*   **🏆 Curated Quality**: Components are refined with specific version numbers, tool names, and opinionated best practices.
*   **📊 Unified Command Center**: Integrated analytics, health checks, and a mobile-first chat monitor.

---

## ⚡ Quick Start

### Install via NPM (recommended)

```bash
# Interactive mode
npx claude-code-ecosystem@latest
```

### 🛠️ Developer Setup (Local Ecosystem)

If you are a contributor or want to use this project's local source of truth:

```bash
# 1. Clone the ecosystem
git clone https://github.com/joserafael1990/claude-code-ecosystem.git
cd claude-code-ecosystem/tools/cli

# 2. Setup the CLI tool
npm install
npm link # Makes the 'cct' command global

# 3. Use it in any project folder
cd ~/your-project
cct --agent mcp-server-architect --agent video-editor

# 4. Or install globally (available in all folders)
cct --agent fact-checker --global
```

### Install via Bash (offline-friendly)

```bash
# Interactive installer
curl -sL https://raw.githubusercontent.com/joserafael1990/claude-code-ecosystem/main/tools/installer/install.sh | bash

# Or clone and run locally
git clone https://github.com/joserafael1990/claude-code-ecosystem.git
cd claude-code-ecosystem
./tools/installer/install.sh
```

### Manual Installation

```bash
# Copy an agent to your project
cp components/agents/02-language-specialists/python-pro.md .claude/agents/

# Copy a command
cp components/commands/testing/generate-tests.md .claude/commands/
```

---

## 🤖 Agents Catalog

### 01 — Core Development 🏆

| Agent | Model | Description |
|-------|-------|-------------|
| [api-designer](components/agents/01-core-development/api-designer.md) | sonnet | REST/GraphQL API design with OpenAPI 3.1 |
| [electron-pro](components/agents/01-core-development/electron-pro.md) | sonnet | Electron desktop applications |
| [graphql-architect](components/agents/01-core-development/graphql-architect.md) | sonnet | GraphQL federation and schema design |
| [microservices-architect](components/agents/01-core-development/microservices-architect.md) | sonnet | Microservices patterns and boundaries |
| [mobile-developer](components/agents/01-core-development/mobile-developer.md) | sonnet | Cross-platform mobile development |

### 02 — Language Specialists 🏆

| Agent | Model | Description |
|-------|-------|-------------|
| [angular-architect](components/agents/02-language-specialists/angular-architect.md) | sonnet | Angular 17+ with signals and standalone components |
| [cpp-pro](components/agents/02-language-specialists/cpp-pro.md) | sonnet | Modern C++20/23 development |
| [django-developer](components/agents/02-language-specialists/django-developer.md) | sonnet | Django 5+ full-stack development |
| [dotnet-modern](components/agents/02-language-specialists/dotnet-modern.md) | sonnet | .NET 8/9 with modern patterns |
| [golang-pro](components/agents/02-language-specialists/golang-pro.md) | sonnet | Go with concurrency and cloud-native patterns |
| [java-spring](components/agents/02-language-specialists/java-spring.md) | sonnet | Spring Boot 3+ enterprise Java |
| [javascript-pro](components/agents/02-language-specialists/javascript-pro.md) | sonnet | Modern ES2024+ JavaScript |
| [kotlin-specialist](components/agents/02-language-specialists/kotlin-specialist.md) | sonnet | Kotlin multiplatform and coroutines |
| [nextjs-developer](components/agents/02-language-specialists/nextjs-developer.md) | sonnet | Next.js 14+ with App Router and RSC |
| [php-pro](components/agents/02-language-specialists/php-pro.md) | sonnet | PHP 8.3+ and Laravel |
| [python-pro](components/agents/02-language-specialists/python-pro.md) | sonnet | Python 3.12+ with modern tooling |
| [rails-expert](components/agents/02-language-specialists/rails-expert.md) | sonnet | Ruby on Rails 7+ |
| [react-specialist](components/agents/02-language-specialists/react-specialist.md) | sonnet | React 19+ with Server Components |
| [rust-engineer](components/agents/02-language-specialists/rust-engineer.md) | sonnet | Systems programming with Rust |
| [sql-pro](components/agents/02-language-specialists/sql-pro.md) | sonnet | Advanced SQL optimization |
| [swift-expert](components/agents/02-language-specialists/swift-expert.md) | sonnet | Swift 5.9+ and SwiftUI |
| [typescript-pro](components/agents/02-language-specialists/typescript-pro.md) | sonnet | Advanced TypeScript patterns |
| [vue-expert](components/agents/02-language-specialists/vue-expert.md) | sonnet | Vue 3+ with Composition API |

### 03 — Infrastructure 🏆

| Agent | Model | Description |
|-------|-------|-------------|
| [docker-expert](components/agents/03-infrastructure/docker-expert.md) | sonnet | Docker and container orchestration |
| [kubernetes-specialist](components/agents/03-infrastructure/kubernetes-specialist.md) | sonnet | Kubernetes cluster management |
| [sre-engineer](components/agents/03-infrastructure/sre-engineer.md) | sonnet | Site reliability engineering |
| [terraform-engineer](components/agents/03-infrastructure/terraform-engineer.md) | sonnet | Infrastructure as Code with Terraform |
| [database-administrator](components/agents/03-infrastructure/database-administrator.md) | sonnet | Database administration and optimization |

### 04 — Quality & Security 🏆

| Agent | Model | Description |
|-------|-------|-------------|
| [code-reviewer](components/agents/04-quality-security/code-reviewer.md) | opus | Comprehensive code review |
| [debugger](components/agents/04-quality-security/debugger.md) | sonnet | Advanced debugging and diagnostics |
| [test-automator](components/agents/04-quality-security/test-automator.md) | sonnet | Test automation strategies |
| [security-auditor](components/agents/04-quality-security/security-auditor.md) | opus | Security vulnerability assessment |

### 05 — Data & AI 🏆

| Agent | Model | Description |
|-------|-------|-------------|
| [llm-architect](components/agents/05-data-ai/llm-architect.md) | sonnet | LLM application architecture |
| [ml-engineer](components/agents/05-data-ai/ml-engineer.md) | sonnet | Machine learning pipelines |
| [data-scientist](components/agents/05-data-ai/data-scientist.md) | sonnet | Data science workflows |
| [postgres-pro](components/agents/05-data-ai/postgres-pro.md) | sonnet | PostgreSQL optimization |

### 06 — Developer Experience 🏆

| Agent | Model | Description |
|-------|-------|-------------|
| [refactoring-specialist](components/agents/06-developer-experience/refactoring-specialist.md) | sonnet | Code refactoring and modernization |
| [documentation-engineer](components/agents/06-developer-experience/documentation-engineer.md) | sonnet | Technical documentation |
| [build-engineer](components/agents/06-developer-experience/build-engineer.md) | sonnet | Build systems and CI/CD |
| [cli-developer](components/agents/06-developer-experience/cli-developer.md) | sonnet | CLI tool development |

### 11 — MCP Orchestration 🏆
- **mcp-server-architect**: Professional transport and tool design.
- **mcp-security-auditor**: Security, OAuth, and RBAC audits.
- **task-decomposition-expert**: Workflow breakdown with ChromaDB priority.

### 12 — Media Automation 🏆
- **video-editor**: FFmpeg automation for professional post-production.
- **visual-analysis-ocr**: Semantic Markdown extraction from images.

### 13 — Advanced Research 🏆
- **fact-checker**: Programmatic misinformation detection and citation validation.

See the [full catalog](docs/catalog.md) for all agents across all 13 categories.

---

## ⚡ Commands

| Command | Description |
|---------|-------------|
| `/generate-tests` | Generate comprehensive test suites |
| `/security-audit` | Run security vulnerability scan |
| `/check-file` | Analyze a file for issues |
| `/deploy` | Deployment workflow |

[Browse all commands →](components/commands/)

---

## 🔌 MCPs (Model Context Protocol)

| MCP | Description |
|-----|-------------|
| `github-integration` | GitHub API access |
| `web-fetch` | Fetch web content |
| `postgresql` | PostgreSQL database access |
| `filesystem` | Enhanced file system access |

[Browse all MCPs →](components/mcps/)

---

## 🪝 Hooks

Automation triggers for Claude Code:

| Hook | Trigger | Description |
|------|---------|-------------|
| `pre-commit-lint` | Pre-commit | Auto-lint before commits |
| `auto-test` | File save | Run tests on save |
| `security-check` | Pre-push | Security scan before push |

[Browse all hooks →](components/hooks/)

---

## 📊 Developer Tools

```bash
# Analytics dashboard
npx claude-code-ecosystem --analytics

# Health check
npx claude-code-ecosystem --health-check

# Chat monitor (mobile-friendly)
npx claude-code-ecosystem --chats
```

---

## 🏗️ Repository Structure

```
claude-code-ecosystem/
├── components/
│   ├── agents/                    # 10 curated categories
│   │   ├── 01-core-development/
│   │   ├── 02-language-specialists/
│   │   ├── 03-infrastructure/
│   │   ├── 04-quality-security/
│   │   ├── 05-data-ai/
│   │   ├── 06-developer-experience/
│   │   ├── 07-specialized-domains/
│   │   ├── 08-business-product/
│   │   ├── 09-meta-orchestration/
│   │   └── 10-research-analysis/
│   ├── commands/
│   ├── mcps/
│   ├── hooks/
│   ├── settings/
│   └── skills/
├── tools/
│   ├── cli/                       # NPM CLI tool
│   └── installer/                 # Bash installer
├── plugins/                       # Claude plugin marketplace
├── docs/                          # Web catalog
├── api/                           # Serverless functions
├── scripts/                       # Build & maintenance
└── .github/workflows/             # CI/CD
```

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quality Standards

All contributed agents must:
- ✅ Use specific version numbers (e.g., "Python 3.12+", not "Python")
- ✅ Name specific tools and libraries
- ✅ Include opinionated best practices
- ✅ Provide concrete examples
- ✅ Follow kebab-case naming

### Quick Contribution

```bash
# Create a new agent
cp docs/templates/agent-template.md components/agents/02-language-specialists/my-agent.md
# Edit, test, submit PR
```

---

## 📜 Acknowledgements & Attribution

This project curates and reorganizes components from the following open-source projects. **Full credit goes to the original authors:**

| Source | Author | License | What was used |
|--------|--------|---------|---------------|
| [claude-code-templates](https://github.com/davila7/claude-code-templates) | Daniel (San) Ávila | MIT | Agents, commands, MCPs, hooks, settings, CLI foundation |
| [comfy-claude-prompt-library](https://github.com/Comfy-Org/comfy-claude-prompt-library) | Comfy-Org | MIT | Commands and prompt patterns |
| [awesome-claude-code-subagents](https://github.com/pallid-pantry/awesome-claude-code-subagents) | pallid-pantry | — | Agent references and patterns |

Original upstream licenses are preserved in [`licenses/upstream/`](licenses/upstream/).

**My contributions** on top of the curated content include: the unified taxonomy, quality tier system, analytics dashboard, mobile chat monitor, CLI orchestrator, skills/plugin/teams dashboards, year-in-review visualization, and validation pipeline.

## 📄 License

MIT — See [LICENSE](LICENSE) for details.

Original components retain their respective upstream licenses.
