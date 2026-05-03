# Como Funcionan los Overrides de Assets

::: callout warning "Sin terminar (WIP)"
Esta pagina todavia se esta trabajando y puede cambiar.
:::

El engine monta la raiz del mod antes que los assets base.

```mermaid
flowchart TD
A[Request file path] --> B{Exists in mods/<activeMod>?}
B -->|Yes| C[Use mod file]
B -->|No| D[Use assets file]
```

Esto aplica a las busquedas de JSON, imagenes y audio manejadas mediante `Paths` + raices de libreria de assets.