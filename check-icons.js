const fs = require('fs');
const path = require('path');
const technologiesDir = path.join('src', 'content', 'technologies');
const files = fs.readdirSync(technologiesDir);
const missing = [];
for (const file of files) {
  if (!file.endsWith('.md')) continue;
  const content = fs.readFileSync(path.join(technologiesDir, file), 'utf8');
  const iconMatch = content.match(/iconName:\s*"([^"]+)"/);
  if (iconMatch) {
    const iconName = iconMatch[1];
    let found = false;
    const prefix = iconName.substring(0, 2).toLowerCase();
    let folder = '';
    if (prefix === 'si') folder = 'si';
    else if (prefix === 'fa') folder = 'fa6';
    else if (prefix === 'md') folder = 'md';
    else if (prefix === 'tb') folder = 'tb';
    else continue;

    const dtsPath = path.join('node_modules', 'react-icons', folder, 'index.d.ts');
    if (fs.existsSync(dtsPath)) {
      const dtsContent = fs.readFileSync(dtsPath, 'utf8');
      if (dtsContent.includes('export declare const ' + iconName + ':')) {
        found = true;
      }
    }
    if (!found) {
      missing.push({ file, iconName });
    }
  }
}
console.log(JSON.stringify(missing, null, 2));
