---
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
