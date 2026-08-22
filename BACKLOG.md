# BACKLOG.md - Registro de Tareas y Evolución del Proyecto

Este documento registra el mapa de ruta y el estado de avance del proyecto, rigiéndose bajo las reglas estrictas de formato definidas en `AGENTS.md`.

---

## 🎯 Estado General del Proyecto

* **Fase Actual:** Management & SDD Inicial completado. Ejecución de la Épica 2 (Modelado de Datos).
* **Objetivo:** Reposicionar el portafolio personal (Platform Engineer & AI Developer Profile).

---

## 📋 Épicas y Tareas Planificadas

### [COMPLETADA] Épica 1: Gestión y Orquestación (Management & SDD)
* **Alcance:** Definir el framework de trabajo para agentes IA (Antigravity), crear el registro de backlog y preparar el entorno para especificaciones.
* **Impacto Core:** Sí, define el comportamiento de los agentes y la estructura base.

**Tareas:**
- [x] **Task 1.1:** `[MGMT-01]` | **Fecha Alta:** 2026-08-18 | **Completado:** 2026-08-18 | **Spec:** `N/A`
      *Descripción:* Crear archivo `AGENTS.md` como orquestador nativo para Antigravity.
- [x] **Task 1.2:** `[MGMT-02]` | **Fecha Alta:** 2026-08-18 | **Completado:** 2026-08-18 | **Spec:** `N/A`
      *Descripción:* Crear `BACKLOG.md` e inicializar el flujo de Spec-Driven Development.
- [x] **Task 1.3:** `[MGMT-03]` | **Fecha Alta:** 2026-08-18 | **Completado:** 2026-08-18 | **Spec:** `N/A`
      *Descripción:* Crear estructura de la carpeta `specs/` y validar lectura local de repositorios.
- [x] **Task 1.4:** `[CORE-AGENT]` | **Fecha Alta:** 2026-08-20 | **Completado:** 2026-08-20 | **Spec:** `N/A`
      *Descripción:* Refactorizar la gobernanza del BACKLOG estableciendo plantillas estrictas en `AGENTS.md` y `BACKLOG.md`.

---

### [EN PROGRESO] Épica 2: Modelado de Datos y Contenido del CMS
* **Alcance:** Integrar nuevos proyectos estrella (NotificaPe, CalculaPe, SDD_CDPG_SPECS), actualizar tecnologías, experiencia laboral y soportar metadatos ocultos de sincronización.
* **Impacto Core:** `[DATA]`, requiere alterar `build-data.js` (Decap CMS fue eliminado por sobreingeniería).

**Tareas:**
- [x] **Task 2.1:** `[DATA-01]` | **Fecha Alta:** 2026-08-18 | **Completado:** 2026-08-18 | **Spec:** `specs/01-nuevos-datos.md`
      *Descripción:* Redactar la especificación definiendo los nuevos proyectos y el soporte para `sync_source`.
- [x] **Task 2.2:** `[DATA-02]` | **Fecha Alta:** 2026-08-18 | **Completado:** 2026-08-20 | **Spec:** `specs/01-nuevos-datos.md`
      *Descripción:* Crear los archivos Markdown en `src/content/projects/` y `src/content/technologies/`.
- [x] **Task 2.3:** `[DATA-03]` | **Fecha Alta:** 2026-08-18 | **Completado:** 2026-08-20 | **Spec:** `specs/01-nuevos-datos.md`
      *Descripción:* Actualizar la Experiencia Laboral (6 meses I+D NotificaPe).
- [x] **Task 2.4:** `[DATA-04]` | **Fecha Alta:** 2026-08-18 | **Completado:** 2026-08-20 | **Spec:** `N/A`
      *Descripción:* Eliminar Decap CMS (`public/admin/`) por completo, por ser obsoleto para el flujo agentico. Modificar `build-data.js` para admitir `project_type`, `sync_source` y `modules`.
- [x] **Task 2.5:** `[DATA-05]` | **Fecha Alta:** 2026-08-21 | **Completado:** 2026-08-21 | **Spec:** `N/A`
      *Descripción:* Restauración masiva de tecnologías históricas (53+ items), normalización de áreas lógicas y flags adaptativos (`monochrome`, `invertColors`, `contrast`).
- [ ] **Task 2.6:** `[DATA-06]` | **Fecha Alta:** 2026-08-22 | **Spec:** `N/A`
      *Descripción:* Refinamiento y pulido final de tecnologías (completar descripciones pendientes, validación de tags y agregar faltantes).

---

### [BACKLOG] Épica 3: Generación Dinámica de CV
* **Alcance:** Implementar un sistema de generación de PDF estático u on-the-fly que consuma la data unificada del portafolio (Tecnologías, Experiencia y Proyectos normalizados).
* **Impacto Core:** `[FEATURE]`.

*Nota: Se abordará una vez finalizado el modelado y pulido de datos y el rediseño de Experiencia, para que el PDF se alimente de la base de datos completa y homogénea.*

**Tareas:**
- [ ] **Task 3.1:** `[FEAT-01]` | **Fecha Alta:** 2026-08-18 | **Spec:** `Pendiente (specs/02-dynamic-cv.md)`
      *Descripción:* Crear la especificación `specs/02-dynamic-cv.md` (Evaluar @react-pdf/renderer u otras opciones).
- [ ] **Task 3.2:** `[FEAT-02]` | **Fecha Alta:** 2026-08-18 | **Spec:** `Pendiente`
      *Descripción:* Implementar lógica de generación del CV.
- [ ] **Task 3.3:** `[FEAT-03]` | **Fecha Alta:** 2026-08-18 | **Spec:** `Pendiente`
      *Descripción:* Conectar botón de descarga en la UI.

---

### [EN PROGRESO] Épica 4: Rediseño y Modernización de UI (Material UI)
* **Alcance:** Modernizar el diseño visual del portafolio, ajustando el tema de Material UI (posible Bento Box, Dark Mode refinado).
* **Impacto Core:** `[UI/UX]`.

**Tareas:**
- [x] **Task 4.1:** `[UI-01]` | **Fecha Alta:** 2026-08-18 | **Completado:** 2026-08-20 | **Spec:** `specs/03-ui-modernization.md`
      *Descripción:* Crear especificación visual `specs/03-ui-modernization.md`.
- [x] **Task 4.2:** `[UI-02]` | **Fecha Alta:** 2026-08-18 | **Completado:** 2026-08-20 | **Spec:** `specs/03-ui-modernization.md`
      *Descripción:* Reconfigurar Theme de MUI eliminando estilos rígidos.
- [x] **Task 4.3:** `[UI-03]` | **Fecha Alta:** 2026-08-18 | **Completado:** 2026-08-21 | **Spec:** `specs/03-ui-modernization.md`
      *Descripción:* Refactorizar layout de Proyectos para destacar Ecosistemas (ej. NotificaPe). Implementación de galería Lightbox Modal y Markdown parser custom.
- [x] **Task 4.4:** `[UI-04]` | **Fecha Alta:** 2026-08-18 | **Completado:** 2026-08-20 | **Spec:** `specs/03-ui-modernization.md`
      *Descripción:* Refactorizar Perfil y Navbar.
- [x] **Task 4.5.1:** `[DATA-07]` | **Fecha Alta:** 2026-08-22 | **Completado:** 2026-08-22 | **Spec:** `N/A`
      *Descripción:* Refactor del Modelo de Datos de Experiencia (Migración de skills a Markdown y build-data.js).
- [x] **Task 4.5.2:** `[DATA-08]` | **Fecha Alta:** 2026-08-22 | **Completado:** 2026-08-22 | **Spec:** `N/A`
      *Descripción:* Redacción de Hitos Profesionales y enlace con proyectos en los archivos Markdown.
- [x] **Task 4.5.3:** `[UI-05]` | **Fecha Alta:** 2026-08-22 | **Completado:** 2026-08-22 | **Spec:** `Pendiente (specs/03-ui-modernization.md)`
      *Descripción:* Rediseño de Experiencia Laboral a Timeline interactivo con Scroll-Snap.

---

## 📜 Histórico de Cambios (Changelog)

* **2026-08-22:** `[UI/UX]` Rediseño de la sección Experiencia Laboral transformándola en un Timeline interactivo con Scroll-Snap y Drawer de filtros. Gráfico de radar reemplazado por chips tipados dinámicamente.
* **2026-08-22:** `[DATA/UI]` Unificación del modelo de datos de competencias y aptitudes (28 items migrados a Markdown) en el ecosistema global de tecnologías, actualizando `build-data.js` para consumir la nueva fuente de verdad.
* **2026-08-22:** `[DATA]` Creación de metadatos `type` y `linkedProjects` en Experiencia Laboral y adición del hito de Formación Superior (Egresado).
* **2026-08-22:** `[MGMT]` Reorganización del Backlog: reactivación de Épica 4 con Task 4.5 dividida (Data/Content/UI) para Experiencia Laboral y Task 2.6 para pulido de tecnologías.
* **2026-08-21:** `[DATA/UI]` Estandarización masiva de 53+ tecnologías, áreas lógicas, soporte monochrome/contrast/invertColors y scrollbar en menú de filtros.
* **2026-08-21:** `[UI/UX]` Finalizado refactor del layout de Proyectos. Implementación de Modal Lightbox, limpieza de Markdowns y parseo nativo en tarjetas.
* **2026-08-20:** `[UI/UX]` Finalizado refactor del Perfil de usuario, barra de tecnologías y unificación de anchos arquitectónicos.
* **2026-08-20:** `[UI/UX]` Redacción de `specs/03-ui-modernization.md` y activación de la Épica 4.
* **2026-08-20:** `[CORE]` Modificación de `AGENTS.md` y `BACKLOG.md` para implementar plantilla estricta y gobernanza del proyecto.
* **2026-08-18:** `[DATA]` Definición estratégica de `specs/01-nuevos-datos.md` (NotificaPe, CalculaPe, SDD_CDPG).
* **2026-08-18:** `[CORE]` Creación de capa Management (`AGENTS.md`, `BACKLOG.md`).
