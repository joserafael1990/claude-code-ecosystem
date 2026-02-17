# Makefile for claude-code-ecosystem testing

.PHONY: test test-basic test-detailed test-interactive install-dev uninstall-dev help

# Install package locally for testing
install-dev:
	@echo "🔗 Linking package for local development..."
	npm link

# Uninstall local package
uninstall-dev:
	@echo "🔗 Unlinking package..."
	npm unlink -g claude-code-ecosystem

# Run basic tests
test-basic: install-dev
	@echo "🧪 Running basic tests..."
	./test-commands.sh

# Run detailed tests
test-detailed: install-dev
	@echo "🔬 Running detailed tests..."
	./test-detailed.sh

# Test specific scenario
test-react: install-dev
	@echo "⚛️ Testing React scenario..."
	@mkdir -p /tmp/test-react
	@cd /tmp/test-react && claude-code-ecosystem --language javascript-typescript --framework react --dry-run --yes
	@echo "✅ React test completed"
	@rm -rf /tmp/test-react

test-vue: install-dev
	@echo "💚 Testing Vue scenario..."
	@mkdir -p /tmp/test-vue
	@cd /tmp/test-vue && claude-code-ecosystem --language javascript-typescript --framework vue --dry-run --yes
	@echo "✅ Vue test completed"
	@rm -rf /tmp/test-vue

test-node: install-dev
	@echo "🟢 Testing Node scenario..."
	@mkdir -p /tmp/test-node
	@cd /tmp/test-node && claude-code-ecosystem --language javascript-typescript --framework node --dry-run --yes
	@echo "✅ Node test completed"
	@rm -rf /tmp/test-node

test-hooks: install-dev
	@echo "🔧 Testing Hooks functionality..."
	@mkdir -p /tmp/test-hooks
	@cd /tmp/test-hooks && claude-code-ecosystem --language javascript-typescript --yes
	@echo "Checking hooks installation..."
	@cd /tmp/test-hooks && [ -f ".claude/settings.json" ] && echo "✅ settings.json created"
	@cd /tmp/test-hooks && jq '.hooks' ".claude/settings.json" > /dev/null && echo "✅ Hooks structure valid"
	@cd /tmp/test-hooks && [ $$(jq '.hooks | keys | length' ".claude/settings.json") -gt 0 ] && echo "✅ Hooks configured"
	@rm -rf /tmp/test-hooks

test-python-hooks: install-dev
	@echo "🐍 Testing Python hooks..."
	@mkdir -p /tmp/test-python-hooks
	@cd /tmp/test-python-hooks && claude-code-ecosystem --language python --yes
	@cd /tmp/test-python-hooks && jq -r '.hooks.PostToolUse[].hooks[].command' ".claude/settings.json" | grep -q "black" && echo "✅ Python Black hook found"
	@rm -rf /tmp/test-python-hooks

test-all-hooks: test-hooks test-python-hooks
	@echo "✅ All hooks tests completed"

# Interactive test (manual)
test-interactive: install-dev
	@echo "🎯 Starting interactive test (you'll need to interact)..."
	@mkdir -p /tmp/test-interactive
	@cd /tmp/test-interactive && claude-code-ecosystem --dry-run
	@rm -rf /tmp/test-interactive

# Run all tests
test: test-basic test-detailed test-all-hooks
	@echo "🎉 All automated tests completed!"

# Check version works
test-version:
	@echo "📝 Testing version command..."
	@claude-code-ecosystem --version

# Test before publish
pre-publish: test test-version
	@echo "✅ Ready for publishing!"

# Help
help:
	@echo "Available commands:"
	@echo "  make install-dev    - Install package locally for testing"
	@echo "  make test-basic     - Run basic test suite"
	@echo "  make test-detailed  - Run detailed test suite"
	@echo "  make test-react     - Test React scenario"
	@echo "  make test-vue       - Test Vue scenario"
	@echo "  make test-node      - Test Node scenario"
	@echo "  make test-hooks     - Test hooks functionality"
	@echo "  make test-python-hooks - Test Python-specific hooks"
	@echo "  make test-all-hooks - Test all hooks functionality"
	@echo "  make test-interactive - Manual interactive test"
	@echo "  make test           - Run all automated tests"
	@echo "  make pre-publish    - Full test before publishing"
	@echo "  make uninstall-dev  - Uninstall local package"