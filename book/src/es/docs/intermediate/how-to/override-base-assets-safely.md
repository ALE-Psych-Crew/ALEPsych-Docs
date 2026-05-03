# Sobrescribir assets base de forma segura

::: callout warning "Incompleto (WIP)"
Esta página todavía se está elaborando y puede cambiar.
:::

## Objetivo

Reemplazar assets base sin romper el comportamiento de fallback.

## Reglas seguras

1. Mantén la misma ruta relativa para sobrescribir un archivo base.
2. Mantén coherentes los formatos y nombres esperados (`.json`, `.png`, `.ogg`).
3. Parte de ejemplos base y luego edita de forma incremental.
4. Prueba casos de archivo faltante un sistema a la vez.

## Verificar que funcionó

- El archivo del mod se usa cuando está presente.
- El asset base se usa cuando el archivo del mod está ausente.

## Nota de incertidumbre

Los mensajes/detalles de error por sistema pueden variar y no están totalmente centralizados.