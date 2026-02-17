# Anthropic Prompt Engineering Standards

This skill provides comprehensive standards and best practices for crafting highly effective prompts for Claude models, based on official Anthropic documentation and ecosystem patterns.

## Core Principles

### 1. Be Direct & Specific
- **Contextual Information**: Always provide context (audience, goals, workflow integration).
- **Sequential Instructions**: Use numbered lists for complex multi-step tasks.
- **Output Specifications**: Define exactly what the response should look like (structure, format, length).

### 2. Use XML Tags
- Use XML tags (`<context>`, `<instructions>`, `<example>`, `<task>`) to structure information. 
- XML tags help Claude distinguish between instructions, examples, and user data, significantly reducing confusion and improving adherence.

### 3. Provide Examples (Few-Shot Prompting)
- Include 1-3 high-quality examples of the target behavior.
- Examples should maintain the exact tone and format requested in the instructions.

### 4. Give Claude "Room to Think"
- For complex logic, instruct Claude to think step-by-step or use `<thought>` tags before providing the final answer.
- This improves reasoning performance on mathematical, logical, and coding tasks.

### 5. Role Prompting
- Assign a specific persona to Claude (e.g., "You are a specialized DevOps Engineer").
- This sets the tone and activates the relevant domain knowledge.

## Advanced Strategies

### The "Manager" Approach
For mission-critical agent systems, treat Claude as a new employee who needs:
- Detailed role definition.
- Comprehensive task breakdown with decision points.
- Explicit constraints (what *not* to do).
- Error handling procedures (how to respond if information is missing).

### The "Escape Hatch"
Always provide an instruction for uncertainty:
> "If you do not have enough information to make a determination, say 'I don't know' and ask for clarification. Never guess or make up information."

## Visual and Structural Best Practices
- **Markdown Headers**: Use `#`, `##`, `###` for clear hierarchy.
- **Separation**: Use horizontal rules (`---`) or XML tags to separate distinct sections of a prompt.
- **Variables**: Use consistent variable placeholders like `$ARGUMENTS` or `{{VARIABLE}}`.

## Prompt Improvement Workflow
1. **Draft**: Create initial instruction set.
2. **Review**: Check against these standards.
3. **Test**: Run with diverse inputs.
4. **Refine**: Add "MUST" or "IMPORTANT" for points Claude missed.
5. **Iterate**: Occasionally use a prompt improver tool/agent to optimize phrasing.
