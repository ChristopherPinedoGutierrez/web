const fs = require('fs');
const path = require('path');

const techDir = path.join(__dirname, '../src/content/technologies');

const technologies = [
  // Frontend
  { id: 'html', name: 'Html', area: 'Frontend', group: 'Language', icon: 'SiHtml5', color: '#ec7430' },
  { id: 'css', name: 'Css', area: 'Frontend', group: 'Language', icon: 'SiCss3', color: '#2862e9' },
  { id: 'js', name: 'Javascript', area: 'Frontend', group: 'Language', icon: 'SiJavascript', color: '#efd81d' },
  { id: 'ts', name: 'Typescript', area: 'Frontend', group: 'Language', icon: 'SiTypescript', color: '#377cc8' },
  { id: 'react', name: 'React', area: 'Frontend', group: 'Library', icon: 'SiReact', color: '#5bd9fb' },
  { id: 'reactRouter', name: 'React Router', area: 'Frontend', group: 'Library', icon: 'SiReactrouter', color: '#d10a22' },
  { id: 'reactHookForm', name: 'React Hook Form', area: 'Frontend', group: 'Library', icon: 'SiReacthookform', color: '#ed5e93' },
  { id: 'tanStackQuery', name: 'TanStack Query', area: 'Frontend', group: 'Library', icon: 'SiReactquery', color: '#ff4759' },
  { id: 'redux', name: 'Redux', area: 'Frontend', group: 'Library', icon: 'SiRedux', color: '#764abc' },
  { id: 'next', name: 'Next.js', area: 'Frontend', group: 'Framework', icon: 'SiNextdotjs', color: '#000000' },
  { id: 'blazor', name: 'Blazor', area: 'Frontend', group: 'Framework', icon: 'SiBlazor', color: '#592c8c' },
  { id: 'react-native', name: 'React Native', area: 'Frontend', group: 'Library', icon: 'SiReact', color: '#5bd9fb' },
  { id: 'expo', name: 'Expo', area: 'Frontend', group: 'Library', icon: 'SiExpo', color: '#000000' },
  { id: 'mui', name: 'Material UI', area: 'Frontend', group: 'Library', icon: 'SiMui', color: '#007fff' },
  { id: 'shadcn', name: 'Shadcn/ui', area: 'Frontend', group: 'Library', icon: 'SiShadcnui', color: '#000000' },
  { id: 'tailwind', name: 'Tailwind Css', area: 'Frontend', group: 'Library', icon: 'SiTailwindcss', color: '#06B6D4' },
  { id: 'nextUi', name: 'Next UI', area: 'Frontend', group: 'Library', icon: 'SiNextui', color: '#000000' },
  { id: 'shoelace', name: 'Shoelace', area: 'Frontend', group: 'Library', icon: 'FaShoelace', color: '#0ea5e9' },
  { id: 'sass', name: 'Sass', area: 'Frontend', group: 'Library', icon: 'SiSass', color: '#CC6699' },
  { id: 'styledComp', name: 'Styled Components', area: 'Frontend', group: 'Library', icon: 'SiStyledcomponents', color: '#DB7093' },
  { id: 'normalCss', name: 'Normalize Css', area: 'Frontend', group: 'Library', icon: 'SiNormalizedotcss', color: '#E3695F' },
  { id: 'cra', name: 'Create React App', area: 'Frontend', group: 'Build Tool', icon: 'SiCreatereactapp', color: '#09d3ac' },
  { id: 'vite', name: 'Vite', area: 'Frontend', group: 'Build Tool', icon: 'SiVite', color: '#a842f6' },

  // Backend
  { id: 'cSharp', name: 'C#', area: 'Backend', group: 'Language', icon: 'SiCsharp', color: '#9078e3' },
  { id: 'nodejs', name: 'Node.js', area: 'Backend', group: 'Runtime', icon: 'SiNodedotjs', color: '#58a149' },
  { id: 'dotNet', name: '.NET', area: 'Backend', group: 'Framework', icon: 'SiDotnet', color: '#5632d5' },
  { id: 'strapi', name: 'Strapi', area: 'Backend', group: 'Framework', icon: 'SiStrapi', color: '#4f4bfe' },
  { id: 'firebase', name: 'Firebase', area: 'Backend', group: 'Cloud', icon: 'SiFirebase', color: '#ffcd32' },
  { id: 'supabase', name: 'Supabase', area: 'Backend', group: 'Cloud', icon: 'SiSupabase', color: '#47cf93' },
  { id: 'sqlServer', name: 'SQL Server', area: 'Backend', group: 'Database', icon: 'SiMicrosoftsqlserver', color: '#ef372e' },
  { id: 'mysql', name: 'MySQL', area: 'Backend', group: 'Database', icon: 'SiMysql', color: '#e48e00' },
  { id: 'postgresql', name: 'PostgreSQL', area: 'Backend', group: 'Database', icon: 'SiPostgresql', color: '#396c94' },
  
  // Design
  { id: 'figma', name: 'Figma', area: 'Design', group: 'App', icon: 'SiFigma', color: '#5551ff' },
  { id: 'miro', name: 'Miro', area: 'Design', group: 'App', icon: 'SiMiro', color: '#ffdd33' },
  { id: 'illustrator', name: 'Adobe Illustrator', area: 'Design', group: 'App', icon: 'SiAdobeillustrator', color: '#ff9a00' },
  { id: 'bem', name: 'BEM', area: 'Design', group: 'Methodology', icon: 'SiBem', color: '#000000' },
  { id: 'atomicDsg', name: 'Atomic Design', area: 'Design', group: 'Methodology', icon: 'TbAtom2', color: '#bc6719' },

  // Testing
  { id: 'jest', name: 'Jest', area: 'Testing', group: 'Library', icon: 'SiJest', color: '#ca451a' },
  { id: 'vitest', name: 'Vitest', area: 'Testing', group: 'Library', icon: 'SiVitest', color: '#f6c928' },
  { id: 'reactTestingLibrary', name: 'React Testing Library', area: 'Testing', group: 'Library', icon: 'SiTestinglibrary', color: '#ff4949' },
  { id: 'playwright', name: 'Playwright', area: 'Testing', group: 'Library', icon: 'SiPlaywright', color: '#dc594f' },
  { id: 'storybook', name: 'Storybook', area: 'Testing', group: 'Library', icon: 'SiStorybook', color: '#FF4785' },

  // Management / Dev
  { id: 'jira', name: 'Jira', area: 'Management', group: 'App', icon: 'SiJirasoftware', color: '#2580f7' },
  { id: 'notion', name: 'Notion', area: 'Management', group: 'App', icon: 'SiNotion', color: '#000000' },
  { id: 'git', name: 'Git', area: 'Development', group: 'VCS', icon: 'SiGit', color: '#f05539' },
  { id: 'github', name: 'Github', area: 'Development', group: 'VCS', icon: 'SiGithub', color: '#000000' },
  
  // Extra existing from Markdown
  { id: 'docker', name: 'Docker', area: 'Development', group: 'Tool', icon: 'SiDocker', color: '#2496ED' },
  { id: 'markdown', name: 'Markdown', area: 'Frontend', group: 'Language', icon: 'SiMarkdown', color: '#000000' },
  { id: 'kotlin', name: 'Kotlin', area: 'Backend', group: 'Language', icon: 'SiKotlin', color: '#7F52FF' },
  { id: 'ocr', name: 'Computer Vision', area: 'Backend', group: 'AI', icon: 'TbScanEye', color: '#f05539' },
  { id: 'sdd', name: 'Spec-Driven Dev', area: 'Management', group: 'Methodology', icon: 'SiMarkdown', color: '#000000' }
];

const getColors = (baseColor) => {
  const darkColors = ['#000000', '#330000']; 
  if (darkColors.includes(baseColor)) {
    return { c1: 'grey.200', c2: 'grey.800' }; // Light bg, dark icon
  }
  return { c1: 'grey.800', c2: baseColor }; // Dark bg, colored icon
};

technologies.forEach(tech => {
  const filePath = path.join(techDir, `${tech.id}.md`);
  const { c1, c2 } = getColors(tech.color);
  
  let existingContent = `Descripción pendiente de ${tech.name}.`;
  
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const contentParts = fileContent.split('---');
    if (contentParts.length > 2) {
      existingContent = contentParts.slice(2).join('---').trim();
    }
  }

  const markdownContent = `---
name: "${tech.name}"
area: "${tech.area}"
group: "${tech.group}"
typeDef: "${tech.group}"
iconName: "${tech.icon}"
color: "${tech.color}"
colorLayer1: "${c1}"
colorLayer2: "${c2}"
ecosystem: []
state: "conocidas"
---
${existingContent}
`;

  fs.writeFileSync(filePath, markdownContent, 'utf-8');
});

console.log('✅ Normalización completada con éxito.');
