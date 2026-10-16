# Tim's Geoguesser (repo: map-memorization)

A map quiz for learning the world's countries. Tim uses it himself on his iPhone and laptop; there are no accounts and no backend.
The player ticks regions on a world map, then plays **Type In** (name every highlighted country) or **Spot on Map** (tap the country asked for).

- **Live:** https://timothyhadfield.github.io/map-memorization/
- **Repo:** TimothyHadfield/map-memorization (public). GitHub Pages serves `main` from the repo root, so a push to `main` is a deploy.
- Read `progress.md` next (state, traps, NOT verified).

## File map
- `index.html`: the whole app (CSS, markup and all JS inline, ~2000 lines). Screens are `.screen` divs switched by `showScreen()`: menu, quiz-select, quiz, results, plus the settings modal.
- `data/countries-data.js`: `COUNTRY_DATA` = 194 countries keyed by ISO-3 (`name`, `exactName`, `aliases`, `pronunciation`, ranks) and `categories` (region and World-list ISO arrays).
- `docs/screenshots/`: images for the README only.
- Ignored and not part of the web app (they exist only in Tim's main checkout): `jetpunk_cheat.py`, `AUTO-TYPER.md`, `requirements.txt`, a separate desktop auto-typer script.

## How it works (things that aren't obvious)
- Country outlines are **not in the repo**. `loadGeoJson()` fetches them at runtime from `raw.githubusercontent.com/datasets/geo-countries` (fallback `johan/world.geo.json`). Features carry `ISO3166-1-Alpha-3`; `getCountryIso()` reads it. All 194 ISO codes matched a feature on 2026-10-16.
- Leaflet 1.9.4 from unpkg, loaded with `defer`. The inline script only defines functions and a `DOMContentLoaded` listener, so `defer` is safe; don't call `L` or `COUNTRY_DATA` at the top level of the inline script.
- The region checkboxes on the menu map are **clones** of the hidden `.category-overlay` markup, put into Leaflet divIcons by `createCategoryMarkers()` (re-made on every change). So every checkbox id exists twice; in tests target the clone with `#menu-map #cat-...`.
- A region's checkbox is "all of its subregions". `getSelectedCountries()` adds the region's full list (`COUNTRY_DATA.categories[parent]`) when every subregion is ticked, because USA/CAN/MEX and East/Central Asia belong to no subregion.
- Type-in matching goes through `normalizeName()`: accents stripped, curly apostrophes made straight, lowercase. Exact mode compares against `exactName`.
- Settings live in `localStorage['tims-geoguesser-settings']`, best scores in `localStorage['tims-geoguesser-scores']` (never shown in the UI).

## Run locally
`python -m http.server 8104` in this folder (background), then open http://localhost:8104/. It needs internet for Leaflet and the GeoJSON.

## Test
There is no test suite and no build. Verify with phone-view and `--do` / `--eval`, for example:
- `node ~/.claude/tools/phone-view.mjs http://localhost:8104/ --do "click:#menu-map #cat-sa" --do "click:.start-quiz-btn" --do "click:text=Type In" --do "fill:#country-input=brazil" --eval "document.getElementById('quiz-progress').textContent"` should give `1 / 12`.
- Clicking polygons by selector is impractical; call `handleCountryClick(iso)` from `--eval` for Spot on Map.
- `--local 'tims-geoguesser-settings={"timedMode":true}'` turns settings on before load.
- Playwright auto-dismisses `confirm()`, so the quiz back button stays on the quiz in tests.

## Traps
- The menu map is non-deterministic in the first screenshots (GeoJSON arrives late); compare screenshots taken with the same wait.
- The phone quiz map often stays zoomed out (Leaflet's whole-number zoom plus far-flung islands like the Azores and Canaries in a region's bounds). Known; Tim hasn't asked for a change.
- Don't commit a local copy of the GeoJSON without asking: it is several MB.
