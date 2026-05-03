# Support Desktop and Mobile Asset Differences

::: callout warning "Unfinished (WIP)"
This page is still being worked on and may change.
:::

## Goal

Handle platform-specific behavior without breaking mod content.

## What is verified

- Mobile mode can be toggled by platform/dev flags.
- Engine has mobile-specific setup branches.

## Guidance

- Keep shared content in common paths first.
- Test mobile and desktop separately before release.
- Avoid assuming desktop-only features in scripts/UI.

::: callout info
Detailed mobile asset-branching conventions are not fully centralized in one schema; manual runtime testing is required.
:::
