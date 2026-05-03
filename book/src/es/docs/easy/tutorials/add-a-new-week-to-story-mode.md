# Agregar una nueva semana al modo Historia

::: callout warning "Sin terminar (WIP)"
Todavía se está trabajando en esta página y puede cambiar.
:::

## Meta

Crea un archivo semanal que vincule canciones al modo Historia.

## Archivos requeridos

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

## Pasos

::: steps
1. **Crear archivo semanal**
   Agregue `mods/MyMod/data/weeks/week-my-mod.json`.
2. **Definir lista de canciones**
   Agregue canciones que coincidan con carpetas reales en `songs/`.
3. **Establecer campos de semana**
   Agregue personajes, fondo, desbloqueo y campos de visibilidad.
4. **Selecciona tu mod y abre el Modo Historia**
   Comprueba que aparece la semana.
5. **Empieza la semana**
   Confirma la carga de las canciones en orden.
:::

## Ejemplo de semana básica

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

## Errores comunes

- Los nombres de las canciones no coinciden con los nombres de las carpetas.
- El JSON de la semana es válido pero a las canciones les faltan gráficos/audio
- Forma de matriz `songs` no válida