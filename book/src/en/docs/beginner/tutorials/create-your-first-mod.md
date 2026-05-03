# Create Your First Mod

To make a mod for ALE-Psych, start by creating a folder inside `mods/` with your mod name.

Then create a `data.json` file at:

```text
mods/<YourModName>/data/data.json
```

Example:

```text
mods/
  MyMod/
    data/
      data.json
```

You can start with any of the examples below.

## `data.json` examples

::: tabs

== tab "Minimal starter"
```json
{
  "title": "FNF: My Mod",
  "icon": "images/appIcon",
  "width": 1280,
  "height": 720,
  "windowColor": [33, 33, 33],
  "modID": "mymod"
}
```

== tab "Starter + dev workflow"
```json
{
  "title": "FNF: My Mod",
  "icon": "images/appIcon",
  "width": 1280,
  "height": 720,
  "windowColor": [33, 33, 33],
  "developerMode": true,
  "scriptsHotReloading": true,
  "allowDebugPrint": true,
  "loadDefaultWeeks": true,
  "modID": "mymod"
}
```

== tab "Full example"
```json
{
  "developerMode": true,
  "mobileDebug": false,
  "scriptsHotReloading": true,
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
  "title": "FNF: My Mod",
  "icon": "images/appIcon",
  "width": 1280,
  "height": 720,
  "windowColor": [33, 33, 33],
  "bpm": 102.0,
  "discordID": "1309982575368077416",
  "discordButtons": [
    {
      "label": "My Mod Page",
      "url": "https://example.com"
    }
  ],
  "modID": "mymod"
}
```

:::

## All `data.json` variables

| Variable | Type | Purpose |
|---|---|---|
| `developerMode` | `Bool` | Turns on extra developer/testing features. |
| `mobileDebug` | `Bool` | Lets you test mobile-only behavior while debugging. |
| `scriptsHotReloading` | `Bool` | Reloads scripts faster while you work. |
| `verbose` | `Bool` | Prints more detailed logs/info. |
| `allowDebugPrint` | `Bool` | Allows `debugPrint`-style messages in dev mode. |
| `initialState` | `String` | Chooses which screen opens first. |
| `freeplayState` | `String` | Chooses which class is used for Freeplay menu. |
| `storyMenuState` | `String` | Chooses which class is used for Story menu. |
| `masterEditorState` | `String` | Chooses which class is used for main editor hub. |
| `mainMenuState` | `String` | Chooses which class is used for Main Menu. |
| `optionsState` | `String` | Chooses which class is used for Options menu. |
| `pauseSubState` | `String` | Chooses which pause screen class is used. |
| `gameOverScreen` | `String` | Chooses which game-over screen class is used. |
| `transition` | `String` | Chooses the transition style/class between states. |
| `loadDefaultWeeks` | `Bool` | `true` keeps base weeks loaded; `false` hides them. |
| `title` | `String` | Text shown in the game window title bar. |
| `icon` | `String` | Icon file path prefix (for example `images/appIcon`). |
| `width` | `Int` | Game window width at startup. |
| `height` | `Int` | Game window height at startup. |
| `windowColor` | `Array<Int>` | Window border color as RGB, like `[33, 33, 33]`. |
| `bpm` | `Float` | Default BPM value used by engine metadata systems. |
| `discordID` | `String` | Discord application ID for Rich Presence integration. |
| `discordButtons` | `Array<{label,url}>` | Buttons shown in Discord Rich Presence. |
| `modID` | `Null<String>` | Custom save-data namespace so this mod can keep separate saves. |

::: callout warning "Important precedence note"
`data.json` is loaded by a dedicated loop in `CoolVars.loadMetadata()`. Its behavior can differ from general asset override expectations if both mod and base `data/data.json` exist.
:::

## How to verify it worked

1. Open Mods menu and select `MyMod`.
2. Game reloads.
3. Confirm changes matches the ones from your `data.json` file.

## Common mistakes and fixes

- `data.json` is in wrong folder:
  - Wrong: `mods/MyMod/data.json`
  - Right: `mods/MyMod/data/data.json`
- JSON syntax error:
  - Validate commas/quotes/braces.
- Wrong folder root:
  - Must be `mods/MyMod`, not `mod/MyMod`.