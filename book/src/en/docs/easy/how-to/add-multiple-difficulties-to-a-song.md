# Add Multiple Difficulties to a Song

::: callout warning "Unfinished (WIP)"
This page is still being worked on and may change.
:::

## Goal

Provide easy/normal/hard (or custom) charts for one song.

## When to use it

When one song needs different note patterns per difficulty.

## Required files

```text
songs/my-song/charts/easy.json
songs/my-song/charts/normal.json
songs/my-song/charts/hard.json
```

## Steps

1. Add one chart file per difficulty in `charts/`.
2. Keep names consistent with difficulty names requested by menus/week logic.
3. Test each difficulty selection.

## Verify it worked

- Selecting each difficulty loads the matching chart file.

## Common problems

- Difficulty string does not match chart filename
- One difficulty file missing
