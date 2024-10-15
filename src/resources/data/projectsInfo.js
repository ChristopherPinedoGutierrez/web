/* eslint-disable no-unused-vars */
import { technologies as tech } from './baseFiles/technologies';
import { areas } from './baseFiles/areas';
import frontendProjectsImage from '../images/frontendProjectsV1.JPG';
import { v4 as uuidV4 } from 'uuid';

const projectLevels = {
  1: { id: uuidV4(), name: 'Newbie', rating: 1 },
  2: { id: uuidV4(), name: 'Junior', rating: 2 },
  3: { id: uuidV4(), name: 'Intermediate', rating: 3 },
  4: { id: uuidV4(), name: 'Advanced', rating: 4 },
  5: { id: uuidV4(), name: 'Expert', rating: 5 }
};

const projectStates = {
  dev: {
    id: uuidV4(),
    name: 'Desarrollo',
    keyName: 'Development',
    color: 'secondary'
  },
  prod: {
    id: uuidV4(),
    name: 'Producción',
    keyName: 'Production',
    color: 'success'
  }
  // test: {
  //   id: uuidV4(),
  //   name: 'Testeo',
  //   keyName: 'TEST',
  //   color: 'warning'
  // }
};

const projectSources = {
  fm: {
    name: 'Frontend Mentor'
  },
  myself: {
    name: 'Autónomo'
  }
};

const projectsInfo = [
  {
    id: uuidV4(),
    config: {
      image: frontendProjectsImage,
      area: areas.frontend,
      level: projectLevels[2],
      status: projectStates.prod,
      source: 'Frontend Mentor',
      repository: 'https://github.com/ChristopherPinedo/frontendProjects/',
      url: 'https://christopherpinedo.github.io/frontendProjects/'
    },
    content: {
      name: 'Entry level frontend projects',
      description: 'Dashboard organizador de proyectos frontend de entrada.',
      technologies: [tech.js, tech.ts, tech.react, tech.shadcn, tech.reactRouter]
    }
  },
  {
    id: uuidV4(),
    config: {
      image:
        'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1598711974%2FChallenges%2Fzfgce1seaqfllpuktpai.jpg&w=384&q=75',
      area: areas.frontend,
      level: projectLevels[1],
      status: projectStates.prod,
      source: 'Frontend Mentor',
      repository: 'https://github.com/ChristopherPinedo/ipAddressTrackerApp',
      url: 'https://christopherpinedo.github.io/ipAddressTrackerApp/'
    },
    content: {
      name: 'IP Address tracker',
      description: 'Desafio de Frontend Mentor en el que se solicita una IP para obtener información sobre ella.',
      technologies: [tech.js, tech.react, tech.tailwind]
    }
  },
  {
    id: uuidV4(),
    config: {
      // image: 'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1554826345%2FChallenges%2Fyhq5ihanseyinzwblaw1.jpg&w=384&q=75',
      area: areas.frontend,
      level: projectLevels[2],
      status: projectStates.dev,
      source: projectSources.fm
      // repository: 'https://github.com/ChristopherPinedo/restCountriesWebApp',
      // url: 'https://christopherpinedo.github.io/restCountriesWebApp/'
    },
    content: {
      name: 'REST Countries web app',
      description: 'Desafio de Frontend Mentor en el que se muestra información sobre paises.',
      technologies: [tech.ts, tech.react, tech.tailwind, tech.reactRouter, tech.tanStackQuery]
    }
  },
  {
    id: uuidV4(),
    config: {
      image: '',
      area: areas.fullstack,
      level: projectLevels[3],
      status: projectStates.dev,
      source: projectSources.myself,
      repository: '',
      url: ''
    },
    content: {
      name: 'Aplicación de control de gastos',
      description: 'Aplicación de gestión y control de egresos e ingresos usando los servicios de firebase en Next.js.',
      technologies: [tech.ts, tech.react, tech.tailwind, tech.firebase, tech.next, tech.nextUi, tech.redux]
    }
  }
];

export { projectsInfo, projectLevels, projectStates };
