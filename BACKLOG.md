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
* **Impacto Core:** `[DATA]`, requiere alterar `build-data.js` y `config.yml`.

**Tareas:**
- [x] **Task 2.1:** `[DATA-01]` | **Fecha Alta:** 2026-08-18 | **Completado:** 2026-08-18 | **Spec:** `specs/01-nuevos-datos.md`
      *Descripción:* Redactar la especificación definiendo los nuevos proyectos y el soporte para `sync_source`.
- [ ] **Task 2.2:** `[DATA-02]` | **Fecha Alta:** 2026-08-18 | **Spec:** `specs/01-nuevos-datos.md`
      *Descripción:* Crear los archivos Markdown en `src/content/projects/` y `src/content/technologies/`.
- [ ] **Task 2.3:** `[DATA-03]` | **Fecha Alta:** 2026-08-18 | **Spec:** `specs/01-nuevos-datos.md`
      *Descripción:* Actualizar la Experiencia Laboral (6 meses I+D NotificaPe).
- [ ] **Task 2.4:** `[DATA-04]` | **Fecha Alta:** 2026-08-18 | **Spec:** `specs/01-nuevos-datos.md`
      *Descripción:* Modificar `config.yml` y `build-data.js` para admitir campos ocultos (`sync_source`).

---

### [BACKLOG] Épica 3: Generación Dinámica de CV
* **Alcance:** Implementar un sistema de generación de PDF estático u on-the-fly que consuma la data unificada del portafolio.
* **Impacto Core:** `[FEATURE]`.

*Nota: Pendiente iterar sobre cómo queremos que se vea el PDF y qué información extraeremos exactamente antes de redactar el Spec.*

**Tareas:**
- [ ] **Task 3.1:** `[FEAT-01]` | **Fecha Alta:** 2026-08-18 | **Spec:** `Pendiente (specs/02-dynamic-cv.md)`
      *Descripción:* Crear la especificación `specs/02-dynamic-cv.md` (Evaluar @react-pdf/renderer u otras opciones).
- [ ] **Task 3.2:** `[FEAT-02]` | **Fecha Alta:** 2026-08-18 | **Spec:** `Pendiente`
      *Descripción:* Implementar lógica de generación del CV.
- [ ] **Task 3.3:** `[FEAT-03]` | **Fecha Alta:** 2026-08-18 | **Spec:** `Pendiente`
      *Descripción:* Conectar botón de descarga en la UI.

---

### [BACKLOG] Épica 4: Rediseño y Modernización de UI (Material UI)
* **Alcance:** Modernizar el diseño visual del portafolio, ajustando el tema de Material UI (posible Bento Box, Dark Mode refinado).
* **Impacto Core:** `[UI/UX]`.

*Nota: Debatir si iremos por estilo Bento Box, Dark Mode refinado, etc. antes de programar.*

**Tareas:**
- [ ] **Task 4.1:** `[UI-01]` | **Fecha Alta:** 2026-08-18 | **Spec:** `Pendiente (specs/03-ui-modernization.md)`
      *Descripción:* Crear especificación visual `specs/03-ui-modernization.md`.
- [ ] **Task 4.2:** `[UI-02]` | **Fecha Alta:** 2026-08-18 | **Spec:** `Pendiente`
      *Descripción:* Reconfigurar Theme de MUI eliminando estilos rígidos.
- [ ] **Task 4.3:** `[UI-03]` | **Fecha Alta:** 2026-08-18 | **Spec:** `Pendiente`
      *Descripción:* Refactorizar layout de Proyectos para destacar Ecosistemas (ej. NotificaPe).
- [ ] **Task 4.4:** `[UI-04]` | **Fecha Alta:** 2026-08-18 | **Spec:** `Pendiente`
      *Descripción:* Refactorizar Perfil y Navbar.

---

## 📝 Histórico de Cambios (Changelog)

* **2026-08-20:** `[CORE]` Modificación de `AGENTS.md` y `BACKLOG.md` para implementar plantilla estricta y gobernanza del proyecto.
* **2026-08-18:** `[DATA]` Definición estratégica de `specs/01-nuevos-datos.md` (NotificaPe, CalculaPe, SDD_CDPG).
* **2026-08-18:** `[CORE]` Creación de capa Management (`AGENTS.md`, `BACKLOG.md`).
