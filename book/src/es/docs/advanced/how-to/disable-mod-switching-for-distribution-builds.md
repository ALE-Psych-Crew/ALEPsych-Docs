# Deshabilitar el cambio de mod para compilaciones de distribución

::: advertencia "Sin terminar (WIP)"
Todavía se está trabajando en esta página y puede cambiar.
:::

## Meta

Envíe una compilación bloqueada para un mod.

## Pasos

1. Configure `defines/CONTENT_MOD.define` para que apunte a un archivo que contenga el nombre de su carpeta mod.
2. Asegúrese de que la carpeta mod exista en `mods/`.
3. Pruebe que la entrada switch-mod ya no abra el menú Mods.

## Verificar

- La ruta `UNIQUE_MOD` está activa.
- La ruta de la tecla de acceso rápido de cambio de mod está deshabilitada.