# BondStats Phase 37 — Correlation Explorer native site integration

This is an additive overlay for the BondStats Astro site. It does not rebuild or replace the 576 migrated legacy pages.

## Adds
- Native BondStats route: `/tools/correlation-explorer/`
- Embedded standalone app: `https://botapi33.github.io/bondstats-correlation-explorer/`
- Tool navigation entry under `Tools → Bond Market Tools`
- SEO title and description inside the existing legacy/native router shell
- Explanatory content about rolling correlation and regime dependence
- Existing `NewPageResources` footer
- Dedicated sitemap: `/sitemap-correlation-explorer.xml`
- robots.txt sitemap reference

## Modified
- `src/pages/[...slug].astro`
- `src/pages/index.astro`
- `src/pages/robots.txt.ts`

## New
- `src/pages/sitemap-correlation-explorer.xml.ts`

The Phase 14 menu mechanics are not redesigned. The standalone Correlation Explorer remains in its own GitHub repository.

## Phase 37B display fix
- Removed the visible duplicate wrapper title/subtitle above the standalone Correlation Explorer.
- Kept one visually hidden H1 for the native BondStats route while the embedded tool supplies the visible title.
- Moved the native explanatory introduction below the tool.
- Increased iframe heights responsively to prevent the lower chart/matrix/footer from being clipped: 1540px desktop, 1820px <=900px, 2360px <=700px, 2680px <=520px.
- Existing navigation/menu mechanics and legacy pages remain unchanged.
