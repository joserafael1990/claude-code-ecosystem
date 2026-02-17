const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

// Updated to point to the new components directory
// repo/tools/cli/src -> repo/components
const COMPONENTS_DIR = path.resolve(__dirname, '..', '..', '..', 'components');
const COMMANDS_DIR = path.join(COMPONENTS_DIR, 'commands');

/**
 * Scans and returns available commands
 * @param {string} [language] - Ignored in new unified structure
 * @returns {Array} Array of available commands with metadata
 */
function getAvailableCommands(language) {
  const commands = [];

  // Check if commands directory exists
  if (!fs.existsSync(COMMANDS_DIR)) {
    return [];
  }

  try {
    // Scan all category directories
    const categoryDirs = fs.readdirSync(COMMANDS_DIR)
      .filter(dir => {
        const dirPath = path.join(COMMANDS_DIR, dir);
        return fs.statSync(dirPath).isDirectory();
      });

    for (const category of categoryDirs) {
      const categoryPath = path.join(COMMANDS_DIR, category);
      const categoryCommands = scanCommandsInDirectory(categoryPath, category);
      commands.push(...categoryCommands);
    }

    // Check for root commands if any
    const rootCommands = scanCommandsInDirectory(COMMANDS_DIR, 'uncategorized');
    commands.push(...rootCommands);

  } catch (error) {
    console.warn(`Warning: Could not scan commands:`, error.message);
  }

  return commands.sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    return a.name.localeCompare(b.name);
  });
}

/**
 * Scans a directory for command files and returns command metadata
 * @param {string} commandsDir - Directory to scan
 * @param {string} category - Category name
 * @returns {Array} Array of command objects
 */
function scanCommandsInDirectory(commandsDir, category) {
  const commands = [];

  try {
    const files = fs.readdirSync(commandsDir);

    files.forEach(file => {
      if (path.extname(file) === '.md') {
        const commandName = path.basename(file, '.md');
        const filePath = path.join(commandsDir, file);

        // Read the command file to extract metadata
        const content = fs.readFileSync(filePath, 'utf8');
        const metadata = parseCommandMetadata(content, commandName);

        commands.push({
          name: commandName,
          displayName: createShortDisplayName(commandName, metadata.title),
          description: createShortDescription(metadata.description, commandName),
          category: category,
          filePath: filePath,
          checked: metadata.defaultChecked || false
        });
      }
    });
  } catch (error) {
    // Directory listing might fail for non-directories, skip
    return [];
  }

  return commands;
}

/**
 * Parses command metadata from markdown file content
 * @param {string} content - The markdown content
 * @param {string} commandName - The command name
 * @returns {Object} Parsed metadata
 */
function parseCommandMetadata(content, commandName) {
  const metadata = {
    title: null,
    description: null,
    defaultChecked: false
  };

  const lines = content.split('\n');

  // Extract title from first heading
  for (let i = 0; i < Math.min(lines.length, 10); i++) {
    const line = lines[i].trim();
    if (line.startsWith('# ')) {
      metadata.title = line.substring(2).trim();
      break;
    }
  }

  // Try to find description in YAML frontmatter first
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    const descMatch = frontmatter.match(/description:(.*)/);
    if (descMatch) {
      metadata.description = descMatch[1].trim();
      // Remove quotes if present
      if (metadata.description.startsWith('"') && metadata.description.endsWith('"')) {
        metadata.description = metadata.description.slice(1, -1);
      }
    }
  }

  // Fallback: description from purpose section
  if (!metadata.description) {
    const purposeMatch = content.match(/## Purpose\s*\n\s*(.+?)(?=\n\n|\n##|$)/s);
    if (purposeMatch) {
      metadata.description = purposeMatch[1].trim().replace(/\n/g, ' ');
    }
  }

  // Determine default checked state (core commands usually checked by default)
  const coreCommands = ['test', 'lint', 'debug', 'refactor', 'generate-tests'];
  metadata.defaultChecked = coreCommands.includes(commandName);

  return metadata;
}

/**
 * Creates a short display name from command name for better console display
 * @param {string} commandName - The command name
 * @param {string} title - The full title from markdown
 * @returns {string} Short display name
 */
function createShortDisplayName(commandName, title) {
  // Return predefined short name if available
  const shortNames = {
    'api-endpoint': 'API Endpoint',
    'debug': 'Debug',
    'lint': 'Lint',
    'test': 'Test',
    'refactor': 'Refactor'
  };

  if (shortNames[commandName]) return shortNames[commandName];
  if (title && title.length <= 20) return title;

  // Create short name from command name
  return commandName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Creates a short description for better console display
 * @param {string} description - The full description
 * @param {string} commandName - The command name
 * @returns {string} Short description
 */
function createShortDescription(description, commandName) {
  if (description && description.length <= 50) return description;
  if (description) return description.substring(0, 47) + '...';
  return `${commandName.replace('-', ' ')} command`;
}

/**
 * Legacy wrapper
 */
function getCommandsForLanguageAndFramework(language, framework) {
  return getAvailableCommands();
}

module.exports = {
  getAvailableCommands,
  getCommandsForLanguageAndFramework, // Legacy
  scanCommandsInDirectory,
  parseCommandMetadata,
  createShortDisplayName,
  createShortDescription
};