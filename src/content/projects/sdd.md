---
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
1. `1_introduction`: El ADN incremental del proyecto, conteniendo librerías de conocimiento, templates y base de soluciones locales para el Bucle de Aprendizaje.
2. `management`: Especificaciones activas y vivas (Intake, Briefing, Blueprint), el Backlog Global SSOT y los esquemas SQL inmutables. Todo estructurado en **Markdown**.
3. `development`: Workspace de ejecución modular para las apps, utilizando punteros lógicos que inyectan el contexto a los agentes. El objetivo final es forzar una **Clean Architecture** (Arquitectura Limpia) en todo el ecosistema.

## Impacto / Estado
Operativo y en mejora continua. Utilizado actualmente para estructurar, gestionar y desarrollar todos mis proyectos personales de alto calibre. Promueve un "Bucle de Aprendizaje" que retroalimenta la plantilla base original con las soluciones técnicas resueltas.
