export const projectStates = {
  "dev": {
    "id": "development",
    "name": "Development",
    "keyName": "Development",
    "color": "secondary"
  },
  "testing": {
    "id": "testing",
    "name": "Testing",
    "keyName": "Testing",
    "color": "warning"
  },
  "prod": {
    "id": "production",
    "name": "Production",
    "keyName": "Production",
    "color": "success"
  }
};
export const projectsInfo = [
  {
    "id": "calculape",
    "config": {
      "projectType": "application",
      "syncSource": "c:/Trabajo/Proyectos/CalculaPe/CalculaPe_Specs/management/1.2_briefing.md",
      "gallery": [],
      "brandColor": "",
      "status": {
        "id": "development",
        "name": "Development",
        "keyName": "Development",
        "color": "secondary"
      },
      "source": {
        "name": "Personal project"
      },
      "repository": "",
      "url": "",
      "date": "2024-05",
      "importance": 8
    },
    "content": {
      "name": "CalculaPe",
      "shortDescription": "Aplicación de escaneo con IA (OCR) para automatizar el registro y división matemática de finanzas compartidas.",
      "description": "## El Problema\nLa gestión y organización de finanzas personales o grupales implica una alta fricción debido a la necesidad de digitar manualmente cada gasto incurrido, además de la complejidad matemática y logística para repartir los gastos equitativa o proporcionalmente entre los miembros de una familia o grupo.\n\n## La Solución\nUna aplicación móvil orientada a la gestión financiera que agiliza el registro de gastos mediante un flujo de escaneo híbrido (código QR fiscal y Visión Computacional/OCR como fallback), reduciendo el tiempo de registro a menos de 5 segundos. Incorpora un motor informativo de presupuestos que reparte automáticamente los gastos compartidos.\n\n## Arquitectura Técnica\nEl frontend está desarrollado en **React Native**. Utiliza **Supabase** y **Firebase Cloud Messaging (FCM)** para la sincronización y resiliencia en segundo plano. La arquitectura incluye:\n- Un Parser Modular mediante **Patrón de Diseño Factory** para el escaneo de comprobantes electrónicos escalable a normativas internacionales, empleando fuertes principios **OOP**.\n- **UI Declarativa** nativa y un motor Offline-First con encolamiento local.\n- Conexión a la nube asegurada mediante **GCP**.\n- Monetización híbrida: Integración de **Google Pay** para cobros In-App (Suscripción Pro) e integración de **AdMob** para la versión gratuita sustentada con anuncios.\n- Orquestado completamente mediante el framework de gestión **Spec-Driven Development (SDD)**.\n\n## Impacto / Estado\nEn fase de desarrollo del MVP. Diseñado bajo estrictas normas de privacidad de datos, operando de manera puramente organizativa e informativa, sin manipulación directa de dinero bancario ni pasarelas de pago.\n",
      "modules": [
        {
          "name": "CalculaPe App",
          "platform": "Mobile",
          "repository": "",
          "description": "Cliente híbrido móvil centrado en la captura de cámara, reconocimiento óptico y gestión de datos offline-first.",
          "technologies": [
            "react-native",
            "expo",
            "zustand",
            "supabase",
            "firebase",
            "ocr",
            "designPatterns",
            "oop",
            "declarativeUi",
            "sdd",
            "gcp",
            "git",
            "github",
            "googlePay",
            "admob"
          ]
        }
      ],
      "technologies": [
        {
          "id": "admob",
          "name": "AdMob",
          "iconName": "SiGoogleadmob",
          "brandColor": "#EA4335",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "ocr",
          "name": "Computer Vision",
          "iconName": "FaEye",
          "brandColor": "#f05539",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "declarativeUi",
          "name": "Declarative UI",
          "iconName": "FaPaintbrush",
          "brandColor": "#ffffff",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "designPatterns",
          "name": "Design Patterns",
          "iconName": "FaPuzzlePiece",
          "brandColor": "#ffffff",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "expo",
          "name": "Expo",
          "iconName": "SiExpo",
          "brandColor": "#000000",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "firebase",
          "name": "Firebase",
          "iconName": "SiFirebase",
          "brandColor": "#ffcd32",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "git",
          "name": "Git",
          "iconName": "SiGit",
          "brandColor": "#f05539",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "github",
          "name": "Github",
          "iconName": "SiGithub",
          "brandColor": "#000000",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "gcp",
          "name": "Google Cloud (GCP)",
          "iconName": "SiGooglecloud",
          "brandColor": "#4285F4",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "googlePay",
          "name": "Google Pay",
          "iconName": "SiGooglepay",
          "brandColor": "#ffffff",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "js",
          "name": "Javascript",
          "iconName": "SiJavascript",
          "brandColor": "#efd81d",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "oop",
          "name": "OOP",
          "iconName": "FaCube",
          "brandColor": "#ffffff",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "postgresql",
          "name": "PostgreSQL",
          "iconName": "SiPostgresql",
          "brandColor": "#396c94",
          "invertColors": true,
          "contrast": true,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "react",
          "name": "React",
          "iconName": "SiReact",
          "brandColor": "#5bd9fb",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "react-native",
          "name": "React Native",
          "iconName": "SiReact",
          "brandColor": "#5bd9fb",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "sdd",
          "name": "Spec-Driven Dev",
          "iconName": "FaGear",
          "brandColor": "#000000",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "supabase",
          "name": "Supabase",
          "iconName": "SiSupabase",
          "brandColor": "#47cf93",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "ts",
          "name": "Typescript",
          "iconName": "SiTypescript",
          "brandColor": "#377cc8",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "zustand",
          "name": "Zustand",
          "iconName": "/zustand.svg",
          "brandColor": "#000000",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        }
      ]
    }
  },
  {
    "id": "notificape",
    "config": {
      "projectType": "ecosystem",
      "syncSource": "c:/Trabajo/Proyectos/NotificaPe/NotificaPe_Specs/management/1.2_briefing.md",
      "gallery": [],
      "brandColor": "",
      "status": {
        "id": "testing",
        "name": "Testing",
        "keyName": "Testing",
        "color": "warning"
      },
      "source": {
        "name": "Personal project"
      },
      "repository": "",
      "url": "https://notificape.ryctech.dev/",
      "date": "2024-01",
      "importance": 10
    },
    "content": {
      "name": "NotificaPe",
      "shortDescription": "Sistema de sincronización Serverless y aplicación nativa para confirmar notificaciones de billeteras digitales en tiempo real.",
      "description": "## El Problema\nLos negocios con múltiples puntos de venta sufren desincronización y riesgo de fraude al confirmar pagos digitales. Hasta ahora, dependían de capturas falsificables o de llamar al dueño para confirmar transacciones, ralentizando enormemente las ventas físicas.\n\n## La Solución\nUn ecosistema completo de sincronización Serverless. Intercepta de forma segura las notificaciones push del dispositivo administrador (Emisor) y las distribuye en tiempo real a las pantallas de los vendedores (Receptores). El proyecto abarca desde una Web Administrativa (SaaS) hasta clientes nativos Android de alto rendimiento.\n\n## Arquitectura Técnica y DevOps\nEl ecosistema completo utiliza infraestructura avanzada:\n- **Serverless & WebSockets:** Core backend apoyado en Supabase (Auth, Postgres, Realtime) y GCP.\n- **Pagos SaaS:** Integración nativa con **Mercado Pago** en la plataforma web para automatizar cobros recurrentes de suscripciones.\n- **Mobile Native & Declarative UI:** Las apps Android están desarrolladas íntegramente con **Jetpack Compose**, empleando patrones MVI/MVVM, arquitecturas SOLID y programación orientada a objetos (OOP).\n- **Mobile DevOps (CI/CD):** Pipeline totalmente automatizado mediante **GitHub Actions** y *Release Please*. Cada merge aprueba y sube la nueva versión directamente a los tracks de testing de la **Google Play Console**.\n- **Infraestructura Web:** Desplegada en un VPS utilizando **Easypanel (Docker)**, garantizando integraciones continuas.\n\n## Impacto / Estado\nEn fase de pruebas cerradas. Demuestra un dominio no solo del desarrollo Full-Stack, sino del ciclo de vida DevOps completo (Mobile y Web), entregando productos escalables y resilientes a nivel de mercado masivo.\n",
      "modules": [
        {
          "name": "Plataforma Web (SaaS Admin)",
          "platform": "Web",
          "repository": "",
          "description": "Panel administrativo alojado en Easypanel (Docker) para gestionar suscripciones, cobros y monitorización de las apps.",
          "technologies": [
            "react",
            "vite",
            "supabase",
            "postgresql",
            "ts",
            "js",
            "html",
            "css",
            "tailwind",
            "docker",
            "easypanel",
            "cicd",
            "git",
            "github",
            "gcp",
            "mercadopago"
          ]
        },
        {
          "name": "NotificaPe Admin App",
          "platform": "Android Native",
          "repository": "",
          "description": "Aplicación nativa emisora que intercepta las notificaciones del OS y las sincroniza con Supabase en tiempo real.",
          "technologies": [
            "kotlin",
            "jetpackCompose",
            "supabase",
            "postgresql",
            "oop",
            "solid",
            "declarativeUi",
            "cicd",
            "githubActions",
            "googlePlay",
            "git",
            "github",
            "gcp"
          ]
        },
        {
          "name": "NotificaPe Viewer App",
          "platform": "Android Native",
          "repository": "",
          "description": "Aplicación receptora segura que muestra las notificaciones a los vendedores usando WebSockets y UI Declarativa.",
          "technologies": [
            "kotlin",
            "jetpackCompose",
            "supabase",
            "postgresql",
            "oop",
            "solid",
            "declarativeUi",
            "cicd",
            "githubActions",
            "googlePlay",
            "git",
            "github",
            "gcp"
          ]
        }
      ],
      "technologies": [
        {
          "id": "cicd",
          "name": "CI / CD",
          "iconName": "FaArrowsRotate",
          "brandColor": "#ffffff",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "css",
          "name": "Css",
          "iconName": "SiCss3",
          "brandColor": "#2862e9",
          "invertColors": true,
          "contrast": true,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "declarativeUi",
          "name": "Declarative UI",
          "iconName": "FaPaintbrush",
          "brandColor": "#ffffff",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "docker",
          "name": "Docker",
          "iconName": "SiDocker",
          "brandColor": "#2496ED",
          "invertColors": true,
          "contrast": true,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "easypanel",
          "name": "Easypanel",
          "iconName": "FaServer",
          "brandColor": "#000000",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "git",
          "name": "Git",
          "iconName": "SiGit",
          "brandColor": "#f05539",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "github",
          "name": "Github",
          "iconName": "SiGithub",
          "brandColor": "#000000",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "githubActions",
          "name": "GitHub Actions",
          "iconName": "SiGithubactions",
          "brandColor": "#2088FF",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "gcp",
          "name": "Google Cloud (GCP)",
          "iconName": "SiGooglecloud",
          "brandColor": "#4285F4",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "html",
          "name": "Html",
          "iconName": "SiHtml5",
          "brandColor": "#ec7430",
          "invertColors": true,
          "contrast": true,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "js",
          "name": "Javascript",
          "iconName": "SiJavascript",
          "brandColor": "#efd81d",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "jetpackCompose",
          "name": "Jetpack Compose",
          "iconName": "SiJetpackcompose",
          "brandColor": "#4285F4",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "kotlin",
          "name": "Kotlin",
          "iconName": "SiKotlin",
          "brandColor": "#7F52FF",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "mercadopago",
          "name": "Mercado Pago",
          "iconName": "SiMercadopago",
          "brandColor": "#00B1EA",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "oop",
          "name": "OOP",
          "iconName": "FaCube",
          "brandColor": "#ffffff",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "googlePlay",
          "name": "Play Console",
          "iconName": "SiGoogleplay",
          "brandColor": "#414141",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "postgresql",
          "name": "PostgreSQL",
          "iconName": "SiPostgresql",
          "brandColor": "#396c94",
          "invertColors": true,
          "contrast": true,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "react",
          "name": "React",
          "iconName": "SiReact",
          "brandColor": "#5bd9fb",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "solid",
          "name": "SOLID",
          "iconName": "FaCheckDouble",
          "brandColor": "#ffffff",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "sdd",
          "name": "Spec-Driven Dev",
          "iconName": "FaGear",
          "brandColor": "#000000",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "supabase",
          "name": "Supabase",
          "iconName": "SiSupabase",
          "brandColor": "#47cf93",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "tailwind",
          "name": "Tailwind Css",
          "iconName": "SiTailwindcss",
          "brandColor": "#06B6D4",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "ts",
          "name": "Typescript",
          "iconName": "SiTypescript",
          "brandColor": "#377cc8",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "vite",
          "name": "Vite",
          "iconName": "SiVite",
          "brandColor": "#a842f6",
          "invertColors": true,
          "contrast": true,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        }
      ]
    }
  },
  {
    "id": "sdd",
    "config": {
      "projectType": "framework",
      "syncSource": "c:/Trabajo/Proyectos/SDD_CDPG/README.md",
      "gallery": [],
      "brandColor": "",
      "status": {
        "id": "production",
        "name": "Production",
        "keyName": "Production",
        "color": "success"
      },
      "source": {
        "name": "Personal project"
      },
      "repository": "",
      "url": "",
      "date": "2024-07",
      "importance": 9
    },
    "content": {
      "name": "Spec-Driven Development (SDD)",
      "shortDescription": "Plantilla y metodología propietaria (SSOT) para orquestar y alinear Agentes de IA en arquitecturas complejas de software.",
      "description": "## El Problema\nEn el desarrollo de software orquestado por múltiples agentes de Inteligencia Artificial (como Antigravity), la falta de estructura centralizada provoca la proliferación de código desincronizado, pérdida de contexto en los chats y toma de decisiones arquitectónicas erróneas sobre la marcha al carecer de un mapa de ruta técnico riguroso.\n\n## La Solución\nEl Spec-Driven Development (SDD_CDPG) es una plantilla y metodología de orquestación propietaria que actúa como Única Fuente de Verdad (SSOT). Centraliza la especificación técnica, casos de uso, esquemas de bases de datos y manuales de reglas para liderar agentes de IA de forma secuencial, dividiendo el ciclo de vida en fases de Incepción/Diseño y Construcción Diaria protegidas por Puntos de Control Humanos (Gates).\n\n## Arquitectura Técnica\nEl framework se basa en una estructura de repositorios y directorios de alta jerarquía e inmutabilidad, fuertemente versionados mediante **Git/GitHub**:\n1. `1_introduction`: El ADN incremental del proyecto, conteniendo librerías de conocimiento, templates y base de soluciones locales para el Bucle de Aprendizaje.\n2. `management`: Especificaciones activas y vivas (Intake, Briefing, Blueprint), el Backlog Global SSOT y los esquemas SQL inmutables. Todo estructurado en **Markdown**.\n3. `development`: Workspace de ejecución modular para las apps, utilizando punteros lógicos que inyectan el contexto a los agentes. El objetivo final es forzar una **Clean Architecture** (Arquitectura Limpia) en todo el ecosistema.\n\n## Impacto / Estado\nOperativo y en mejora continua. Utilizado actualmente para estructurar, gestionar y desarrollar todos mis proyectos personales de alto calibre. Promueve un \"Bucle de Aprendizaje\" que retroalimenta la plantilla base original con las soluciones técnicas resueltas.\n",
      "modules": [
        {
          "name": "Plantilla Core y Lineamientos",
          "platform": "Framework",
          "repository": "",
          "description": "Repositorio base inmutable que dicta las reglas de gobernanza para agentes de IA.",
          "technologies": [
            "sdd",
            "cleanArchitecture",
            "git",
            "github"
          ]
        }
      ],
      "technologies": [
        {
          "id": "cleanArchitecture",
          "name": "Clean Architecture",
          "iconName": "FaLayerGroup",
          "brandColor": "#ffffff",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "git",
          "name": "Git",
          "iconName": "SiGit",
          "brandColor": "#f05539",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "github",
          "name": "Github",
          "iconName": "SiGithub",
          "brandColor": "#000000",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "markdown",
          "name": "Markdown",
          "iconName": "SiMarkdown",
          "brandColor": "#000000",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "sdd",
          "name": "Spec-Driven Dev",
          "iconName": "FaGear",
          "brandColor": "#000000",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        }
      ]
    }
  },
  {
    "id": "web-portafolio",
    "config": {
      "projectType": "application",
      "syncSource": "",
      "gallery": [],
      "brandColor": "",
      "status": {
        "id": "production",
        "name": "Production",
        "keyName": "Production",
        "color": "success"
      },
      "source": {
        "name": "Personal project"
      },
      "repository": "https://github.com/ChristopherPinedoGutierrez/web",
      "url": "https://christopherpinedogutierrez.github.io/web/",
      "date": "2023-11",
      "importance": 5
    },
    "content": {
      "name": "Web personal y portafolio",
      "shortDescription": "Hub digital estático compilado en runtime. Sirve de escaparate y playground para experimentar arquitecturas UI.",
      "description": "## El Problema\nLos currículums estáticos en formato PDF limitan la capacidad de demostrar visualmente las habilidades técnicas y la evolución profesional de un desarrollador. Se requería una plataforma centralizada que no solo sirva de escaparate, sino que también actúe como un playground para experimentar con nuevas tecnologías y arquitecturas.\n\n## La Solución\nUn portafolio web interactivo (Single Page Application) que centraliza proyectos, experiencia laboral y mapa de habilidades. Sirve como prueba viviente de las capacidades de desarrollo Frontend y de integración con flujos automatizados, ofreciendo una experiencia de usuario rápida y moderna.\n\n## Arquitectura Técnica\nDesarrollado como una aplicación estática utilizando **React** (**UI Declarativa**) y **Vite** para una carga ultrarrápida. La UI está construida con **Material UI (MUI v5)**.\n- Adopta metodologías organizativas como **Atomic Design** para estructurar sus componentes y abstraer la lógica.\n- Los datos de contenido se gestionan de forma declarativa mediante archivos Markdown, versionados vía **Git/GitHub**.\n- Se compilan estáticamente mediante un script avanzado en **Node.js** (`build-data.js`) en tiempo de construcción, eliminando la necesidad de un servidor o base de datos en tiempo de ejecución.\n\n## Impacto / Estado\nEn producción continua. Actúa como el hub principal para centralizar todos mis proyectos. Actualmente se está migrando hacia un diseño modular tipo *Bento Box* liderado estrictamente bajo el framework **Spec-Driven Development (SDD)**, apoyado por agentes de IA autónomos.\n",
      "modules": [],
      "technologies": [
        {
          "id": "atomicDsg",
          "name": "Atomic Design",
          "iconName": "FaAtom",
          "brandColor": "#bc6719",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "css",
          "name": "Css",
          "iconName": "SiCss3",
          "brandColor": "#2862e9",
          "invertColors": true,
          "contrast": true,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "declarativeUi",
          "name": "Declarative UI",
          "iconName": "FaPaintbrush",
          "brandColor": "#ffffff",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "git",
          "name": "Git",
          "iconName": "SiGit",
          "brandColor": "#f05539",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "github",
          "name": "Github",
          "iconName": "SiGithub",
          "brandColor": "#000000",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "html",
          "name": "Html",
          "iconName": "SiHtml5",
          "brandColor": "#ec7430",
          "invertColors": true,
          "contrast": true,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "js",
          "name": "Javascript",
          "iconName": "SiJavascript",
          "brandColor": "#efd81d",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "mui",
          "name": "Material UI",
          "iconName": "SiMui",
          "brandColor": "#007fff",
          "invertColors": true,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "nodejs",
          "name": "Node.js",
          "iconName": "SiNodedotjs",
          "brandColor": "#58a149",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "react",
          "name": "React",
          "iconName": "SiReact",
          "brandColor": "#5bd9fb",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "sdd",
          "name": "Spec-Driven Dev",
          "iconName": "FaGear",
          "brandColor": "#000000",
          "invertColors": false,
          "contrast": false,
          "monochrome": true,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "ts",
          "name": "Typescript",
          "iconName": "SiTypescript",
          "brandColor": "#377cc8",
          "invertColors": false,
          "contrast": false,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "vite",
          "name": "Vite",
          "iconName": "SiVite",
          "brandColor": "#a842f6",
          "invertColors": true,
          "contrast": true,
          "monochrome": false,
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        }
      ]
    }
  }
];
