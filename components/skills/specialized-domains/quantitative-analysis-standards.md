# Quantitative Analysis & Algorithmic Trading Standards

This skill outlines the standards for developing, backtesting, and validating quantitative trading strategies and financial models.

## Backtesting Rigor
- **Bias Prevention**: rigorously eliminate Look-Ahead Bias (using future data) and Survivorship Bias (ignoring delisted assets).
- **Walk-Forward Analysis**: Use sliding window validation (Train/Test splits over time) rather than a single in-sample optimization to detect overfitting.
- **Transaction Costs**: Realistic modeling of slippage, commissions, and bid-ask spread is mandatory. A strategy is only viable if it survives these costs.

## Risk Management & Metrics
- **Key Metrics**: Optimize for risk-adjusted returns (Sharpe Ratio, Sortino Ratio) rather than raw CAGR.
- **Drawdown Control**: Hard constraints on Maximum Drawdown (MDD). Implement volatility targeting or stop-loss mechanisms to preserve capital.
- **Value at Risk (VaR)**: Calculate VaR using Historical or Monte Carlo simulation methods to estimate potential tail losses.

## Mathematical Modeling
- **Derivatives Pricing**: Use Black-Scholes-Merton for European options and Binomial Trees/Monte Carlo for American/Exotic options.
- **Statistical Arbitrage**: Test for stationarity (ADF test) and cointegration (Johansen test) before deploying mean-reversion pairs strategies.
- **Time Series**: De-trend and difference non-stationary data. Handle seasonality using SARIMA or Prophet models.

## Data Hygiene
- **Adjustments**: Use Split-Adjusted and Dividend-Adjusted prices for long-term backtests.
- **Tick Data**: High-Frequency Trading (HFT) models must use tick-level or order book (Level 2/3) data, not aggregated OHLC bars.
- **Sanity Checks**: Filter anomalies (spikes, bad ticks) using statistical filters (e.g., Median Absolute Deviation).
