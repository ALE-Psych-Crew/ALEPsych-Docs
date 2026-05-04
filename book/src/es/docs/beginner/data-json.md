---
author: AlejoGDOfficial
lang: es
---

## data.json

En todo *mod* se debe incluir este archivo, debido a que este define aspectos importantes del juego, sobre todo, las opciones de desarrollador. :ommmHD:

| Campo | Tipo | Valor | Función |
|---|---|---|---|
| `developerMode` | `Bool` | `false` | Permite que las herramientas de desarollador sean habilitadas |
| `mobileDebug` | `Bool` | `false` | En plataformas de escritorio, permite visualizar la interfaz como si se estuviera en móvil |
| `scriptsHotReloading` | `Bool` | `false` | Permite que los *scripts* reinicien el *state* actual al ser editados |
| `verbose` | `Bool` | `false` | Habilita *prints/logs* de más cosas (Útil para visualizar con más precisión que hace o no el juego) |
| `allowDebugPrint` | `Bool` | `true` | Permite la visualización de *prints* en la ventana del juego |
| `initialState` | `String` | `"TitleState"` | *State* mostrado al iniciar el juego |
| `freeplayState` | `String` | `"FreeplayState"` | *State* mostrado para el *Freeplay* |
| `storyMenuState` | `String` | `"StoryMenuState"` | *State* mostrado para el Menú del *Modo Historia* |
| `masterEditorState` | `String` | `"MasterEditorState"` | *State* mostrado para el Menú de Editores |
| `mainMenuState` | `String` | `"MainMenuState"` | *State* mostrado para el Menú Principal |
| `optionsState` | `String` | `"OptionsState"` | *State* mostrado para el Menú de Opciones |
| `pauseSubState` | `String` | `"PauseSubState"` | *SubState* mostrado para el Menú de Pausa |
| `gameOverScreen` | `String` | `"GameOverSubState"` | *SubState* mostrado para la Pantalla de GameOver |
| `transition` | `String` | `"FadeTransition"` | *SubState* mostrado durante la transición entre menús |
| `loadDefaultWeeks` | `Bool` | `true` | Define si se cargan las *weeks* de `ASSETS/` |
| `title` | `String` | `"Friday Night Funkin': ALE Psych"` | Título de la ventana |
| `icon` | `String` | `"images/appIcon"` | Ruta del Ícono de la *App* (A partir de `MOD/`) |
| `width` | `Int` | `1280` | Anchura del Juego |
| `height` | `Int` | `720` | Altura del Juego |
| `windowColor` | `Array<Int>` | `[33, 33, 33]` | Color de borde de la Ventana (RGB) |
| `bpm` | `Float` | `102.0` | BPM usado en los Menús |
| `discordID` | `String` | `"1309982575368077416"` | *App ID* del *Discord RPC* |
| `discordButtons` | `Array<ALEDataDiscordButton>` | `[...]` | Botones mostrados en el *Discord RPC* |
| `modID` | `Null<String>` | `null` | Ruta de los Archivos de Guardado |

### `ALEDataDiscordButton`

| Campo | Tipo | Función |
|---|---|---|
| `label` | `Null<String>` | Texto del Botón |
| `url` | `Null<String>` | URL del Botón |

::: callout tip Pro Tip :gentleBlob:
Añade a tu archivo solamente los campos que vayas a sobreescribir
:::

::: callout danger ¡Cuidado! :qdijiste:
Si indicas un *state* que no existe en el campo `initialState`, el juego mantendrá la pantalla en negro hasta que se reinicie o se elija un *mod* que contenga el *state* indicado
:::