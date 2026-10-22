# Contexto Operativo & Banco de Conocimiento: "Mi Empleo en SMI" (Planta Arca Continental Pucusana)

> [!IMPORTANT]
> **DIRECTIVA DE PRIVACIDAD & CONFIDENCIALIDAD:**
> Este documento es estrictamente para consumo interno de agentes y desarrollo en este repositorio.
> **NO forma parte del sitio web, NO se compila en el bundle de Vite, NO se incluye en el CV ni figura en `/postulaciones`**.
> Permanecerá aislado hasta que exista un ascenso formal o una decisión explícita de convertir las soluciones en un caso de estudio público.

---

## 1. Perfil del Empleo y Situación Actual

* **Empresa Empleadora:** San Miguel Industrias PET (SMI).
* **Cliente / Sede de Despliegue:** In-house en la Planta Embotelladora Arca Continental Lindley (Pucusana, Lima Sur).
* **Posición Formal:** Ayudante operativo de planta.
* **Motivo de Ingreso:** Conveniencia y cercanía geográfica + acceso táctico a operaciones industriales a gran escala.
* **Estrategia Personal ("Caballo de Troya"):**
  - Mantener este empleo en paralelo a la búsqueda activa de empleo formal en Datos / BI / TI.
  - Usar la estancia física en planta para observar flujos de trabajo, identificar cuellos de botella manuales en Excel y proponer mejoras graduales no invasivas.
  - Generar tracción interna para un ascenso a analista / soporte técnico, o bien construir experiencia práctica directa sobre procesos industriales masivos.

---

## 2. Ecosistema Tecnológico de la Planta

* **Ecosistema Microsoft 365:**
  - **Excel:** Centro neurálgico del trabajo administrativo y de supervisión de planta. La mayoría de reportes se procesan en hojas de cálculo tradicionales.
  - **Power BI:** Plataforma corporativa para cuadros de mando e indicadores gerenciales.
  - **SharePoint / OneDrive / Teams:** Almacenamiento y compartición de libros de trabajo.
  - **Power Automate:** Potencial para flujos de notificación o actualización de libros compartidos.
* **ERP Central:**
  - **SAP:** Utilizado tanto por Arca Continental como por SMI para órdenes de fabricación (OF), control de inventarios de materia prima (resina, preformas), mermas y despachos.
* **Origen de los Datos:**
  - Archivos Excel y reportes planos generados automáticamente por la maquinaria de producción (inyección, soplado, etiquetado, control de calidad).
  - Reportes derivados por el personal de Arca Continental entregados a los supervisores/asistentes de SMI.
* **Perfil de Usuarios:**
  - Personal netamente operativo y no técnico.
  - Manipulación manual (copiado, pegado, cálculos manuales) propensa a errores humanos y desgaste de tiempo.

---

## 3. Filosofía y Restricciones de Arquitectura ("Máximo Impacto, Cero Intrusión")

SMI y Arca Continental son empresas altamente estructuradas con estrictas políticas de TI y ciberseguridad. **Está terminantemente descartado proponer código arbitrario no autorizado, software externo o arquitecturas invasivas.**

Toda solución debe ejecutarse dentro del stack nativo disponible:

```
[Nivel 1: Nativo sin código] Power Query (M) + Fórmulas dinámicas (XLOOKUP, FILTER, LAMBDA)
       ↓
[Nivel 2: Automatización local] Macros VBA autocontenidas y limpias para tareas batch repetitivas
       ↓
[Nivel 3: Inteligencia Operativa] Dashboards en Power BI conectando a fuentes limpias
       ↓
[Nivel 4: Flujos e Integraciones] Power Automate / conciliación directa con reportes exportados de SAP
```

---

## 4. Registro y Catálogo de Escenarios Operativos

| ID | Nombre del Escenario | Área / Línea | Estado | Roadmap | Documento |
|---|---|---|---|---|---|
| **ESC-01** | Abastecimiento de Tolvas para Líneas de Producción | In-House Arca Pucusana (6 Líneas) | `En Análisis` | Fase 1 (MVP) → Fase 2 (Power BI) → Fase 3 (Alertas) | [01_abastecimiento_tolvas_lineas.md](scenarios/01_abastecimiento_tolvas_lineas.md) |

---

## 5. Metodología para Capturar Nuevos Escenarios

Conforme descubras más flujos en planta, los documentaremos siguiendo este estándar:
1. **Identificación (ID y Jurisdicción):** Delimitar el ámbito para garantizar cero fricción política con otras áreas.
2. **Estimación de Escala:** Número de operarios/usuarios involucrados y volumen de registros diarios.
3. **Roadmap en Fases Cortas:**
   - **Fase 1 (Quick Win / Ayuda Inmediata):** Solución rápida de uso propio/compañero para capturar data limpia.
   - **Fase 2 (Centralización / Conexión BI):** Conectar la data a Power BI o consumo estructurado sin descargas manuales.
   - **Fase 3 (Orquestación / Automatización):** Funcionalidades avanzadas (alertas, roles, control de mermas).

