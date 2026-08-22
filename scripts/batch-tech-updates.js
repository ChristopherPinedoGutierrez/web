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
group: "${data.group || 'Ecosystem'}"
typeDef: "${data.typeDef || 'Tool'}"
iconName: "${data.iconName}"
brandColor: "${data.brandColor}"
invertColors: ${data.invertColors || false}
contrast: ${data.contrast || false}
monochrome: ${data.monochrome || false}
ecosystem: []
state: "${data.state}"
---

${data.desc || ''}
`;
  fs.writeFileSync(filePath, content, 'utf-8');
};

// 1. Kotlin to Mobile
updateFile('kotlin', { area: 'Mobile' });

// 2. Angular (Frontend, pendientes)
createFile('angular', {
  name: 'Angular', area: 'Frontend', iconName: 'SiAngular', brandColor: '#DD0031', state: 'pendientes', desc: 'Framework de desarrollo web en TypeScript.'
});

// 3. Vue (Frontend, pendientes)
createFile('vue', {
  name: 'Vue.js', area: 'Frontend', iconName: 'SiVuedotjs', brandColor: '#4FC08D', state: 'pendientes', desc: 'Framework progresivo para construir interfaces de usuario.'
});

// 4. NestJS (Backend, pendientes) - Assuming NestJS instead of Next.js for backend
createFile('nestjs', {
  name: 'NestJS', area: 'Backend', iconName: 'SiNestjs', brandColor: '#E0234E', state: 'pendientes', desc: 'Framework de Node.js progresivo para construir aplicaciones eficientes, confiables y escalables del lado del servidor.'
});

// 5. Express.js (Backend, conocidas)
createFile('express', {
  name: 'Express.js', area: 'Backend', iconName: 'SiExpress', brandColor: '#000000', monochrome: true, state: 'conocidas', desc: 'Infraestructura web rápida, minimalista y flexible para Node.js.'
});

// 6. Firestore (Database, NoSQL, conocidas, fueguito)
createFile('firestore', {
  name: 'Firestore', area: 'Database', iconName: 'FaFire', brandColor: '#FFA000', state: 'conocidas', desc: 'Base de datos NoSQL de documentos flexible y escalable para el desarrollo en móviles, web y servidores de Firebase y Google Cloud Platform.'
});

// 7. GCP (DevOps & Tools, pendientes)
createFile('gcp', {
  name: 'Google Cloud (GCP)', area: 'DevOps & Tools', iconName: 'SiGooglecloud', brandColor: '#4285F4', state: 'pendientes', desc: 'Suite de servicios de computación en la nube de Google.'
});

// 8. AWS (DevOps & Tools, pendientes)
createFile('aws', {
  name: 'AWS', area: 'DevOps & Tools', iconName: 'SiAmazonaws', brandColor: '#232F3E', monochrome: true, state: 'pendientes', desc: 'Plataforma de servicios de nube segura y amplia de Amazon.'
});

// 9. Azure (DevOps & Tools, pendientes)
createFile('azure', {
  name: 'Azure', area: 'DevOps & Tools', iconName: 'SiMicrosoftazure', brandColor: '#0089D6', state: 'pendientes', desc: 'Plataforma de computación en la nube pública de Microsoft.'
});

console.log('Batch creation and update successful.');
