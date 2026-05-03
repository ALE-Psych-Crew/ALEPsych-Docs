# Construir JSON de stage con capas de sprites

::: callout warning "Incompleto (WIP)"
Esta p�gina todav�a se est� elaborando y puede cambiar.
:::

## Objetivo

Usar `spritesConfig` para controlar el orden por capas de los objetos del stage.

## Pasos

1. Define la configuraci�n base del stage (`zoom`, `speed`, `hud`).
2. Agrega `spritesConfig.directory` para la carpeta de im�genes del stage.
3. Agrega entradas `sprites` ordenadas.
4. Usa `addMethod`/propiedades para controlar la colocaci�n.
5. Prueba el orden de renderizado dentro del juego.