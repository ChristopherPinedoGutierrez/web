---
id: "2026-09-04_utp_fullstack_developer"
company: "Universidad Tecnológica del Perú (UTP - Grupo Intercorp)"
role: "Fullstack Developer (Web, Mobile & AI Integration)"
area: "Tecnología & Transformación Digital / Canales Digitales & Datos"
location: "Lima, Perú (Modalidad Híbrida - Lunes a Viernes 8:30 am a 6:30 pm)"
status: "applied"
date: "2026-09-04 22:51"
salaryRange: "S/. 6,500 bruto mensual negociables (Planilla Régimen General con beneficios de ley y corporativos Intercorp)."
lastSalaryRef: "S/. 4,500 (Honorarios / Facturación independiente por proyectos)."
jobUrl: "https://utp.evaluar.com / https://pe.computrabajo.com"
technologies: ["ts","react","react-native","kotlin","nodejs","python","postgresql","docker","cicd","git","rag","llmOrchestration","cleanArchitecture","sdd"]
linkedProjects: ["calculape","notificape","sdd","web-portafolio"]
---

# [2026-09-04] UTP (Grupo Intercorp) - Fullstack Developer

- **Empresa:** Universidad Tecnológica del Perú (UTP) - Grupo Intercorp
- **Rol Vacante:** Fullstack Developer (Web, Mobile & AI Integration)
- **Área:** Tecnología & Transformación Digital / Plataformas Digitales
- **Sede:** Lima, Perú (Modalidad Híbrida)
- **Arquetipo / Enfoque Asignado:** Full Stack AI Developer & Platform Engineer (Web React, Mobile React Native / Kotlin, Backend Node/Python e Integración RAG / Agentes)
- **Pretensión Salarial Registrada:** S/. 6,500 bruto mensual negociables (en Planilla Régimen General, 14 sueldos + beneficios Intercorp)
- **Estado Actual:** Postulado (2026-09-04)
- **Link de la Vacante:** Portal de Empleos UTP / Grupo Intercorp

---

## 📋 1. Snapshot & Requisitos de la Convocatoria
*(Resumen inmutable guardado por si el enlace caduca)*

### Misión del Puesto
Construir y evolucionar aplicaciones web (front-end y back-end) y móviles sobre la plataforma del equipo. Diseñar APIs seguras, consumir productos de datos certificados de lakehouse y conectar servicios de Inteligencia Artificial (RAG, scoring y agentes) a través de pasarelas de IA con soporte para streaming, límites y observabilidad en producción.

### Retos y Responsabilidades Principales:
1. Construir aplicaciones web (React con TypeScript) y móviles multiplataforma/nativas (React Native / Kotlin).
2. Diseñar APIs y microservicios backend con autenticación, control de accesos y manejo seguro de secretos.
3. Consumir productos de datos certificados del lakehouse por contrato.
4. Integrar IA en la experiencia de usuario (RAG, scoring, agentes) por pasarela de IA (Mosaic AI Gateway / proxies equivalentes) con streaming, rate limits y manejo de errores.
5. Desplegar y operar aplicaciones as-code con CI/CD sobre Git, contenedores Docker y promoción por ambientes.
6. Soporte y observabilidad en producción: gestión de incidentes, métricas y SLOs.
7. Cuidar la privacidad desde el diseño: minimización y seudonimización de datos en rutas de IA para entornos educativos regulados.

### Requisitos Técnicos Solicitados:
* Bachiller, titulado o formación superior en Ingeniería de Sistemas, Computación o afines.
* Experiencia indispensable de 3 a 6 años desarrollando aplicaciones web full-stack en producción.
* Experiencia indispensable en frontend (React) con TypeScript.
* Experiencia móvil real comprobada (React Native o Kotlin) con apps publicadas o desplegadas a usuarios reales.
* Experiencia en backend y APIs (REST / GraphQL) con Node.js/TypeScript o Python, y bases de datos relacionales/no relacionales.
* Disciplina con Git, CI/CD, contenedores Docker y observabilidad.
* Integración real de IA / LLMs en aplicaciones (RAG, agentes, respuestas estructuradas).

---

## 📝 2. Registro de Formulario & Respuestas Enviadas
*(Datos clave registrados en la postulación)*

- **Pretensión Salarial Bruta Mensual Registrada:** `S/. 6,500` negociables (Planilla Régimen General).
- **Proyectos de Respaldo Inmediato:**
  - **CalculaPe:** Evidencia de experiencia móvil real con React Native / Expo y Kotlin con persistencia local y empaquetado.
  - **NotificaPe:** Evidencia de arquitectura full-stack SaaS en producción con React, Node.js, Supabase e integración de APIs.
  - **Ecosistema SDD:** Evidencia de desarrollo asistido por agentes de IA, RAG, pipelines de pruebas y CI/CD.

---

## ⚡ 3. Speech de 30 Segundos & Puntos Fuertes (Pitch para Entrevista)

> *"Hola, soy Christopher Pinedo. Desarrollador Fullstack y Platform Engineer con experiencia en la creación de aplicaciones web y móviles escalables integradas con Inteligencia Artificial. En el frontend trabajo con React y TypeScript, y en el ecosistema móvil desarrollo con React Native y Kotlin, habiendo llevado aplicaciones reales como CalculaPe desde el diseño hasta su empaquetado y persistencia offline. En el backend desarrollo servicios modulares y APIs en Node.js y Python sobre bases de datos SQL relacionales, conectando flujos de datos con modelos de IA (RAG, streaming y agentes conversacionales) bajo estrictos estándares de seguridad y observabilidad. Me entusiasma sumarme a la UTP y al Grupo Intercorp para construir plataformas educativas modernas que potencien la experiencia de estudiantes y docentes mediante tecnología e IA responsable."*

### Puntos Fuertes para el Discurso Técnico:
1. **Doble Dominio Web + Mobile:** Demostrar que no necesitas una curva de aprendizaje para móvil; ya tienes experiencia con **React Native y Kotlin**, sabiendo gestionar ciclo de vida de apps, estados locales y APIs.
2. **Integración de IA Práctica (RAG & Streaming):** Explicar cómo manejas consumo de endpoints de IA con respuesta en tiempo real (Server-Sent Events / streaming HTTP) y control de tokens/errores para evitar bloqueos en la interfaz.
3. **Privacidad y Seguridad en Educación:** Destacar el principio de menor privilegio, nunca enviar datos personales identificables (PII) directamente a los modelos y usar hashing/seudonimización.

---

## 💡 4. Glosario Técnico & Cheat Sheet para la Entrevista

* **React Native & Kotlin:** Framework multiplataforma que renderiza componentes nativos utilizando el motor JavaScript/Hermes, permitiendo extender módulos puente en código nativo Kotlin para optimizar rendimiento o almacenamiento local.
* **Streaming de Respuestas (SSE):** Protocolo unidireccional sobre HTTP (*Server-Sent Events*) que permite recibir texto generado por un LLM token a token en tiempo real, reduciendo drásticamente la latencia percibida por el usuario.
* **AI Gateway (ej. Mosaic AI Gateway / LiteLLM):** Capa intermedia de proxy que centraliza el acceso a múltiples modelos de IA, estandarizando autenticación, cuotas de consumo, caché semántica y logging de auditoría.
* **Lakehouse (Databricks / Delta Lake):** Arquitectura de datos que combina la flexibilidad y escalabilidad de los Data Lakes con el gobierno, transaccionalidad ACID y rendimiento de los Data Warehouses.
* **Seudonimización de Datos:** Técnica de protección de datos donde la información sensible del estudiante (DNI, nombres, datos clínicos/académicos) se sustituye por identificadores artificiales antes de alimentar modelos de IA.
