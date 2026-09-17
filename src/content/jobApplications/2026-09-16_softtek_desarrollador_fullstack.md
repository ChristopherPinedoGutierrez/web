---
id: "2026-09-16_softtek_desarrollador_fullstack"
company: "Softtek"
role: "Desarrollador Fullstack"
area: "Ingeniería de Software / Servicios de TI & Desarrollo Full Stack"
location: "Lima, Perú (Híbrido)"
status: "applied"
date: "2026-09-16 21:30"
salaryRange: "S/. 5,000 bruto mensual (Planilla Régimen General, Contrato Indeterminado, EPS 100%, Bono de Conectividad)."
lastSalaryRef: "S/. 4,500 (Honorarios / Consultoría y desarrollo independiente por proyectos)."
jobUrl: "https://www.linkedin.com/company/softtek/"
technologies: ["react","ts","js","nodejs","express","atomicDesign","restApi","cleanArchitecture","sdd","git"]
linkedProjects: ["notificape","calculape","web-portafolio"]
---

# [2026-09-16] Softtek - Desarrollador Fullstack

- **Empresa:** Softtek (Multinacional líder de consultoría y servicios de TI con presencia en 30+ oficinas globales)
- **Rol Vacante:** Desarrollador Fullstack
- **Área:** Ingeniería de Software / Servicios de TI & Soluciones Digitales
- **Sede / Modalidad:** Lima, Perú (Modalidad Híbrida / FlexWorking)
- **Tipo de Contrato:** Planilla Régimen General con **Contrato Indeterminado** (14 sueldos + CTS + utilidades)
- **Beneficios Destacados:** EPS al 100%, Bono/Concepto de conectividad mensual, Plataforma virtual con 3,000+ cursos y convenios corporativos
- **Arquetipo / Enfoque Asignado:** Full Stack Product Developer (React, Next.js, Node.js, Express, Pasarelas de Pago, Atomic Design y Arquitecturas Modulares)
- **Pretensión Salarial Registrada:** S/. 5,000 bruto mensual (~S/. 4,000 netos mensuales en cuenta)
- **Estado Actual:** Postulado (2026-09-16)
- **Link de la Empresa:** https://www.linkedin.com/company/softtek/

---

## 📋 1. Snapshot & Requisitos de la Convocatoria
*(Resumen inmutable guardado por si la publicación original caduca)*

### Misión del Puesto
Desarrollar soluciones de software integrales de extremo a extremo (Frontend + Backend), implementando interfaces modulares, servicios backend en Node.js y flujos transaccionales con pasarelas de pago para proyectos corporativos y de retail de Softtek.

### Requisitos Técnicos Solicitados:
* Profesional en Ingeniería de Sistemas, Informática o carreras afines.
* Experiencia como Desarrollador Fullstack (4 años solicitados en convocatoria / 3 años registrados).
* **Frontend Stack:** JavaScript, TypeScript, React.js, Next.js (Hooks), Styled Components, Storybook.
* **Backend Stack:** Node.js, Express.js.
* **Arquitectura y Calidad:** Patrones de diseño (Atomic Design) y pruebas unitarias.
* **Conocimientos Específicos Clave:** Integración avanzada y manejo de pasarelas de pago.
* **Metodologías:** Metodologías ágiles (Scrum, Kanban).

---

## 📝 2. Registro de Formulario & Respuestas Enviadas
*(Datos exactos ingresados en la postulación)*

- **Pretensión salarial bruta mensual:** `5000` (S/. 5,000 bruto mensual en planilla).
- **Años de experiencia general como Fullstack:** `3` (3 años integrando Frontend React/TypeScript y Backend Node.js/APIs).
- **Formación:** Egresado de Ingeniería de Sistemas de Información (ISIL).
- **Modalidad aceptada:** Híbrida en Lima con bono de conectividad.

---

## ⚡ 3. Speech de 30 Segundos & Puntos Fuertes (Pitch para Entrevista)

> *"Hola, soy Christopher Pinedo. Desarrollador Fullstack con sólida experiencia construyendo aplicaciones completas con React y TypeScript en el frontend, y servicios desacoplados en Node.js y Express en el backend. Mi valor diferencial para este rol es mi experiencia directa integrando flujos transaccionales y pasarelas de pago: he implementado la pasarela de Mercado Pago en producción para NotificaPe, y el modelo de suscripciones y pagos recurrentes con Google Play Billing en CalculaPe, dominando la tokenización segura bajo estándares PCI-DSS y la conciliación asíncrona mediante webhooks con verificación criptográfica e idempotencia. En la UI trabajo bajo metodologías de diseño modular como Atomic Design y tipado estricto. Me entusiasma incorporarme a Softtek para aportar agilidad, criterio arquitectónico y robustez técnica en sus soluciones digitales."*

### Puntos Fuertes para el Discurso Técnico:
1. **Dominio del Ciclo Completo de Pasarelas de Pago:** Explicar cómo funciona la tokenización en cliente, orquestación del backend y la conciliación asíncrona mediante webhooks evitando duplicidad de cobros.
2. **Arquitectura Backend Limpia en Node.js / Express:** Separación estricta de capas (*router $\rightarrow$ controller $\rightarrow$ service/repository*), middlewares de autenticación, validación con Zod y manejo centralizado de errores.
3. **Atomic Design & Storybook:** Organización modular de componentes en Átomos, Moléculas, Organismos y Templates, permitiendo escalabilidad y reusabilidad del Design System.

---

## 💡 4. Glosario Técnico & Cheat Sheet para la Entrevista (Fullstack & Payments)

* **Tokenización (PCI-DSS Compliance):** Proceso donde los datos sensibles de la tarjeta (PAN, CVV) son enviados directamente desde el frontend a los servidores seguros de la pasarela de pago a cambio de un `token` efímero. Tu servidor backend nunca almacena ni manipula tarjetas de crédito reales, reduciendo el alcance de auditoría de seguridad.
* **Webhooks & Conciliación Asíncrona:** Mecanismo por el cual la pasarela de pago (Mercado Pago, Stripe, Culqi) avisa a tu backend que una transacción cambió de estado (`payment.approved`, `payment.rejected`). Permite actualizar el estado de los pedidos sin depender de que el usuario mantenga abierta la pestaña del navegador.
* **Idempotencia en Pagos:** Principio de diseño que garantiza que si la pasarela reenvía el mismo webhook múltiples veces por problemas de conectividad, tu servidor procese la orden una sola vez y no duplique créditos, suscripciones ni cargos en la base de datos (usando `idempotency_key` o identificador único de transacción).
* **Google Play In-App Subscriptions:** Arquitectura de pagos recurrentes que gestiona el ciclo de vida de membresías: renovaciones automáticas, periodos de gracia (*grace period*), pausas y notificaciones en tiempo real mediante Google Cloud Pub/Sub hacia el backend.
* **Atomic Design (Brad Frost):** Metodología para construir sistemas de diseño escalables dividiendo la UI en 5 niveles:
  * *Átomos:* Componentes indivisibles (botones, inputs, etiquetas, iconos).
  * *Moléculas:* Unión de átomos con una función simple (un input de búsqueda con su botón).
  * *Organismos:* Secciones complejas e independientes (barra de navegación, formulario de checkout de pago).
  * *Templates:* Estructuras de layout de página con datos simulados.
  * *Pages:* Instancias finales del template con datos reales inyectados.
