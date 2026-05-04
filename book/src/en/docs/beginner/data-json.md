---
author: AlejoGDOfficial
lang: en
translator: ImMalloy
---

## data.json

Every *mod* must include this file, because it defines important aspects of the game, especially developer options. :ommmHD:

| Field | Type | Value | Function |
|---|---|---|---|
| `developerMode` | `Bool` | `false` | Allows developer tools to be enabled |
| `mobileDebug` | `Bool` | `false` | On desktop platforms, allows viewing the interface as if it were on mobile |
| `scriptsHotReloading` | `Bool` | `false` | Allows *scripts* to restart the current *state* when edited |
| `verbose` | `Bool` | `false` | Enables extra *prints/logs* (Useful to see more precisely what the game does or does not do) |
| `allowDebugPrint` | `Bool` | `true` | Allows *prints* to be shown in the game window |
| `initialState` | `String` | `"TitleState"` | *State* shown when starting the game |
| `freeplayState` | `String` | `"FreeplayState"` | *State* shown for *Freeplay* |
| `storyMenuState` | `String` | `"StoryMenuState"` | *State* shown for the *Story Mode* Menu |
| `masterEditorState` | `String` | `"MasterEditorState"` | *State* shown for the Editors Menu |
| `mainMenuState` | `String` | `"MainMenuState"` | *State* shown for the Main Menu |
| `optionsState` | `String` | `"OptionsState"` | *State* shown for the Options Menu |
| `pauseSubState` | `String` | `"PauseSubState"` | *SubState* shown for the Pause Menu |
| `gameOverScreen` | `String` | `"GameOverSubState"` | *SubState* shown for the Game Over Screen |
| `transition` | `String` | `"FadeTransition"` | *SubState* shown during transitions between menus |
| `loadDefaultWeeks` | `Bool` | `true` | Defines whether *weeks* from `ASSETS/` are loaded |
| `title` | `String` | `"Friday Night Funkin': ALE Psych"` | Window title |
| `icon` | `String` | `"images/appIcon"` | *App* icon path (from `MOD/`) |
| `width` | `Int` | `1280` | Game width |
| `height` | `Int` | `720` | Game height |
| `windowColor` | `Array<Int>` | `[33, 33, 33]` | Window border color (RGB) |
| `bpm` | `Float` | `102.0` | BPM used in menus |
| `discordID` | `String` | `"1309982575368077416"` | *Discord RPC* *App ID* |
| `discordButtons` | `Array<ALEDataDiscordButton>` | `[...]` | Buttons shown in *Discord RPC* |
| `modID` | `Null<String>` | `null` | Save files path |

### `ALEDataDiscordButton`

| Field | Type | Function |
|---|---|---|
| `label` | `Null<String>` | Button text |
| `url` | `Null<String>` | Button URL |

::: callout tip Pro Tip :gentleBlob:
Add only the fields you are going to override to your file
:::

::: callout danger Watch Out! :qdijiste:
If you indicate a *state* that does not exist in the `initialState` field, the game will keep a black screen until restart or until a *mod* containing the indicated *state* is selected
:::
