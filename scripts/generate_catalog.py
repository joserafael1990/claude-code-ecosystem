import os
import re

def extract_frontmatter(content):
    match = re.search(r'---\s*\n(.*?)\n\s*---', content, re.DOTALL)
    if not match:
        return {}
    
    yaml_text = match.group(1)
    metadata = {}
    for line in yaml_text.split('\n'):
        if ':' in line:
            key, value = line.split(':', 1)
            metadata[key.strip()] = value.strip().strip('"').strip("'")
    return metadata

def get_better_description(content, current_desc):
    # If description is a placeholder or too short, try to find the first real paragraph
    if not current_desc or current_desc in ["<task>", "TODO", ""] or len(current_desc) < 10:
        # Remove frontmatter
        body = re.sub(r'---\s*.*?\s*---', '', content, flags=re.DOTALL).strip()
        # Remove title (Markdown #)
        body = re.sub(r'^#.*?\n', '', body).strip()
        # Remove <task> tags if present
        body = re.sub(r'<task>.*?</task>', '', body, flags=re.DOTALL).strip()
        
        # Take the first paragraph
        paragraphs = [p.strip() for p in body.split('\n\n') if p.strip()]
        if paragraphs:
            desc = paragraphs[0]
            # Clean up: remove bolding, links, etc. for a plain text summary
            desc = re.sub(r'\[(.*?)\]\(.*?\)', r'\1', desc)
            desc = desc.replace('**', '').replace('__', '')
            # Truncate
            if len(desc) > 200:
                desc = desc[:197] + "..."
            return desc
    
    # Truncate existing description if too long
    if current_desc and len(current_desc) > 200:
        current_desc = current_desc[:197] + "..."
        
    return current_desc

def generate_catalog():
    agents_dir = 'components/agents'
    output_file = 'docs/catalog.md'
    
    if not os.path.isdir(agents_dir):
        print(f"Error: {agents_dir} not found")
        return

    categories = sorted([d for d in os.listdir(agents_dir) if os.path.isdir(os.path.join(agents_dir, d))])
    
    catalog_content = "# 🤖 Full Agents Catalog\n\n"
    catalog_content += "A comprehensive list of all specialized AI personas in the Claude Code Ecosystem, organized by professional category.\n\n"
    catalog_content += "--- \n\n"

    for category in categories:
        category_name = category.split('-', 1)[1].replace('-', ' ').title() if '-' in category else category.title()
        catalog_content += f"### {category_name}\n\n"
        catalog_content += "| Agent | Tier | Model | Description |\n"
        catalog_content += "|-------|------|-------|-------------|\n"
        
        category_path = os.path.join(agents_dir, category)
        agents = sorted([f for f in os.listdir(category_path) if f.endswith('.md') and f != 'README.md'])
        
        for agent_file in agents:
            agent_path = os.path.join(category_path, agent_file)
            with open(agent_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            metadata = extract_frontmatter(content)
            name = metadata.get('name', agent_file.replace('.md', ''))
            tier = metadata.get('tier', 'community').capitalize()
            # Map tier to emoji
            tier_emoji = {
                'Core': '🏆',
                'Verified': '✅',
                'Community': '🌟',
                'Legacy': '🏛️'
            }.get(tier, '🌟')
            
            model = metadata.get('model', 'sonnet')
            raw_description = metadata.get('description', '')
            description = get_better_description(content, raw_description)
            
            # Create relative link for GitHub
            repo_link = f"../components/agents/{category}/{agent_file}"
            
            catalog_content += f"| [{name}]({repo_link}) | {tier_emoji} {tier} | `{model}` | {description} |\n"
        
        catalog_content += "\n"

    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(catalog_content)
    
    print(f"Successfully generated {output_file}")

if __name__ == "__main__":
    generate_catalog()
