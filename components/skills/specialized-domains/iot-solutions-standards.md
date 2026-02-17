# IoT Solutions & Edge Engineering Standards

This skill outlines the standards for designing massive-scale IoT systems, covering device connectivity, edge processing, and cloud integration.

## Connectivity & Protocols
- **Protocol Selection**: Use MQTT (with TLS) for continuous power-available devices. Use CoAP or MQTT-SN for constrained, battery-operated devices.
- **LoRaWAN/Sigfox**: For long-range, low-power scenarios, verify gateway coverage and adhere to duty cycle limitations.
- **Offline Capability**: Edge devices must buffer data locally during network outages and sync (FIFO) upon reconnection.
- **Keep-Alives**: Optimize heartbeat/keep-alive intervals to balance connection state awareness with cellular data costs/battery drain.

## Device Security (Zero Trust)
- **Mutual TLS (mTLS)**: Mandate unique X.509 certificates for every device. Never share "group keys" or generic credentials.
- **Secure Boot**: Ensure the hardware root of trust prevents unauthorized firmware from booting.
- **Firmware Signing**: Digitally sign all OTA (Over-The-Air) updates. Verify signatures on the device before applying.

## Edge Computing & Fleet Management
- **Edge Intelligence**: Filter and aggregate high-frequency sensor data (e.g., vibration, audio) locally on the gateway/edge device to reduce cloud ingress costs.
- **Device Shadows**: Use Device Shadows (AWS/Azure) to decouple device state from application logic. Apps read/write to the shadow; the device syncs when online.
- **OTA Updates**: Implement A/B partition updates for fail-safe rollback. Roll out updates in staggered waves (Canary -> 1% -> 10% -> 100%).

## Cloud Data Pipeline
- **Hot vs. Cold Paths**: Split data streams.
    - **Hot Path**: Low-latency stream processing (Lambda/Functions) for alerts and real-time dashboards.
    - **Cold Path**: Batch storage (S3/Data Lake) for historical analysis and ML training.
- **Time-Series Storage**: Use specialized time-series databases (TimescaleDB, InfluxDB) for sensor telemetry query performance.
