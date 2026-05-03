# Estructura del Mod

::: callout info Créditos
[![AlejoGDOfficial avatar](https://github.com/AlejoGDOfficial.png?size=72)](https://github.com/AlejoGDOfficial)

Escrito por **[AlejoGDOfficial](https://github.com/AlejoGDOfficial)**
:::
Aunque ALE Psych está inspirado en *Psych*, la estructura es distinta para mantener `MOD/` más ordenado y menos caótico.

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

## Para qué sirve cada parte

- `data/`: JSON de personajes, weeks, strumLines, stages, etc.
- `songs/`: contenido por canción (`charts`, audio y scripts).
- `scripts/`: scripts globales o reutilizables.
- `images`, `sounds`, `music`, `fonts`, `shaders`: recursos multimedia.

::: callout tip Pro Tip :gentleBlob:
Si algo no carga, respira y revisa:
-# Nombre exacto de carpeta/archivo
-# Ruta correcta en tu mod
-# Referencia base en `ROOT/assets`
:::

::: callout warning Advertencia :queHasDicho:
Parte de esta estructura puede cambiar con nuevas versiones del motor.
:::
