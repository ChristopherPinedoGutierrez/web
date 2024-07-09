/* eslint-disable no-unused-vars */
import { technologies as tech } from './baseFiles/technologies';
import { areas } from './baseFiles/areas';
import frontendProjectsImage from '../images/frontendProjectsV1.JPG';

const areaFront = areas.frontend;
const areaBack = areas.backend;
const areaFull = areas.fullstack;
const areaDes = areas.design;
const areaMgt = areas.management;

const projectLevels = {
  2: 'Junior',
  3: 'Intermediate',
  4: 'Advanced',
  5: 'Guru'
};

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
    image: frontendProjectsImage,
    name: 'Entry level frontend projects',
    goal: '',
    description: 'Compendio de proyectos frontend de baja dificultad.',
    status: projectStatuses.dev,
    level: projectLevels[2],
    source: 'Frontend Mentor',
    rating: 2,
    repository: 'https://github.com/ChristopherPinedo/frontendProjects/',
    url: 'https://christopherpinedo.github.io/frontendProjects/',
    // aptitudes: {
    //   management: [],
    //   development: [],
    //   design: [],
    //   softSkills: []
    // },
    technologies: [tech.js, tech.ts, tech.react, tech.shadcn, tech.reactRouter]
  },
  // {
  //   area: areaFront,
  //   image:
  //     'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1572259996%2FChallenges%2Fkatmpcijwnmclxyfw3wr.jpg&w=384&q=75',
  //   name: 'URL Shortening API landing page',
  //   goal: '',
  //   description:
  //     'Integrate with the Clean URI link shortening API and play with browser storage in this landing page challenge.',
  //   status: projectStatuses.dev,
  //   level: projectLevels[3],
  //   source: 'Frontend Mentor',
  //   rating: 3,
  //   repository: '',
  //   url: ''
  // },
  {
    area: areaFront,
    image:
      'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1598711974%2FChallenges%2Fzfgce1seaqfllpuktpai.jpg&w=384&q=75',
    name: 'IP Address tracker',
    goal: '',
    description: "In this challenge, you'll be using two separate APIs together to create an IP Address Tracking app.",
    status: projectStatuses.dev,
    level: projectLevels[3],
    source: 'Frontend Mentor',
    rating: 3,
    repository: 'https://github.com/ChristopherPinedo/ipAddressTrackerApp',
    url: 'https://christopherpinedo.github.io/ipAddressTrackerApp/',
    technologies: [tech.js, tech.react, tech.tailwind]
  },
  {
    area: areaFront,
    image:
      'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1554826345%2FChallenges%2Fyhq5ihanseyinzwblaw1.jpg&w=384&q=75',
    name: 'REST Countries web app',
    goal: '',
    description:
      "If you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.",
    status: projectStatuses.dev,
    level: projectLevels[4],
    source: 'Frontend Mentor',
    rating: 4,
    repository: '',
    url: '',
    technologies: [tech.ts, tech.react, tech.tailwind, tech.reactRouter, tech.redux, tech.tanStackQuery]
    // repository: 'https://github.com/ChristopherPinedo/restCountriesWebApp',
    // url: 'https://christopherpinedo.github.io/restCountriesWebApp/'
  }
  // {
  //   area: areaFront,
  //   image:
  //     'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1573656629%2FChallenges%2Fhoqxujbnnumv1ildmus4.jpg&w=384&q=75',
  //   name: 'Rock, Paper, Scissors game +',
  //   goal: '',
  //   description:
  //     "This challenge will test your HTML, CSS and JavaScript skills. There's even a Rock, Paper, Scissors, Lizard, Spock version if you really want to challenge yourself.",
  //   status: projectStatuses.dev,
  //   level: projectLevels[4],
  //   source: 'Frontend Mentor',
  //   rating: 4,
  //   repository: '',
  //   url: ''
  // }
];

export { projectsInfo };
