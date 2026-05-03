# Disable Mod Switching for Distribution Builds

::: callout warning "Unfinished (WIP)"
This page is still being worked on and may change.
:::

## Goal

Ship a build locked to one mod.

## Steps

1. Configure `defines/CONTENT_MOD.define` to point at a file containing your mod folder name.
2. Ensure that mod folder exists in `mods/`.
3. Test that switch-mod input no longer opens Mods menu.

## Verify

- `UNIQUE_MOD` path is active.
- Mod-switch hotkey path is disabled.
