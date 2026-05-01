# ALE Psych Docs

- This repository contains the ALE Psych documentation site built with **docmd**.
- Source content lives in `book/src`.

## Migration notes (mdBook → docmd)

- Removed mdBook config/plugins/workflow and replaced them with docmd equivalents.
- New config file: `docmd.config.js`.
- New build output directory: `site/`.
- New GitHub Pages workflow: `.github/workflows/docmd-pages.yml`.

## Local development

1. Install dependencies:
   - `npm install`
2. Run local dev server:
   - `npm run dev`
3. Build static site:
   - `npm run build`

## Deployment

- Deployment is handled by GitHub Actions workflow at `.github/workflows/docmd-pages.yml`.
- One-time repo setting: **Settings → Pages → Source = GitHub Actions**.
