# LLM Architecture & Engineering Standards

This skill outlines the standards for designing, deploying, and optimizing Large Language Model (LLM) systems for production environments.

## System Architecture & Serving
- **Model Selection**: choose models (Proprietary vs. Open Source) based on latency, cost, and accuracy requirements for specific tasks.
- **Serving Frameworks**: Utilize high-performance serving frameworks like vLLM, TGI, or Triton. optimize for throughput using continuous batching and PagedAttention.
- **Quantization**: implement quantization (FP8, Int4/Int8, AWQ, GGUF) to reduce memory footprint and improve inference speed without significant accuracy loss.
- **Caching**: implement KV cache optimization and semantic prompt caching to reduce redundant compute and latency for recurring requests.

## Retrieval-Augmented Generation (RAG)
- **Vector Infrastructure**: select appropriate vector databases (e.g., Pinecone, Weaviate, pgvector) based on scale and query complexity.
- **Embedding Strategies**: use optimized embedding models and implement intelligent chunking strategies (e.g., semantic chunking, sliding windows).
- **Retrieval Optimization**: Use hybrid search (vector + keyword) and reranking (e.g., Cohere Rerank) to improve retrieval precision and relevance.
- **Context Management**: Implement lost-in-the-middle mitigations and context window compression to maximize the signal-to-noise ratio in model inputs.

## Fine-Tuning & Adaptation
- **Methodology**: Prioritize Parameter-Efficient Fine-Tuning (PEFT) methods like LoRA or QLoRA for domain adaptation and task-specific optimization.
- **Dataset Curation**: Ensure high-quality, diverse, and well-structured instruction-tuning datasets. Implement rigorous data cleaning and synthetic data generation where needed.
- **Evaluation**: Implement a robust evaluation framework (e.g., RAGAS, G-Eval) to benchmark model accuracy, hallucination rates, and task performance.

## Safety, Trust & Reliability
- **Guardrails**: Implement real-time input/output filtering (e.g., Llama Guard, NeMo Guardrails) to prevent prompt injection and policy violations.
- **Hallucination Mitigation**: Use ground-truth verification and citation enforcement in RAG pipelines to ensure factuality.
- **Governance**: Maintain detailed audit logs of model interactions. comply with privacy standards (GDPR, SOC2) by anonymizing PII in prompts.
- **Cost Controls**: Implement token-based rate limiting, budget alerting, and multi-model routing (cascading) to optimize spend.

## Multi-Agent & Orchestration
- **Chains & Agents**: Design agentic workflows using frameworks like LangChain or AutoGen for complex, multi-step tasks requiring external tool use.
- **Orchestration**: Implement robust state management and memory for multi-turn conversations and long-running agent tasks.
- **Tool Use**: define clear, type-safe function schemas for LLM tool use. implement strict validation on tool outputs before returning them to the model context.
