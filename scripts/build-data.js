const fs = require('fs');
const path = require('path');

// Parser manual ultra-ligero para Frontmatter YAML
function parseMarkdown(fileContent) {
  const match = fileContent.match(/^---\r?\n([\s\S]+?)\r?\n---(?:\r?\n([\s\S]*))?/);
  if (!match) {
    return { data: {}, content: fileContent.trim() };
  }
  const yamlText = match[1];
  const bodyText = match[2] ? match[2].trim() : '';
  const data = {};

  yamlText.split('\n').forEach(line => {
    const cleanLine = line.trim();
    if (!cleanLine || cleanLine.startsWith('#')) return;
    const separatorIndex = cleanLine.indexOf(':');
    if (separatorIndex === -1) return;
    const key = cleanLine.slice(0, separatorIndex).trim();
    let val = cleanLine.slice(separatorIndex + 1).trim();

    // Limpiar comillas
    val = val.replace(/^['"]|['"]$/g, '');

    // Parsear booleanos y números simples
    if (val === 'true') val = true;
    else if (val === 'false') val = false;
    else if (!isNaN(val) && val !== '') val = Number(val);

    // Parsear listas tipo YAML [a, b, c]
    if (typeof val === 'string' && val.startsWith('[') && val.endsWith(']')) {
      val = val.slice(1, -1).split(',').map(x => x.trim().replace(/^['"]|['"]$/g, ''));
    }

    data[key] = val;
  });

  return { data, content: bodyText };
}

// Cargar dinámicamente un archivo TypeScript de datos simulando el entorno
function loadTsData(filePath) {
  if (!fs.existsSync(filePath)) return {};
  let content = fs.readFileSync(filePath, 'utf-8');
  // Limpiar imports y exports
  content = content.replace(/import\s+.*?;/g, '');
  content = content.replace(/export\s+\{[\s\S]*?\};/g, '');
  
  const varName = path.basename(filePath, '.ts');
  const code = `${content}\nreturn ${varName};`;
  try {
    const fn = new Function('uuidV4', code);
    return fn(() => 'mock-uuid');
  } catch (e) {
    console.error('Error parseando ' + filePath, e);
    return {};
  }
}

const contentDir = path.join(__dirname, '../src/content');
const baseFilesDir = path.join(__dirname, '../src/resources/data/baseFiles');

// Cargar las definiciones de softSkills y aptitudes
const softSkillsMap = loadTsData(path.join(baseFilesDir, 'softSkills.ts'));
const aptitudesMap = loadTsData(path.join(baseFilesDir, 'aptitudes.ts'));

console.log('Procesando contenidos Markdown...');

// 1. COMPILAR INFORMACIÓN PERSONAL
const personalInfoPath = path.join(contentDir, 'personalInfo.md');
let personalInfoData = {
  fixed: {
    surnames: 'Pinedo Gutierrez',
    names: 'Christopher David',
    country: 'Perú',
    nationality: 'Peruana',
    docIdType: 'DNI',
    docIdNumber: '72182243',
    gender: 'Masculino'
  },
  variable: {
    shortName: 'Christopher Pinedo',
    mainRole: 'Desarrollador de software',
    presentationMessage1: 'Me considero una persona proactiva, resiliente y entusiasta por la tecnología que busca aprender constantemente.',
    presentationMessage2: 'Como desarrollador de software estoy orientado a frontend web en el ecosistema de React.js con conocimiento en Backend con Node.js y Bases de datos SQL y NoSQL.',
    presentationMessage3: 'En gestión de proyectos me he desempeñado en el area industrial a nivel de procesos administrativos y en la gestión de sistemas de información.',
    telephone: { number: '978544045', countryCode: '+51' },
    email: 'cdpg.dev@gmail.com',
    socialMedia: {
      linkedin: 'linkedin.com/in/christopher-pinedo-gutierrez/',
      github: 'github.com/christopherpinedogutierrez/',
      personalWeb: 'christopherpinedogutierrez.github.io/web/',
      codewars: '',
      leetCode: ''
    }
  }
};

if (fs.existsSync(personalInfoPath)) {
  const content = fs.readFileSync(personalInfoPath, 'utf-8');
  const parsed = parseMarkdown(content);
  if (parsed.data.names) {
    personalInfoData = {
      fixed: {
        surnames: parsed.data.surnames || personalInfoData.fixed.surnames,
        names: parsed.data.names || personalInfoData.fixed.names,
        country: parsed.data.country || personalInfoData.fixed.country,
        nationality: parsed.data.nationality || personalInfoData.fixed.nationality,
        docIdType: parsed.data.docIdType || personalInfoData.fixed.docIdType,
        docIdNumber: parsed.data.docIdNumber || personalInfoData.fixed.docIdNumber,
        gender: parsed.data.gender || personalInfoData.fixed.gender
      },
      variable: {
        shortName: parsed.data.shortName || personalInfoData.variable.shortName,
        mainRole: parsed.data.mainRole || personalInfoData.variable.mainRole,
        presentationMessage1: parsed.data.presentationMessage1 || personalInfoData.variable.presentationMessage1,
        presentationMessage2: parsed.data.presentationMessage2 || personalInfoData.variable.presentationMessage2,
        presentationMessage3: parsed.data.presentationMessage3 || personalInfoData.variable.presentationMessage3,
        telephone: {
          number: parsed.data.phone || personalInfoData.variable.telephone.number,
          countryCode: parsed.data.phoneCountryCode || personalInfoData.variable.telephone.countryCode
        },
        email: parsed.data.email || personalInfoData.variable.email,
        socialMedia: {
          linkedin: parsed.data.linkedin || personalInfoData.variable.socialMedia.linkedin,
          github: parsed.data.github || personalInfoData.variable.socialMedia.github,
          personalWeb: parsed.data.personalWeb || personalInfoData.variable.socialMedia.personalWeb,
          codewars: parsed.data.codewars || personalInfoData.variable.socialMedia.codewars,
          leetCode: parsed.data.leetCode || personalInfoData.variable.socialMedia.leetCode
        }
      }
    };
  }
}

fs.writeFileSync(
  path.join(__dirname, '../src/resources/data/personalInfo.ts'),
  `export const personalInfo = ${JSON.stringify(personalInfoData, null, 2)};\n`,
  'utf-8'
);


// 2. COMPILAR TECNOLOGÍAS
const techFolder = path.join(contentDir, 'technologies');
const techFiles = fs.readdirSync(techFolder).filter(file => file.endsWith('.md'));
const technologiesObj = {};

techFiles.forEach(file => {
  const fileContent = fs.readFileSync(path.join(techFolder, file), 'utf-8');
  const parsed = parseMarkdown(fileContent);
  const key = path.basename(file, '.md');
  
  if (parsed.data.name) {
    technologiesObj[key] = {
      id: key,
      name: parsed.data.name,
      area: parsed.data.area,
      group: parsed.data.group || '',
      typeDef: parsed.data.typeDef || '',
      iconName: parsed.data.iconName || 'SiReact',
      color: parsed.data.color || '#cccccc',
      colorLayer1: parsed.data.colorLayer1 || '#cccccc',
      colorLayer2: parsed.data.colorLayer2 || '#ffffff',
      ecosystem: parsed.data.ecosystem || [],
      state: {
        name: parsed.data.state || 'conocidas'
      },
      description: parsed.content
    };
  }
});

fs.writeFileSync(
  path.join(baseFilesDir, 'technologies.ts'),
  `export const technologies: Record<string, any> = ${JSON.stringify(technologiesObj, null, 2)};\n`,
  'utf-8'
);


// 3. COMPILAR PROYECTOS
const projectsFolder = path.join(contentDir, 'projects');
const projectFiles = fs.readdirSync(projectsFolder).filter(file => file.endsWith('.md'));
const projectsList = [];

const projectLevelsObj = {
  1: { id: "newbie", name: "Newbie", rating: 1 },
  2: { id: "junior", name: "Junior", rating: 2 },
  3: { id: "intermediate", name: "Intermediate", rating: 3 },
  4: { id: "advanced", name: "Advanced", rating: 4 },
  5: { id: "expert", name: "Expert", rating: 5 }
};

const projectStatesObj = {
  dev: { id: "development", name: "Desarrollo", keyName: "Development", color: "secondary" },
  prod: { id: "production", name: "Producción", keyName: "Production", color: "success" }
};

projectFiles.forEach(file => {
  const fileContent = fs.readFileSync(path.join(projectsFolder, file), 'utf-8');
  const parsed = parseMarkdown(fileContent);
  const key = path.basename(file, '.md');

  if (parsed.data.title) {
    const levelKey = parsed.data.level === 'Newbie' ? 1 : parsed.data.level === 'Junior' ? 2 : parsed.data.level === 'Intermediate' ? 3 : parsed.data.level === 'Advanced' ? 4 : 5;
    const statusKey = parsed.data.status === 'Desarrollo' ? 'dev' : 'prod';

    projectsList.push({
      id: key,
      config: {
        image: parsed.data.image || '',
        area: { id: parsed.data.area ? parsed.data.area.toLowerCase() : 'frontend', name: parsed.data.area || 'Frontend' },
        level: projectLevelsObj[levelKey],
        status: projectStatesObj[statusKey],
        source: { name: parsed.data.source || 'Personal project' },
        repository: parsed.data.repository || '',
        url: parsed.data.url || ''
      },
      content: {
        name: parsed.data.title,
        description: parsed.content,
        technologies: (parsed.data.technologies || []).map(t => {
          const matchedTech = technologiesObj[t];
          return matchedTech ? { id: matchedTech.id, name: matchedTech.name } : { id: t, name: t };
        })
      }
    });
  }
});

fs.writeFileSync(
  path.join(__dirname, '../src/resources/data/projectsInfo.ts'),
  `export const projectLevels = ${JSON.stringify(projectLevelsObj, null, 2)};
export const projectStates = ${JSON.stringify(projectStatesObj, null, 2)};
export const projectsInfo = ${JSON.stringify(projectsList, null, 2)};\n`,
  'utf-8'
);


// 4. COMPILAR EXPERIENCIA
const experienceFolder = path.join(contentDir, 'experience');
const expFiles = fs.readdirSync(experienceFolder).filter(file => file.endsWith('.md'));
const experienceList = [];

expFiles.forEach(file => {
  const fileContent = fs.readFileSync(path.join(experienceFolder, file), 'utf-8');
  const parsed = parseMarkdown(fileContent);
  const key = path.basename(file, '.md');

  if (parsed.data.company) {
    experienceList.push({
      company: parsed.data.company,
      role: parsed.data.role,
      period: {
        startDate: parsed.data.startDate || '',
        endDate: parsed.data.endDate || '',
        duration: parsed.data.duration || '',
        state: parsed.data.state || ''
      },
      jobFunctions: parsed.content,
      softSkills: (parsed.data.softSkills || []).map(k => softSkillsMap[k] || { name: k }),
      aptitudes: (parsed.data.aptitudes || []).map(k => aptitudesMap[k] || { name: k }),
      aptitudesCount: (parsed.data.aptitudes || []).length * 10
    });
  }
});

// Ordenar cronológicamente (En curso primero)
experienceList.sort((a, b) => {
  if (a.period.endDate === 'Actualidad') return -1;
  if (b.period.endDate === 'Actualidad') return 1;
  return b.period.startDate.localeCompare(a.period.startDate);
});

fs.writeFileSync(
  path.join(__dirname, '../src/resources/data/workExperienceInfo.ts'),
  `export const workExperienceInfo = ${JSON.stringify(experienceList, null, 2)};\n`,
  'utf-8'
);

console.log('¡Compilación de datos finalizada!');
