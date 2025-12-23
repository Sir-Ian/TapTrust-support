# TapTrust Website V2.1

A Vite + React build of the TapTrust marketing site. It showcases how TapTrust helps venues accept Apple Wallet Mobile IDs and traditional barcodes in the same streamlined flow.

## Prerequisites
- Node.js 18+ (bundled with npm)

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. If you pulled fresh changes, ensure you are on a feature branch before editing (per workflow guidelines).

## Running the app
- Development server with hot reload:
  ```bash
  npm run dev
  ```
  The site will be available at `http://localhost:5173` by default.

- Production build preview:
  ```bash
  npm run build
  npm run preview
  ```

## Testing / Checks
- Run the production build to catch type and bundling issues:
  ```bash
  npm run build
  ```

## How it works
- The site is a static React SPA styled with Tailwind utility classes.
- Pages live in `src/pages`, while shared pieces (e.g., hero interactions) live in `src/components`.
- New marketing elements such as the mobile ID adoption map and infographics are rendered directly in React—no external visualization libraries are required at runtime.
- Assets from Figma are referenced with `figma:asset/...` imports that Vite resolves during the build.

## Operating tips
- Keep content updates within the relevant page component to preserve layout structure.
- When adding visuals, prefer inline SVG or existing icon libraries (Lucide) to maintain the minimalist aesthetic.
- Always run `npm run build` before committing to ensure the bundle stays healthy.
