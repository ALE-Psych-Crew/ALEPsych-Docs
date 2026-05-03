# Replace HUD, Notes, and Strums with Mod Assets

::: callout warning "Unfinished (WIP)"
This page is still being worked on and may change.
:::

## Goal

Replace gameplay visuals safely using files inside your mod.

## Recommended starting layout

```text
mods/MyMod/
  data/huds/myhud.json
  data/strumLines/myline.json
  data/strums/mystrums.json
  data/notes/mynotes.json
  data/splashes/mysplashes.json
  images/hud/myhud/
  images/strums/
  images/notes/
  images/splashes/
```

## Steps

::: steps
1. **Copy base JSONs first**
   Start from working defaults in base assets.
2. **Create your own IDs**
   Use `myhud`, `mystrums`, `mynotes`, `mysplashes`, `myline`.
3. **Wire IDs in strumLine JSON**
   Point `strums`, `notes`, and `splashes` to your IDs.
4. **Add matching images**
   Ensure every animation/image referenced by JSON exists.
5. **Apply HUD through stage**
   Set stage `hud` field to `myhud`.
6. **Test in gameplay**
   Check countdown, combo, arrows, notes, and splashes.
:::

::: callout warning
Do not remove required keys from gameplay JSONs unless you verified fallback behavior in runtime.
:::

## Common mistakes

- Using default IDs by accident after creating custom files
- Missing animation names expected by strumLine config
- Replacing images without updating JSON animation names
- Changing too many files at once (hard to debug)

## Safe workflow

Change one system at a time:

1. HUD
2. Strums
3. Notes
4. Splashes

Test after each step.