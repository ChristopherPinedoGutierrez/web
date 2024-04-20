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
  {
    area: areaFront,
    image: portfolioImage,
    name: 'Web personal, portafolio y curriculum',
    goal: 'Sitio web que me permite gestionar proyectos e información personal y laboral a travez del tiempo.',
    status: projectStatuses.prod,
    source: 'Iniciativa personal',
    rating: '3',
    repository: 'https://github.com/ChristopherPinedo/WEB/',
    url: 'https://christopherpinedo.github.io/WEB/',
    aptitudes: {
      management: [aptMgt.gestionProyectos.name],
      development: [],
      design: [],
      softSkills: []
    },
    technologies: {
      management: [
        tecMgt.mgtAgile.name,
        tecMgt.jira.name,
        tecMgt.mgtKanaban.name,
        tecMgt.miro.name,
        tecMgt.github.name,
        tecMgt.wofCentralizado.name
      ],
      development: [tecDev.react.name, tecDev.reactJsx.name, tecDev.reactHooks.name, tecDev.reactRouter.name],
      design: [tecDes.metAtomicDesign.name]
    }
  },
  {
    area: areaFull,
    image: sistemaProduccionImage,
    name: 'Control de personal y producción.',
    goal: 'Plataforma en tiempo real que permite gestionar producción y personal a cargo estructurado por sedes.',
    status: projectStatuses.dev,
    source: 'Iniciativa personal',
    rating: '4',
    repository: 'https://github.com/ChristopherPinedo/PRODUCTION-SYSTEM',
    url: '',
    aptitudes: {
      management: [aptMgt.gestionProyectos.name],
      development: [aptDev.progFuncional.name],
      design: [],
      softSkills: [
        aptSkl.adaptabilidad.name,
        aptSkl.gestionTiempo.name,
        aptSkl.pensaCritico.name,
        aptSkl.resProblemas.name
      ]
    },
    technologies: {
      management: [
        tecMgt.mgtAgile.name,
        tecMgt.jira.name,
        tecMgt.mgtScrum.name,
        tecMgt.miro.name,
        tecMgt.github.name,
        tecMgt.wofCentralizado.name
      ],
      development: [
        tecDev.react.name,
        tecDev.reactJsx.name,
        tecDev.reactHooks.name,
        tecDev.reactRouter.name,
        tecDev.firebase.name,
        tecDev.fibAuth.name,
        tecDev.fibFirestore.name
      ],
      design: [tecDes.metAtomicDesign.name]
    }
  },
  // {
  //   area: areaBack,
  //   image: '',
  //   name: 'API Whatsapp Chatbot',
  //   goal: '',
  //   status: projectStatuses.dev,
  //   source: 'Iniciativa personal',
  //   rating: '3',
  //   repository: '',
  //   url: '',
  //   aptitudes: {
  //     management: [],
  //     development: [],
  //     design: [],
  //     softSkills: []
  //   },
  //   technologies: {
  //     management: [],
  //     development: [],
  //     design: []
  //   }
  // },
  // {
  //   area: areaFront,
  //   image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/pzkdrqu0lizrk8qgmiti.jpg',
  //   name: 'Pricing component with toggle',
  //   goal: '',
  //   status: projectStatuses.dev,
  //   source: 'Frontend Mentor',
  //   rating: '1',
  //   repository: '',
  //   url: '',
  //   aptitudes: {
  //     management: [],
  //     development: [],
  //     design: [],
  //     softSkills: []
  //   },
  //   technologies: {
  //     management: [],
  //     development: [],
  //     design: []
  //   }
  // },
  {
    area: areaFront,
    image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/q7yvs5yvgchjhjs2znay.jpg',
    name: 'Newsletter sign-up form with success message',
    goal: '',
    status: projectStatuses.dev,
    source: 'Frontend Mentor',
    rating: '1',
    repository: '',
    url: '',
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
  },
  {
    area: areaFront,
    image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/kbiajeinu576ltgcclbt.jpg',
    name: 'Calculator app',
    goal: '',
    status: projectStatuses.dev,
    source: 'Frontend Mentor',
    rating: '2',
    repository: '',
    url: '',
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
  },
  {
    area: areaFront,
    image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/x8skdsukkmwiwxejthio.jpg',
    name: 'Space tourism multi-page website',
    goal: '',
    status: projectStatuses.dev,
    source: 'Frontend Mentor',
    rating: '2',
    repository: '',
    url: '',
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
  },
  // {
  //   area: areaFront,
  //   image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/vxqbpnpbamodg5ioplbj.jpg',
  //   name: 'Multi-step form',
  //   goal: '',
  //   status: projectStatuses.dev,
  //   source: 'Frontend Mentor',
  //   rating: '3',
  //   repository: '',
  //   url: '',
  //   aptitudes: {
  //     management: [],
  //     development: [],
  //     design: [],
  //     softSkills: []
  //   },
  //   technologies: {
  //     management: [],
  //     development: [],
  //     design: []
  //   }
  // },
  {
    area: areaFront,
    image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wirxeocmd6tpnn9c5oqc.jpg',
    name: 'REST Countries API with color theme switcher',
    goal: '',
    status: projectStatuses.dev,
    source: 'Frontend Mentor',
    rating: '3',
    repository: '',
    url: '',
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
