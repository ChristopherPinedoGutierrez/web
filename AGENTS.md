# AGENTS.md - Rulebook y Orquestador de Desarrollo

Este archivo define las reglas de desarrollo, arquitectura y protocolo de trabajo para cualquier agente de Inteligencia Artificial que trabaje en este repositorio. Es leído automáticamente por Antigravity.

---

## 1. Perfil del Proyecto y Filosofía

* **Propósito:** Portafolio personal y showcase profesional de **Christopher Pinedo Gutierrez**.
* **Evolución:** Transición de un desarrollador orientado únicamente a Frontend hacia un **Platform Engineer / Full Stack AI Developer** capaz de concebir, diseñar, liderar y desarrollar productos complejos (SaaS de extremo a extremo, aplicaciones móviles nativas/híbridas con monetización) de forma independiente.
* **Hosting y Despliegue:** Sitio 100% estático hospedado en **GitHub Pages**. 
* **Restricción Clave:** No se utilizan servidores backend en tiempo de ejecución. Todo el procesamiento dinámico se realiza en build-time o en el cliente.

---

## 2. Stack Tecnológico

* **Core:** React 18, Vite, TypeScript.
* **UI & Estilos:** `@mui/material` (Material UI v5), `@emotion/react`, `@emotion/styled`, `react-icons`.
* **Contenido Estático:** Archivos Markdown en `src/content/`. (Gestión directa por IA y Git, sin CMS visual).
* **Compilación de Datos:** Script Node.js `scripts/build-data.js` ejecutado antes de `dev` y `build` (`npm run predev` / `npm run prebuild`).

---

## 3. Arquitectura y Flujo de Datos Actual

Cualquier agente debe **respetar** la estructura de carpetas y el flujo de datos existente sin destruir la base histórica:

1. **Gestión de Contenido:** Los datos residen en Markdown dentro de `src/content/`:
   * `src/content/personalInfo.md`
   * `src/content/technologies/`
   * `src/content/projects/`
   * `src/content/experience/`
2. **Generación de Datos (Build Step):** El script `scripts/build-data.js` lee el frontmatter y cuerpo de los Markdown y genera/actualiza los archivos TypeScript en `src/resources/data/`:
   * `personalInfo.ts`
   * `projectsInfo.ts`
   * `workExperienceInfo.ts`
   * `baseFiles/technologies.ts`
3. **Consumo en Frontend:** Los módulos en `src/modules/` y la librería UI en `src/library/` importan directamente de `src/resources/data/`.

---

## 4. Protocolo Spec-Driven Development (SDD) y Gobernanza del Backlog

Para mantener el historial ordenado, escalable y evitar entropía a medida que el proyecto crece, el desarrollo se rige por reglas estrictas de gestión:

1. **Lectura de Estado:** Antes de realizar cualquier cambio, el agente debe revisar `BACKLOG.md` para entender qué tarea está activa.
2. **Gobernanza del BACKLOG.md:** Cualquier actualización o adición al Backlog **DEBE** seguir un formato estandarizado para mantener consistencia:
   - **Épicas:** Deben incluir `[ESTADO]`, Título, Alcance e Impacto Core.
   - **Tareas:** Cada tarea debe registrar: ID Corta, Fecha de Alta (`AAAA-MM-DD`), Fecha de Finalización (`AAAA-MM-DD`, si aplica), y Referencia al archivo Spec (ej. `specs/01-nuevos-datos.md`).
   - **Historial (Changelog):** Cada entrada debe categorizarse con tags como `[CORE]`, `[DATA]`, `[UI/UX]`, `[FEATURE]`.
3. **Uso de Especificaciones:** Las tareas complejas deben contar con una especificación detallada en la carpeta `specs/`. No se codifican cambios grandes directamente desde un requerimiento verbal.
4. **Enfoque Finito:** Cada sesión de chat se dedica a resolver **una única tarea o especificación**. No se deben encadenar tareas no planificadas.
5. **Modificación de AGENTS.md (Impacto Core):** Si un cambio requiere modificar cómo operan los agentes (agregar reglas o skills), la tarea debe etiquetarse como `[CORE-AGENT]` y ser documentada explícitamente. No alterar `AGENTS.md` sin justificación en el Backlog.

---

## 5. Directrices de Calidad y UI

* **Material UI Modernizado:** Mantener el uso de `@mui/material`, pero evitando estilos rígidos o anticuados. Usar temas personalizados (`createTheme`), layouts fluidos con `sx`, bordes suaves y paletas de color pulidas.
* **Buenas Prácticas TypeScript:** Tipado explícito, evitar `any` cuando sea posible, mantener componentes modularizados y limpios.
* **No Alterar sin Documentar:** Si se requiere un cambio estructural en el esquema de datos o scripts de compilación, se debe justificar e integrar primero en el `BACKLOG.md` y `specs/`.
