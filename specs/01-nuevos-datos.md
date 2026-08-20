# SPEC 01: Reestructuración de Datos y Proyectos (Source of Truth)

**Épica:** 2 (Modelado de Datos y Contenido del CMS)
**Estado:** Especificación (Revisada y Actualizada)

## 1. Nuevo Paradigma Arquitectónico de Datos

Para soportar proyectos de distintas escalas (desde una app simple hasta un ecosistema complejo), se abandona la estructura plana de proyectos.

### 1.1 Modificaciones al Schema (CMS y Build-Data)
Se deben añadir las siguientes propiedades obligatorias al modelo de datos de proyectos (`config.yml` y `build-data.js`):
* `project_type` (String/Select): Define la tipología. Opciones permitidas: `ecosystem`, `application`, `framework`.
* `sync_source` (String Oculto): Ruta absoluta local (`c:/Trabajo/...`) que sirve como gancho agentico para sincronización de datos.
* `modules` (List/Array): Arreglo de submódulos o sub-aplicaciones. Obligatorio para `ecosystem`, opcional para los demás. Cada módulo debe contener:
  - `name` (String): Nombre del módulo (ej. SaaS Admin Dashboard).
  - `platform` (String): Plataforma (Web, Android Native, iOS, API, CLI).
  - `repository` (String): URL del repositorio.
  - `technologies` (List): Tecnologías específicas de este módulo.

### 1.2 Plantilla Estricta de Markdown (Cuerpo)
El cuerpo de todo proyecto debe ceñirse a los siguientes encabezados:
1. `## 🎯 El Problema`
2. `## 💡 La Solución`
3. `## ⚙️ Arquitectura Técnica`
4. `## 🚀 Impacto / Estado`

---

## 2. Estrategia de Proyectos a Generar

Se crearán 3 piezas de alto calibre que definen el perfil de **AI Developer & Platform Engineer**:

### Proyecto 1: NotificaPe
* **Tipo:** `ecosystem`
* **Sync Source:** `c:/Trabajo/Proyectos/NotificaPe/NotificaPe_Specs/management/1.2_briefing.md`
* **Módulos:** Web Dashboard (React/Vite), Admin App (Android/Kotlin), Viewer App (Android/Kotlin).

### Proyecto 2: CalculaPe
* **Tipo:** `application`
* **Sync Source:** `c:/Trabajo/Proyectos/CalculaPe/CalculaPe_Specs/management/1.2_briefing.md`
* **Módulos:** App Móvil (React Native/Expo).

### Proyecto 3: SDD_CDPG_SPECS
* **Tipo:** `framework`
* **Sync Source:** `c:/Trabajo/Proyectos/SDD_CDPG/README.md`
* **Módulos:** Core Guidelines (Markdown/Prompt Engineering).

---

## 3. Actualización de Tecnologías (`src/content/technologies/`)
Crear/actualizar los archivos Markdown para soportar el catálogo de los proyectos anteriores:
* Kotlin, React Native, Supabase, Firebase (FCM), Spec-Driven Development, OCR / Computer Vision.

## 4. Experiencia Laboral
* Agregar periodo de 6 meses de I+D Independiente (Lead Developer / Product Owner) construyendo NotificaPe y SDD_CDPG.
