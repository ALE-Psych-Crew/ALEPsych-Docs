# Crea tu primer mod

Para crear un mod para ALE-Psych, comience creando una carpeta dentro de `mods/` con su nombre de mod.

Luego cree un archivo `data.json` en:

```text
mods/<YourModName>/data/data.json
```

Ejemplo:

```text
mods/
  MyMod/
    data/
      data.json
```

Puede comenzar con cualquiera de los ejemplos siguientes.

## `data.json` ejemplos

::: pestañas

== pestaña "Iniciador mínimo"
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

== pestaña "Flujo de trabajo de inicio + desarrollo"
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

== pestaña "Ejemplo completo"
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

## Todas las variables `data.json`

| Variables | Tipo | Propósito |
|---|---|---|
| `developerMode` | `Bool` | Activa funciones adicionales de desarrollador/prueba. |
| `mobileDebug` | `Bool` | Le permite probar el comportamiento solo en dispositivos móviles durante la depuración. |
| `scriptsHotReloading` | `Bool` | Recarga los scripts más rápido mientras trabajas. |
| `verbose` | `Bool` | Imprime registros/información más detallados. |
| `allowDebugPrint` | `Bool` | Permite mensajes estilo `debugPrint` en modo de desarrollo. |
| `initialState` | `String` | Elige qué pantalla se abre primero. |
| `freeplayState` | `String` | Elige qué clase se utiliza para el menú Freeplay. |
| `storyMenuState` | `String` | Elige qué clase se utiliza para el menú Historia. |
| `masterEditorState` | `String` | Elige qué clase se utiliza para el centro del editor principal. |
| `mainMenuState` | `String` | Elige qué clase se utiliza para el menú principal. |
| `optionsState` | `String` | Elige qué clase se utiliza para el menú Opciones. |
| `pauseSubState` | `String` | Elige qué clase de pantalla de pausa se utiliza. |
| `gameOverScreen` | `String` | Elige qué clase de pantalla de finalización del juego se utiliza. |
| `transition` | `String` | Elige el estilo/clase de transición entre estados. |
| `loadDefaultWeeks` | `Bool` | `true` mantiene cargadas las semanas base; `false` los oculta. |
| `title` | `String` | Texto que se muestra en la barra de título de la ventana del juego. |
| `icon` | `String` | Prefijo de ruta de archivo de icono (por ejemplo `images/appIcon`). |
| `width` | `Int` | Ancho de la ventana del juego al inicio. |
| `height` | `Int` | Altura de la ventana del juego al inicio. |
| `windowColor` | `Array<Int>` | El color del borde de la ventana es RGB, como `[33, 33, 33]`. |
| `bpm` | `Float` | Valor BPM predeterminado utilizado por los sistemas de metadatos del motor. |
| `discordID` | `String` | ID de aplicación de Discord para la integración de Rich Presence. |
| `discordButtons` | `Array<{label,url}>` | Botones que se muestran en Discord Rich Presence. |
| `modID` | `Null<String>` | Espacio de nombres de datos guardados personalizado para que este mod pueda mantener guardados separados. |

::: advertencia de texto "Nota de precedencia importante"
`data.json` se carga mediante un bucle dedicado en `CoolVars.loadMetadata()`. Su comportamiento puede diferir de las expectativas generales de anulación de activos si existen tanto mod como base `data/data.json`.
:::

## Cómo verificar que funcionó

1. Abra el menú Mods y seleccione `MyMod`.
2. Recargas del juego.
3. Confirme que los cambios coincidan con los de su archivo `data.json`.

## Errores comunes y correcciones

- `data.json` está en la carpeta incorrecta:
  - Incorrecto: `mods/MyMod/data.json`
  - Derecha: `mods/MyMod/data/data.json`
- Error de sintaxis JSON:
  - Validar comas/comillas/llaves.
- Raíz de carpeta incorrecta:
  - Debe ser `mods/MyMod`, no `mod/MyMod`.