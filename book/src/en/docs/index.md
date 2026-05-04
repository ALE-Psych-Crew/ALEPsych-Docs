---
author: AlejoGDOfficial
lang: en
translator: ImMalloy
---

# Clarifications

Before continuing, a few quick things so nothing explodes :calvinEnojao:

1. When reading paths, keep this in mind:
   - If the *snippet* ends with `/`, we are talking about a folder.
   - `ROOT/` = root folder of the *Engine* (where the executable is).
   - `MOD/` = `ROOT/mods/MOD_NAME`.
   - `SONG/` = song folder inside `MOD/songs/`.

2. This "edition" of the *Engine* started around mid-January, so yes, there are still things subject to change.

3. Since the *Engine* still does not include its own editors, it is recommended to use [Psych Engine](https://github.com/ShadowMario/FNF-PsychEngine) editors to create some `.json` files.

## Real load order (very important)

When you select a mod, the engine first checks your mod and then base `assets`.

1. `ROOT/mods/MOD_NAME/...`
2. `ROOT/assets/...`

This lets you override base content by replicating the same path inside your mod.
