# Agregar múltiples dificultades a una canción

::: callout warning "Sin terminar (WIP)"
Todavía se está trabajando en esta página y puede cambiar.
:::

## Meta

Proporcione gráficos fáciles/normales/difíciles (o personalizados) para una canción.

## Cuándo usarlo

Cuando una canción necesita diferentes patrones de notas por dificultad.

## Archivos requeridos

```text
songs/my-song/charts/easy.json
songs/my-song/charts/normal.json
songs/my-song/charts/hard.json
```

## Pasos

1. Agregue un archivo de gráfico por dificultad en `charts/`.
2. Mantenga los nombres consistentes con los nombres de dificultad solicitados por los menús/lógica semanal.
3. Pruebe cada selección de dificultad.

## Verificar que funcionó

- Al seleccionar cada dificultad se carga el archivo del gráfico correspondiente.

## Problemas comunes

- La cadena de dificultad no coincide con el nombre del archivo del gráfico.
- Falta un archivo de dificultad