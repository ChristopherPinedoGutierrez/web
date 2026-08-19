# BACKLOG.md - Registro de Tareas y Evolución del Proyecto

Este documento registra el mapa de ruta y el estado de avance del proyecto.

---

## 🎯 Estado General del Proyecto

* **Fase Actual:** Management & SDD Inicial completado. Pendiente ejecución de Código.
* **Objetivo:** Reposicionar el portafolio personal (Platform Engineer & AI Developer Profile).

---

## 📋 Épicas y Tareas Planificadas

### 🟢 Épica 1: Gestión y Orquestación (Management & SDD) - [COMPLETADA]
- [x] **Task 1.1:** Crear archivo `AGENTS.md` como orquestador nativo para Antigravity.
- [x] **Task 1.2:** Crear `BACKLOG.md` e inicializar el flujo de Spec-Driven Development.
- [x] **Task 1.3:** Crear estructura de la carpeta `specs/` y validar lectura local de repos.

### 🟡 Épica 2: Modelado de Datos y Contenido del CMS - [EN PROGRESO]
- [x] **Task 2.1:** Redactar `specs/01-nuevos-datos.md` definiendo NotificaPe, CalculaPe y SDD_CDPG con `sync_source`.
- [ ] **Task 2.2:** [EJECUCIÓN] Crear los archivos Markdown en `src/content/projects/` y `src/content/technologies/`.
- [ ] **Task 2.3:** [EJECUCIÓN] Actualizar la Experiencia Laboral (6 meses I+D NotificaPe).
- [ ] **Task 2.4:** [EJECUCIÓN] Modificar `config.yml` y `build-data.js` para admitir campos ocultos (`sync_source`).

### 🔵 Épica 3: Generación Dinámica de CV - [PENDIENTE ITERAR Y DEFINIR]
* *Nota para próximo chat: Iterar sobre cómo queremos que se vea el PDF y qué info extraeremos exactamente antes de redactar el Spec.*
- [ ] **Task 3.1:** Crear la especificación `specs/02-dynamic-cv.md` (Evaluar @react-pdf/renderer u otras opciones).
- [ ] **Task 3.2:** Implementar lógica de generación.
- [ ] **Task 3.3:** Conectar botón de descarga.

### 🟣 Épica 4: Rediseño y Modernización de UI (Material UI) - [PENDIENTE ITERAR Y DEFINIR]
* *Nota para próximo chat: Debatir si iremos por estilo Bento Box, Dark Mode refinado, etc. antes de programar.*
- [ ] **Task 4.1:** Crear especificación visual `specs/03-ui-modernization.md`.
- [ ] **Task 4.2:** Reconfigurar Theme de MUI.
- [ ] **Task 4.3:** Refactorizar layout de Proyectos para destacar Ecosistemas (NotificaPe).
- [ ] **Task 4.4:** Refactorizar Perfil y Navbar.

---

## 📝 Histórico de Cambios
* **2026-08-18:** Creación de capa Management (`AGENTS.md`, `BACKLOG.md`).
* **2026-08-18:** Definición estratégica de `specs/01-nuevos-datos.md` (NotificaPe, CalculaPe, SDD_CDPG).
