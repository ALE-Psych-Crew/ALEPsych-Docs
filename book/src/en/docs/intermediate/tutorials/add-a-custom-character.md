# Add a Custom Character

::: callout warning "Unfinished (WIP)"
This page is still being worked on and may change.
:::

## What you will build

A character with JSON config, animations, icon, and in-game usage.

## Files

```text
mods/MyMod/
  data/characters/my-char.json
  images/characters/my-char.png (+ atlas files if needed)
```

## Steps

1. Create character image/atlas in `images/characters/`.
2. Create `data/characters/my-char.json`.
3. Define animation names used by notes (`singLEFT`, etc.).
4. Set `icon`, `barColor`, offsets, and properties.
5. Reference this character from chart/week/stage usage.
6. Test in song and verify animations + icon + health bar color.

## Common mistakes

- Animation names do not match what gameplay expects
- Image path in JSON does not exist
- Missing miss/sing animations for your gameplay setup
