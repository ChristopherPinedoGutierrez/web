const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Cargar dinámicamente un archivo TypeScript de datos simulando el entorno
function loadTsData(filePath) {
  if (!fs.existsSync(filePath)) return {};
  let content = fs.readFileSync(filePath, 'utf-8');
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
  const parsed = matter(content);
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
  const parsed = matter(fileContent);
  const key = path.basename(file, '.md');
  
  if (parsed.data.name) {
    technologiesObj[key] = {
      id: key,
      name: parsed.data.name,
      area: parsed.data.area,
      group: parsed.data.group || '',
      typeDef: parsed.data.typeDef || '',
      iconName: parsed.data.iconName || 'SiReact',
      brandColor: parsed.data.brandColor || '#cccccc',
      invertColors: parsed.data.invertColors || false,
      monochrome: parsed.data.monochrome || false,
      contrast: parsed.data.contrast || false,
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

const projectStatesObj = {
  dev: { id: "development", name: "Development", keyName: "Development", color: "secondary" },
  testing: { id: "testing", name: "Testing", keyName: "Testing", color: "warning" },
  prod: { id: "production", name: "Production", keyName: "Production", color: "success" }
};

projectFiles.forEach(file => {
  const fileContent = fs.readFileSync(path.join(projectsFolder, file), 'utf-8');
  const parsed = matter(fileContent);
  const key = path.basename(file, '.md');

  if (parsed.data.title) {
    let statusKey = 'prod';
    const s = (parsed.data.status || '').toLowerCase();
    if (s.includes('desarrollo') || s.includes('development')) statusKey = 'dev';
    else if (s.includes('testing') || s.includes('prueba') || s.includes('beta')) statusKey = 'testing';

    const projectType = parsed.data.project_type || 'application';
    const syncSource = parsed.data.sync_source || '';
    const modules = parsed.data.modules || [];
    const shortDescription = parsed.data.short_description || '';

    // Auto-scan gallery images
    let gallery = [];
    const projectAssetsPath = path.join(__dirname, '../public/assets/projects', key);
    if (fs.existsSync(projectAssetsPath)) {
      const imgFiles = fs.readdirSync(projectAssetsPath)
        .filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f))
        .sort((a, b) => a.localeCompare(b));
      
      let mainIndex = imgFiles.findIndex(f => f.toLowerCase().includes('main'));
      if (mainIndex === -1 && imgFiles.length > 0) mainIndex = 0;
      
      if (mainIndex !== -1) {
        // Move main image to the front
        const mainImg = imgFiles.splice(mainIndex, 1)[0];
        imgFiles.unshift(mainImg);
      }
      gallery = imgFiles.map(f => `/assets/projects/${key}/${f}`);
    }
    
    // Extract technologies: global + from modules
    let rawTechs = new Set(parsed.data.technologies || []);
    modules.forEach(m => {
       if (m.technologies) {
          m.technologies.forEach(t => rawTechs.add(t));
       }
    });
    const allTechs = Array.from(rawTechs);

    projectsList.push({
      id: key,
      config: {
        projectType: projectType,
        syncSource: syncSource,
        gallery: gallery,
        brandColor: parsed.data.brandColor || '',
        status: projectStatesObj[statusKey],
        source: { name: parsed.data.source || 'Personal project' },
        repository: parsed.data.repository || '',
        url: parsed.data.url || '',
        date: parsed.data.date || '',
        importance: parsed.data.importance || 0
      },
      content: {
        name: parsed.data.title,
        shortDescription: shortDescription,
        description: parsed.content,
        modules: modules,
        technologies: allTechs.map(t => {
          const matchedTech = technologiesObj[t];
          return matchedTech
            ? {
                id: matchedTech.id,
                name: matchedTech.name,
                iconName: matchedTech.iconName || '',
                brandColor: matchedTech.brandColor || '',
                invertColors: matchedTech.invertColors || false,
                contrast: matchedTech.contrast || false,
                monochrome: matchedTech.monochrome || false,
                colorLayer1: matchedTech.colorLayer1 || '#cccccc',
                colorLayer2: matchedTech.colorLayer2 || '#ffffff'
              }
            : { id: t, name: t, iconName: '', colorLayer1: '#cccccc', colorLayer2: '#ffffff' };
        }).sort((a, b) => a.name.localeCompare(b.name))
      }
    });
  }
});

fs.writeFileSync(
  path.join(__dirname, '../src/resources/data/projectsInfo.ts'),
  `export const projectStates = ${JSON.stringify(projectStatesObj, null, 2)};\nexport const projectsInfo = ${JSON.stringify(projectsList, null, 2)};\n`,
  'utf-8'
);


// 4. COMPILAR EXPERIENCIA
const experienceFolder = path.join(contentDir, 'experience');
const expFiles = fs.readdirSync(experienceFolder).filter(file => file.endsWith('.md'));
const experienceList = [];

expFiles.forEach(file => {
  const fileContent = fs.readFileSync(path.join(experienceFolder, file), 'utf-8');
  const parsed = matter(fileContent);
  const key = path.basename(file, '.md');

  if (parsed.data.company) {
    experienceList.push({
      id: key,
      type: parsed.data.type || 'work',
      linkedProjects: parsed.data.linkedProjects || [],
      links: parsed.data.links || [],
      company: parsed.data.company,
      role: parsed.data.role,
      period: {
        startDate: parsed.data.startDate || '',
        endDate: parsed.data.endDate || '',
        duration: parsed.data.duration || '',
        state: parsed.data.state || ''
      },
      jobFunctions: parsed.content,
      coreCompetencies: (parsed.data.softSkills || []).map(k => {
        const t = technologiesObj[k];
        return t ? { id: t.id, name: t.name, area: t.area, type: { name: t.area, value: 5 } } : { id: k, name: k, area: 'Soft Skills', type: { name: 'Soft Skills', value: 5 } };
      }),
      technicalSkills: (parsed.data.aptitudes || []).map(k => {
        const t = technologiesObj[k];
        return t ? { id: t.id, name: t.name, area: t.area, type: { name: t.area, value: 10 } } : { id: k, name: k, area: 'Management', type: { name: 'Management', value: 10 } };
      }),
      order: parsed.data.order || 99
    });
  }
});

experienceList.sort((a, b) => a.order - b.order);

fs.writeFileSync(
  path.join(__dirname, '../src/resources/data/workExperienceInfo.ts'),
  `export const workExperienceInfo = ${JSON.stringify(experienceList, null, 2)};\n`,
  'utf-8'
);

console.log('¡Compilación de datos finalizada!');
