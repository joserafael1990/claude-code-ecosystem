# FFmpeg Production Standards

This skill provides comprehensive standards and best practices for high-quality video and audio processing using FFmpeg.

## Core Principles

### 1. Non-Destructive Workflows
- Always preserve source files.
- If performing multiple operations, pipe them or use filter complexes to avoid multiple re-encoding passes.
- Use `-c copy` whenever possible for trimming and merging to avoid quality loss.

### 2. Formats and Codecs
- **Production/Edit**: ProRes 422 or DNxHR for high-fidelity intermediate files.
- **Web Distribution**: H.264 (libx264) or H.265 (libx265) for modern browsers.
- **Archive**: FFV1 for lossless storage.
- **Audio**: AAC for distribution, PCM (WAV) for production.

### 3. Compression Guidelines
- Use Constant Rate Factor (CRF) instead of fixed bitrates.
  - `crf 18`: Visually transparent.
  - `crf 23`: Standard web quality (default).
  - `crf 28`: Low quality for previews.
- Use the `preset` flag (`slow`, `slower`) to improve quality-to-filesize ratio if time allows.

### 4. Audio-Video Sync
- Always use the `-async 1` or `-af "aresample=async=1"` filters if cutting at non-keyframes.
- Match sampling rates (default 44.1kHz or 48kHz) to avoid drift.

## Filter Complex Best Practices
- Use named pads for clarity: `[v0][v1]concat=n=2:v=1:a=1[v][a]`.
- Keep complex filters human-readable with comments.

## Common Automation Patterns
- **Batch Resizing**: Scaling a folder of videos to 1080p.
- **Smart Clipping**: Extracting clips based on specific timestamps.
- **Overlaying**: Watermarking videos with transparent PNGs.
