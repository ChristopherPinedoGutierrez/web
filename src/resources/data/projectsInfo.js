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
  5: { id: uuidV4(), name: 'Guru', rating: 5 }
};

const projectStates = {
  dev: {
    id: uuidV4(),
    name: 'Desarrollo',
    keyName: 'DEV',
    color: 'secondary'
  },
  prod: {
    id: uuidV4(),
    name: 'Producción',
    keyName: 'PROD',
    color: 'success'
  },
  test: {
    id: uuidV4(),
    name: 'Testeo',
    keyName: 'TEST',
    color: 'warning'
  }
};

const projectSources = {
  fm: {
    name: 'Frontend Mentor'
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
      description: 'Compendio de proyectos frontend.',
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
      description:
        "In this challenge, you'll be using two separate APIs together to create an IP Address Tracking app.",
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
      description:
        "If you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.",
      technologies: [tech.ts, tech.react, tech.tailwind, tech.reactRouter, tech.tanStackQuery]
    }
  }
];

export { projectsInfo, projectLevels, projectStates };
