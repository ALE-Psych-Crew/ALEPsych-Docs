---
author: ImMalloy
lang: en
translator: ImMalloy
---

# Data.json

## How ALE Psych loads it

::: collapsible open "Real read order"
According to `CoolVars.loadMetadata()`:

1. Loads internal engine default values.
2. If `assets/data/data.json` exists, applies those fields.
3. If there is an active mod and `mods/<mod>/data/data.json` exists, applies those fields.

Result: your mod can override base configuration field by field.
:::

## Complete structure (fields)

| Field | Type | Default | What does it do? |
|---|---|---|---|
| `developerMode` | `Bool` | `false` | Enables development behavior along with other flags. |
| `mobileDebug` | `Bool` | `false` | On desktop, enables mobile debug path when `developerMode` is also `true`. |
| `scriptsHotReloading` | `Bool` | `false` | Enables hot reloading of scripts (if current flow uses it). |
| `verbose` | `Bool` | `false` | More detailed output/internal logs. |
| `allowDebugPrint` | `Bool` | `true` | Allows debug print output. |
| `initialState` | `String` | `"TitleState"` | Initial state when opening the game. |
| `freeplayState` | `String` | `"FreeplayState"` | State class for Freeplay. |
| `storyMenuState` | `String` | `"StoryMenuState"` | State class for Story Menu. |
| `masterEditorState` | `String` | `"MasterEditorState"` | Master editor state class. |
| `mainMenuState` | `String` | `"MainMenuState"` | Main menu state class. |
| `optionsState` | `String` | `"OptionsState"` | Options menu state class. |
| `pauseSubState` | `String` | `"PauseSubState"` | Pause substate during gameplay. |
| `gameOverScreen` | `String` | `"GameOverSubState"` | Game over substate/screen. |
| `transition` | `String` | `"FadeTransition"` | Class used for screen transitions. |
| `loadDefaultWeeks` | `Bool` | `true` | Controls whether default engine weeks are loaded. |
| `title` | `String` | `"Friday Night Funkin': ALE Psych"` | Window title. |
| `icon` | `String` | `"images/appIcon"` | Base path of app/window icon. |
| `width` | `Int` | `1280` | Initial window/resolution width. |
| `height` | `Int` | `720` | Initial window/resolution height. |
| `windowColor` | `Array<Int>` | `[33,33,33]` | Window border color (RGB). |
| `bpm` | `Float` | `102.0` | Global BPM used by logic/timing-dependent elements. |
| `discordID` | `String` | `"1309982575368077416"` | Discord RPC App ID. |
| `discordButtons` | `Array<Object>` | ALE site button | Buttons shown in Rich Presence. |
| `modID` | `String \| null` | `null` | ID used in save path/mod support logic. |

## `discordButtons` (sub-structure)

Each entry uses this format:

| Field | Type | Description |
|---|---|---|
| `label` | `String \| null` | Button text in Discord. |
| `url` | `String \| null` | URL Discord opens when clicking the button. |

## Complete example

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

::: callout warning Watch Out For This :queHasDicho:
If you write an invalid class name in fields like `initialState` or `mainMenuState`, the game can break startup or navigation.
:::

::: callout tip Pro Tip :gentleBlob:
Edit little by little: change 1 block, test, then continue. That way you detect errors quickly and avoid everything exploding at once.
:::
