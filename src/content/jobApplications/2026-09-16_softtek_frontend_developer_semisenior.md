---
id: "2026-09-16_softtek_frontend_developer_semisenior"
company: "Softtek"
role: "Frontend Developer Semi Senior (React)"
area: "Ingeniería de Software / Servicios de TI & Desarrollo Frontend"
location: "Lima, Perú (Híbrido)"
status: "applied"
date: "2026-09-16 21:18"
salaryRange: "S/. 5,000 bruto mensual (Planilla Régimen General, Contrato Indeterminado, EPS 100%, Bono de Conectividad)."
lastSalaryRef: "S/. 4,500 (Honorarios / Consultoría y desarrollo independiente por proyectos)."
jobUrl: "https://www.linkedin.com/company/softtek/"
technologies: ["react","ts","js","html","css","git","cleanArchitecture","sdd"]
linkedProjects: ["web-portafolio","notificape","calculape"]
---

# [2026-09-16] Softtek - Frontend Developer Semi Senior (React)

- **Empresa:** Softtek (Proveedor global de soluciones de TI con 30+ oficinas en Norteamérica, LATAM, Europa y Asia)
- **Rol Vacante:** Frontend Developer Semi Senior (React)
- **Área:** Ingeniería de Software / Servicios de TI & Desarrollo Frontend
- **Sede / Modalidad:** Lima, Perú (Modalidad Híbrida / FlexWorking)
- **Tipo de Contrato:** Planilla Régimen General con **Contrato Indeterminado** (todos los beneficios de ley, 14 sueldos + CTS)
- **Beneficios Destacados:** Cobertura EPS 100%, Bono/Concepto de conectividad mensual, Capacitación continua con plataforma de 3,000+ cursos y convenios corporativos
- **Arquetipo / Enfoque Asignado:** Frontend Specialist & UI Application Engineer (React, TypeScript, Patrones de Diseño, Principios SOLID y Arquitectura Limpia)
- **Pretensión Salarial Registrada:** S/. 5,000 bruto mensual (Asegura ~S/. 4,000 netos mensuales en mano)
- **Estado Actual:** Postulado (2026-09-16)
- **Link de la Empresa:** https://www.linkedin.com/company/softtek/

---

## 📋 1. Snapshot & Requisitos de la Convocatoria
*(Resumen inmutable guardado por si la publicación original caduca)*

### Misión del Puesto
Diseñar, construir, implementar y mantener aplicaciones web escalables con React, TypeScript y arquitecturas orientadas a componentes para clientes corporativos de Softtek a nivel global.

### Requisitos Técnicos Obligatorios:
* Profesional en Ingeniería de Sistemas, Informática, Software o carreras afines.
* +2 años de experiencia comprobable como Frontend Developer.
* +2 años de experiencia trabajando con React, JavaScript y TypeScript.
* Dominio profundo de Closures, Programación Orientada a Objetos (OOP) e Interfaces en TypeScript.
* Experiencia sólida en aplicación de patrones de diseño (Singleton, Factory, Observer).
* Experiencia en principios SOLID aplicados al desarrollo frontend y arquitectura de componentes.
* Experiencia o nociones en Next.js y frameworks de renderizado/generación estática (Gatsby/SSR/SSG).
* Manejo riguroso de Git (flujos de trabajo, branching, pull requests).
* Conocimiento y experiencia en Metodologías Ágiles (Scrum, Kanban).

---

## 📝 2. Registro de Formulario & Respuestas Enviadas
*(Datos y respuestas registradas en la postulación)*

- **Pretensión salarial bruta indicada:** `5000` (S/. 5,000 bruto mensual).
- **Años de experiencia:** `3` (3 años en desarrollo web, JavaScript, TypeScript y React).
- **Formación:** Egresado de Ingeniería de Sistemas de Información (ISIL).
- **Modalidad:** Aceptada modalidad híbrida en Lima con bono de conectividad.

---

## ⚡ 3. Speech de 30 Segundos & Puntos Fuertes (Pitch para Entrevista)

> *"Hola, soy Christopher Pinedo. Ingeniero de software especializado en desarrollo Frontend con React y TypeScript moderno. Me destaco por construir aplicaciones basadas en fundamentos sólidos de ingeniería: tipado estricto con interfaces desacopladas, closures para encapsular lógica en custom hooks y la aplicación rigurosa de principios SOLID y patrones de diseño como Factory, Observer y Singleton. Cuento con experiencia en todo el ciclo de vida del frontend: desde la integración con APIs y manejo de estado global hasta optimización de rendimiento y despliegue continuo con Git. Me entusiasma sumarme a Softtek para aportar calidad técnica, orden arquitectónico y autonomía en los proyectos de sus clientes corporativos."*

---

## 💡 4. Glosario Técnico & Cheat Sheet: Patrones de Diseño y Principios SOLID en React (Softtek Edition)

### A. Patrones de Diseño solicitados por Softtek:

1. **Singleton (Instancia Única):**
   * *Definición:* Garantiza que una clase o módulo tenga una única instancia en toda la aplicación y provee un punto de acceso global a ella.
   * *Ejemplo en tu Frontend:* Tu cliente HTTP de Axios preconfigurado con interceptores de autenticación, o el cliente de base de datos de Supabase en *NotificaPe*.
2. **Factory (Factoría / Fábrica):**
   * *Definición:* Método o función que se encarga de crear objetos o componentes dinámicamente sin exponer la lógica de instanciación al cliente.
   * *Ejemplo en tu Frontend:* Un componente `<DynamicFieldFactory type="text | select | date" />` que retorna el input adecuado según la configuración recibida del backend.
3. **Observer (Observador / Publicador-Suscriptor):**
   * *Definición:* Un objeto (sujeto) mantiene una lista de dependientes (observadores) y les notifica automáticamente cualquier cambio de estado.
   * *Ejemplo en tu Frontend:* Es el corazón reactivo de los stores como **Zustand** o Redux, donde los componentes suscritos mediante selectores (`useStore(state => state.user)`) se re-renderizan únicamente cuando cambia la porción de estado observada.

---

### B. Principios SOLID Aplicados al Frontend con React & TypeScript:

* **S — Single Responsibility (Responsabilidad Única):**  
  Un componente debe tener una única razón para cambiar. Se logra separando la lógica de negocio y llamadas a APIs en **Custom Hooks** (`useUserData`), dejando al componente React únicamente como una función pura de renderizado visual.
* **O — Open/Closed (Abierto a Extensión, Cerrado a Modificación):**  
  Un componente debe poder extender su comportamiento sin alterar su código fuente interno. Se aplica mediante **Composición con `children`**, Slots o Render Props (ej. un `<Modal>` que recibe cualquier contenido hijo sin tener que modificar la estructura del modal base).
* **L — Liskov Substitution (Sustitución de Liskov):**  
  Cualquier componente derivado o especializado debe poder sustituir a su componente base sin romper la aplicación. Se aplica en TypeScript extendiendo los atributos nativos de HTML (ej. un `<CustomButton>` que extiende `React.ButtonHTMLAttributes<HTMLButtonElement>` y puede usarse donde sea que se use un `<button>`).
* **I — Interface Segregation (Segregación de Interfaces):**  
  No forzar a un componente a depender de interfaces o props que no utiliza. En lugar de pasar un objeto gigante `user: FullUserProfile` a un componente que solo muestra un avatar, la interfaz de props debe exigir únicamente `avatarUrl: string` y `userName: string`.
* **D — Dependency Inversion (Inversión de Dependencias):**  
  Los módulos de alto nivel (UI) no deben depender directamente de módulos de bajo nivel (ej. llamadas `fetch` directas hardcodeadas en el componente). Deben depender de abstracciones (ej. pasar la función de servicio o inyectarla a través de React Context o un Hook de abstracción), facilitando pruebas unitarias con mocks.
