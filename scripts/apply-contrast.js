const fs = require('fs');
const path = require('path');

const techDir = path.join(__dirname, '../src/content/technologies');

const inverts = ['dotNet', 'strapi', 'sqlServer'];
const contrasts = ['vite', 'reactRouter', 'blazor', 'css', 'html', 'atomicDsg', 'mysql', 'postgresql', 'sqlServer', 'cSharp', 'dotNet', 'strapi'];

const files = fs.readdirSync(techDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const filePath = path.join(techDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  const id = file.replace('.md', '');
  
  if (id === 'shoelace') {
    content = content.replace(/iconName: ".*"/, 'iconName: "FaShoelace"');
  }
  
  if (inverts.includes(id)) {
    content = content.replace(/invertColors: false/, 'invertColors: true');
  }
  
  if (contrasts.includes(id)) {
    content = content.replace(/contrast: false/, 'contrast: true');
  }
  
  fs.writeFileSync(filePath, content, 'utf-8');
});

console.log('Applied requested invert and contrast changes, and fixed shoelace icon.');
