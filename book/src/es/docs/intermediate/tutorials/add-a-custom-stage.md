# Agregar una etapa personalizada

::: callout warning "Sin terminar (WIP)"
Todavía se está trabajando en esta página y puede cambiar.
:::

## Lo que construirás

Un JSON de escenario con configuraciones básicas y capas de sprites opcionales.

## Archivos

```text
mods/MyMod/
  data/stages/my-stage.json
  images/stages/my-stage/*
```

## Pasos

1. Cree el JSON de etapa con `zoom`, `speed` y `hud`.
2. Agregue desplazamientos de caracteres/modificadores de cámara.
3. Agregue `spritesConfig` si necesita objetos de escenario en capas.
4. Coloque las imágenes referenciadas en `images/stages/...`.
5. Utilice la identificación de etapa en el flujo del gráfico/semana y pruebe la cámara y las capas.

## Errores comunes

- `hud` señala que falta el perfil de HUD
- Los ID de las imágenes de Sprite no coinciden con los archivos reales.
- Los valores de compensación causan caracteres fuera de la pantalla.