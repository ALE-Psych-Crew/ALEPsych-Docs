# Forzar un mod como seleccionado automáticamente

Utilízalo cuando quieras que el motor cargue siempre un mod.

## Archivos requeridos

```text
mods/current_mod.txt
mods/MyMod/
```

## Configuración

::: steps
1. **Establece el nombre del mod**
   En `mods/current_mod.txt`, escribe el nombre de tu carpeta mod en la línea 1:
   ```text
   MyMod
   ```
2. **Asegúrese de que la carpeta exista**
   Confirme que `mods/MyMod/` esté presente.
3. **Inicia el motor**
   El juego debería cargar ese mod automáticamente.
:::

## Comprueba que funcionó

- El inicio siempre usa `MyMod`.
- El cambio de mod se bloquea mientras el modo forzado está activo.

## Problemas comunes

- La primera línea tiene errores tipográficos o espacios ocultos.
- Falta la carpeta Mod, por lo que se borra la selección.
