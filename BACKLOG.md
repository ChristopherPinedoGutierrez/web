# BACKLOG.md - Registro de Tareas y Evolución del Proyecto

Este documento registra el mapa de ruta y el estado de avance del proyecto, rigiéndose bajo las reglas estrictas de formato definidas en `AGENTS.md`.

---

## 🎯 Estado General del Proyecto

* **Fase Actual:** Épica 2 (Datos) y Épica 3 (Generador CV) completadas. Ejecución final de la Épica 4 (Rediseño y Modernización UI).
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
- [x] **Task 2.6:** `[DATA-06]` | **Fecha Alta:** 2026-08-22 | **Completado:** 2026-08-22 | **Spec:** `N/A`
      *Descripción:* Refinamiento y pulido final de tecnologías (completar descripciones pendientes, validación de tags y agregar faltantes).

---

### [COMPLETADA] Épica 3: Generación Dinámica de CV
* **Alcance:** Implementar un sistema de generación de PDF estático u on-the-fly que consuma la data unificada del portafolio (Tecnologías, Experiencia y Proyectos normalizados).
* **Impacto Core:** `[FEATURE]`.

*Nota: Se abordó usando @react-pdf/renderer para generación dinámica (on-the-fly).*

**Tareas:**
- [x] **Task 3.1:** `[FEAT-01]` | **Fecha Alta:** 2026-08-18 | **Completado:** 2026-08-22 | **Spec:** `specs/02-dynamic-cv.md`
      *Descripción:* Crear la especificación `specs/02-dynamic-cv.md` estableciendo el modelo híbrido de datos y el motor de PDF.
- [x] **Task 3.2:** `[FEAT-02]` | **Fecha Alta:** 2026-08-18 | **Completado:** 2026-08-22 | **Spec:** `specs/02-dynamic-cv.md`
      *Descripción:* Implementar lógica de generación del CV con `<CVDocument />`.
- [x] **Task 3.3:** `[FEAT-03]` | **Fecha Alta:** 2026-08-18 | **Completado:** 2026-08-22 | **Spec:** `specs/02-dynamic-cv.md`
      *Descripción:* Conectar botón de descarga en la UI para generar y descargar el blob dinámico.

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

- [x] **Task 4.6:** `[UI-06]` | **Fecha Alta:** 2026-08-22 | **Completado:** 2026-08-22 | **Spec:** `N/A`
      *Descripción:* Refactorización responsiva integral (Mobile UI Polish). Ajustes de padding, FAB, colapso de márgenes, timeline responsivo y limpieza de scroll horizontal.

---

### [COMPLETADA] Épica 5: Sistema de Mapeo y Gestión de Postulaciones Laborales (Job Application Engine)
* **Alcance:** Implementar un sistema de análisis, generación de speech, calibración salarial y registro de postulaciones laborales sincronizado con Google Drive (`C:\Trabajo\Drive\JobApplications\`).
* **Impacto Core:** `[CORE-AGENT]`, define protocolo estandarizado de trabajo y base de conocimiento dinámico (roles, glosario y fichas).

**Tareas:**
- [x] **Task 5.1:** `[CORE-AGENT]` | **Fecha Alta:** 2026-08-26 | **Completado:** 2026-08-26 | **Spec:** `specs/04-job-applications-tracker.md`
      *Descripción:* Definir protocolo de 4 fases en `AGENTS.md` y redactar la especificación `specs/04-job-applications-tracker.md`.
- [x] **Task 5.2:** `[FEAT-04]` | **Fecha Alta:** 2026-08-26 | **Completado:** 2026-08-26 | **Spec:** `specs/04-job-applications-tracker.md`
      *Descripción:* Inicializar base de conocimiento en Google Drive (`roles_playbook.md`, `glossary.md`, `template.md` y carpeta `entries/`).

---

### [COMPLETADA] Épica 6: Hub de Postulaciones y Ecosistema de Conocimiento Interconectado (AI & Job Vault)
* **Alcance:** Integrar el área de conocimiento `AI Engineering`, centralizar las 13 fichas de postulaciones bajo cifrado AES-256-GCM con PIN de 6 dígitos, y crear la vista `/postulaciones` con Master-Detail y Drawer Contextual de Cheat Sheet / Glosario.
* **Impacto Core:** `[DATA]`, `[CORE-BUILD]`, `[FEATURE]`, `[UI/UX]`.

**Tareas:**
- [x] **Task 6.1:** `[DATA-09]` | **Fecha Alta:** 2026-09-01 | **Completado:** 2026-09-01 | **Spec:** `specs/05-ai-engineering-and-vault.md`
      *Descripción:* Crear fichas de tecnologías de IA (`rag.md`, `mcp.md`, `vectorDbs.md`, `llmOrchestration.md`, `promptEngineering.md`) y reasignar área `AI Engineering`.
- [x] **Task 6.2:** `[DATA-10]` | **Fecha Alta:** 2026-09-01 | **Completado:** 2026-09-01 | **Spec:** `specs/05-ai-engineering-and-vault.md`
      *Descripción:* Migración y normalización de las 13 fichas de postulaciones a `src/content/jobApplications/`.
- [x] **Task 6.3:** `[CORE-01]` | **Fecha Alta:** 2026-09-01 | **Completado:** 2026-09-01 | **Spec:** `specs/05-ai-engineering-and-vault.md`
      *Descripción:* Compilación y cifrado AES-256-GCM con PBKDF2 en `scripts/build-data.js` generando `jobApplicationsEncrypted.ts`.
- [x] **Task 6.4:** `[FEAT-05]` | **Fecha Alta:** 2026-09-01 | **Completado:** 2026-09-01 | **Spec:** `specs/05-ai-engineering-and-vault.md`
      *Descripción:* Implementación de utilidad `vaultCrypto.ts` para descifrado en memoria usando Web Crypto API.
- [x] **Task 6.5:** `[UI-07]` | **Fecha Alta:** 2026-09-01 | **Completado:** 2026-09-01 | **Spec:** `specs/05-ai-engineering-and-vault.md`
      *Descripción:* Construcción de la vista `/postulaciones` (`PinUnlockDialog`, `JobApplicationsList`, `JobApplicationDetail` con Speech 30s y `JobTechContextDrawer` de Glosario y Tips).
- [x] **Task 6.6:** `[UI-08]` | **Fecha Alta:** 2026-09-01 | **Completado:** 2026-09-01 | **Spec:** `specs/05-ai-engineering-and-vault.md`
      *Descripción:* Integración de la ruta `/postulaciones` en `dashboardMainRoutes.tsx` y actualización de filtros en `TechFilterMenu.tsx` y `SectionKnowledge.tsx`.

---

## 📜 Histórico de Cambios (Changelog)

* **2026-09-16:** `[DATA]` **Registro de Postulación Desarrollador React/TypeScript en Periferia IT Group.** Creación de ficha enriquecida e inmutable en `src/content/jobApplications/2026-09-16_periferiait_desarrollador_react_typescript.md` con match técnico integral (Vite, Tailwind CSS, Zustand, React Query y micro frontends). Pretensión salarial en S/. 5,000 bruto mensual (~S/. 4,000 netos, 100% remoto, beneficios a la carta). Compilación y cifrado automático AES-256-GCM en el Job Vault.
* **2026-09-16:** `[DATA]` **Registro de Postulación Desarrollador Fullstack en Softtek.** Creación de ficha enriquecida e inmutable en `src/content/jobApplications/2026-09-16_softtek_desarrollador_fullstack.md` con enfoque en React, Next.js, Node.js, Express, Atomic Design y pasarelas de pago (Mercado Pago, Google Play In-App Subscriptions, tokenización PCI-DSS y webhooks con idempotencia). Pretensión salarial calibrada en S/. 5,000 bruto mensual (~S/. 4,000 netos con contrato indeterminado y EPS 100%). Compilación y cifrado automático AES-256-GCM en el Job Vault.
* **2026-09-16:** `[DATA]` **Registro de Postulación Frontend Developer Semi Senior (React) en Softtek.** Creación de ficha enriquecida e inmutable en `src/content/jobApplications/2026-09-16_softtek_frontend_developer_semisenior.md` orientada a fundamentos de ingeniería (Closures, OOP, Interfaces TypeScript, patrones Singleton, Factory, Observer y principios SOLID en React). Pretensión salarial en S/. 5,000 bruto mensual (Contrato Indeterminado, EPS 100%, bono conectividad). Compilación y cifrado automático AES-256-GCM en el Job Vault.
* **2026-09-16:** `[DATA]` **Registro de Postulación Desarrollador Semi Senior React en SOAINT.** Creación de ficha enriquecida e inmutable para desarrollo frontend con React, TypeScript, gestión de estado (Zustand/Redux), formularios complejos (Zod) y APIs REST en `src/content/jobApplications/2026-09-16_soaint_desarrollador_semisenior_react.md`. Calibración salarial en banda óptima de mercado (S/. 5,000 bruto / S/. 4,000 netos con EPS 100% y FlexWorking). Compilación y cifrado automático AES-256-GCM en el Job Vault.
* **2026-09-15:** `[DATA]` **Actualización de Estado y Diagnóstico de Descarte en Filtro Inicial (Job Vault).** Transición de estado a `rejected` (Descartado) e incorporación de secciones *Post-Mortem & Diagnóstico* en las fichas:
  1. *Deploy Gurú* - `Full-Stack Engineer Semisenior — Agentes de IA`: Descarte en screening inicial de convocatoria 100% remota regional (alta saturación de postulantes, ponderación de años exclusivos en Python y stack operativo en producción de Kubernetes/AKS y Celery).
  2. *Scotiabank Perú* - `Experto TI (Technology Engineering - Continuidad y Disponibilidad)`: Descarte en filtro ATS/curricular por desalineamiento de rol (enfoque regulatorio de continuidad SBS/SUNAT y exigencia de 3+ años en análisis/especialista bancario).
  3. *Scotiabank Perú* - `Analista TI Senior (Desarrollo y Mantenimiento)`: Descarte en filtro curricular ATS por baremo de seniority tradicional en banca (requisito formal de antigüedad bancaria e historial de Java/.NET institucional).
  Compilación y recifrado AES-256-GCM completado con éxito (`node scripts/build-data.js`).
* **2026-09-06:** `[DATA]` **Actualización de Estado y Diagnóstico de Descarte en Filtro Inicial (Job Vault).** Transición de estado a `rejected` (Descartado) y redacción de la sección *Post-Mortem & Diagnóstico* en las fichas:
  1. *NTT DATA Perú* - `Senior Frontend Developer AI & Contact Center`: Descarte en screening inicial por discrepancia en el requisito excluyente de nicho (*Genesys Cloud / Enreach CTI SDKs*) frente al CV y baremo de seniority formal corporativo.
  2. *Tata Consultancy Services (TCS)* - `Ingeniero de Prompts & Agentes de IA`: Descarte automatizado en ATS atribuible a la respuesta en formulario del filtro cuantitativo (*2 años declarados en GenAI vs >3 años obligatorios requeridos*) y sesgo hacia certificaciones/ecosistema Azure empresarial.
  Compilación y recifrado AES-256-GCM exitoso con `build-data.js`.
* **2026-09-04:** `[DATA]` **Registro Masivo de Postulaciones en Job Vault (4 Nuevas Fichas Enriquecidas).** Incorporación y cifrado AES-256-GCM de 4 postulaciones estratégicas del ecosistema AI & Software:
  1. *Interbank* - `Integration Engineer AI` (APIs REST, OpenAPI, OAuth2, eventos y cloud bancario).
  2. *SEIDOR Innovativa* - `AI Engineer` (LLMs, RAG, FastAPI, PostgreSQL y soluciones educativas).
  3. *Multiplica Talent* - `Desarrollador Fullstack AI` (React, Node.js, TypeScript, SQL e integración GenAI para sector financiero).
  4. *UTP (Grupo Intercorp)* - `Fullstack Developer` (React Web, React Native / Kotlin Mobile, Node/Python y RAG/Agentes).
  5. *Deploy Gurú* - `Full-Stack Engineer Semisenior — Agentes de IA` (React 19, TypeScript estricto, Zustand, Tailwind, FastAPI, Celery, Redis, PostgreSQL multi-tenant y WhatsApp Cloud API).
* **2026-09-02:** `[UI/UX/FEATURE]` **Filtro Interactivo de Calendario en Job Vault.** Integración de botón y popover de calendario con límites dinámicos (`minDate` = fecha más antigua registrada, `maxDate` = hoy/fecha máxima), indicadores de cantidad de postulaciones por día, selección atómica de fechas y chip de limpieza rápida en `src/modules/pages/jobApplicationsPage/components/JobApplicationsList.tsx`.
* **2026-09-02:** `[DATA]` **Registro de Postulación Senior Frontend Developer AI & Contact Center en NTT DATA Perú.** Creación de ficha enriquecida e inmutable para React, TypeScript, WebSockets, integración de SDKs (Genesys Cloud) e IA en `src/content/jobApplications/2026-09-02_nttdata_senior_frontend_ai_genesys.md`. Cifrado automático con AES-256-GCM en el Job Vault.
* **2026-09-02:** `[DATA]` **Registro de Postulación Ingeniero de Software IA en Apuesta Total.** Creación de ficha enriquecida e inmutable para AI Coding, orquestación de subagentes, gobernanza con `AGENTS.md`/`CLAUDE.md`, `SKILL.md` y servidores `MCP` en `src/content/jobApplications/2026-09-02_apuestatotal_software_engineer_ia.md`. Cifrado automático con AES-256-GCM en el Job Vault.
* **2026-09-02:** `[DATA]` **Registro de Postulación IA Engineer (Azure Cloud, RAG & Document Processing) en NTT DATA Perú.** Creación de ficha enriquecida e inmutable para pipelines RAG empresariales y datos no estructurados en `src/content/jobApplications/2026-09-02_nttdata_ia_engineer_cloud_rag.md`. Cifrado automático con AES-256-GCM en el Job Vault.
* **2026-09-02:** `[DATA]` **Registro de Postulación Generative AI Engineer en NTT DATA Perú.** Creación de ficha enriquecida e inmutable para AI Coding, gobernanza de agentes (Agents, Skills, Instructions, Plugins) y SDLC en `src/content/jobApplications/2026-09-02_nttdata_generative_ai_engineer.md`. Cifrado automático con AES-256-GCM en el Job Vault.
* **2026-09-02:** `[DATA]` **Registro de Postulación Especialista en Conversational AI en NTT DATA Perú.** Creación de ficha enriquecida e inmutable con snapshot de vacante, respuestas de formulario (ElevenLabs/Voice AI) y speech 30s en `src/content/jobApplications/2026-09-02_nttdata_conversational_ai.md`. Cifrado automático con AES-256-GCM en el Job Vault.
* **2026-09-02:** `[DATA]` **Registro de Postulación Ingeniero de Prompts & Agentes IA en TCS Perú.** Creación de ficha enriquecida e inmutable para el Centro de Excelencia (COE) con snapshot de vacante, respuestas de formulario y speech 30s en `src/content/jobApplications/2026-09-02_tcs_prompt_ai_agent_engineer.md`. Cifrado automático con AES-256-GCM en el Job Vault.
* **2026-09-02:** `[DATA]` **Registro de Postulación AI Engineer en Prestamype.** Creación de ficha enriquecida e inmutable bajo el nuevo protocolo de 2 fases (Snapshot de convocatoria, respuestas de formulario y speech 30s) en `src/content/jobApplications/2026-09-02_prestamype_ai_engineer.md`. Cifrado automático con AES-256-GCM en el Job Vault.
* **2026-09-02:** `[DATA]` **Avance en Proceso de Selección BBVA.** Culminación exitosa de la batería integral de evaluaciones y videoentrevista para *Software Solutions Development Associate I*. Actualización del estado a `interview` (Entrevista) en el Job Vault.
* **2026-09-01:** `[FEATURE/DATA/UI]` **Finalización y Pulido Integral Épica 6 (AI Engineering Hub & Job Vault).** Creación del área formal `AI Engineering` (RAG, MCP, Vector DBs, LLM Orchestration, Prompt Engineering). Migración y cifrado AES-256-GCM de 13 fichas de postulaciones en `src/content/jobApplications/`. Construcción de la vista `/postulaciones` con arquitectura Persistent Double Drawer de Material UI, desbloqueo por PIN de 6 dígitos, tarjeta de Speech de 30 segundos, renderizador completo de Markdown (tablas, citas, divisores, listas), recalibración precisa de estados de postulación (1 en evaluación, 12 postuladas), scroll unificado en Glosario, ocultamiento condicional de FAB y estandarización homogénea de márgenes inferiores (`pb: { xs: 3, md: 4 }`) en todo el ecosistema.
* **2026-08-26:** `[CORE-AGENT/FEAT]` **Finalización Épica 5.** Creación e inicialización del motor de postulaciones y base de conocimiento en Google Drive (`C:\Trabajo\Drive\JobApplications\`). Protocolo de 4 fases documentado en `AGENTS.md` y `specs/04-job-applications-tracker.md`.
* **2026-08-24:** `[UI/UX]` **Pulido de Navegación y Cabeceras Móviles.** Implementación de scroll-trigger reveal para la barra superior móvil (descarga de CV y tema en scroll-up), selector de filtros de experiencia en `fullWidth` con padding homogéneo de 16px, título centrado y estandarización de la animación del selector de hitos.
* **2026-08-22:** `[UI/UX]` **Refactorización Móvil Completa.** Eliminación de colapsos de márgenes, rediseño de barra lateral de filtros (Drawer Oculto), ajuste matemático de la línea de tiempo en Experiencia y reubicación dinámica del FAB para lograr una experiencia nativa sin scroll horizontal.
* **2026-08-22:** `[DATA/UI]` **Finalización Épica 2**. Refinamiento masivo de tecnologías: integración de IA y SDD (Antigravity, Gemini, Claude) a proyectos core. Actualización forzada de `react-icons@5.7.0`, migración de logotipos deprecados por licencias (Microsoft, Amazon, Adobe) y fix definitivo del algoritmo de paginación del CV en `react-pdf` (eliminación de espacios en blanco y texto cortado).
* **2026-08-22:** `[FEATURE/DATA]` **Finalización Épica 3**. Implementación de Generador Dinámico de CV con `@react-pdf/renderer`. Refactor de datos a modelo híbrido Web/PDF para mejorar posicionamiento analítico y de Backend. Creación de hitos educativos unificados.
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
