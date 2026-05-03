# Data.json

`data.json` es básicamente el panel de control global del engine/mod: define estados base, ventana, debug, Discord RPC y comportamiento general :calvinPlan:
-# Sí, este archivo manda bastante

::: callout tip Ruta
Ubicación esperada:

- `MOD/data/data.json`

También existe uno base en `ROOT/assets/data/data.json`.
:::

## Cómo lo carga ALE Psych

::: collapsible open "Orden de lectura real"
Según `CoolVars.loadMetadata()`:

1. Carga valores por defecto internos del engine.
2. Si existe `assets/data/data.json`, aplica esos campos.
3. Si hay mod activo y existe `mods/<mod>/data/data.json`, aplica esos campos.

Resultado: tu mod puede sobrescribir la configuración base campo por campo.
:::

## Estructura completa (campos)

| Campo | Tipo | Default | ¿Qué hace? |
|---|---|---|---|
| `developerMode` | `Bool` | `false` | Habilita comportamientos de desarrollo junto con otros flags. |
| `mobileDebug` | `Bool` | `false` | En desktop, activa ruta de debug móvil cuando `developerMode` también está en `true`. |
| `scriptsHotReloading` | `Bool` | `false` | Activa recarga en caliente de scripts (si el flujo actual lo usa). |
| `verbose` | `Bool` | `false` | Más salida detallada/logs internos. |
| `allowDebugPrint` | `Bool` | `true` | Permite impresiones de debug. |
| `initialState` | `String` | `"TitleState"` | Estado inicial al abrir el juego. |
| `freeplayState` | `String` | `"FreeplayState"` | Clase de estado para Freeplay. |
| `storyMenuState` | `String` | `"StoryMenuState"` | Clase de estado para Story Menu. |
| `masterEditorState` | `String` | `"MasterEditorState"` | Clase de estado del editor maestro. |
| `mainMenuState` | `String` | `"MainMenuState"` | Clase de estado del menú principal. |
| `optionsState` | `String` | `"OptionsState"` | Clase de estado del menú de opciones. |
| `pauseSubState` | `String` | `"PauseSubState"` | Subestado de pausa durante gameplay. |
| `gameOverScreen` | `String` | `"GameOverSubState"` | Subestado/pantalla de game over. |
| `transition` | `String` | `"FadeTransition"` | Clase usada para transiciones de pantalla. |
| `loadDefaultWeeks` | `Bool` | `true` | Controla si se cargan weeks por defecto del engine. |
| `title` | `String` | `"Friday Night Funkin': ALE Psych"` | Título de la ventana. |
| `icon` | `String` | `"images/appIcon"` | Ruta base del icono de app/ventana. |
| `width` | `Int` | `1280` | Ancho de ventana/resolución inicial. |
| `height` | `Int` | `720` | Alto de ventana/resolución inicial. |
| `windowColor` | `Array<Int>` | `[33,33,33]` | Color de borde de ventana (RGB). |
| `bpm` | `Float` | `102.0` | BPM global usado por lógica/elementos dependientes. |
| `discordID` | `String` | `"1309982575368077416"` | App ID de Discord RPC. |
| `discordButtons` | `Array<Object>` | botón al sitio ALE | Botones mostrados en Rich Presence. |
| `modID` | `String \| null` | `null` | ID usado en rutas de guardado/mod support. |

## `discordButtons` (sub-estructura)

Cada entrada usa este formato:

| Campo | Tipo | Descripción |
|---|---|---|
| `label` | `String \| null` | Texto del botón en Discord. |
| `url` | `String \| null` | URL que abrirá Discord al pulsar el botón. |

## Ejemplo completo

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

::: callout warning Ojo Con Esto :queHasDicho:
Si escribes un nombre de clase inválido en campos como `initialState` o `mainMenuState`, el juego puede romper arranque o navegación.
:::

::: callout tip Pro Tip :gentleBlob:
Edita poco a poco: cambia 1 bloque, prueba, luego sigue. Así detectas errores rápido y no te explota todo junto.
:::