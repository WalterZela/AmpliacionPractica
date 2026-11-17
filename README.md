# HabitTrack - Práctica RA1

**Integrantes:** Walter Zela, Manuel Montero y Ruben Colet  
**Curso:** 2.º DAM  
**Módulo:** Ampliación de Desarrollo de Interfaces

## ¿Qué es HabitTrack?

Es una aplicación hecha con Angular para organizar hábitos. Se pueden añadir hábitos, marcarlos como completados, eliminarlos y ver el progreso.

## Cómo ejecutarla

Necesitamos Node.js y npm. Desde la carpeta del proyecto:

```bash
npm install
npm start
```

Después abrimos `http://localhost:4200` en el navegador.

## Páginas

- **Inicio:** resumen de hábitos, estadísticas y progreso.
- **Mis hábitos:** formulario para crear hábitos y botones para completarlos o borrarlos.
- **Estadísticas:** muestra los hábitos totales, completados y pendientes.
- **Consejos:** recomendaciones para mantener una rutina.
- **Sobre HabitTrack:** explica para qué sirve la aplicación.

Se puede cambiar de página con el menú, usando Angular Router.

## Componentes que hemos usado

- **PageHeader:** recibe el título y el subtítulo de cada página.
- **HabitCard:** recibe un hábito con `@Input` y avisa con `@Output` cuando se pulsa completar o eliminar.
- **StatCard:** recibe el texto y el número que se muestran en una tarjeta.
- **ProgressBar:** recibe un porcentaje y muestra una barra de progreso.
- **EmptyState:** muestra un mensaje cuando la lista está vacía.

Por ejemplo, en **Mis hábitos**, `HabitCard` muestra cada hábito y envía el ID al componente de página cuando pulsamos un botón. La página llama a `HabitService` para hacer el cambio.

## Cómo se guardan los datos

`HabitService` se encarga de añadir, completar y borrar hábitos. Los guarda en `localStorage` para que sigan ahí al recargar la página. No usamos una base de datos.

El progreso se calcula según los hábitos marcados como completados. Es una versión sencilla: la marca de completado no se reinicia automáticamente al cambiar de día.

## Pruebas y compilación

Para ejecutar las pruebas unitarias:

```bash
npm test -- --watch=false
```

Para comprobar que compila y generar la aplicación:

```bash
npm run build
```

El resultado de la compilación aparece en `dist/`. No incluimos `node_modules` en el ZIP porque se vuelve a generar con `npm install`.
