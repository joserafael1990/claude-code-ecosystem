# Embedded Systems & Firmware Engineering Standards

This skill outlines the standards for developing reliable, efficient firmware for limits-constrained microcontrollers and RTOS-based systems.

## Real-Time Constraints & RTOS
- **Determinism**: Guarantee deterministic behavior for critical tasks. Use Rate Monotonic Scheduling (RMS) for priority assignment (shorter deadlines = higher priority).
- **Interrupts**: Keep ISRs (Interrupt Service Routines) extremely short. Defer heavy processing to user-space tasks via semaphores or queues.
- **Concurrency**: Protect shared resources with Mutexes or Critical Sections. Be vigilant about Priority Inversion (use priority inheritance).
- **Watchdogs**: Always enable hardware Watchdog Timers (WDT) to recover from system hangs. "Kick" the dog only in the main loop or a low-priority health-check task.

## Resource Optimization
- **Memory Management**: Avoid dynamic allocation (`malloc`/`free`) in the main loop to prevent fragmentation. Use static allocation or memory pools.
- **Stack Analysis**: Perform static stack analysis. Fill stack memory with a canary pattern (e.g., `0xDEADBEEF`) to detect overflows during runtime.
- **Flash Usage**: Optimize for code size (`-Os`) where necessary. Place critical frequent functions in RAM (`.data` or `.tcm`) for speed if Flash latency is a bottleneck.

## Power Management
- **Sleep Modes**: Aggressively use low-power sleep modes. Use the "Race to Sleep" strategy: process data at max clock speed, then immediately enter deep sleep.
- **DMA**: Offload data movement (UART, SPI, ADC) to Direct Memory Access (DMA) controllers to allow the CPU to sleep or perform other tasks.
- **Peripheral Gating**: Disable clocks to unused peripherals to minimize leakage current.

## Hardware Abstraction & Architecture
- **HAL Layer**: Isolate hardware-specific register manipulation in a Hardware Abstraction Layer (HAL). Application logic should be portable across MCUs.
- **Pin Configuration**: Define pin muxing and GPIO states explicitly. Ensure deterministic state during boot/reset.
- **Communication**: Implement robust state machines for protocols (I2C, SPI, UART). Handle timeouts and bus errors gracefully (nacks, noise).

## Testing & Debugging
- **HIL Testing**: Automate Hardware-in-the-Loop (HIL) tests. Use mocked interfaces for unit testing logic on PC (x86 host).
- **Defensive Programming**: Validate all inputs from hardware (ADC readings, GPIO). Assume hardware can fail or be noisy.
- **Instrumentation**: Use lightweight logging (e.g., SEGGER RTT) or GPIO toggling for logic analyzer profiling, rather than blocking `printf`.
