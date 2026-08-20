---
title: "NotificaPe"
project_type: "ecosystem"
sync_source: "c:/Trabajo/Proyectos/NotificaPe/NotificaPe_Specs/management/1.2_briefing.md"
modules:
  - name: "Plataforma Web (Landing y SaaS Admin)"
    platform: "Web"
    repository: ""
    technologies: ["react", "vite", "supabase"]
  - name: "NotificaPe Admin App"
    platform: "Android Native"
    repository: ""
    technologies: ["kotlin"]
  - name: "NotificaPe Viewer App"
    platform: "Android Native"
    repository: ""
    technologies: ["kotlin", "supabase"]
image: "/assets/projects/notificape-mock.jpg"
area: "FullStack"
level: "Expert"
status: "Desarrollo"
source: "Personal project"
repository: ""
url: ""
technologies: ["kotlin", "react", "supabase"]
---
## 🎯 El Problema
Los negocios con múltiples puntos de venta o vendedores sufren desincronización y dependencia al confirmar pagos de billeteras digitales (Yape, Plin), exponiéndose a riesgos de fraude por comprobantes falsos al tener que consultar manualmente al dueño de la cuenta para validar la transacción.

## 💡 La Solución
Un sistema de sincronización en tiempo real que descentraliza la lectura de confirmación de pagos hacia los vendedores de manera segura. Emplea un ecosistema de tres plataformas interconectadas para capturar las notificaciones push del dispositivo administrador e inyectarlas inmediatamente a las pantallas de los vendedores.

## ⚙️ Arquitectura Técnica
La infraestructura opera en arquitectura Serverless utilizando **Supabase** (PostgreSQL, Auth y Realtime WebSockets). El ecosistema consta de:
1. Una aplicación web para gestión de suscripciones SaaS, planes y control de accesos (SSO Google/Microsoft).
2. Una app emisora nativa (**Kotlin**) instalada en el dispositivo receptor del dinero, que lee las notificaciones del sistema operativo y las envía a la base de datos de manera segura mediante vinculación dinámica (código QR).
3. Una app receptora nativa (**Kotlin**) para los vendedores que escucha las transacciones en tiempo real en salas de websocket, aplicando RLS (Row Level Security) estricto por tenant.

## 🚀 Impacto / Estado
En fase de desarrollo del MVP. Diseñado para un rendimiento óptimo en dispositivos de gama baja mediante servicios en primer plano (Foreground Services) nativos y optimizado para el mercado comercial masivo (ej. Gamarra).
