---
author: ImMalloy
author_url: https://github.com/ImMalloy
author_avatar: https://github.com/ImMalloy.png?size=64
lang: en
translator: ImMalloy
translator_url: https://github.com/ImMalloy
---

# Data.json

::: callout info Credits
[![ImMalloy avatar](https://github.com/ImMalloy.png?size=72)](https://github.com/ImMalloy)



Translated by **[ImMalloy](https://github.com/ImMalloy)**
:::
`data.json` is basically the global control panel for your engine/mod: it defines base states, window settings, debug behavior, Discord RPC, and core runtime behavior :calvinPlan:
-# Yep, this file has real authority

::: callout tip Path
Expected location:

- `MOD/data/data.json`

There is also a base one in `ROOT/assets/data/data.json`.
:::

## How ALE Psych loads it

::: collapsible open "Real load order"
Based on `CoolVars.loadMetadata()`:

1. The engine starts with hardcoded default values.
2. If `assets/data/data.json` exists, it applies those fields.
3. If a mod is active and `mods/<mod>/data/data.json` exists, it applies those fields.

Result: your mod can override base config field-by-field.
:::

## Full field reference

| Field | Type | Default | What it does |
|---|---|---|---|
| `developerMode` | `Bool` | `false` | Enables dev-oriented behavior together with related flags. |
| `mobileDebug` | `Bool` | `false` | On desktop, enables mobile-debug path when `developerMode` is also `true`. |
| `scriptsHotReloading` | `Bool` | `false` | Enables script hot reload flows (where supported). |
| `verbose` | `Bool` | `false` | More detailed internal output/logging. |
| `allowDebugPrint` | `Bool` | `true` | Allows debug print output. |
| `initialState` | `String` | `"TitleState"` | Initial state class on game launch. |
| `freeplayState` | `String` | `"FreeplayState"` | State class for Freeplay menu. |
| `storyMenuState` | `String` | `"StoryMenuState"` | State class for Story menu. |
| `masterEditorState` | `String` | `"MasterEditorState"` | State class for master editor menu. |
| `mainMenuState` | `String` | `"MainMenuState"` | State class for main menu. |
| `optionsState` | `String` | `"OptionsState"` | State class for options menu. |
| `pauseSubState` | `String` | `"PauseSubState"` | Pause substate during gameplay. |
| `gameOverScreen` | `String` | `"GameOverSubState"` | Game over screen/substate class. |
| `transition` | `String` | `"FadeTransition"` | Transition class used between screens. |
| `loadDefaultWeeks` | `Bool` | `true` | Controls loading of engine default weeks. |
| `title` | `String` | `"Friday Night Funkin': ALE Psych"` | Window title text. |
| `icon` | `String` | `"images/appIcon"` | Base path for app/window icon asset. |
| `width` | `Int` | `1280` | Initial game/window width. |
| `height` | `Int` | `720` | Initial game/window height. |
| `windowColor` | `Array<Int>` | `[33,33,33]` | Window border color (RGB). |
| `bpm` | `Float` | `102.0` | Global BPM used by timing-dependent logic/UI. |
| `discordID` | `String` | `"1309982575368077416"` | Discord RPC application ID. |
| `discordButtons` | `Array<Object>` | ALE website button | Rich Presence buttons config. |
| `modID` | `String \| null` | `null` | ID used in save/mod-support path logic. |

## `discordButtons` (sub-structure)

Each item follows:

| Field | Type | Description |
|---|---|---|
| `label` | `String \| null` | Button label shown in Discord. |
| `url` | `String \| null` | URL opened when the button is clicked. |

## Full example

```json
{
  "developerMode": false,
  "mobileDebug": false,
  "scriptsHotReloading": false,
  "verbose": false,
  "allowDebugPrint": true,

  "initialState": "TitleState",
  "freeplayState": "FreeplayState",
  "storyMenuState": "StoryMenuState",
  "masterEditorState": "MasterEditorState",
  "mainMenuState": "MainMenuState",
  "optionsState": "OptionsState",

  "pauseSubState": "PauseSubState",
  "gameOverScreen": "GameOverSubState",
  "transition": "FadeTransition",

  "loadDefaultWeeks": true,

  "title": "Friday Night Funkin': ALE Psych",
  "icon": "images/appIcon",
  "width": 1280,
  "height": 720,
  "windowColor": [33, 33, 33],

  "bpm": 102.0,

  "discordID": "1309982575368077416",
  "discordButtons": [
    {
      "label": "ALE Psych Website",
      "url": "https://ale-psych-crew.github.io/ALE-Psych-Website/"
    }
  ],

  "modID": null
}
```

::: callout warning Watch This :queHasDicho:
If you put an invalid class name in fields like `initialState` or `mainMenuState`, startup/navigation can break.
:::

::: callout tip Pro Tip :gentleBlob:
Change one block at a time, test, then continue. Fastest way to catch mistakes early.
:::