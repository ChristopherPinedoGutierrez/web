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
group: "${data.group || 'Concept'}"
typeDef: "${data.typeDef || 'Concept'}"
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

createFile('githubActions', { name: 'GitHub Actions', area: 'DevOps & Tools', group: 'CI/CD', typeDef: 'Service', iconName: 'SiGithubactions', brandColor: '#2088FF', monochrome: true, desc: 'Automatización de flujos de trabajo de software directamente desde GitHub (CI/CD).' });
createFile('jetpackCompose', { name: 'Jetpack Compose', area: 'Mobile', group: 'Library', typeDef: 'Library', iconName: 'SiJetpackcompose', brandColor: '#4285F4', monochrome: true, desc: 'Toolkit moderno de Android para construir interfaces de usuario de forma declarativa.' });
createFile('googlePlay', { name: 'Play Console', area: 'DevOps & Tools', group: 'Platform', typeDef: 'Service', iconName: 'SiGoogleplay', brandColor: '#414141', monochrome: true, desc: 'Gestión de despliegues, testing tracks y automatización de releases para Android.' });
createFile('declarativeUi', { name: 'Declarative UI', area: 'Architecture & Fundamentals', group: 'Concept', typeDef: 'Concept', iconName: 'FaPaintBrush', monochrome: true, desc: 'Paradigma donde se diseña la UI describiendo cómo debe verse según el estado actual.' });
createFile('easypanel', { name: 'Easypanel', area: 'DevOps & Tools', group: 'Platform', typeDef: 'Service', iconName: 'FaServer', brandColor: '#000000', monochrome: true, desc: 'PaaS moderno impulsado por Docker para gestionar servidores y despliegues.' });
createFile('cicd', { name: 'CI / CD', area: 'Architecture & Fundamentals', group: 'Concept', typeDef: 'Concept', iconName: 'FaSync', monochrome: true, desc: 'Integración Continua y Despliegue Continuo. Prácticas para automatizar la integración de código y su entrega.' });

// Helper to replace text in file
const replaceInFile = (file, target, replacement) => {
  const fp = path.join(projDir, file);
  let content = fs.readFileSync(fp, 'utf-8');
  content = content.replace(target, replacement);
  fs.writeFileSync(fp, content, 'utf-8');
};

// 2. Update Projects

// NotificaPe
const notificaPeFile = path.join(projDir, 'notificape.md');
let notificaPeContent = fs.readFileSync(notificaPeFile, 'utf-8');
// Web Module
notificaPeContent = notificaPeContent.replace(
  'technologies: ["react", "vite", "supabase", "postgresql", "ts", "js", "html", "css", "tailwind"]',
  'technologies: ["react", "vite", "supabase", "postgresql", "ts", "js", "html", "css", "tailwind", "docker", "easypanel", "cicd", "git", "github"]'
);
// Android Admin
notificaPeContent = notificaPeContent.replace(
  'technologies: ["kotlin", "supabase", "postgresql"]',
  'technologies: ["kotlin", "jetpackCompose", "supabase", "postgresql", "oop", "solid", "declarativeUi", "cicd", "githubActions", "googlePlay", "git", "github"]'
);
// Android Viewer (The second one)
notificaPeContent = notificaPeContent.replace(
  'technologies: ["kotlin", "supabase", "postgresql"]',
  'technologies: ["kotlin", "jetpackCompose", "supabase", "postgresql", "oop", "solid", "declarativeUi", "cicd", "githubActions", "googlePlay", "git", "github"]'
);
// Global
notificaPeContent = notificaPeContent.replace(
  'technologies: ["kotlin", "react", "vite", "supabase", "postgresql", "ts", "js", "html", "css", "tailwind"]',
  'technologies: ["kotlin", "react", "vite", "supabase", "postgresql", "ts", "js", "html", "css", "tailwind", "jetpackCompose", "oop", "solid", "declarativeUi", "sdd", "docker", "easypanel", "cicd", "githubActions", "googlePlay", "git", "github"]'
);
fs.writeFileSync(notificaPeFile, notificaPeContent, 'utf-8');


// CalculaPe
const calculaPeFile = path.join(projDir, 'calculape.md');
let calculaPeContent = fs.readFileSync(calculaPeFile, 'utf-8');
// Module
calculaPeContent = calculaPeContent.replace(
  'technologies: ["react-native", "expo", "zustand", "supabase", "firebase", "ocr"]',
  'technologies: ["react-native", "expo", "zustand", "supabase", "firebase", "ocr", "designPatterns", "oop", "declarativeUi", "sdd", "git", "github"]'
);
// Global
calculaPeContent = calculaPeContent.replace(
  'technologies: ["react-native", "expo", "react", "ts", "js", "zustand", "supabase", "postgresql", "firebase", "ocr"]',
  'technologies: ["react-native", "expo", "react", "ts", "js", "zustand", "supabase", "postgresql", "firebase", "ocr", "designPatterns", "oop", "declarativeUi", "sdd", "git", "github"]'
);
fs.writeFileSync(calculaPeFile, calculaPeContent, 'utf-8');


// Web Portafolio
const webPortafolioFile = path.join(projDir, 'web-portafolio.md');
let webPortafolioContent = fs.readFileSync(webPortafolioFile, 'utf-8');
webPortafolioContent = webPortafolioContent.replace(
  'technologies: ["react", "ts", "js", "vite", "mui", "html", "css"]',
  'technologies: ["react", "ts", "js", "vite", "mui", "html", "css", "sdd", "atomicDsg", "declarativeUi", "nodejs", "git", "github"]'
);
fs.writeFileSync(webPortafolioFile, webPortafolioContent, 'utf-8');


// SDD
const sddFile = path.join(projDir, 'sdd.md');
let sddContent = fs.readFileSync(sddFile, 'utf-8');
// Module
sddContent = sddContent.replace(
  'technologies: ["sdd"]',
  'technologies: ["sdd", "cleanArchitecture", "git", "github"]'
);
// Global
sddContent = sddContent.replace(
  'technologies: ["sdd", "markdown"]',
  'technologies: ["sdd", "markdown", "cleanArchitecture", "git", "github"]'
);
fs.writeFileSync(sddFile, sddContent, 'utf-8');

console.log('Script executed: new tech added, projects updated.');
