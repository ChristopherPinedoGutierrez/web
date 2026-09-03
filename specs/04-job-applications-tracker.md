# SPEC-04: Sistema de Mapeo y Gestión de Postulaciones Laborales (Job Vault Nativo)

## 1. Visión General
Permitir a Christopher Pinedo analizar convocatorias laborales de forma sistemática, generar speeches adaptados, respuestas listas para formularios, calibrar bandas salariales de mercado y mantener un registro estructurado dentro del propio repositorio web, protegido por cifrado AES-256-GCM y accesible desde la vista `/postulaciones`.

---

## 2. Arquitectura de Almacenamiento (Nativo en Repositorio)

Ubicación de origen en el repositorio:
`src/content/jobApplications/`

Estructura:
* Archivos Markdown individuales: `src/content/jobApplications/YYYY-MM-DD_empresa_rol.md`.
* Frontmatter con metadatos estructurados (`id`, `company`, `role`, `status`, `technologies`, `salaryRange`, etc.).
* Cifrado en build-time vía `scripts/build-data.js` $\rightarrow$ `src/resources/data/jobApplicationsEncrypted.ts`.
* Visualizador seguro en frontend: `src/modules/pages/jobApplicationsPage/` con desbloqueo por PIN de 6 dígitos.

---

## 3. Protocolo de Ejecución del Agente
1. **Contexto:** Analizar la oferta, identificar arquetipo de rol y tecnologías requeridas.
2. **Diagnóstico:** Evaluar fit técnico y recomendar banda salarial.
3. **Generación:** Redactar respuestas a formulario y speech de 30 segundos.
4. **Persistencia y Build:** Guardar la ficha en `src/content/jobApplications/` y ejecutar `node scripts/build-data.js` para cifrar y actualizar el Job Vault.
