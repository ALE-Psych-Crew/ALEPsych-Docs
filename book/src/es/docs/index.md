---
author: AlejoGDOfficial
lang: es
---

# Aclaraciones

Antes de seguir, unas cositas rápidas para que no explote nada :calvinEnojao:

1. A la hora de leer rutas, ten en cuenta esto:
   - Si el *snippet* termina en `/`, estamos hablando de una carpeta.
   - `ROOT/` = carpeta raíz del *Engine* (donde está el ejecutable).
   - `MOD/` = `ROOT/mods/NOMBRE_DEL_MOD`.
   - `SONG/` = carpeta de una canción dentro de `MOD/songs/`.

2. Esta "edición" del *Engine* empezó a mediados de enero, así que sí, todavía hay cosas sujetas a cambios.

3. Como el *Engine* **aún** no trae editores propios, se recomienda usar los de [Psych Engine](https://github.com/ShadowMario/FNF-PsychEngine) para crear algunos `.json`.

## Orden real de carga (importantísimo)

Cuando seleccionas un mod, el motor primero busca en tu mod y luego en `assets` base.

1. `ROOT/mods/NOMBRE_DEL_MOD/...`
2. `ROOT/assets/...`

Esto te deja sobrescribir contenido base replicando la misma ruta dentro de tu mod.
