const fs = require('fs');
const path = require('path');

const techDir = path.join(__dirname, '../src/content/technologies');

const techMapping = {
  // Database
  'mysql': 'Database',
  'postgresql': 'Database',
  'sqlServer': 'Database',
  // Mobile
  'react-native': 'Mobile',
  'expo': 'Mobile',
  // DevOps & Tools
  'docker': 'DevOps & Tools',
  'git': 'DevOps & Tools',
  'github': 'DevOps & Tools',
};

// All markdown files in techDir
const files = fs.readdirSync(techDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const filePath = path.join(techDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract frontmatter
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return;
  
  const frontmatter = match[1];
  const body = match[2];
  
  const lines = frontmatter.split('\n');
  const props = {};
  lines.forEach(line => {
    const splitIdx = line.indexOf(':');
    if (splitIdx !== -1) {
      const key = line.slice(0, splitIdx).trim();
      const val = line.slice(splitIdx + 1).trim().replace(/^"|"$/g, '');
      props[key] = val;
    }
  });
  
  // Apply logic
  const id = file.replace('.md', '');
  if (techMapping[id]) {
    props.area = techMapping[id];
  }
  
  const brandColor = props.color || '#000000';
  const isMonochrome = brandColor === '#000000' || ['zustand', 'github', 'markdown', 'expo', 'next', 'notion', 'bem', 'shadcn', 'sdd'].includes(id);
  
  // Generate new frontmatter
  let newFrontmatter = `---\n`;
  newFrontmatter += `name: "${props.name}"\n`;
  newFrontmatter += `area: "${props.area}"\n`;
  newFrontmatter += `group: "${props.group}"\n`;
  newFrontmatter += `typeDef: "${props.typeDef}"\n`;
  newFrontmatter += `iconName: "${props.iconName}"\n`;
  newFrontmatter += `brandColor: "${brandColor}"\n`;
  newFrontmatter += `invertColors: false\n`;
  newFrontmatter += `monochrome: ${isMonochrome}\n`;
  newFrontmatter += `ecosystem: []\n`;
  newFrontmatter += `state: "${props.state}"\n`;
  newFrontmatter += `---`;
  
  fs.writeFileSync(filePath, newFrontmatter + '\n' + body, 'utf-8');
});

console.log('Markdown files refactored.');
