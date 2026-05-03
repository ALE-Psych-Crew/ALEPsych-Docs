# Agregar un personaje personalizado

::: callout warning "Sin terminar (WIP)"
Todavía se está trabajando en esta página y puede cambiar.
:::

## Lo que construirás

Un personaje con configuración JSON, animaciones, íconos y uso en el juego.

## Archivos

```text
mods/MyMod/
  data/characters/my-char.json
  images/characters/my-char.png (+ atlas files if needed)
```

## Pasos

1. Crea una imagen/atlas de personaje en `images/characters/`.
2. Crea `data/characters/my-char.json`.
3. Defina los nombres de las animaciones utilizadas por las notas (`singLEFT`, etc.).
4. Establezca `icon`, `barColor`, compensaciones y propiedades.
5. Haga referencia a este personaje del gráfico/semana/uso de etapa.
6. Pruebe la canción y verifique las animaciones + ícono + color de la barra de salud.

## Errores comunes

- Los nombres de las animaciones no coinciden con lo que se espera del juego.
- La ruta de la imagen en JSON no existe
- Faltan animaciones de Miss/Sing para la configuración de tu juego.