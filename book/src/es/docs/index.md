# Aclaraciones

Estas guías están hechas para que puedas empezar rápido y evitar errores comunes :calvinEnojao:

## Cómo leer rutas en esta documentación

- Si una ruta termina en `/`, es una carpeta.
- `ROOT/` es la carpeta principal del juego (donde está `ALEPsych.exe`).
- `MOD/` es tu carpeta de mod: `ROOT/mods/NOMBRE_DEL_MOD`.
- `SONG/` es la carpeta de una canción específica dentro de `MOD/songs/`.

## Qué motor/editor usar

- ALE Psych sigue en desarrollo y algunas rutas o formatos pueden cambiar.
- Actualmente se recomienda usar editores de Psych Engine para crear algunos `.json`.
- Si algo no coincide con un tutorial viejo, toma como referencia esta documentación y el contenido real de `ROOT/assets`.

## Orden real de carga de archivos (importante)

Cuando seleccionas un mod, el motor busca primero en tu mod y luego en `assets` del juego base.

1. `ROOT/mods/NOMBRE_DEL_MOD/...`
2. `ROOT/assets/...`

Esto significa que puedes sobrescribir contenido del juego base copiando la misma ruta dentro de tu mod.
