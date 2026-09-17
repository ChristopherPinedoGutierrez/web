---
id: "2026-09-04_deployguru_fullstack_engineer_agentes_ia"
company: "Deploy Gurú"
role: "Full-Stack Engineer Semisenior — Agentes de IA (Sector Asegurador)"
area: "Ingeniería de Software / Inteligencia Artificial & Automatización Multi-tenant"
location: "Remoto (100% Remote - LATAM / España)"
status: "rejected"
date: "2026-09-04 22:56"
salaryRange: "S/. 6,500 – S/. 7,500 PEN (o $1,800 – $2,000 USD mensual en esquema remoto)."
lastSalaryRef: "S/. 4,500 (Honorarios / Facturación independiente por proyectos)."
jobUrl: "https://pe.linkedin.com/jobs / Portal Deploy Gurú"
technologies: ["python","fastapi","react","ts","zustand","tailwind","postgresql","docker","kubernetes","celery","redis","git","githubActions","sdd","cleanArchitecture"]
linkedProjects: ["notificape","calculape","sdd","web-portafolio"]
---

# [2026-09-04] Deploy Gurú - Full-Stack Engineer Semisenior (Agentes de IA)

- **Empresa:** Deploy Gurú (Boutique de Software & Agentes de IA)
- **Cliente / Sector:** Plataforma multi-tenant para el Sector Asegurador (Multiasistencia)
- **Rol Vacante:** Full-Stack Engineer Semisenior — Agentes de IA
- **Área:** Software Engineering / AI Agents & Automation
- **Sede:** 100% Remoto
- **Arquetipo / Enfoque Asignado:** Full Stack AI Developer & Platform Engineer (React 19, TypeScript, Zustand, Tailwind, Python, FastAPI, PostgreSQL multi-tenant y WhatsApp Cloud API)
- **Pretensión Salarial Sugerida:** S/. 6,500 – S/. 7,500 PEN (o $1,800 – $2,000 USD mensual)
- **Estado Actual:** Descartado en Filtro Inicial (2026-09-15)
- **Link de la Vacante:** LinkedIn Jobs / Deploy Gurú

---

## 📋 1. Snapshot & Requisitos de la Convocatoria
*(Resumen inmutable guardado por si el enlace caduca)*

### Misión del Puesto
Asumir la propiedad end-to-end de uno de los agentes de IA de una plataforma multi-tenant del sector asegurador. El agente automatiza la gestión de citas con el asegurado por WhatsApp, correo y canal de voz, integrándose directamente con el ERP del cliente. Responsabilidad completa sobre diseño, backend, frontend, despliegue y alineación con negocio.

### Retos y Responsabilidades Principales:
1. Desarrollar y mantener el agente de agenda digital de extremo a extremo (contacto, franjas, confirmación, recordatorios, cancelaciones, escalado a humano).
2. Construir backend en Python/FastAPI bajo arquitectura modular por dominio (*endpoint → servicio → repositorio*).
3. Desarrollar paneles de negocio en React 19 + TypeScript estricto, Zustand y Tailwind CSS.
4. Desarrollar integraciones críticas: ERP (JSON:API), WhatsApp Cloud API de Meta, SMTP, voz y geolocalización.
5. Gestionar migraciones y aislamiento en PostgreSQL multi-tenant (Alembic, schema por agente).
6. Procesamiento asíncrono con Celery y Redis (planificadores, colas, reintentos, idempotencia).
7. Despliegue y operación en Kubernetes (AKS) con Docker y CI/CD en GitHub Actions.
8. Testing riguroso (pytest, Vitest), code review y linting bloqueante.
9. Traducir decisiones de negocio en especificaciones y configuraciones sin hardcodear lógica.

### Requisitos Técnicos Solicitados:
* Experiencia con Python, FastAPI, SQLAlchemy y Alembic.
* PostgreSQL: migraciones, multi-schema, índices.
* React con TypeScript (Zustand, TanStack Query, Tailwind).
* Nociones de Docker y Kubernetes (diagnóstico en cluster).
* Nociones de Celery y Redis (colas, caché, idempotencia).
* Experiencia integrando APIs de terceros (webhooks, reintentos, manejo de estados).
* Se valorará especialmente: WhatsApp Cloud API / Meta Business (plantillas, WABA) y experiencia previa en SaaS multi-tenant.

---

## 📝 2. Registro de Formulario & Respuestas Enviadas
*(Datos cuantitativos y respuestas registradas en la postulación)*

- **¿Tienes experiencia con agentes de IA con voz y texto?:** `Sí` (orquestación de LLMs, pipelines STT/TTS tipo Whisper/ElevenLabs y flujos conversacionales automatizados).
- **Años de experiencia con JavaScript y TypeScript:** `3 años` (desarrollo web/mobile, tipado estricto, Zustand, React, Node.js).
- **Años de experiencia con Python:** `2 años` (FastAPI, consumo de APIs, scripts de backend, pipelines de datos e integración de modelos).
- **Pretensión salarial en formulario:** No solicitada en la primera fase (se mantiene objetivo: S/. 7,000 PEN o $1,900 USD).

---

## ⚡ 3. Speech de 30 Segundos & Puntos Fuertes (Pitch para Entrevista)

> *"Hola, soy Christopher Pinedo. Ingeniero Full-Stack especializado en el desarrollo de arquitecturas SaaS y agentes de IA con React, TypeScript y Python. Mi perfil encaja naturalmente con este reto porque en mi proyecto NotificaPe diseñé e implementé una plataforma multi-tenant de automatización y entrega de notificaciones conectada a la API oficial de WhatsApp Cloud de Meta, gestionando plantillas, webhooks bidireccionales, reintentos e idempotencia en flujos asíncronos. En el frontend trabajo con React, TypeScript estricto, Zustand y Tailwind CSS, y en el backend construyo servicios modulares por dominio en FastAPI y bases relacionales PostgreSQL. Me entusiasma sumarme a Deploy Gurú para asumir la propiedad integral del agente de agenda digital y llevar la interacción con asegurados al siguiente nivel."*

### Puntos Fuertes para el Discurso Técnico:
1. **Match 1 a 1 con NotificaPe:** Poder demostrar en vivo o explicar a detalle la arquitectura de conexión con Meta Business / WhatsApp Cloud API, webhook verification (`hub.challenge`), estados de mensajes (`sent, delivered, read`) y manejo de errores.
2. **Frontend Moderno:** React + TypeScript + Zustand (gestor de estado liviano y desacoplado) y Tailwind CSS.
3. **Arquitectura Limpia & Spec-Driven Development:** Explicar cómo separas el dominio (*router $\rightarrow$ service $\rightarrow$ repository*), garantizando que las reglas de negocio del sector asegurador queden parametrizadas y no acopladas al código.

---

## 💡 4. Glosario Técnico & Cheat Sheet para la Entrevista

* **WhatsApp Cloud API (WABA):** API oficial alojada en la nube de Meta para enviar mensajes masivos y conversacionales, que requiere verificación de webhooks, gestión de plantillas aprobadas y manejo de ventanas de atención de 24 horas.
* **Multi-tenant (Multi-schema):** Estrategia en PostgreSQL donde múltiples clientes o agentes comparten la misma base de datos pero sus datos residen en esquemas separados (`search_path`), garantizando aislamiento y seguridad.
* **Celery & Redis:** Combinación estándar en Python donde Redis actúa como broker de mensajes en memoria y Celery ejecuta tareas asíncronas en segundo plano (envío de correos, llamadas programadas a APIs y reintentos con backoff).
* **Zustand:** Librería minimalista para manejo del estado global en React basada en hooks y closures, sin el boilerplate excesivo de Redux y con soporte nativo de TypeScript.
* **Idempotencia en Webhooks:** Garantía de que procesar múltiples veces el mismo evento de notificación (por reintentos de red del proveedor) no genere duplicados en la base de datos o múltiples mensajes al asegurado.

---

## 📌 5. Diagnóstico de Descarte en Filtro Inicial & Conclusiones (Post-Mortem)

- **Fecha de Notificación / Actualización:** 2026-09-15
- **Fase de Descarte:** Filtro Inicial / Screening Curricular (sin contacto técnico).

### Factores Determinantes del Descarte:
1. **Alta Saturación en Convocatoria 100% Remota (LATAM / España):**
   - Al ser una posición 100% remota abierta a toda la región hispanohablante para una boutique de software, este tipo de vacantes suele recibir cientos de postulaciones en pocos días.
2. **Exigencia Específica en Ecosistema DevOps / Orquestación en Producción:**
   - La vacante requería experiencia operativa probada en Kubernetes (AKS), Celery, Redis y despliegues en infraestructura de contenedores para alta concurrencia. Aunque el stack de frontend (React/Zustand) y APIs (FastAPI) estaba alineado, perfiles con mayor bagaje devops/infraestructura en producción suelen tener ventaja en el screening inicial de startups/boutiques pequeñas que buscan perfiles que administren el cluster sin soporte de un equipo de DevOps dedicado.
3. **Años Declarados en Python:**
   - En el formulario se declararon 2 años en Python frente a 3 años en JS/TS. Para roles donde el backend en Python/FastAPI con SQLAlchemy y Alembic es el núcleo crítico del agente de agenda, los evaluadores pudieron priorizar candidatos con mayor trayectoria exclusiva en Python.

### Conclusiones & Aprendizajes:
* **Fortaleza del Caso NotificaPe:** La arquitectura de NotificaPe (WhatsApp Cloud API, webhooks, idempotencia) sigue siendo un activo de altísimo valor para vacantes de agentes conversacionales.
* **Lección estratégica:** Continuar fortaleciendo las demos públicas y métricas tangibles de NotificaPe (arquitectura de colas, Docker, manejo de carga) para visibilizar la capacidad en backend Python e infraestructura en el CV.
