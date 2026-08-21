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
      "description": "## El Problema\nLa gestión y organización de finanzas personales o grupales implica una alta fricción debido a la necesidad de digitar manualmente cada gasto incurrido, además de la complejidad matemática y logística para repartir los gastos equitativa o proporcionalmente entre los miembros de una familia o grupo.\n\n## La Solución\nUna aplicación móvil orientada a la gestión financiera que agiliza el registro de gastos mediante un flujo de escaneo híbrido (código QR fiscal y Visión Computacional/OCR como fallback), reduciendo el tiempo de registro a menos de 5 segundos. Incorpora un motor informativo de presupuestos que reparte automáticamente los gastos compartidos basándose en la proporción de ingresos aportados (\"Bolsa Común\").\n\n## Arquitectura Técnica\nEl frontend está desarrollado en **React Native**. Utiliza **Supabase** (Auth, Postgres, Storage) para el backend y **Firebase Cloud Messaging (FCM)** acoplado a Supabase Realtime para la sincronización y resiliencia en segundo plano. La arquitectura incluye:\n- Un Parser Modular mediante patrón Factory para el escaneo de comprobantes electrónicos escalable a normativas internacionales.\n- Compresión de imágenes de comprobantes nativa en el cliente para el ahorro de costos de servidor.\n- Un motor Offline-First con encolamiento local (SQLite) y sincronización de estado basada estrictamente en timestamps UTC.\n\n## Impacto / Estado\nEn fase de desarrollo del MVP. Diseñado bajo estrictas normas de privacidad de datos, operando de manera puramente organizativa e informativa, sin manipulación directa de dinero bancario ni pasarelas de pago.\n",
      "modules": [
        {
          "name": "CalculaPe App",
          "platform": "Mobile",
          "repository": "",
          "technologies": [
            "react-native",
            "supabase",
            "firebase",
            "ocr"
          ]
        }
      ],
      "technologies": [
        {
          "id": "react-native",
          "name": "React Native",
          "iconName": "SiReact",
          "colorLayer1": "grey.800",
          "colorLayer2": "#61DAFB"
        },
        {
          "id": "expo",
          "name": "expo",
          "iconName": "",
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "react",
          "name": "React",
          "iconName": "SiReact",
          "colorLayer1": "grey.800",
          "colorLayer2": "#5bd9fb"
        },
        {
          "id": "typescript",
          "name": "typescript",
          "iconName": "",
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "javascript",
          "name": "javascript",
          "iconName": "",
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "supabase",
          "name": "Supabase",
          "iconName": "SiSupabase",
          "colorLayer1": "grey.800",
          "colorLayer2": "#3ECF8E"
        },
        {
          "id": "postgres",
          "name": "postgres",
          "iconName": "",
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "firebase",
          "name": "Firebase",
          "iconName": "SiFirebase",
          "colorLayer1": "grey.800",
          "colorLayer2": "#FFCA28"
        },
        {
          "id": "ocr",
          "name": "Computer Vision (OCR)",
          "iconName": "FaEye",
          "colorLayer1": "grey.800",
          "colorLayer2": "#FF5722"
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
      "description": "## El Problema\nLos negocios con múltiples puntos de venta o vendedores sufren desincronización y dependencia al confirmar pagos de billeteras digitales, exponiéndose a riesgos de fraude por comprobantes falsos al tener que consultar manualmente al dueño de la cuenta para validar la transacción.\n\n## La Solución\nUn sistema de sincronización en tiempo real que descentraliza la lectura de confirmación de pagos hacia los vendedores de manera segura. Emplea un ecosistema de tres plataformas interconectadas para capturar las notificaciones push del dispositivo administrador e inyectarlas inmediatamente a las pantallas de los vendedores.\n\n## Arquitectura Técnica\nLa infraestructura opera en arquitectura Serverless utilizando **Supabase** (PostgreSQL, Auth y Realtime WebSockets). El ecosistema consta de:\n1. Una aplicación web para gestión de suscripciones SaaS, planes y control de accesos.\n2. Una app emisora nativa (**Kotlin**) instalada en el dispositivo receptor del dinero, que lee las notificaciones del sistema operativo y las envía a la base de datos de manera segura mediante vinculación dinámica (código QR).\n3. Una app receptora nativa (**Kotlin**) para los vendedores que escucha las transacciones en tiempo real en salas de websocket, aplicando RLS (Row Level Security) estricto.\n\n## Impacto / Estado\nEn fase de pruebas cerradas. Diseñado para un rendimiento óptimo en dispositivos de gama baja mediante servicios en primer plano (Foreground Services) nativos y optimizado para el mercado comercial masivo.\n",
      "modules": [
        {
          "name": "Plataforma Web (Landing y SaaS Admin)",
          "platform": "Web",
          "repository": "",
          "technologies": [
            "react",
            "vite",
            "supabase",
            "postgresql",
            "ts",
            "js",
            "html",
            "css",
            "tailwind"
          ]
        },
        {
          "name": "NotificaPe Admin App",
          "platform": "Android Native",
          "repository": "",
          "technologies": [
            "kotlin",
            "android"
          ]
        },
        {
          "name": "NotificaPe Viewer App",
          "platform": "Android Native",
          "repository": "",
          "technologies": [
            "kotlin",
            "android",
            "supabase",
            "postgresql"
          ]
        }
      ],
      "technologies": [
        {
          "id": "kotlin",
          "name": "Kotlin",
          "iconName": "SiKotlin",
          "colorLayer1": "grey.800",
          "colorLayer2": "#7F52FF"
        },
        {
          "id": "react",
          "name": "React",
          "iconName": "SiReact",
          "colorLayer1": "grey.800",
          "colorLayer2": "#5bd9fb"
        },
        {
          "id": "vite",
          "name": "Vite",
          "iconName": "SiVite",
          "colorLayer1": "grey.800",
          "colorLayer2": "#fca311"
        },
        {
          "id": "supabase",
          "name": "Supabase",
          "iconName": "SiSupabase",
          "colorLayer1": "grey.800",
          "colorLayer2": "#3ECF8E"
        },
        {
          "id": "postgresql",
          "name": "PostgreSQL",
          "iconName": "SiPostgresql",
          "colorLayer1": "grey.800",
          "colorLayer2": "#4169E1"
        },
        {
          "id": "ts",
          "name": "Typescript",
          "iconName": "SiTypescript",
          "colorLayer1": "grey.200",
          "colorLayer2": "#377cc8"
        },
        {
          "id": "js",
          "name": "Javascript",
          "iconName": "SiJavascript",
          "colorLayer1": "grey.800",
          "colorLayer2": "#efd81d"
        },
        {
          "id": "html",
          "name": "Html",
          "iconName": "SiHtml5",
          "colorLayer1": "#ec7430",
          "colorLayer2": "grey.200"
        },
        {
          "id": "css",
          "name": "Css",
          "iconName": "SiCss3",
          "colorLayer1": "#2862e9",
          "colorLayer2": "grey.200"
        },
        {
          "id": "tailwind",
          "name": "TailwindCss",
          "iconName": "SiTailwindcss",
          "colorLayer1": "grey.900",
          "colorLayer2": "#38bdf8"
        },
        {
          "id": "android",
          "name": "android",
          "iconName": "",
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
      "description": "## El Problema\nEn el desarrollo de software orquestado por múltiples agentes de Inteligencia Artificial (como Antigravity), la falta de estructura centralizada provoca la proliferación de código desincronizado, pérdida de contexto en los chats y toma de decisiones arquitectónicas erróneas sobre la marcha al carecer de un mapa de ruta técnico riguroso.\n\n## La Solución\nEl Spec-Driven Development (SDD_CDPG) es una plantilla y metodología de orquestación propietaria que actúa como Única Fuente de Verdad (SSOT). Centraliza la especificación técnica, casos de uso, esquemas de bases de datos y manuales de reglas para liderar agentes de IA de forma secuencial, dividiendo el ciclo de vida en fases de Incepción/Diseño y Construcción Diaria protegidas por Puntos de Control Humanos (Gates).\n\n## Arquitectura Técnica\nEl framework se basa en una estructura de repositorios y directorios de alta jerarquía e inmutabilidad:\n1. `1_introduction`: El ADN incremental del proyecto, conteniendo librerías de conocimiento, templates y base de soluciones locales para el Bucle de Aprendizaje.\n2. `management`: Especificaciones activas y vivas (Intake, Briefing, Blueprint), el Backlog Global SSOT y los esquemas SQL inmutables con control de versiones.\n3. `development`: Workspace de ejecución modular para las apps, utilizando punteros lógicos (`.agents/AGENTS.md`) que inyectan el contexto del orquestador global a los agentes locales de cada aplicación individual.\n\n## Impacto / Estado\nOperativo y en mejora continua. Utilizado actualmente para estructurar, gestionar y desarrollar todos mis proyectos personales de alto calibre (incluyendo este portafolio, NotificaPe y CalculaPe). Promueve un \"Bucle de Aprendizaje\" que retroalimenta la plantilla base original con las soluciones técnicas y obstáculos resueltos en los proyectos paralelos.\n",
      "modules": [
        {
          "name": "Plantilla Core y Lineamientos",
          "platform": "Framework",
          "repository": "",
          "technologies": [
            "sdd"
          ]
        }
      ],
      "technologies": [
        {
          "id": "sdd",
          "name": "Spec-Driven Development",
          "iconName": "FaDiagramProject",
          "colorLayer1": "grey.800",
          "colorLayer2": "#FFFFFF"
        },
        {
          "id": "markdown",
          "name": "markdown",
          "iconName": "",
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
      "description": "## El Problema\nLos currículums estáticos en formato PDF limitan la capacidad de demostrar visualmente las habilidades técnicas y la evolución profesional de un desarrollador. Se requería una plataforma centralizada que no solo sirva de escaparate, sino que también actúe como un playground para experimentar con nuevas tecnologías y arquitecturas.\n\n## La Solución\nUn portafolio web interactivo (Single Page Application) que centraliza proyectos, experiencia laboral y mapa de habilidades. Sirve como prueba viviente de las capacidades de desarrollo Frontend y de integración con flujos automatizados, ofreciendo una experiencia de usuario rápida y moderna.\n\n## Arquitectura Técnica\nDesarrollado como una aplicación estática utilizando **React** y **Vite** para una carga ultrarrápida. La UI está construida con **Material UI (MUI v5)** implementando un sistema de temas personalizado (Dark Mode). Los datos de contenido se gestionan de forma declarativa mediante archivos Markdown y se precompilan mediante un script de Node (`build-data.js`) en tiempo de construcción, eliminando la necesidad de un servidor o base de datos en tiempo de ejecución.\n\n## Impacto / Estado\nEn producción continua. Actúa como el hub principal para centralizar todos mis proyectos (como NotificaPe y CalculaPe). Actualmente se está migrando hacia un diseño modular tipo *Bento Box* liderado bajo el framework Spec-Driven Development (SDD).\n",
      "modules": [],
      "technologies": [
        {
          "id": "react",
          "name": "React",
          "iconName": "SiReact",
          "colorLayer1": "grey.800",
          "colorLayer2": "#5bd9fb"
        },
        {
          "id": "ts",
          "name": "Typescript",
          "iconName": "SiTypescript",
          "colorLayer1": "grey.200",
          "colorLayer2": "#377cc8"
        },
        {
          "id": "js",
          "name": "Javascript",
          "iconName": "SiJavascript",
          "colorLayer1": "grey.800",
          "colorLayer2": "#efd81d"
        },
        {
          "id": "vite",
          "name": "Vite",
          "iconName": "SiVite",
          "colorLayer1": "grey.800",
          "colorLayer2": "#fca311"
        },
        {
          "id": "mui",
          "name": "mui",
          "iconName": "",
          "colorLayer1": "#cccccc",
          "colorLayer2": "#ffffff"
        },
        {
          "id": "html",
          "name": "Html",
          "iconName": "SiHtml5",
          "colorLayer1": "#ec7430",
          "colorLayer2": "grey.200"
        },
        {
          "id": "css",
          "name": "Css",
          "iconName": "SiCss3",
          "colorLayer1": "#2862e9",
          "colorLayer2": "grey.200"
        }
      ]
    }
  }
];
