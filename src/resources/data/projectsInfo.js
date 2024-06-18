/* eslint-disable no-unused-vars */
import { aptitudes } from './baseFiles/aptitudes';
import { technologies } from './baseFiles/technologies';
import { areas } from './baseFiles/areas';
import portfolioImage from '../images/portfolioweb.jpg';
import sistemaProduccionImage from '../images/sistemaProduccion.jpg';

const aptMgt = aptitudes.management;
const aptDev = aptitudes.development;
const aptDes = aptitudes.design;
const aptSkl = aptitudes.softSkills;

const tecMgt = technologies.management;
const tecDev = technologies.development;
const tecDes = technologies.design;

const areaFront = areas.frontend;
const areaBack = areas.backend;
const areaFull = areas.fullstack;
const areaDes = areas.design;
const areaMgt = areas.management;

const projectStatuses = {
  dev: {
    name: 'Desarrollo',
    color: 'error'
  },
  prod: {
    name: 'Producción',
    color: 'success'
  }
};

const projectsInfo = [
  // {
  //   area: areaFull,
  //   image: sistemaProduccionImage,
  //   name: 'Control de personal y producción.',
  //   goal: 'Plataforma en tiempo real que permite gestionar producción y personal a cargo estructurado por sedes.',
  //   status: projectStatuses.dev,
  //   source: 'Iniciativa personal',
  //   rating: '3',
  //   repository: 'https://github.com/ChristopherPinedo/PRODUCTION-SYSTEM',
  //   url: '',
  //   aptitudes: {
  //     management: [aptMgt.gestionProyectos.name],
  //     development: [aptDev.progFuncional.name],
  //     design: [],
  //     softSkills: [
  //       aptSkl.adaptabilidad.name,
  //       aptSkl.gestionTiempo.name,
  //       aptSkl.pensaCritico.name,
  //       aptSkl.resProblemas.name
  //     ]
  //   },
  //   technologies: {
  //     management: [],
  //     development: [],
  //     design: []
  //   }
  // },
  {
    area: areaFront,
    image: '',
    name: 'Entry level frontend projects',
    goal: '',
    description: 'Compendio de proyectos frontend de baja dificultad pero relevantes en mi desarrollo profesional.',
    status: projectStatuses.dev,
    source: 'Frontend Mentor',
    rating: '2',
    repository: 'https://github.com/ChristopherPinedo/frontendProjects/',
    url: 'https://christopherpinedo.github.io/frontendProjects/',
    aptitudes: {
      management: [],
      development: [],
      design: [],
      softSkills: []
    },
    technologies: {
      management: [],
      development: [],
      design: []
    }
  }
];

export { projectsInfo };
