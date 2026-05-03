# Add a Custom Stage

::: callout warning "Unfinished (WIP)"
This page is still being worked on and may change.
:::

## What you will build

A stage JSON with base settings and optional sprite layers.

## Files

```text
mods/MyMod/
  data/stages/my-stage.json
  images/stages/my-stage/*
```

## Steps

1. Create stage JSON with `zoom`, `speed`, and `hud`.
2. Add character offsets/camera modifiers.
3. Add `spritesConfig` if you need layered stage objects.
4. Put referenced images in `images/stages/...`.
5. Use stage id in chart/week flow and test camera + layers.

## Common mistakes

- `hud` points to missing HUD profile
- Sprite image IDs do not match real files
- Offset values cause off-screen characters
