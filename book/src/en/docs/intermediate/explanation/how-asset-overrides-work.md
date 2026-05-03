# How Asset Overrides Work

::: callout warning "Unfinished (WIP)"
This page is still being worked on and may change.
:::

The engine mounts mod root before base assets.

```mermaid
flowchart TD
A[Request file path] --> B{Exists in mods/<activeMod>?}
B -->|Yes| C[Use mod file]
B -->|No| D[Use assets file]
```

This applies to JSON, images, and audio lookups handled through `Paths` + asset library roots.
