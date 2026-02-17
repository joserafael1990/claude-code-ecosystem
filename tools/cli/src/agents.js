const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

// Updated to point to the new components directory in the repository root
// repo/tools/cli/src -> repo/components
const COMPONENTS_DIR = path.resolve(__dirname, '..', '..', '..', 'components');
const AGENTS_DIR = path.join(COMPONENTS_DIR, 'agents');

/**
 * Get all available agents from the components directory structure
 * @returns {Array} Array of agent objects with name, description, and metadata
 */
function getAvailableAgents() {
  const agents = [];

  try {
    // Check if agents directory exists
    if (!fs.existsSync(AGENTS_DIR)) {
      console.log(chalk.yellow(`⚠️  Agents directory not found at: ${AGENTS_DIR}`));
      return [];
    }

    // Scan all category directories (e.g. 01-core-development, 02-language-specialists)
    const categoryDirs = fs.readdirSync(AGENTS_DIR)
      .filter(dir => {
        const dirPath = path.join(AGENTS_DIR, dir);
        return fs.statSync(dirPath).isDirectory();
      });

    for (const category of categoryDirs) {
      const categoryPath = path.join(AGENTS_DIR, category);

      const agentFiles = fs.readdirSync(categoryPath)
        .filter(file => file.endsWith('.md'));

      for (const file of agentFiles) {
        const filePath = path.join(categoryPath, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const agent = parseAgentFile(content, file);

        if (agent) {
          agent.category = category;
          // Clean up category name for display (e.g. "01-core-development" -> "Core Development")
          agent.categoryDisplay = formatCategoryName(category);
          agent.filePath = filePath;
          agents.push(agent);
        }
      }
    }

    return agents;
  } catch (error) {
    console.log(chalk.red('❌ Error scanning agents:'), error.message);
    return [];
  }
}

/**
 * Format category name for display
 * @param {string} dirName - Directory name like "01-core-development"
 * @returns {string} Formatted name like "Core Development"
 */
function formatCategoryName(dirName) {
  // Remove number prefix if present
  const namePart = dirName.replace(/^\d+-/, '');
  // Replace hyphens with spaces and capitalize words
  return namePart
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Parse agent markdown file to extract frontmatter
 * @param {string} content - File content
 * @param {string} filename - File name
 * @returns {Object|null} Agent object or null if parsing fails
 */
function parseAgentFile(content, filename) {
  try {
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) {
      return null;
    }

    const lines = frontmatterMatch[1].split('\n');
    const agent = {
      filename,
      name: filename.replace('.md', ''),
      description: '',
      tier: 'community' // Default
    };

    for (const line of lines) {
      const parts = line.split(':');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts.slice(1).join(':').trim();

        // Remove quotes if present
        if (value.startsWith('"') && value.endsWith('"')) {
          agent[key] = value.slice(1, -1);
        } else {
          agent[key] = value;
        }
      }
    }

    // Extract short description from full description (remove example blocks)
    if (agent.description) {
      agent.shortDescription = agent.description.split('<example>')[0].trim();
      agent.shortDescription = agent.shortDescription.replace(/\\n/g, ' ');
    }

    return agent;
  } catch (error) {
    // Specific error handling for malformed YAML
    return { name: filename.replace('.md', ''), description: 'Error parsing file' };
  }
}

/**
 * Get agents filtered by category
 * @param {string} category - Category filter
 * @returns {Array} Array of relevant agents
 */
function getAgentsByCategory(category) {
  const allAgents = getAvailableAgents();

  if (!category || category === 'all') {
    return allAgents;
  }

  return allAgents.filter(agent => agent.category === category);
}

// Keep backward compatibility wrapper
function getAgentsForLanguageAndFramework(language, framework) {
  // Return all agents since we moved away from lang/framework structure
  return getAvailableAgents();
}

/**
 * Install selected agents to the project's .claude/agents directory
 * @param {Array} selectedAgents - Array of agent names to install
 * @param {string} projectPath - Project directory path
 * @returns {Promise<boolean>} Success status
 */
async function installAgents(selectedAgents, projectPath = process.cwd()) {
  try {
    const claudeDir = path.join(projectPath, '.claude');
    const agentsDir = path.join(claudeDir, 'agents');

    // Create .claude/agents directory if it doesn't exist
    await fs.ensureDir(agentsDir);

    const allAgents = getAvailableAgents();
    let installedCount = 0;

    for (const agentName of selectedAgents) {
      // Find the agent by name in the available agents
      const agent = allAgents.find(a => a.name === agentName);

      if (agent && agent.filePath) {
        const targetFile = path.join(agentsDir, `${agentName}.md`);

        if (await fs.pathExists(agent.filePath)) {
          await fs.copy(agent.filePath, targetFile);
          installedCount++;
          console.log(chalk.green(`✓ Installed agent: ${agentName}`));
        } else {
          console.log(chalk.yellow(`⚠️  Agent source file not found: ${agent.filePath}`));
        }
      } else {
        console.log(chalk.yellow(`⚠️  Agent not found: ${agentName}`));
      }
    }

    if (installedCount > 0) {
      console.log(chalk.green(`\n🎉 Successfully installed ${installedCount} agent(s)`));
      return true;
    } else {
      console.log(chalk.yellow('⚠️  No agents were installed'));
      return false;
    }

  } catch (error) {
    console.error(chalk.red('❌ Failed to install agents:'), error.message);
    return false;
  }
}

/**
 * Check if project already has agents installed
 * @param {string} projectPath - Project directory path
 * @returns {Promise<Array>} Array of installed agent names
 */
async function getInstalledAgents(projectPath = process.cwd()) {
  try {
    const agentsDir = path.join(projectPath, '.claude', 'agents');

    if (!(await fs.pathExists(agentsDir))) {
      return [];
    }

    const agentFiles = await fs.readdir(agentsDir);
    return agentFiles
      .filter(file => file.endsWith('.md'))
      .map(file => path.basename(file, '.md'));

  } catch (error) {
    return [];
  }
}

/**
 * Format agent choices for inquirer prompt
 * @param {Array} agents - Array of agent objects
 * @param {Array} installedAgents - Array of already installed agent names
 * @returns {Array} Formatted choices for inquirer
 */
function formatAgentChoices(agents, installedAgents = []) {
  // Sort by category first, then name
  agents.sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return a.name.localeCompare(b.name);
  });

  return agents.map(agent => {
    const isInstalled = installedAgents.includes(agent.name);

    let nameDisplay = agent.name;
    if (agent.tier === 'core') nameDisplay = chalk.green(agent.name) + ' 🏆';
    else if (agent.tier === 'verified') nameDisplay = chalk.blue(agent.name) + ' ✅';

    if (isInstalled) nameDisplay += chalk.dim(' (installed)');

    const description = agent.shortDescription || 'No description';
    const truncatedDesc = description.length > 80 ? description.substring(0, 80) + '...' : description;

    return {
      name: `${nameDisplay} ${chalk.dim('[' + formatCategoryName(agent.category) + ']')}\n  ${chalk.dim(truncatedDesc)}`,
      value: agent.name,
      disabled: isInstalled ? 'Already installed' : false
    };
  });
}

module.exports = {
  getAvailableAgents,
  getAgentsByCategory,
  getAgentsForLanguageAndFramework, // Legacy support
  installAgents,
  getInstalledAgents,
  formatAgentChoices
};