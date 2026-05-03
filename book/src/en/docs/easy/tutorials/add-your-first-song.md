# Add Your First Song

::: callout warning "Unfinished (WIP)"
This page is still being worked on and may change.
:::

## Goal

Add one working song with audio and one chart that loads in-game.

## Required files

```text
mods/MyMod/
  songs/
    my-song/
      audios/
        Inst.ogg
        Voices.ogg
      charts/
        normal.json
```

## Steps

::: steps
1. **Create the song folder**
   Add `mods/MyMod/songs/my-song/`.
2. **Add audio files**
   Put instrumental in `audios/Inst.ogg` and vocals in `audios/Voices.ogg`.
3. **Add chart file**
   Put your chart JSON at `charts/normal.json`.
4. **Open the engine and select your mod**
   Make sure `MyMod` is active.
5. **Load the song**
   Use Freeplay or Week routing that points to `my-song`.
6. **Test playback**
   Confirm chart loads, notes spawn, and both Inst/Voices play.
:::

## Quick test checklist

- `Inst.ogg` is present
- `Voices.ogg` is present (if vocals are needed)
- `charts/normal.json` exists and is valid JSON
- Song name used by menus/weeks matches folder name

## Common mistakes

- Wrong file names (`inst.ogg` instead of `Inst.ogg`)
- Chart placed outside `charts/`
- Song folder name mismatch (`my song` vs `my-song`)
- Invalid JSON syntax in chart file