const fs = require('fs');
const path = require('path');

const updateFile = (id, updates) => {
  const filePath = path.join(__dirname, '../src/content/technologies', `${id}.md`);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${id}.md`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf-8');
  
  for (const [key, value] of Object.entries(updates)) {
    const regex = new RegExp(`${key}: .*`);
    if (content.match(regex)) {
      content = content.replace(regex, `${key}: ${typeof value === 'string' ? `"${value}"` : value}`);
    } else {
      // If the field somehow doesn't exist, append it before ---
      content = content.replace(/\n---\n$/, `\n${key}: ${typeof value === 'string' ? `"${value}"` : value}\n---\n`);
    }
  }
  fs.writeFileSync(filePath, content, 'utf-8');
};

updateFile('miro', { invertColors: true });
updateFile('figma', { contrast: true });
updateFile('docker', { invertColors: true, state: "aprendiendo" });
updateFile('mui', { invertColors: true });
updateFile('reactHookForm', { invertColors: true });
updateFile('redux', { contrast: true });
updateFile('sass', { contrast: true });
updateFile('styledComp', { contrast: true });
updateFile('tanStackQuery', { contrast: true });
updateFile('jest', { invertColors: true, contrast: true });
updateFile('playwright', { invertColors: true, contrast: true, brandColor: "#1c8921" });

console.log('Applied specific configurations to 11 technologies.');
