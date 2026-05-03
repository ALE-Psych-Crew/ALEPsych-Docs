# Agrega Tu Primera Cancion

::: callout warning "Sin terminar (WIP)"
Esta pagina todavia se esta trabajando y puede cambiar.
:::

## Objetivo

Agregar una cancion funcional con audio y un chart que cargue en el juego.

## Archivos requeridos

```text
mods/MyMod/
  songs/
    my-song/
      audios/
        Inst.ogg
        Voices.ogg
      charts/
        normal.json
```

## Pasos

::: steps
1. **Crear la carpeta de la cancion**
   Agrega `mods/MyMod/songs/my-song/`.
2. **Agregar archivos de audio**
   Coloca la instrumental en `audios/Inst.ogg` y las voces en `audios/Voices.ogg`.
3. **Agregar archivo del chart**
   Coloca el JSON de tu chart en `charts/normal.json`.
4. **Abrir el engine y seleccionar tu mod**
   Asegurate de que `MyMod` este activo.
5. **Cargar la cancion**
   Usa Freeplay o el enrutamiento de Week que apunte a `my-song`.
6. **Probar la reproduccion**
   Confirma que el chart cargue, que las notas aparezcan y que se reproduzcan Inst/Voices.
:::

## Lista rapida de pruebas

- `Inst.ogg` esta presente
- `Voices.ogg` esta presente (si se necesitan voces)
- `charts/normal.json` existe y es JSON valido
- El nombre de cancion usado por menus/weeks coincide con el nombre de la carpeta

## Errores comunes

- Nombres de archivo incorrectos (`inst.ogg` en lugar de `Inst.ogg`)
- Chart colocado fuera de `charts/`
- El nombre de la carpeta de la cancion no coincide (`my song` vs `my-song`)
- Sintaxis JSON no valida en el archivo del chart