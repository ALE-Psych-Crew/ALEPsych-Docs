# Estructura del Mod

Aunque ALE Psych está inspirado en Psych Engine, su estructura está pensada para ser más limpia y flexible.

## Estructura recomendada

```text
MOD/
  data/
    characters/
    huds/
    notes/
    splashes/
    stages/
    strumLines/
    strums/
    weeks/
  scripts/
    classes/
    states/
    substate/
  songs/
    SONG/
      charts/
      audios/
      scripts/
  fonts/
  images/
  music/
  shaders/
  sounds/
```

## Qué carpeta usar para cada cosa

- `data/`: configuración en JSON (personajes, semanas, strumLines, stages, etc.).
- `songs/`: contenido por canción (`charts`, audio y scripts por canción).
- `scripts/`: scripts globales o reutilizables.
- `images`, `sounds`, `music`, `fonts`, `shaders`: recursos multimedia.

## Si algo no funciona

1. Revisa nombres de carpeta (mayúsculas/minúsculas y escritura exacta).
2. Comprueba que la ruta en tu mod coincide con la del recurso base.
3. Si tienes dudas, usa `ROOT/assets` como referencia de estructura.

::: callout warning Advertencia :queHasDicho:
Parte de esta estructura puede evolucionar con futuras versiones del motor.
:::
