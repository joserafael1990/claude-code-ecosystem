# Blockchain & Smart Contract Development Standards

This skill outlines the standards for designing, securing, and optimizing smart contracts and decentralized applications (DApps) on EVM-compatible chains.

## Smart Contract Security
- **Checks-Effects-Interactions**: Strictly follow this pattern. Perform checks first, update state identifiers second, and interact with external contracts last to prevent Reentrancy attacks.
- **Access Control**: Use `Ownable` or `AccessControl` (OpenZeppelin) for privileged functions. Avoid centralization risks by using Multi-Sig wallets or Timelocks for admin keys.
- **Arithmetic Safety**: Use Solidity 0.8.x+ for built-in overflow/underflow protection. Explicitly check for division by zero.
- **Randomness**: Never use on-chain data (block hash, timestamp) for randomness. Use verifiable randomness (e.g., Chainlink VRF).

## Gas Optimization
- **Data Storage**: Pack struct variables to fit into 32-byte slots (e.g., `uint128` + `uint128`). Avoid modifying storage in loops.
- **Memory vs. Calldata**: Use `calldata` instead of `memory` for read-only function arguments to save gas.
- **Loops & Arrays**: Avoid unbounded loops that could hit the block gas limit. Use mappings instead of arrays for large datasets where iteration isn't strictly necessary.
- **Events**: Emit events instead of storing data on-chain if the data is not required for contract logic (e.g., historical transaction logs).

## Development Frameworks & Testing
- **Tooling**: Prioritize Foundry (Rust-based) for speed and fuzzing capabilities, or Hardhat (TS-based) for extensive plugin compatibility.
- **Testing**:
    - **Unit Tests**: Cover 100% of functions and branches.
    - **Fuzzing**: Use property-based testing (Echidna/Foundry) to find edge cases.
    - **Fork Testing**: Test against a fork of mainnet to verify interactions with existing DeFi protocols (Uniswap, Aave).
- **Static Analysis**: Run Slither and Mythril in CI to detect common vulnerabilities automatically.

## Upgradeability & Architecture
- **Proxy Patterns**: Use the UUPS (Universal Upgradeable Proxy Standard) or Transparent Proxy patterns for upgradeable contracts. Initialize variables in an `initialize` function, not the constructor.
- **Immutability**: Clearly document which contracts are immutable and which are upgradeable.
- **Diamond Pattern**: Use EIP-2535 (Diamond Standard) for contracts exceeding the 24kb size limit that require modular facet architecture.

## Token Standards & DeFi
- **Standards**: Adhere strictly to ERC-20, ERC-721, and ERC-1155 standards. Use OpenZeppelin's reference implementations.
- **Oracles**: Use decentralized pricing oracles (Chainlink) with staleness checks and fallback mechanisms. Avoid using Spot Price from a single DEX (flash loan risk).
