# Siga las reglas de ruta de gráficos y carpetas de canciones

::: callout warning "Sin terminar (WIP)"
Todavía se está trabajando en esta página y puede cambiar.
:::

## Meta

Utilice las rutas exactas que espera el cargador, para que las canciones se resuelvan de manera confiable.

## Forma de ruta requerida

```text
songs/<song>/audios/Inst.ogg
songs/<song>/audios/Voices.ogg
songs/<song>/charts/<difficulty>.json
```

## Por qué esto es importante

`Formatter.getSong(name, difficulty)` crea la ruta del gráfico directamente y el audio de la canción se carga desde nombres fijos de `audios`.

## Lista de verificación de verificación

- El nombre de la carpeta de canciones coincide con la identificación de la canción solicitada.
- `Inst.ogg` existe
- `Voices.ogg` existe (si el gráfico usa voces)
- Existe un archivo de tabla de dificultades.