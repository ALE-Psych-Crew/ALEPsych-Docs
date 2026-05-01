# ALEPsych Docs

## Documentation (mdBook)

This repository uses [mdBook](https://rust-lang.github.io/mdBook/) with source content under `book/src`.

### Local usage

1. Install mdBook + plugin binaries (pinned versions):
   - `cargo install mdbook --version 0.4.52 --locked`
   - `cargo install mdbook-admonish --version 1.20.0 --locked`
   - `cargo install mdbook-mermaid --version 0.15.0 --locked`
   - `cargo install mdbook-pagetoc --version 0.1.8 --locked`
2. Install plugin static assets into the mdBook theme:
   - `mdbook-admonish install book`
   - `mdbook-mermaid install book`
3. Build static site:
   - `mdbook build book`
4. Run local preview server:
   - `mdbook serve book --open`

Quick verification page: `book/src/plugin-showcase.md`.

Generated output is written to `book/book` and is gitignored.

### GitHub Pages deployment

A workflow at `.github/workflows/mdbook-pages.yml` builds the book on pushes to `main` (and on manual trigger), uploads the static site artifact, and deploys it with GitHub Pages actions.
