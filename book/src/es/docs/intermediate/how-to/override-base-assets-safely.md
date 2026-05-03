# Sobrescribir assets base de forma segura

::: callout warning "Incompleto (WIP)"
Esta p�gina todav�a se est� elaborando y puede cambiar.
:::

## Objetivo

Reemplazar assets base sin romper el comportamiento de fallback.

## Reglas seguras

1. Mant�n la misma ruta relativa para sobrescribir un archivo base.
2. Mant�n coherentes los formatos y nombres esperados (`.json`, `.png`, `.ogg`).
3. Parte de ejemplos base y luego edita de forma incremental.
4. Prueba casos de archivo faltante un sistema a la vez.

## Verificar que funcion�

- El archivo del mod se usa cuando est� presente.
- El asset base se usa cuando el archivo del mod est� ausente.

## Nota de incertidumbre

Los mensajes/detalles de error por sistema pueden variar y no est�n totalmente centralizados.