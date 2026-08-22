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

// 1. Angular
updateFile('angular', { invertColors: true });

// 2. React Native
updateFile('react-native', { invertColors: false, contrast: false });

// 3. Fix Architecture / Fundamentals
const concepts = [
  'oop', 'fp', 'solid', 'designPatterns', 'cleanArchitecture', 'microservices',
  'atomicDsg', 'sdd', 'bem'
];

concepts.forEach(concept => {
  updateFile(concept, { contrast: false, monochrome: true, invertColors: false });
});

console.log('Fixes applied successfully.');
