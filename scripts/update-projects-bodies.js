const fs = require('fs');
const path = require('path');

const techDir = path.join(__dirname, '../src/content/technologies');
const projDir = path.join(__dirname, '../src/content/projects');

// 1. Create Technologies
const createFile = (id, data) => {
  const filePath = path.join(techDir, `${id}.md`);
  const content = `---
name: "${data.name}"
area: "${data.area}"
group: "${data.group || 'Platform'}"
typeDef: "${data.typeDef || 'Service'}"
iconName: "${data.iconName}"
brandColor: "${data.brandColor || '#ffffff'}"
invertColors: ${data.invertColors || false}
contrast: ${data.contrast || false}
monochrome: ${data.monochrome || false}
ecosystem: []
state: "${data.state || 'conocidas'}"
---

${data.desc || ''}
`;
  fs.writeFileSync(filePath, content, 'utf-8');
};

createFile('mercadopago', { name: 'Mercado Pago', area: 'DevOps & Tools', group: 'Platform', iconName: 'SiMercadopago', brandColor: '#00B1EA', desc: 'Plataforma de pagos utilizada para procesar suscripciones y transacciones SaaS.' });
createFile('googlePay', { name: 'Google Pay', area: 'DevOps & Tools', group: 'Platform', iconName: 'SiGooglepay', monochrome: true, desc: 'Sistema de pago nativo de Google utilizado para suscripciones in-app.' });
createFile('admob', { name: 'AdMob', area: 'DevOps & Tools', group: 'Platform', iconName: 'SiGoogleadmob', brandColor: '#EA4335', desc: 'Plataforma de monetización de aplicaciones móviles de Google.' });


// 2. Rewrite Projects with New Content
const notificapeFile = path.join(projDir, 'notificape.md');
const notificapeContent = `---
title: "NotificaPe"
project_type: "ecosystem"
sync_source: "c:/Trabajo/Proyectos/NotificaPe/NotificaPe_Specs/management/1.2_briefing.md"
modules:
  - name: "Plataforma Web (SaaS Admin)"
    platform: "Web"
    repository: ""
    description: "Panel administrativo alojado en Easypanel (Docker) para gestionar suscripciones, cobros y monitorización de las apps."
    technologies: ["react", "vite", "supabase", "postgresql", "ts", "js", "html", "css", "tailwind", "docker", "easypanel", "cicd", "git", "github", "gcp", "mercadopago"]
  - name: "NotificaPe Admin App"
    platform: "Android Native"
    repository: ""
    description: "Aplicación nativa emisora que intercepta las notificaciones del OS y las sincroniza con Supabase en tiempo real."
    technologies: ["kotlin", "jetpackCompose", "supabase", "postgresql", "oop", "solid", "declarativeUi", "cicd", "githubActions", "googlePlay", "git", "github", "gcp"]
  - name: "NotificaPe Viewer App"
    platform: "Android Native"
    repository: ""
    description: "Aplicación receptora segura que muestra las notificaciones a los vendedores usando WebSockets y UI Declarativa."
    technologies: ["kotlin", "jetpackCompose", "supabase", "postgresql", "oop", "solid", "declarativeUi", "cicd", "githubActions", "googlePlay", "git", "github", "gcp"]
short_description: "Sistema de sincronización Serverless y aplicación nativa para confirmar notificaciones de billeteras digitales en tiempo real."
date: "2024-01"
importance: 10
status: "Testing"
source: "Personal project"
repository: ""
url: "https://notificape.ryctech.dev/"
technologies: ["kotlin", "react", "vite", "supabase", "postgresql", "ts", "js", "html", "css", "tailwind", "jetpackCompose", "oop", "solid", "declarativeUi", "sdd", "docker", "easypanel", "cicd", "githubActions", "googlePlay", "git", "github", "gcp", "mercadopago"]
---
## El Problema
Los negocios con múltiples puntos de venta sufren desincronización y riesgo de fraude al confirmar pagos digitales. Hasta ahora, dependían de capturas falsificables o de llamar al dueño para confirmar transacciones, ralentizando enormemente las ventas físicas.

## La Solución
Un ecosistema completo de sincronización Serverless. Intercepta de forma segura las notificaciones push del dispositivo administrador (Emisor) y las distribuye en tiempo real a las pantallas de los vendedores (Receptores). El proyecto abarca desde una Web Administrativa (SaaS) hasta clientes nativos Android de alto rendimiento.

## Arquitectura Técnica y DevOps
El ecosistema completo utiliza infraestructura avanzada:
- **Serverless & WebSockets:** Core backend apoyado en Supabase (Auth, Postgres, Realtime) y GCP.
- **Pagos SaaS:** Integración nativa con **Mercado Pago** en la plataforma web para automatizar cobros recurrentes de suscripciones.
- **Mobile Native & Declarative UI:** Las apps Android están desarrolladas íntegramente con **Jetpack Compose**, empleando patrones MVI/MVVM, arquitecturas SOLID y programación orientada a objetos (OOP).
- **Mobile DevOps (CI/CD):** Pipeline totalmente automatizado mediante **GitHub Actions** y *Release Please*. Cada merge aprueba y sube la nueva versión directamente a los tracks de testing de la **Google Play Console**.
- **Infraestructura Web:** Desplegada en un VPS utilizando **Easypanel (Docker)**, garantizando integraciones continuas.

## Impacto / Estado
En fase de pruebas cerradas. Demuestra un dominio no solo del desarrollo Full-Stack, sino del ciclo de vida DevOps completo (Mobile y Web), entregando productos escalables y resilientes a nivel de mercado masivo.
`;
fs.writeFileSync(notificapeFile, notificapeContent, 'utf-8');

const calculapeFile = path.join(projDir, 'calculape.md');
const calculapeContent = `---
title: "CalculaPe"
project_type: "application"
sync_source: "c:/Trabajo/Proyectos/CalculaPe/CalculaPe_Specs/management/1.2_briefing.md"
modules:
  - name: "CalculaPe App"
    platform: "Mobile"
    repository: ""
    description: "Cliente híbrido móvil centrado en la captura de cámara, reconocimiento óptico y gestión de datos offline-first."
    technologies: ["react-native", "expo", "zustand", "supabase", "firebase", "ocr", "designPatterns", "oop", "declarativeUi", "sdd", "gcp", "git", "github", "googlePay", "admob"]
short_description: "Aplicación de escaneo con IA (OCR) para automatizar el registro y división matemática de finanzas compartidas."
date: "2024-05"
importance: 8
status: "Development"
source: "Personal project"
repository: ""
url: ""
technologies: ["react-native", "expo", "react", "ts", "js", "zustand", "supabase", "postgresql", "firebase", "ocr", "designPatterns", "oop", "declarativeUi", "sdd", "gcp", "git", "github", "googlePay", "admob"]
---
## El Problema
La gestión y organización de finanzas personales o grupales implica una alta fricción debido a la necesidad de digitar manualmente cada gasto incurrido, además de la complejidad matemática y logística para repartir los gastos equitativa o proporcionalmente entre los miembros de una familia o grupo.

## La Solución
Una aplicación móvil orientada a la gestión financiera que agiliza el registro de gastos mediante un flujo de escaneo híbrido (código QR fiscal y Visión Computacional/OCR como fallback), reduciendo el tiempo de registro a menos de 5 segundos. Incorpora un motor informativo de presupuestos que reparte automáticamente los gastos compartidos.

## Arquitectura Técnica
El frontend está desarrollado en **React Native**. Utiliza **Supabase** y **Firebase Cloud Messaging (FCM)** para la sincronización y resiliencia en segundo plano. La arquitectura incluye:
- Un Parser Modular mediante **Patrón de Diseño Factory** para el escaneo de comprobantes electrónicos escalable a normativas internacionales, empleando fuertes principios **OOP**.
- **UI Declarativa** nativa y un motor Offline-First con encolamiento local.
- Conexión a la nube asegurada mediante **GCP**.
- Monetización híbrida: Integración de **Google Pay** para cobros In-App (Suscripción Pro) e integración de **AdMob** para la versión gratuita sustentada con anuncios.
- Orquestado completamente mediante el framework de gestión **Spec-Driven Development (SDD)**.

## Impacto / Estado
En fase de desarrollo del MVP. Diseñado bajo estrictas normas de privacidad de datos, operando de manera puramente organizativa e informativa, sin manipulación directa de dinero bancario ni pasarelas de pago.
`;
fs.writeFileSync(calculapeFile, calculapeContent, 'utf-8');


const webPortafolioFile = path.join(projDir, 'web-portafolio.md');
const webPortafolioContent = `---
title: "Web personal y portafolio"
project_type: "application"
sync_source: ""
modules: []
short_description: "Hub digital estático compilado en runtime. Sirve de escaparate y playground para experimentar arquitecturas UI."
date: "2023-11"
importance: 5
status: "Production"
source: "Personal project"
repository: "https://github.com/ChristopherPinedoGutierrez/web"
url: "https://christopherpinedogutierrez.github.io/web/"
technologies: ["react", "ts", "js", "vite", "mui", "html", "css", "sdd", "atomicDsg", "declarativeUi", "nodejs", "git", "github"]
---
## El Problema
Los currículums estáticos en formato PDF limitan la capacidad de demostrar visualmente las habilidades técnicas y la evolución profesional de un desarrollador. Se requería una plataforma centralizada que no solo sirva de escaparate, sino que también actúe como un playground para experimentar con nuevas tecnologías y arquitecturas.

## La Solución
Un portafolio web interactivo (Single Page Application) que centraliza proyectos, experiencia laboral y mapa de habilidades. Sirve como prueba viviente de las capacidades de desarrollo Frontend y de integración con flujos automatizados, ofreciendo una experiencia de usuario rápida y moderna.

## Arquitectura Técnica
Desarrollado como una aplicación estática utilizando **React** (**UI Declarativa**) y **Vite** para una carga ultrarrápida. La UI está construida con **Material UI (MUI v5)**.
- Adopta metodologías organizativas como **Atomic Design** para estructurar sus componentes y abstraer la lógica.
- Los datos de contenido se gestionan de forma declarativa mediante archivos Markdown, versionados vía **Git/GitHub**.
- Se compilan estáticamente mediante un script avanzado en **Node.js** (\`build-data.js\`) en tiempo de construcción, eliminando la necesidad de un servidor o base de datos en tiempo de ejecución.

## Impacto / Estado
En producción continua. Actúa como el hub principal para centralizar todos mis proyectos. Actualmente se está migrando hacia un diseño modular tipo *Bento Box* liderado estrictamente bajo el framework **Spec-Driven Development (SDD)**, apoyado por agentes de IA autónomos.
`;
fs.writeFileSync(webPortafolioFile, webPortafolioContent, 'utf-8');

const sddFile = path.join(projDir, 'sdd.md');
const sddContent = `---
title: "Spec-Driven Development (SDD)"
project_type: "framework"
sync_source: "c:/Trabajo/Proyectos/SDD_CDPG/README.md"
modules:
  - name: "Plantilla Core y Lineamientos"
    platform: "Framework"
    repository: ""
    description: "Repositorio base inmutable que dicta las reglas de gobernanza para agentes de IA."
    technologies: ["sdd", "cleanArchitecture", "git", "github"]
short_description: "Plantilla y metodología propietaria (SSOT) para orquestar y alinear Agentes de IA en arquitecturas complejas de software."
date: "2024-07"
importance: 9
status: "Production"
source: "Personal project"
repository: ""
url: ""
technologies: ["sdd", "markdown", "cleanArchitecture", "git", "github"]
---
## El Problema
En el desarrollo de software orquestado por múltiples agentes de Inteligencia Artificial (como Antigravity), la falta de estructura centralizada provoca la proliferación de código desincronizado, pérdida de contexto en los chats y toma de decisiones arquitectónicas erróneas sobre la marcha al carecer de un mapa de ruta técnico riguroso.

## La Solución
El Spec-Driven Development (SDD_CDPG) es una plantilla y metodología de orquestación propietaria que actúa como Única Fuente de Verdad (SSOT). Centraliza la especificación técnica, casos de uso, esquemas de bases de datos y manuales de reglas para liderar agentes de IA de forma secuencial, dividiendo el ciclo de vida en fases de Incepción/Diseño y Construcción Diaria protegidas por Puntos de Control Humanos (Gates).

## Arquitectura Técnica
El framework se basa en una estructura de repositorios y directorios de alta jerarquía e inmutabilidad, fuertemente versionados mediante **Git/GitHub**:
1. \`1_introduction\`: El ADN incremental del proyecto, conteniendo librerías de conocimiento, templates y base de soluciones locales para el Bucle de Aprendizaje.
2. \`management\`: Especificaciones activas y vivas (Intake, Briefing, Blueprint), el Backlog Global SSOT y los esquemas SQL inmutables. Todo estructurado en **Markdown**.
3. \`development\`: Workspace de ejecución modular para las apps, utilizando punteros lógicos que inyectan el contexto a los agentes. El objetivo final es forzar una **Clean Architecture** (Arquitectura Limpia) en todo el ecosistema.

## Impacto / Estado
Operativo y en mejora continua. Utilizado actualmente para estructurar, gestionar y desarrollar todos mis proyectos personales de alto calibre. Promueve un "Bucle de Aprendizaje" que retroalimenta la plantilla base original con las soluciones técnicas resueltas.
`;
fs.writeFileSync(sddFile, sddContent, 'utf-8');

console.log('Done rewriting and creating techs');
