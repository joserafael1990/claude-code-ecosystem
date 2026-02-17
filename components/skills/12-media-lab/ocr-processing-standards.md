# OCR Processing Standards

This skill provides standards for high-accuracy text extraction and document reconstruction from visual sources.

## Core Principles

### 1. Visual Hierarchy Mapping
- **Headers**: Map font size and weight to appropriate Markdown levels (# to ###).
- **Lists**: Maintain nesting levels for bullet points and numbered lists.
- **Tables**: Use professional Markdown table structures with alignment pipes.

### 2. Pre-processing for Accuracy
- If original image is low-contrast, suggest grayscale or adaptive thresholding before OCR.
- Detect and flag blurred regions or watermarks that might interfere with extraction.

### 3. Formatting Reconstruction
- **Bold/Italic**: Distinguish between stylistic choices and structural ones.
- **Code Blocks**: Identify mono-spaced fonts and wrap them in backticks.
- **Link Recognition**: Identify and format potential URLs into standard Markdown.

### 4. Quality Control
- **Contextual Correction**: Use LLM reasoning to fix OCR "hallucinations" (e.g., "m0dern" -> "modern").
- **Verification**: Cross-reference extracted text with visual context to ensure logical flow.
