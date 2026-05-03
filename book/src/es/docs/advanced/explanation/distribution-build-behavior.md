# Comportamiento de compilación de distribución

::: advertencia "Sin terminar (WIP)"
Todavía se está trabajando en esta página y puede cambiar.
:::

El comportamiento de distribución está controlado principalmente por el modo de selección de mod y la resolución de la ruta de inicio.

- El modo forzado usa `CONTENT_MOD` y establece `UNIQUE_MOD`.
- El modo estándar se resuelve desde CLI/guardar.

Efecto práctico: los paquetes de distribución se pueden bloquear para un mod de contenido.