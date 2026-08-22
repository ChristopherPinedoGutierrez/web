const fs = require('fs');
const path = require('path');

const techDir = path.join(__dirname, '../src/content/technologies');

const updateFile = (id, updates) => {
  const filePath = path.join(techDir, `${id}.md`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    for (const [key, value] of Object.entries(updates)) {
      const regex = new RegExp(`${key}: .*`);
      content = content.replace(regex, `${key}: ${typeof value === 'string' ? `"${value}"` : value}`);
    }
    fs.writeFileSync(filePath, content, 'utf-8');
  }
};

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
contrast: ${data.contrast || true}
monochrome: ${data.monochrome || true}
ecosystem: []
state: "${data.state}"
---

${data.desc || ''}
`;
  fs.writeFileSync(filePath, content, 'utf-8');
};

const AREA = 'Architecture & Fundamentals';

// Move existing ones
updateFile('bem', { area: AREA });
updateFile('atomicDsg', { area: AREA });
updateFile('sdd', { area: AREA });

// Create new conceptual ones
createFile('oop', {
  name: 'OOP', area: AREA, iconName: 'FaCube', state: 'conocidas', monochrome: true,
  desc: 'Programación Orientada a Objetos. Paradigma de programación basado en el concepto de "objetos".'
});

createFile('fp', {
  name: 'Functional P.', area: AREA, iconName: 'FaCode', state: 'conocidas', monochrome: true,
  desc: 'Programación Funcional. Paradigma de programación declarativa basado en funciones matemáticas puras.'
});

createFile('solid', {
  name: 'SOLID', area: AREA, iconName: 'FaCheckDouble', state: 'conocidas', monochrome: true,
  desc: 'Los 5 principios básicos del diseño de software para que el código sea comprensible, flexible y mantenible.'
});

createFile('designPatterns', {
  name: 'Design Patterns', area: AREA, iconName: 'FaPuzzlePiece', state: 'conocidas', monochrome: true,
  desc: 'Soluciones típicas a problemas comunes en el diseño de software (GoF).'
});

createFile('cleanArchitecture', {
  name: 'Clean Architecture', area: AREA, iconName: 'FaLayerGroup', state: 'aprendiendo', monochrome: true,
  desc: 'Patrón de arquitectura de software para crear sistemas independientes de interfaces, bases de datos y frameworks.'
});

createFile('microservices', {
  name: 'Microservices', area: AREA, iconName: 'FaNetworkWired', state: 'aprendiendo', monochrome: true,
  desc: 'Arquitectura que estructura una aplicación como una colección de servicios acoplados libremente.'
});

console.log('Knowledge concepts created and moved.');
