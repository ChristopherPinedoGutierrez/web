const fs = require('fs');
const path = require('path');

const techDir = path.join(__dirname, '../src/content/technologies');
const files = fs.readdirSync(techDir).filter(f => f.endsWith('.md'));

const techsToContrast = ['dotNet', 'cSharp']; // Example purple techs to set true

files.forEach(file => {
  const filePath = path.join(techDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (!content.includes('contrast: ')) {
    content = content.replace(/invertColors: (true|false)\n/, `invertColors: $1\ncontrast: false\n`);
  }
  
  const id = file.replace('.md', '');
  if (techsToContrast.includes(id)) {
    content = content.replace(/contrast: false/, 'contrast: true');
    content = content.replace(/invertColors: true/, 'invertColors: false'); // Undo invert if they are using contrast
  }
  
  fs.writeFileSync(filePath, content, 'utf-8');
});
console.log('Added contrast field to all files.');
