# Rafa Agustant Portfolio

Personal portfolio for Rafa Agustant, a Computer Science fresh graduate working across product, UI/UX, data, and intelligent systems.

## Stack

- React 19 and React Router
- Vite 6
- Plain CSS with light/dark themes and reduced-motion support
- Local Fontsource packages and repository-owned media assets

## Local development

Requirements: Node.js 20 or newer and npm.

```bash
npm ci
npm run dev
```

Quality checks:

```bash
npm run lint
npm run build
npm run preview
```

## Project structure

- `src/components/` — page sections and interactions
- `src/data/` — portfolio content and asset references
- `src/assets/` — production images, documents, and tool marks
- `public/` — stable public brand and favicon files
- `scripts/` — reproducible asset-preparation utilities

The original working media archive lives outside this application repository in `../Asset Project/`. Production imports use curated, byte-identical copies under `src/assets/`, so a fresh clone can build independently.

## Deployment

The app is ready for Vercel's Vite preset. The included `vercel.json` maps shareable `/work/:slug` project URLs to the SPA entry point; static assets keep their normal generated paths.
