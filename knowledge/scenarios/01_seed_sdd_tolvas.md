# Paquete Semilla de Incepción (Seed): Control de Abastecimiento de Tolvas (SMI Pucusana)

> [!IMPORTANT]
> **INSTRUCCIONES DE USO:**
> Este documento contiene la incepción consolidada (Intake, Briefing, Blueprint de Arquitectura, Modelo SQL y Backlog Inicial) lista para alimentar e instanciar un nuevo proyecto de software utilizando el framework de la plantilla `SDD_CDPG`.

---

# 1. DOCUMENTO DE INTAKE (`management/1.1_intake.md`)

## 1. Visión y Valor de Negocio
* **Problema Raíz:** El control de abastecimiento de preformas a tolvas en las líneas PET se realiza mediante un triple registro manual en papel (Hoja 1 de consumo, Hoja 2 de calidad y pegado de tiras en Hoja 3). Esto provoca horas contradictorias entre planillas, cálculos mentales errados en los cortes de botellas que generan sobreproducción, y decenas de horas hombre perdidas transcribiendo hojas arrugadas a Excel.
* **Usuarios Finales:** Abastecedores de tolva de SMI en planta Pucusana (personal operativo, uso en smartphone). En Fase 2 se sumará el Líder de Turno/Supervisor.
* **Métrica de Éxito:** 0% de discrepancias horarias entre reportes, tiempo de registro de caja < 2 segundos, y reducción a 0 minutos del tiempo de digitación al exportar directamente a Excel o conectar a Power BI.
* **Tiempo y Presupuesto:** Salida ultra-rápida (MVP en días). Despliegue en VPS propio (Hostinger con EasyPanel bajo subdominio de `rytecnology.com`) y base de datos Supabase en capa gratuita.

## 2. Alcance Funcional (Ultra-MVP)
* **Flujo Principal:** 
  1. Login con cuenta Google del abastecedor.
  2. Apertura de Turno (`I, II o III`), selección de Línea (`3, 4, 5, 6, 8 o 9`) y registro de nombres de responsables (*Abastecedor, Operador, Líder, Asistente*).
  3. Selección de Formato activo del catálogo (con opción de crear uno rápido si no existe) y definición opcional de meta de botellas.
  4. Escaneo rápido del código de barras 1D de la caja (o ingreso manual de 8 dígitos de HU) -> registro instantáneo con hora real y herencia de datos del lote.
  5. Cierre o cambio de formato en caliente cuando producción lo requiera.
  6. Visualización de resumen digital sincronizado y exportación a Excel `.xlsx` idéntico al formato de planta.
* **CRUD de Datos:** Turnos, Bloques de formato, Registros de cajas HU y Catálogo de formatos.

## 3. Atributos de Calidad y No Funcionales
* **Conectividad:** Aplicación web responsiva (PWA instalable en celular) que persiste en Supabase.
* **Latencia:** Lector de código de barras nativo en el navegador que detecte y registre en menos de 1 segundo.

---

# 2. DOCUMENTO DE BRIEFING (`management/1.2_briefing.md`)

## 1. Resumen Ejecutivo
Aplicación web responsiva para operarios de tolvas en embotelladora Pucusana que digitaliza el registro de cajas de preformas, calcula en tiempo real las cajas restantes para el corte de producción y consolida las planillas de Consumo e Inspección para consumo en Excel y Power BI.

## 2. Alcance Funcional por Entregables

### [E1] Entregable 1: Ultra-MVP Operativo
* **Módulo A: Gestión de Turnos y Líneas:** Configuración de fecha, turno, línea (`3, 4, 5, 6, 8, 9`), firmas del pie de página y cambio de formato dinámico.
* **Módulo B: Catálogo de Formatos:** Precarga de formatos conocidos (`15.7Cel.1881 CM`, `17.7 Cr.1881 CM`, etc.) con códigos SAP, terminales y unidades estándar.
* **Módulo C: Registro Rápido de Cajas (HU):** Escáner de código de barras 1D (Code 128) usando la cámara del teléfono + input manual de 8 dígitos. Herencia de valores de lote y recálculo en vivo de cajas faltantes.
* **Módulo D: Resumen Digital y Exportación Excel:** Tabla de salida que reproduce las columnas de la Hoja 1 (`PTP.R.2.PER.SO.4`) y Hoja 2 (`PTP.R.7.PER.SO.7`) con horas idénticas, y descarga en `.xlsx`.

### [E2] Entregable 2: Supervisión y Tiempos Muertos (Fase Siguiente)
* Asignación centralizada de metas desde panel de supervisor y alertas de parada de línea (`Línea Paró / Reanudó`).

### [E3] Entregable 3: Inspección de Calidad y Mermas (Fase Posterior)
* Registro de los 12 defectos de calidad en rosca/cuerpo y pesaje de mermas de preformas/botellas al cierre.

---

# 3. BLUEPRINT DE ARQUITECTURA Y BASE DE DATOS (`management/1.3_blueprint.md`)

## 1. Stack Tecnológico
* **Frontend:** React 18 / Next.js (o Vite PWA), TypeScript, Tailwind CSS o MUI, lector de código de barras `html5-qrcode` / `BarcodeDetector API`, exportador Excel (`xlsx`).
* **Backend & Base de Datos:** Supabase (PostgreSQL, Auth Google, RLS).
* **Hosting:** EasyPanel en VPS Hostinger con dominio/subdominio propio con SSL (ej. `planta.rytecnology.com`) y despliegue continuo vía Webhook de GitHub.
* **Analítica:** Conexión nativa de Power BI Desktop a PostgreSQL de Supabase.

## 2. Esquema Relacional Base (`management/database/schema.sql`)

```sql
-- Habilitar extensión UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. TABLA: perfiles_usuarios
CREATE TABLE IF NOT EXISTS perfiles_usuarios (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    nombre_completo TEXT NOT NULL,
    rol TEXT NOT NULL DEFAULT 'abastecedor' CHECK (rol IN ('abastecedor', 'supervisor', 'admin')),
    creado_en TIMESTAMPTZ NOT NULL DEFAULT now(),
    actualizado_en TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. TABLA: catalogo_formatos
CREATE TABLE IF NOT EXISTS catalogo_formatos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    codigo_sap TEXT NOT NULL UNIQUE,
    terminal_sap TEXT NOT NULL, -- Ej: 'B0U0', '4025'
    descripcion_sticker TEXT NOT NULL, -- Ej: '15.7Cel.1881 CM'
    gramaje NUMERIC(5,2) NOT NULL,
    color TEXT NOT NULL,
    rosca TEXT NOT NULL DEFAULT '1881',
    unidades_estandar_caja INTEGER NOT NULL, -- Ej: 19555, 8000
    peso_neto_estandar_kg NUMERIC(8,3),
    productos_asociados TEXT[] DEFAULT '{}', -- Ej: ARRAY['San Luis 750 ml']
    creado_en TIMESTAMPTZ NOT NULL DEFAULT now(),
    actualizado_en TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. TABLA: turnos_linea
CREATE TABLE IF NOT EXISTS turnos_linea (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    fecha DATE NOT NULL DEFAULT CURRENT_DATE,
    turno TEXT NOT NULL CHECK (turno IN ('I', 'II', 'III')),
    numero_linea INTEGER NOT NULL CHECK (numero_linea IN (3, 4, 5, 6, 8, 9)),
    usuario_id UUID NOT NULL REFERENCES perfiles_usuarios(id),
    nombre_abastecedor TEXT NOT NULL,
    nombre_operador TEXT,
    nombre_lider_turno TEXT,
    nombre_asistente_auxiliar TEXT,
    peso_desperdicio_preformas_kg NUMERIC(8,3) DEFAULT 0,
    peso_desperdicio_botellas_kg NUMERIC(8,3) DEFAULT 0,
    observaciones TEXT,
    estado TEXT NOT NULL DEFAULT 'activo' CHECK (estado IN ('activo', 'cerrado')),
    creado_en TIMESTAMPTZ NOT NULL DEFAULT now(),
    actualizado_en TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 4. TABLA: bloques_produccion
CREATE TABLE IF NOT EXISTS bloques_produccion (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    turno_linea_id UUID NOT NULL REFERENCES turnos_linea(id) ON DELETE CASCADE,
    orden_bloque INTEGER NOT NULL DEFAULT 1,
    formato_id UUID REFERENCES catalogo_formatos(id),
    nombre_producto_bebida TEXT NOT NULL, -- Ej: 'San Luis 750 ml'
    gramaje_color_texto TEXT NOT NULL, -- Ej: '15.7 celeste'
    orden_fabricacion TEXT,
    es_todo_el_turno BOOLEAN NOT NULL DEFAULT true,
    meta_botellas INTEGER, -- Opcional, editable en vivo
    cajas_iniciales_encontradas INTEGER NOT NULL DEFAULT 3, -- Tolva, línea, piso
    estado_bloque TEXT NOT NULL DEFAULT 'en_curso' CHECK (estado_bloque IN ('en_curso', 'completado')),
    creado_en TIMESTAMPTZ NOT NULL DEFAULT now(),
    actualizado_en TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 5. TABLA: registros_hus
CREATE TABLE IF NOT EXISTS registros_hus (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    bloque_produccion_id UUID NOT NULL REFERENCES bloques_produccion(id) ON DELETE CASCADE,
    turno_linea_id UUID NOT NULL REFERENCES turnos_linea(id) ON DELETE CASCADE,
    correlativo_item INTEGER NOT NULL,
    hora_registro TIMESTAMPTZ NOT NULL DEFAULT now(),
    hora_texto VARCHAR(5) NOT NULL, -- 'HH:mm'
    hu_completo VARCHAR(10) NOT NULL, -- '1062206055'
    hu_8_digitos VARCHAR(8) NOT NULL, -- '62206055'
    hu_4_digitos VARCHAR(4) NOT NULL, -- '6055'
    codigo_sap TEXT NOT NULL,
    terminal_sap VARCHAR(4) NOT NULL, -- 'B0U0'
    lote_completo TEXT, -- '261005Z17M'
    tipo_lote_corto TEXT NOT NULL, -- 'ZCP'
    maquina_inyectora TEXT NOT NULL, -- '17'
    fecha_fab_corta VARCHAR(5) NOT NULL, -- '05-10'
    unidades INTEGER NOT NULL, -- 19555
    peso_bruto_kg NUMERIC(8,3),
    peso_neto_kg NUMERIC(8,3),
    inspeccion_bolsa TEXT NOT NULL DEFAULT 'C' CHECK (inspeccion_bolsa IN ('C', 'NC')),
    defectos_calidad JSONB DEFAULT '{}'::jsonb, -- Soporta los 12 defectos de la Hoja 2
    delta_minutos_caja_anterior NUMERIC(6,2),
    creado_en TIMESTAMPTZ NOT NULL DEFAULT now(),
    actualizado_en TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Políticas RLS básicas
ALTER TABLE perfiles_usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE catalogo_formatos ENABLE ROW LEVEL SECURITY;
ALTER TABLE turnos_linea ENABLE ROW LEVEL SECURITY;
ALTER TABLE bloques_produccion ENABLE ROW LEVEL SECURITY;
ALTER TABLE registros_hus ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Lectura pública para usuarios autenticados" ON catalogo_formatos FOR SELECT TO authenticated USING (true);
CREATE POLICY "Gestión completa de turnos para autenticados" ON turnos_linea FOR ALL TO authenticated USING (auth.uid() = usuario_id);
CREATE POLICY "Gestión de bloques" ON bloques_produccion FOR ALL TO authenticated USING (true);
CREATE POLICY "Gestión de HUs" ON registros_hus FOR ALL TO authenticated USING (true);
CREATE POLICY "Lectura y edición de perfil propio" ON perfiles_usuarios FOR ALL TO authenticated USING (auth.uid() = id);

-- Datos iniciales del catálogo
INSERT INTO catalogo_formatos (codigo_sap, terminal_sap, descripcion_sticker, gramaje, color, rosca, unidades_estandar_caja, peso_neto_estandar_kg, productos_asociados)
VALUES 
('0015701B0U0', 'B0U0', '15.7Cel.1881 CM', 15.70, 'Celeste', '1881', 19555, 306.190, ARRAY['San Luis 750 ml']),
('00177004025', '4025', '17.7 Cr.1881 CM', 17.70, 'Cristal', '1881', 19571, 346.840, ARRAY['Ik 500 zero', 'Cc 500 zero'])
ON CONFLICT (codigo_sap) DO NOTHING;
```

---

# 4. BACKLOG INICIAL GLOBAL (`management/BacklogGlobal.md`)

```markdown
# Backlog Global del Proyecto: Sistema de Abastecimiento de Tolvas (SMI)

## [E1] Entregable 1: Ultra-MVP Operativo en Tolva

### Épica 1: Autenticación, Catálogo e Infraestructura Base
* **[US-01]** Configuración de Next.js, Tailwind, Supabase Auth (Google) y tabla de perfiles. `App: web`
* **[US-02]** Carga y visualización del catálogo maestro de formatos (`catalogo_formatos`). `App: web`

### Épica 2: Gestión de Turnos y Bloques de Formato
* **[US-03]** Apertura de Turno (`I, II, III`) con selector de Línea (`3, 4, 5, 6, 8, 9`) y firmas del pie de página. `App: web`
* **[US-04]** Configuración de Bloque de Producción: formato, meta de botellas (recalculable en vivo) y cajas de arranque en tolva. `App: web`
* **[US-05]** Cambio dinámico de formato en línea (cierre del bloque anterior y apertura del nuevo). `App: web`

### Épica 3: Captura Rápida de HUs de Preformas
* **[US-06]** Integración de escáner de código de barras 1D (Code 128) con cámara web y parseo de HU (`10...` -> 8 y 4 dígitos). `App: web`
* **[US-07]** Formulario de registro rápido con pre-llenado de lote (`ZCP`, `17`, `05-10`, `19555`, `B0U0`) y fallback manual de HU. `App: web`
* **[US-08]** Contador en tiempo real: cajas registradas, total unidades acumuladas y cajas restantes para el corte. `App: web`

### Épica 4: Resumen Operativo y Exportación de Datos
* **[US-09]** Vista espejo digital de las planillas (Pestaña Consumo y Pestaña Inspección con horas idénticas garantizadas). `App: web`
* **[US-10]** Generación y descarga de reporte Excel (`.xlsx`) estructurado por turno y bloques de formato. `App: web`
```
