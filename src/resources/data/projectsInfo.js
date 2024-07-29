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
  1: 'Newbie',
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
    technologies: [tech.js, tech.ts, tech.react, tech.shadcn, tech.reactRouter]
  },
  {
    area: areaFront,
    image:
      'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1598711974%2FChallenges%2Fzfgce1seaqfllpuktpai.jpg&w=384&q=75',
    name: 'IP Address tracker',
    goal: '',
    description: "In this challenge, you'll be using two separate APIs together to create an IP Address Tracking app.",
    status: projectStatuses.dev,
    level: projectLevels[1],
    source: 'Frontend Mentor',
    rating: 1,
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
    level: projectLevels[2],
    source: 'Frontend Mentor',
    rating: 2,
    repository: '',
    url: '',
    // repository: 'https://github.com/ChristopherPinedo/restCountriesWebApp',
    // url: 'https://christopherpinedo.github.io/restCountriesWebApp/'
    technologies: [tech.ts, tech.react, tech.tailwind, tech.reactRouter, tech.tanStackQuery]
  }
];

export { projectsInfo };
