---
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
- Se compilan estáticamente mediante un script avanzado en **Node.js** (`build-data.js`) en tiempo de construcción, eliminando la necesidad de un servidor o base de datos en tiempo de ejecución.

## Impacto / Estado
En producción continua. Actúa como el hub principal para centralizar todos mis proyectos. Actualmente se está migrando hacia un diseño modular tipo *Bento Box* liderado estrictamente bajo el framework **Spec-Driven Development (SDD)**, apoyado por agentes de IA autónomos.
