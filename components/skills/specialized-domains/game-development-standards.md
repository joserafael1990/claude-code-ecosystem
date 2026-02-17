# Game Development & Real-Time Rendering Standards

This skill outlines the standards for developing high-performance games, real-time 3D applications, and interactive simulations.

## Performance & Optimization
- **Frame Budget**: Target a consistent frame time (16.6ms for 60fps, 33.3ms for 30fps). Profile CPU and GPU usage separately to identify bottlenecks.
- **Memory Management**: Minimize runtime allocations to prevent Garbage Collection (GC) spikes. Use Object Pooling for frequently spawned entities (bullets, particles).
- **Draw Calls**: Optimize rendering by batching draw calls (Static/Dynamic Batching) and using GPU Instancing for identical meshes.
- **Physics**: Run physics simulations on a fixed timestep. Use simplified collision meshes for complex geometry.

## Architecture & Patterns
- **Entity Component System (ECS)**: Prefer Data-Oriented Design (ECS) over deep OOP inheritance hierarchies for complex simulations to improve cache locality and parallelization.
- **State Machines**: Implement Hierarchical State Machines (HSM) or Behavior Trees for AI and Game Loops to manage complexity.
- **Event Systems**: Decouple systems using event buses (Observer pattern). Avoid tight coupling between unrelated systems (e.g., UI and Physics).

## Networking (Multiplayer)
- **Architecture**: Choose the right topology: Client-Server (authoritative) for competitive games, or P2P (Peer-to-Peer) for co-op/casual.
- **Latency Compensation**: Implement Client-Side Prediction and Server Reconciliation to mask network lag. Use Interpolation for smooth remote entity movement.
- **Bandwidth**: Compress network payloads. Only sync relevant state (Snapshot Interpolation or Delta Compression).

## Asset Pipeline
- **Level of Detail (LOD)**: Implement aggressive LOD systems for meshes and textures to reduce rendering load for distant objects.
- **Compression**: Use hardware-supported texture compression formats (ASTC, BC7). Compress audio assets based on usage (Stream long tracks, Decompress on Load for SFX).
- **Asset Bundles**: Split content into downloadable chunks (Addressables/AssetBundles) to minimize initial download size and memory footprint.

## Platform Specifics
- **Mobile**: Be mindful of thermal throttling and battery usage. Limit post-processing effects and shader complexity.
- **Console/PC**: Support variable resolutions and input methods (Gamepad/KBM). Implement extensive graphics settings menus.
