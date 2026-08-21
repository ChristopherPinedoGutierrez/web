const fs = require('fs');
const path = require('path');

const techDir = path.join(__dirname, '../src/content/technologies');
const techsToInvert = [
  'dotNet', 'strapi', 'sqlServer', 'mysql', 'blazor', 'css', 'html', 
  'reactRouter', 'redux', 'sass', 'styledComp', 'tanStackQuery', 'vite', 'react-native'
];

techsToInvert.forEach(id => {
  const filePath = path.join(techDir, `${id}.md`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace(/invertColors: false/, 'invertColors: true');
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Inverted colors for ${id}`);
  }
});
