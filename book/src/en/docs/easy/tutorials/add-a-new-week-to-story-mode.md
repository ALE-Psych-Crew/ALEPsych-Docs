# Add a New Week to Story Mode

::: callout warning "Unfinished (WIP)"
This page is still being worked on and may change.
:::

## Goal

Create a week file that links songs into Story Mode.

## Required files

```text
mods/MyMod/
  data/
    weeks/
      week-my-mod.json
  songs/
    my-song/
      audios/
      charts/
```

## Steps

::: steps
1. **Create week file**
   Add `mods/MyMod/data/weeks/week-my-mod.json`.
2. **Define songs list**
   Add songs that match real folders under `songs/`.
3. **Set week fields**
   Add characters, background, unlock, and visibility fields.
4. **Select your mod and open Story Mode**
   Check that the week appears.
5. **Start the week**
   Confirm songs load in order.
:::

## Basic week example

```json
{
  "songs": [["My Song", "dad", [255, 255, 255]]],
  "weekCharacters": ["dad", "bf", "gf"],
  "weekBackground": "stage",
  "storyName": "My Week",
  "weekBefore": "",
  "startUnlocked": true,
  "hideStoryMode": false,
  "hideFreeplay": false
}
```

## Common mistakes

- Song names do not match folder names
- Week JSON is valid but songs are missing charts/audio
- Invalid `songs` array shape