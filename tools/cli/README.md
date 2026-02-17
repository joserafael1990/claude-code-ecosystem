# Claude Code Ecosystem

**The definitive extension for Claude Code** - Curated agents, commands, and MCPs with real-time analytics and system health checks.

## 🚀 Quick Start

```bash
# Interactive setup (recommended)
npx claude-code-ecosystem@latest

# Real-time analytics dashboard
npx claude-code-ecosystem@latest --analytics

# System health check
npx claude-code-ecosystem@latest --health-check
```

## ✨ Core Features

- **📋 Smart Project Setup** - Auto-detect and configure any project with framework-specific commands
- **📊 Real-time Analytics** - Monitor Claude Code sessions with live state detection and performance metrics
- **🔍 Health Check** - Comprehensive system validation with actionable recommendations
- **🧩 Individual Components** - Install specialized agents, commands, and MCPs individually
- **🌍 Global Agents** - Create AI agents accessible from anywhere using Claude Code SDK

## 🎯 What You Get

| Component | Description | Example |
|-----------|-------------|---------|
| **CLAUDE.md** | Project-specific Claude Code configuration | Framework best practices, coding standards |
| **Commands** | Custom slash commands for development tasks | `/generate-tests`, `/check-file`, `/optimize-bundle` |
| **Agents** | AI specialists for specific domains | API security audit, React performance, database optimization |
| **MCPs** | External service integrations | GitHub, databases, development tools |
| **Skills** | Modular capabilities with progressive disclosure | PDF processing, algorithmic art, MCP builder |
| **Analytics** | Real-time monitoring dashboard | Live session tracking, usage statistics, exports |

## 🛠️ Supported Technologies

| Language | Frameworks | Status |
|----------|------------|---------|
| **JavaScript/TypeScript** | React, Vue, Angular, Node.js | ✅ Ready |
| **Python** | Django, Flask, FastAPI | ✅ Ready |
| **Common** | Universal configurations | ✅ Ready |
| **Go** | Gin, Echo, Fiber | 🚧 Coming Soon |
| **Rust** | Axum, Warp, Actix | 🚧 Coming Soon |

## 🌍 Global Agents (Claude Code SDK Integration)

Create AI agents that can be executed from anywhere using the Claude Code SDK:

```bash
# Create a global agent (one-time setup)
npx claude-code-ecosystem@latest --create-agent customer-support

# Use the agent from anywhere
customer-support "Help me with ticket #12345"
sre-logs "Analyze error patterns in app.log"  
code-reviewer "Review this PR for security issues"
```

### Available Global Agents

| Agent | Usage | Description |
|-------|-------|-------------|
| `customer-support` | `customer-support "query"` | AI customer support specialist |
| `api-security-audit` | `api-security-audit "analyze endpoints"` | Security auditing for APIs |
| `react-performance-optimization` | `react-performance-optimization "optimize components"` | React performance expert |
| `database-optimization` | `database-optimization "improve queries"` | Database performance tuning |

### Global Agent Management

```bash
# List installed global agents
npx claude-code-ecosystem@latest --list-agents

# Update an agent to latest version
npx claude-code-ecosystem@latest --update-agent customer-support

# Remove an agent
npx claude-code-ecosystem@latest --remove-agent customer-support
```

### How It Works

1. **Download Agent**: Fetches the latest agent from GitHub
2. **Generate Executable**: Creates a Node.js script that calls Claude Code SDK
3. **Add to PATH**: Makes the agent available globally in your shell
4. **Ready to Use**: Execute `agent-name "your prompt"` from any directory

The agents use the Claude Code SDK internally to provide specialized AI assistance with domain-specific knowledge and best practices.

## 🎨 Skills (Anthropic Format)

Install modular capabilities that Claude loads dynamically using Anthropic's progressive disclosure pattern:

```bash
# Install individual skills
npx claude-code-ecosystem@latest --skill pdf-processing-pro
npx claude-code-ecosystem@latest --skill algorithmic-art
npx claude-code-ecosystem@latest --skill mcp-builder

# Install multiple skills
npx claude-code-ecosystem@latest --skill pdf-anthropic,docx,xlsx,pptx
```

### Featured Skills

#### 🎨 Creative & Design
- **algorithmic-art** - Create generative art using p5.js with seeded randomness
- **canvas-design** - Design beautiful visual art in .png and .pdf formats
- **slack-gif-creator** - Create animated GIFs optimized for Slack

#### 💻 Development & Technical
- **mcp-builder** - Guide for creating high-quality MCP servers
- **artifacts-builder** - Build complex HTML artifacts with React and Tailwind
- **webapp-testing** - Test local web applications using Playwright
- **skill-creator** - Guide for creating effective skills

#### 📄 Document Processing
- **pdf-processing-pro** - Production-ready PDF toolkit (forms, tables, OCR)
- **pdf-anthropic** - Anthropic's comprehensive PDF manipulation toolkit
- **docx** - Create, edit, and analyze Word documents
- **xlsx** - Create, edit, and analyze Excel spreadsheets
- **pptx** - Create, edit, and analyze PowerPoint presentations

#### 🏢 Enterprise & Communication
- **brand-guidelines** - Apply Anthropic's official brand guidelines
- **internal-comms** - Write internal communications (reports, newsletters, FAQs)
- **theme-factory** - Style artifacts with professional themes

### Skills Architecture

Skills follow Anthropic's progressive disclosure pattern:
- **Metadata** - Always loaded (name, description)
- **Instructions** - Loaded when skill is triggered
- **Resources** - Reference files loaded only when needed
- **Scripts** - Execute without loading code into context

### Attribution

Skills from [anthropics/skills](https://github.com/anthropics/skills):
- **Open Source** (Apache 2.0): algorithmic-art, mcp-builder, skill-creator, artifacts-builder, and more
- **Source-Available** (Reference): docx, pdf-anthropic, pptx, xlsx

See [ANTHROPIC_ATTRIBUTION.md](cli-tool/components/skills/ANTHROPIC_ATTRIBUTION.md) for complete license information.

## 📖 Documentation

Comprehensive guides, examples, and API reference for the Claude Code Ecosystem.

## 🤝 Contributing

We welcome contributions! Check our [contributing guidelines](https://github.com/ClaudeCodeEcosystem/claude-code-ecosystem/blob/main/CONTRIBUTING.md).

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **🐛 Issues**: [GitHub Issues](https://github.com/ClaudeCodeEcosystem/claude-code-ecosystem/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/ClaudeCodeEcosystem/claude-code-ecosystem/discussions)

---

**⭐ Found this useful? Give us a star to support the project!**