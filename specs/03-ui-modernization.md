# Spec 03: Rediseño y Modernización de UI (Épica 4)

## 1. Objetivo General
Transformar la interfaz del portafolio, pasando de un diseño rígido basado en componentes por defecto de Material UI v5 a un diseño moderno, jerárquico y adaptativo. El objetivo es reflejar un perfil de **Platform Engineer & AI Developer**, utilizando un layout tipo *Bento Box*, estética *Glassmorphism* en Dark Mode, y renderizado dinámico de contenido complejo.

## 2. Alcance (Scope)
El alcance de esta especificación cubre tres áreas principales (vistas) y la base temática del proyecto:

1. **Reconfiguración del Theme (MUI v5)**
2. **Refactorización de la Vista Perfil (Tecnologías)**
3. **Refactorización de la Vista Proyectos (Bento Box)**
4. **Refactorización de la Vista Experiencia Laboral**

*Nota: La generación dinámica del CV (Épica 3) es un módulo independiente que consumirá las mejoras de datos realizadas en esta especificación, pero su implementación técnica de renderizado PDF se abordará en `specs/02-dynamic-cv.md`.*

---

## 3. Decisiones Arquitectónicas y Visuales

### 3.1. Reconfiguración del Theme (`createTheme`)
- **Tipografía:** Transición hacia fuentes más limpias (ej. Inter o Plus Jakarta Sans) para los encabezados y cuerpo, mejorando la legibilidad del contenido técnico.
- **Bordes (Border Radius):** Aumentar el redondeo de los componentes principales (Cards, Dialogs) a `16px` o `24px` para un acabado más amigable.
- **Dark Mode Refinado:** 
  - Fondos: Tonos de gris/azul profundo (ej. `#0A0F1C`).
  - Superficies (Cards): Tonos ligeramente más claros (ej. `#111827`) con bordes sutiles `1px solid rgba(255,255,255,0.08)` en lugar de sombras pesadas de elevación.

### 3.2. Vista Perfil (Tecnologías)
- **Filtros Minimalistas:** Eliminar listas de Radio Buttons voluminosos. Utilizar "Pills" (Chips clickeables) o Tabs modernos e integrados.
- **Micro-Tarjetas (Dense Grid):** Las tecnologías se mostrarán en una cuadrícula densa. Cada celda será un cuadrado/rectángulo pequeño con fondo semitransparente, conteniendo el ícono de la tecnología. Las interacciones (hover) revelarán el nombre.

### 3.3. Vista Proyectos (Bento Box Layout)
La cuadrícula de proyectos (`GridGroupProjects.tsx`) dejará de ser uniforme. Su tamaño (`Grid xs/lg`) dependerá directamente del campo `projectType`:
- **`ecosystem` (NotificaPe):** Ocupará ancho completo (`lg={12}`). Diseño interno en dos columnas: izquierda para la portada gráfica y derecha para la descripción segmentada.
- **`framework` (SDD):** Ocupará un ancho intermedio (`lg={8}`), enfatizando diagramas abstractos o conceptos.
- **`application` (CalculaPe):** Ocupará espacios menores (`lg={4}` o `lg={6}`).
- **Renderizado de Markdown:** Los campos `content.description` (que incluyen H2 para Problema, Solución, etc.) se parsearán y renderizarán utilizando un componente de Tabs o Acordeón dentro de las tarjetas más grandes para evitar sobrecarga de texto.

### 3.4. Vista Experiencia Laboral
- **Modelado de Datos:** Actualizar `workExperienceInfo.ts` para categorizar las habilidades como `Core Competencies` (Management, SDD) y `Technical Skills` en lugar de la división genérica de "Aptitudes" y "Soft Skills".
- **Línea de Tiempo (Timeline):** Reemplazar la tabla de fechas (`<TableContainer>`) por un componente visual de línea de tiempo o texto limpio de un solo renglón.
- **Gráfico de Radar:** Mantenerlo, pero optimizar su tamaño e integrarlo fluidamente al costado de las responsabilidades (`jobFunctions`) para que esta última tenga más protagonismo.

---

## 4. Plan de Ejecución

1. **Fase 1: Preparación (Data & Theme)**
   - Modificar `src/resources/data/workExperienceInfo.ts`.
   - Modificar `src/theme.ts` (o archivo equivalente donde se defina `createTheme`).
2. **Fase 2: Perfil y Tecnologías**
   - Refactorizar `GridGroupTechAreas.tsx` y `TechFilterMenu.tsx`.
3. **Fase 3: Proyectos (El Core)**
   - Refactorizar `GridGroupProjects.tsx`.
   - Crear subcomponentes para procesar el Markdown (ej. `MarkdownTabs.tsx`).
4. **Fase 4: Experiencia Laboral**
   - Refactorizar `GridGroupExperience.tsx`.
   - Ajustar `RadarChartAptitudes.tsx`.
