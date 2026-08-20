---
title: "CalculaPe"
project_type: "application"
sync_source: "c:/Trabajo/Proyectos/CalculaPe/CalculaPe_Specs/management/1.2_briefing.md"
modules:
  - name: "CalculaPe App"
    platform: "Mobile"
    repository: ""
    technologies: ["react-native", "supabase", "firebase", "ocr"]
image: "/assets/projects/calculape-mock.jpg"
date: "2024-05"
importance: 8
status: "Development"
source: "Personal project"
repository: ""
url: ""
technologies: ["react-native", "expo", "react", "typescript", "javascript", "supabase", "postgres", "firebase", "ocr"]
---
## 🎯 El Problema
La gestión y organización de finanzas personales o grupales implica una alta fricción debido a la necesidad de digitar manualmente cada gasto incurrido, además de la complejidad matemática y logística para repartir los gastos equitativa o proporcionalmente entre los miembros de una familia o grupo.

## 💡 La Solución
Una aplicación móvil orientada a la gestión financiera que agiliza el registro de gastos mediante un flujo de escaneo híbrido (código QR fiscal y Visión Computacional/OCR como fallback), reduciendo el tiempo de registro a menos de 5 segundos. Incorpora un motor informativo de presupuestos que reparte automáticamente los gastos compartidos basándose en la proporción de ingresos aportados ("Bolsa Común").

## ⚙️ Arquitectura Técnica
El frontend está desarrollado en **React Native**. Utiliza **Supabase** (Auth, Postgres, Storage) para el backend y **Firebase Cloud Messaging (FCM)** acoplado a Supabase Realtime para la sincronización y resiliencia en segundo plano. La arquitectura incluye:
- Un Parser Modular mediante patrón Factory para el escaneo de comprobantes electrónicos (estándar SUNAT escalable a normativas internacionales).
- Compresión de imágenes de comprobantes nativa en el cliente para el ahorro de costos de servidor.
- Un motor Offline-First con encolamiento local (SQLite) y sincronización de estado basada estrictamente en timestamps UTC.

## 🚀 Impacto / Estado
En fase de desarrollo del MVP (orientado exclusivamente a Android en su primera etapa). Diseñado bajo estrictas normas de Privacidad de Datos (Ley N° 29733 - Perú), operando de manera puramente organizativa e informativa, sin manipulación directa de dinero bancario ni pasarelas de pago.
