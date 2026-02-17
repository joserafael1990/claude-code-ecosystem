# Prompt Engineering & Optimization Standards

This skill outlines the standards for designing, testing, and optimizing prompts for Large Language Models (LLMs) to ensure accuracy, cost-efficiency, and reliability.

## Prompt Design Patterns
- **Instructional Clarity**: define clear, unambiguous instructions using delimiters (e.g., `###`, `---`, `"""`) to separate instructions, context, and input data.
- **Few-Shot Learning**: Provide high-quality, diverse examples to guide the model's output format and reasoning. optimize example selection and ordering for maximum signal.
- **Chain-of-Thought (CoT)**: Implement CoT to improve performance on complex reasoning tasks by asking the model to "think step-by-step."
- **ReAct & Tool Use**: design prompts that enable models to interleave reasoning with technical tool use (API calls, searches) using structured output formats (JSON/XML).

## Optimization & Token Management
- **Token Efficiency**: prune unnecessary context and use concise instructions to minimize token usage and latency without compromising quality.
- **Context Compression**: implement techniques to summarize or extract only the most relevant context for the current prompt.
- **Caching**: design modular prompt templates to maximize the effectiveness of prefix caching and semantic prompt caches.
- **Output Control**: enforce structured formats (JSON, Markdown, YAML) using system prompts and few-shot examples to facilitate automated post-processing.

## Evaluation & Testing
- **Systematic Benchmarking**: Build robust test suites consisting of "Gold" datasets, edge cases, and adversarial prompts.
- **Metrics**: measure performance using objective metrics (Accuracy, F1, Exact Match) and model-based evaluation (G-Eval, RAGAS).
- **A/B Testing**: systematically A/B test prompt variations in production-like environments to quantify improvements in accuracy and cost.
- **Robustness**: verify that prompts are robust to variations in input phrasing and provide consistent outputs across multiple runs (temperature = 0).

## Management & Governance
- **Prompt Versioning**: Maintain prompts in version-controlled repositories (Git) or prompt registries. Avoid hardcoding prompts in application logic.
- **Cataloging**: maintain a central catalog of prompts with associated metadata (model version, latency, cost, accuracy score).
- **Governance**: Audit prompts for bias, toxicity, and potential injection vulnerabilities. implement safety filters for sensitive user inputs.
- **Observability**: implement monitoring for prompt performance drift and token-cost trends.
