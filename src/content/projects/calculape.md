---
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
