
const fs = require('fs');
const path = require('path');

const agentsDir = path.join(__dirname, '../components/agents');

function validateAgent(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const errors = [];
    const relPath = path.relative(agentsDir, filePath);

    // Filter: Only validate agents in numbered directories (01-10)
    const dirName = path.basename(path.dirname(filePath));
    if (!/^\d{2}-/.test(dirName)) return null;

    // 1. Check for YAML Metadata
    if (!content.startsWith('---')) {
        errors.push("Missing YAML frontmatter");
    }

    // 2. Check for "tier" metadata
    if (!content.includes('tier:')) {
        errors.push("Missing 'tier' classification (core, verified, or community)");
    }

    // 3. Check for "bloat" (Intro too long)
    const introSection = content.split('##')[0] || '';
    if (introSection.length > 500) {
        errors.push("Introduction is too verbose (> 500 characters). Move code to skills.");
    }

    // 4. Check for Outdated Tech (Examples)
    const forbidden = [/Python 2/, /Next.js 12/, /React 16/];
    forbidden.forEach(regex => {
        if (regex.test(content)) {
            errors.push(`Found outdated tech reference: ${regex}`);
        }
    });

    return { path: relPath, errors };
}

function scan(dir) {
    const results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...scan(fullPath));
        } else if (entry.name.endsWith('.md') && entry.name !== 'README.md') {
            const result = validateAgent(fullPath);
            if (result) results.push(result);
        }
    }
    return results;
}

const allResults = scan(agentsDir);
const failures = allResults.filter(r => r.errors.length > 0);

console.log(`\n🔍 Eco-Validation Report (${allResults.length} agents scanned)`);
console.log('--------------------------------------------------');

if (failures.length === 0) {
    console.log('✅ All agents meet the Ecosystem Quality Standard!');
} else {
    failures.forEach(f => {
        console.log(`❌ ${f.path}`);
        f.errors.forEach(e => console.log(`   - ${e}`));
    });
    console.log(`\n⚠️  Found issues in ${failures.length} agents.`);
    process.exit(1);
}
