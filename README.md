# BondStats Correlation Explorer

Standalone, dependency-free BondStats tool for cross-asset correlation analysis.

## Features
- 20 institutional FRED series across rates, curves, credit, equities, FX, commodities, liquidity and money markets.
- Pair explorer with 3M / 1Y / 3Y / 5Y / Max windows.
- Levels or daily-change/return transformation.
- Pearson correlation, rolling 60-observation correlation, regime interpretation and a 12-series cross-asset matrix.
- Static GitHub Pages front end; refreshed JSON is committed by GitHub Actions.

## Setup
1. Create a GitHub repository named `bondstats-correlation-explorer`.
2. Upload this repository.
3. In **Settings → Secrets and variables → Actions**, add `FRED_API_KEY`.
4. Run **Actions → Refresh market data → Run workflow** once.
5. Enable **Settings → Pages → Deploy from a branch → main / root**.

FRED API v1 requires an API key. The key is used only in GitHub Actions and is never shipped to the browser.

## Data methodology
The app aligns observations by exact date. `Levels` correlates aligned raw observations. `Daily change / return` uses percentage change between adjacent shared observations; this avoids correlating unrelated price levels by default, though yield/rate users may prefer levels depending on the question. Rolling correlation uses 60 aligned transformed observations.

## Important
Correlation is not causation and can be unstable across regimes. Verify licensing/attribution requirements for each underlying FRED source series before commercial redistribution.
