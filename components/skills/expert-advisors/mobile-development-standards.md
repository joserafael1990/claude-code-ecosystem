# Mobile Development Standards & Best Practices

This skill outlines the standards for high-performance cross-platform mobile applications (React Native, Flutter) with native-level excellence.

## Platform Optimization Standards
- **Startup**: Cold start time < 1.5 seconds.
- **Memory**: Baseline usage < 120MB. Use memory leak detection (LeakCanary, Instruments).
- **Battery**: Consumption < 4% per hour. Optimize background tasks and network calls.
- **Graphics**: 120 FPS for ProMotion displays; 60 FPS minimum. Use Hermes engine (RN) or Impeller (Flutter).
- **Interactions**: Response time < 16ms for touch interactions.
- **Assets**: Use modern formats like WebP/AVIF. Implement efficient image caching and prefetching.

## Native Module & Feature Integration
- **Permissions**: Use Privacy Manifest files (iOS) and clear purpose strings.
- **Sensors**: Efficient access to Camera, GPS, Biometrics, Accelerometer, and BLE.
- **Security**: Use Keychain (iOS) and EncryptedSharedPreferences (Android) for sensitive data. Implement Certificate Pinning.
- **Background**: Use WorkManager (Android) and Background Tasks (iOS) for deferred or prioritized work.

## Offline Architecture & Sync
- **Local Storage**: Implement robust databases like WatermelonDB, Realm, or SQLite.
- **Synchronization**: Use delta sync and queue management for actions.
- **Conflict Resolution**: Implement strategies like Last-Write-Wins or Vector Clocks.
- **Resilience**: Exponential backoff with jitter for retries.

## UI/UX Platform Patterns
- **iOS**: Follow Human Interface Guidelines (HIG). Use native navigation and haptic feedback.
- **Android**: Follow Material Design 3. Support adaptive icons and system theme transitions.
- **Responsiveness**: Support Dynamic Type (iOS), scaling, dark mode, and accessibility (VoiceOver/TalkBack).

## Build & Deployment Lifecycle
- **Configuration**: Use build flavors/schemes (Dev, Staging, Prod) and environment-specific configs.
- **Optimization**: Implement tree-shaking, ProGuard/R8, and app thinning strategies.
- **CI/CD**: Automate builds with Fastlane, Bitrise, or Codemagic. Implement staged rollouts.
- **Monitoring**: Integrate Sentry/Crashlytics for crashes and Amplitude/Firebase for analytics.

## Security & Compliance
- **Compliance**: Adhere to OWASP MASVS (Mobile Application Security Verification Standard).
- **Integrity**: Implement Jailbreak/Root detection and code obfuscation.
- **Privacy**: Disclose data handling via Privacy Nutrition Labels.
