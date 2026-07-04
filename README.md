# Shirley Russell — Lake Tahoe (V1 landing page)

Museum-grade single-page site for realtor Shirley Russell (Chase International,
South Lake Tahoe). Owner/short-term-rental-first positioning. All content is
real, sourced verbatim from `../assets/assets_manifest.md`. Zero OODA branding
by design (V1 constraint).

## Run

```bash
npm install       # already run once
npm run dev       # http://localhost:5173
npm run build     # tsc --noEmit + vite build → dist/
npm run preview   # serves dist/ at http://localhost:4173
```

## Stack

- Vite 6 + React 18 + TypeScript (strict)
- Tailwind CSS v4 (`@tailwindcss/vite`, tokens in `src/index.css` `@theme`)
- framer-motion (scroll reveals; `MotionConfig reducedMotion="user"` honors OS setting)
- Self-hosted fonts via Fontsource: Cormorant Garamond (display serif) + Inter Variable (sans)
- All images bundled locally in `src/assets/img/` (no CDN hotlinks)

## Structure

- `src/data/` — site facts, verbatim reviews, real listings (single source of truth)
- `src/components/` — Nav, Hero, StatBar, Story, Owners, Reviews, Properties, Contact, Footer
- V2 insertion points (ManagementPartner, InsightsJournal) are marked as comments in `src/App.tsx` — architected, intentionally not rendered.
