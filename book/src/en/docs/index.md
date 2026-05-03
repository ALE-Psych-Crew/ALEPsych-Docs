# Notes

These guides are written to help you start fast and avoid common mistakes :calvinEnojao:

## How paths are used in this documentation

- If a path ends with `/`, it is a folder.
- `ROOT/` is the game root folder (where `ALEPsych.exe` is).
- `MOD/` is your mod folder: `ROOT/mods/MOD_NAME`.
- `SONG/` is a specific song folder inside `MOD/songs/`.

## Which editor to use

- ALE Psych is still in active development, so some formats can change.
- For now, using Psych Engine editors for some `.json` files is recommended.
- If an old tutorial conflicts with this guide, trust this guide and the real structure in `ROOT/assets`.

## Real file load order (important)

When a mod is selected, the engine checks mod files first, then base game assets.

1. `ROOT/mods/MOD_NAME/...`
2. `ROOT/assets/...`

That means you can override base content by recreating the same path inside your mod.
