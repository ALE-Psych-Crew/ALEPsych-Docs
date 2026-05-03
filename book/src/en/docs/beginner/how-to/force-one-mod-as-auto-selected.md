# Force One Mod as Auto-Selected

Use this when you want the engine to always load one mod.

## Required files

```text
mods/current_mod.txt
mods/MyMod/
```

## Setup

::: steps
1. **Set the mod name**
   In `mods/current_mod.txt`, write your mod folder name on line 1:
   ```text
   MyMod
   ```
2. **Make sure folder exists**
   Confirm `mods/MyMod/` is present.
3. **Launch the engine**
   The game should load that mod automatically.
:::

## Check it worked

- Startup always uses `MyMod`.
- Mod switching is blocked while forced mode is active.

## Common problems

- First line has typo or hidden spaces.
- Mod folder missing, so selection gets cleared.
