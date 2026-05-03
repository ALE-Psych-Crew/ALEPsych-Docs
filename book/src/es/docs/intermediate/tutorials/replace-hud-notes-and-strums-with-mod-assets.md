# Reemplace HUD, notas y rasgueos con recursos mod

::: callout warning "Sin terminar (WIP)"
Todavía se está trabajando en esta página y puede cambiar.
:::

## Meta

Reemplace las imágenes del juego de forma segura usando archivos dentro de su mod.

## Diseño inicial recomendado

```text
mods/MyMod/
  data/huds/myhud.json
  data/strumLines/myline.json
  data/strums/mystrums.json
  data/notes/mynotes.json
  data/splashes/mysplashes.json
  images/hud/myhud/
  images/strums/
  images/notes/
  images/splashes/
```

## Pasos

::: steps
1. **Copie primero los archivos JSON base**
   Empiece por trabajar con los valores predeterminados en los activos base.
2. **Crea tus propias identificaciones**
   Utilice `myhud`, `mystrums`, `mynotes`, `mysplashes`, `myline`.
3. **ID de cables en strumLine JSON**
   Apunte `strums`, `notes` y `splashes` a sus ID.
4. **Agregar imágenes coincidentes**
   Asegúrese de que exista cada animación/imagen a la que hace referencia JSON.
5. **Aplicar HUD a través del escenario**
   Establezca el campo etapa `hud` en `myhud`.
6. **Prueba en el juego**
   Consulta la cuenta regresiva, el combo, las flechas, las notas y las salpicaduras.
:::

::: callout warning
No elimine las claves requeridas de los archivos JSON del juego a menos que haya verificado el comportamiento alternativo en tiempo de ejecución.
:::

## Errores comunes

- Uso de ID predeterminados por accidente después de crear archivos personalizados
- Faltan nombres de animación esperados por la configuración de strumLine
- Reemplazo de imágenes sin actualizar los nombres de las animaciones JSON
- Cambiar demasiados archivos a la vez (difícil de depurar)

## Flujo de trabajo seguro

Cambie un sistema a la vez:

1. HUD
2. rasgueos
3. Notas
4. Salpicaduras

Pruebe después de cada paso.