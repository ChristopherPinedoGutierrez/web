# Spec 02: Generación Dinámica de CV y Reestructuración de Datos

## 1. Visión General
El objetivo de esta especificación (Épica 3) es transformar el repositorio de datos estáticos del portafolio en la única "fuente de la verdad" para generar un CV (PDF) estructurado. Se usará un enfoque "híbrido", tomando lo mejor del estado actual de la web y lo mejor del `CV_ChristopherPinedo.pdf` de referencia.

## 2. Reglas del Modelo Híbrido (Web + PDF)

### A. Perfil y Resumen Profesional
*   **Rol:** Se mantendrá el rol actual de la web: "Platform Engineer / Full Stack AI Developer". Este sobrescribirá al rol del PDF.
*   **Resumen:** Se realizará un *merge* (mezcla) entre el resumen actual de la web y el del PDF para lograr una síntesis potente.
*   **Contacto:** Se mantienen los links, correo y teléfono actuales de la web.

### B. Experiencia Laboral
*   **Tiempos y Fechas:** La web contiene las fechas **reales** y precisas. El PDF usó fechas estimadas/simplificadas por legibilidad. **Regla:** Prevalecen las fechas de la web.
*   **Desarrollo Independiente (I+D):** Prevalece el nivel de detalle de la web, ya que documenta mejor los proyectos (NotificaPe, CalculaPe, Antigravity). Para el CV, se extraerán viñetas clave (highlights) basadas en esta narrativa.
*   **Asistente Administrativo:** Prevalece el formato y enfoque del PDF. Se actualizará en la web el rol a **"Asistente Administrativo – Data & Procesos"** y se extraerán las viñetas del PDF que destacan análisis, validación de datos y mejora de procesos.

### C. Educación y Certificaciones
*   **Educación Formal (ISIL):** Se mantienen las fechas reales de la web, pero se adapta el formato de presentación para el PDF.
*   **Platzi y Certificaciones (2021-2023):** Al haber sido estudios en paralelo a la carga laboral, se integrará como un hito exclusivamente educativo (`type: 'education'`), para no colisionar con la experiencia laboral.
*   **Gestión de Links de Certificados:** Se descarta el consumo de la API de LinkedIn debido a sus conocidas restricciones (Oauth estricto, límites comerciales, falta de endpoints públicos simples). En su lugar:
    1.  En el CV PDF: Un único enlace global verificado al apartado de certificaciones de LinkedIn (como en el PDF original).
    2.  En la Web (Opcional): Se mantendrá el link a LinkedIn dentro de la card de educación de Platzi.

## 3. Plan de Implementación Técnica

### Fase 1: Enriquecimiento de Datos (Content Refactor)
1.  **`personalInfo.md`:** Actualizar el campo de presentación fusionando ambos textos.
2.  **`auxiliar-operaciones.md`:** Cambiar rol y reemplazar la descripción general por los *bullet points* analíticos del PDF.
3.  **`independent-rd.md`:** Mantener su narrativa rica. Agregar un array `cvHighlights` en el *frontmatter* para facilitar la inyección de viñetas en el PDF.
4.  **Educación/Certificaciones:** Mantener fechas de ISIL. Ajustar la forma en que se expone Platzi mediante un archivo markdown propio de educación.

### Fase 2: Arquitectura del CV Generator
1.  **Herramienta:** Uso de `@react-pdf/renderer` para construir el documento on-the-fly en el navegador.
2.  **Módulo:** Creación de `src/modules/CvGenerator/`.
3.  **Descarga:** Componente/Botón en la UI que al hacer clic renderice el documento dinámicamente usando la data consolidada y dispare la descarga del PDF.
