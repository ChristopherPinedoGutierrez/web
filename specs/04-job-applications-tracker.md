# SPEC-04: Sistema de Mapeo y Gestión de Postulaciones Laborales (Job Application Engine)

## 1. Visión General
Permitir a Christopher Pinedo analizar convocatorias laborales de forma sistemática, generar speeches adaptados, respuestas listas para formularios, calibrar bandas salariales de mercado y mantener un registro estructurado sincronizado con Google Drive para consulta móvil en tiempo real.

---

## 2. Arquitectura de Almacenamiento

Ubicación raíz en disco sincronizada con Google Drive:
C:\Trabajo\Drive\JobApplications\

Estructura:
* oles_playbook.md: Catálogo de arquetipos de roles (Frontend, Fullstack/AI, Platform, Híbridos), speeches base y rangos de sueldo.
* glossary.md: Diccionario de conceptos técnicos corporativos y de nicho con analogías a los proyectos del autor.
* 	emplate.md: Estructura unificada para las fichas de postulación.
* entries/: Directorio donde residen los archivos YYYY-MM-DD_empresa_rol.md.

---

## 3. Protocolo de Ejecución del Agente
1. **Contexto:** Consultar oles_playbook.md y glossary.md.
2. **Diagnóstico:** Evaluar fit técnico y sugerir banda salarial.
3. **Generación:** Redactar respuestas a formulario y speech de 30 segundos.
4. **Persistencia:** Guardar la ficha en entries/ y actualizar glosario o playbook si surgen nuevos conceptos o roles.
