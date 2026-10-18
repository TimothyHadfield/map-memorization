# progress.md: Tim's Geoguesser (map-memorization)

## START HERE
Last updated 2026-10-16. Read `CLAUDE.md` first (file map, how to run and test), then this file.

## Goal right now
None set by Tim. The app is published and working; the 2026-10-16 sweep fixed clear bugs only.

## Status
| Area | State |
|---|---|
| Site icon (tab + iPhone home screen) | Added 2026-10-17: white globe on the purple gradient; `icon.svg` + `apple-touch-icon.png` |
| Menu (region picker on the map) | Works, phone and laptop |
| Type In quiz | Works |
| Spot on Map quiz | Works, incl. small-country circles and 3-try reveal |
| Timed mode, settings | Work |
| Results screen | Works; Back/Try Again buttons sit below the fold on iPhone |
| Tests | None (no suite); verified with phone-view |

- 2026-10-16 sweep: fixed whole-region quizzes missing 13 countries, Spot-on-Map timer going below zero after a reveal, iPhone curly apostrophe/accents in Type In, a 404 on every load; added aria-labels, meta description, defer/preconnect. Report: `laptop-ops/coding-and-claude/reports/sweep-2026-10-16/map-memorization.md`.

- 2026-10-17: no browser dialogs any more. Quit-quiz confirm and the map-load-failed alert use an in-page dialog (`showDialog`/`showAlert`, `#app-dialog`, settings-modal look) that pauses the quiz timer while open; verified headless (WebKit 393px + desktop) for OK/Enter, Cancel/Escape/outside, key trap, focus return, timer pause. Commit b22799f.

## Authorized next steps
None.

## Standing instructions
- Tim's global rules apply (`~/.claude/CLAUDE.md`). No project-specific quotes recorded yet.

## Traps
- No accounts or backend, so no test account is needed.
- Country outlines load from raw.githubusercontent.com at runtime; if that is down the app shows an alert.
- See CLAUDE.md Traps.

## Decisions
- 2026-10-16: a fully ticked region includes its countries that sit in no subregion (the region checkbox reads as "the whole region").
- 2026-10-16: in timed Spot on Map, the timer running out after a reveal now moves on like any other timeout.

## NOT verified
- Real iPhone (only WebKit at iPhone size): the on-screen keyboard over the fixed quiz input, speech voice.
- The Naming Mode dropdown renders white-on-light-grey in WebKit; real iOS Safari may differ.

## Rejected / parked
(none yet)
