---
title: "NotificaPe"
project_type: "ecosystem"
sync_source: "c:/Trabajo/Proyectos/NotificaPe/NotificaPe_Specs/management/1.2_briefing.md"
modules:
  - name: "Plataforma Web (Landing y SaaS Admin)"
    platform: "Web"
    repository: ""
    technologies: ["react", "vite", "supabase", "postgresql", "ts", "js", "html", "css", "tailwind"]
  - name: "NotificaPe Admin App"
    platform: "Android Native"
    repository: ""
    technologies: ["kotlin", "android"]
  - name: "NotificaPe Viewer App"
    platform: "Android Native"
    repository: ""
    technologies: ["kotlin", "android", "supabase", "postgresql"]
short_description: "Sistema de sincronización Serverless y aplicación nativa para confirmar notificaciones de billeteras digitales en tiempo real."
date: "2024-01"
importance: 10
status: "Testing"
source: "Personal project"
repository: ""
url: "https://notificape.ryctech.dev/"
technologies: ["kotlin", "react", "vite", "supabase", "postgresql", "ts", "js", "html", "css", "tailwind", "android"]
---
## El Problema
Los negocios con múltiples puntos de venta o vendedores sufren desincronización y dependencia al confirmar pagos de billeteras digitales, exponiéndose a riesgos de fraude por comprobantes falsos al tener que consultar manualmente al dueño de la cuenta para validar la transacción.

## La Solución
Un sistema de sincronización en tiempo real que descentraliza la lectura de confirmación de pagos hacia los vendedores de manera segura. Emplea un ecosistema de tres plataformas interconectadas para capturar las notificaciones push del dispositivo administrador e inyectarlas inmediatamente a las pantallas de los vendedores.

## Arquitectura Técnica
La infraestructura opera en arquitectura Serverless utilizando **Supabase** (PostgreSQL, Auth y Realtime WebSockets). El ecosistema consta de:
1. Una aplicación web para gestión de suscripciones SaaS, planes y control de accesos.
2. Una app emisora nativa (**Kotlin**) instalada en el dispositivo receptor del dinero, que lee las notificaciones del sistema operativo y las envía a la base de datos de manera segura mediante vinculación dinámica (código QR).
3. Una app receptora nativa (**Kotlin**) para los vendedores que escucha las transacciones en tiempo real en salas de websocket, aplicando RLS (Row Level Security) estricto.

## Impacto / Estado
En fase de pruebas cerradas. Diseñado para un rendimiento óptimo en dispositivos de gama baja mediante servicios en primer plano (Foreground Services) nativos y optimizado para el mercado comercial masivo.
