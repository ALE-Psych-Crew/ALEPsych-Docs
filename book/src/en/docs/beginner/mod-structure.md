# Mod Structure

::: callout info Credits
[![AlejoGDOfficial avatar](https://github.com/AlejoGDOfficial.png?size=72)](https://github.com/AlejoGDOfficial)

Written by **[AlejoGDOfficial](https://github.com/AlejoGDOfficial)**
:::
Even though ALE Psych is inspired by Psych Engine, its structure is designed to be cleaner and more flexible.

## Recommended structure

```text
MOD/
  data/
    characters/
    huds/
    notes/
    splashes/
    stages/
    strumLines/
    strums/
    weeks/
  scripts/
    classes/
    states/
    substate/
  songs/
    SONG/
      charts/
      audios/
      scripts/
  fonts/
  images/
  music/
  shaders/
  sounds/
```

## What each folder is for

- `data/`: JSON configuration (characters, weeks, strumLines, stages, etc.).
- `songs/`: per-song content (`charts`, audio, song scripts).
- `scripts/`: global or reusable scripts.
- `images`, `sounds`, `music`, `fonts`, `shaders`: media assets.

## If something is not loading

1. Check folder/file names carefully (including capitalization).
2. Verify your mod path matches the base resource path.
3. Use `ROOT/assets` as the reference layout.

::: callout warning Warning :queHasDicho:
Parts of this structure may evolve in future engine versions.
:::
