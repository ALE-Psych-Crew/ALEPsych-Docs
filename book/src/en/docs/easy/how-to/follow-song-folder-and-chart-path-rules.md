# Follow Song Folder and Chart Path Rules

::: callout warning "Unfinished (WIP)"
This page is still being worked on and may change.
:::

## Goal

Use exact paths the loader expects, so songs resolve reliably.

## Required path shape

```text
songs/<song>/audios/Inst.ogg
songs/<song>/audios/Voices.ogg
songs/<song>/charts/<difficulty>.json
```

## Why this matters

`Formatter.getSong(name, difficulty)` builds the chart path directly and song audio is loaded from fixed `audios` names.

## Verification checklist

- Song folder name matches requested song id
- `Inst.ogg` exists
- `Voices.ogg` exists (if chart uses vocals)
- Difficulty chart file exists
