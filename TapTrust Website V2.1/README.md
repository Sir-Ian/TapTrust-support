# TapTrust Website V2.1

TapTrust is a React + Vite single-page application for communicating how TapTrust simplifies mobile ID checks with Apple Wallet mobile IDs. The site uses client-side routing (React Router) with a GitHub Pages friendly fallback so deep links like `/privacy` and `/terms` continue to work when loaded directly.

## How it works
- **Frontend stack:** React 18 with Vite build tooling and Tailwind-style utility classes for layout and theming.
- **Routing:** React Router drives top-level routes (`/`, `/features`, `/how-it-works`, `/support`, `/privacy`, `/terms`, `/age-suitability`) with a `Layout` wrapper for shared navigation and footer content.
- **Build output:** `npm run build` emits production assets to `build/`, which are shipped to GitHub Pages via the included workflow.
- **SPA fallback:** A lightweight `404.html` captures unknown paths on GitHub Pages, stores the original URL, and redirects to the app so the router can render the correct screen.
- **SEO and discovery:** Canonical/meta tags, `robots.txt`, and `sitemap.xml` live in `public/` to encourage indexing and AI crawler access.

## Prerequisites
- Node.js 20+
- npm 10+

## Setup
From the repo root:
```bash
cd "TapTrust Website V2.1"
npm ci
```

## Local development
```bash
npm run dev
```
This starts Vite on http://localhost:3000 (see `vite.config.ts`) with hot reloading.

## Tests and checks
```bash
npm run build
```
`npm run build` is the current production check; it validates TypeScript, bundles assets, and ensures there are no fatal lint errors during compilation.

## Deployment
GitHub Actions (`.github/workflows/deploy.yml`) builds the site from `TapTrust Website V2.1/` and publishes `build/` to GitHub Pages. The workflow runs on pushes to the `main` branch or via manual dispatch. The `public/CNAME` file preserves the custom domain `taptrust.app` in the deployed artifact.

## Operating tips
- Keep content updates within the relevant page component to preserve layout structure.
- When adding visuals, prefer inline SVG or existing icon libraries (Lucide) to maintain the minimalist aesthetic.
- If you add new routes, include them in `public/sitemap.xml` to keep search engines and AI crawlers aware of them.
