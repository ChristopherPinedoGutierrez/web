/* eslint-disable no-unused-vars */
import { technologies as tech } from './baseFiles/technologies';
import { areas } from './baseFiles/areas';
import frontendProjectsImage from '../images/frontendProjectsV1.JPG';
import portafolioWebImage from '../images/portafolioWebV1.JPG';
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
};

const projectSources = {
  frontendMentor: {
    name: 'Frontend Mentor project'
  },
  personal: {
    name: 'Personal project'
  }
};

const projectsInfo = [
  // ______ NEWBIE
  {
    id: uuidV4(),
    config: {
      image:
        'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/ouobx6tvyduidzio7wr7.jpg',
      area: areas.frontend,
      level: projectLevels[1],
      status: projectStates.prod,
      source: projectSources.fm,
      repository: 'https://github.com/ChristopherPinedoGutierrez/frontendMentor-orderSummaryComponent',
      url: 'https://christopherpinedogutierrez.github.io/frontendMentor-orderSummaryComponent/'
    },
    content: {
      name: 'Order summary component',
      description: 'A perfect project for newbies who are starting to build.',
      technologies: [tech.js, tech.react, tech.tailwind, tech.vite]
    }
  },
  {
    id: uuidV4(),
    config: {
      image:
        'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/bnjpxmx9fudsmerfj6eo.jpg',
      area: areas.frontend,
      level: projectLevels[1],
      status: projectStates.prod,
      source: projectSources.fm,
      repository: 'https://github.com/ChristopherPinedoGutierrez/frontendMentor-socialProofSection',
      url: 'https://christopherpinedogutierrez.github.io/frontendMentor-socialProofSection/'
    },
    content: {
      name: 'Social proof section',
      description:
        "This project will test your layout skills. If you're starting to get confident with Flexbox or Grid.",
      technologies: [tech.js, tech.react, tech.tailwind, tech.vite]
    }
  },
  // ______ JUNIOR
  {
    id: uuidV4(),
    config: {
      image:
        'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/jntqqksdinxs3qy8uyqb.jpg',
      area: areas.frontend,
      level: projectLevels[2],
      status: projectStates.prod,
      source: projectSources.fm,
      repository: 'https://github.com/ChristopherPinedoGutierrez/frontendMentor-contactForm',
      url: 'https://christopherpinedogutierrez.github.io/frontendMentor-contactForm/'
    },
    content: {
      name: 'Contact form',
      description: 'Building accessible forms is a crucial task for front-end developers.',
      technologies: [tech.js, tech.react, tech.tailwind, tech.vite]
    }
  },
  {
    id: uuidV4(),
    config: {
      image:
        'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/j1ocp59n25odoftocgpi.jpg',
      area: areas.frontend,
      level: projectLevels[2],
      status: projectStates.prod,
      source: projectSources.fm,
      repository: 'https://github.com/ChristopherPinedoGutierrez/frontendMentor-timeTrackingDashboard',
      url: 'https://christopherpinedogutierrez.github.io/frontendMentor-timeTrackingDashboard/'
    },
    content: {
      name: 'Time tracking dashboard',
      description: 'A perfect opportunity to practice your CSS Grid skills.',
      technologies: [tech.js, tech.react, tech.tailwind, tech.vite]
    }
  },
  {
    id: uuidV4(),
    config: {
      // image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/mwjogovjjnkz6f6yzdkp.jpg',
      area: areas.frontend,
      level: projectLevels[2],
      status: projectStates.dev,
      source: projectSources.fm,
      repository: 'https://github.com/ChristopherPinedoGutierrez/frontendMentor-ageCalculatorApp'
      // url: ''
    },
    content: {
      name: 'Age calculator app',
      description: 'This challenge is designed to sharpen your JavaScript and form validation skills.',
      technologies: [tech.js, tech.react, tech.tailwind, tech.vite]
    }
  },
  // ______ INTERMEDIATE
  {
    id: uuidV4(),
    config: {
      image:
        'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/zfgce1seaqfllpuktpai.jpg',
      area: areas.frontend,
      level: projectLevels[3],
      status: projectStates.prod,
      source: projectSources.fm,
      repository: 'https://github.com/ChristopherPinedoGutierrez/frontendMentor-ipAddressTrackerApp',
      url: 'https://christopherpinedogutierrez.github.io/frontendMentor-ipAddressTrackerApp/'
    },
    content: {
      name: 'IP Address Tracker',
      description:
        "In this challenge, you'll be using two separate APIs together to create an IP Address Tracking app.",
      technologies: [tech.js, tech.css, tech.react, tech.vite]
    }
  },
  {
    id: uuidV4(),
    config: {
      image:
        'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/katmpcijwnmclxyfw3wr.jpg',
      area: areas.frontend,
      level: projectLevels[3],
      status: projectStates.dev,
      source: projectSources.fm,
      repository: '',
      url: ''
    },
    content: {
      name: 'URL shortening API landing page',
      description:
        'Integrate with the Clean URI link shortening API and play with browser storage in this landing page challenge.',
      technologies: [tech.js, tech.css, tech.react, tech.vite]
    }
  },
  // ______ ADVANCED
  {
    id: uuidV4(),
    config: {
      // image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/lpwvfibpdyycvjpukkec.jpg',
      area: areas.frontend,
      level: projectLevels[4],
      status: projectStates.dev,
      source: projectSources.fm,
      repository: 'https://github.com/ChristopherPinedoGutierrez/frontendMentor-multiStepForm',
      url: 'https://christopherpinedogutierrez.github.io/frontendMentor-multiStepForm/'
    },
    content: {
      name: 'Multi-step form',
      description:
        'An excellent test for your form-building and JS skills, this project will pose many challenges along the way to completion.',
      technologies: [tech.ts, tech.react, tech.tailwind, tech.vite, tech.reactHookForm]
    }
  },
  {
    id: uuidV4(),
    config: {
      // image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/yhq5ihanseyinzwblaw1.jpg',
      area: areas.frontend,
      level: projectLevels[4],
      status: projectStates.dev,
      source: projectSources.fm,
      repository: 'https://github.com/ChristopherPinedoGutierrez/frontendMentor-restCountriesApp'
      // url: ''
    },
    content: {
      name: 'REST Countries API with color theme switcher',
      description:
        "If you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.",
      technologies: [tech.ts, tech.react, tech.tailwind, tech.reactRouter, tech.tanStackQuery, tech.vite]
    }
  },
  {
    id: uuidV4(),
    config: {
      image: portafolioWebImage,
      area: areas.frontend,
      level: projectLevels[4],
      status: projectStates.prod,
      source: 'Self taught',
      repository: 'https://github.com/ChristopherPinedoGutierrez/web',
      url: 'https://christopherpinedogutierrez.github.io/web/'
    },
    content: {
      name: 'Web personal y portafolio',
      description: 'Aplicación SPA para mostrar información personal y laboral',
      technologies: [tech.js, tech.react, tech.mui, tech.cra, tech.reactRouter]
    }
  }
  // ______ EXPERT
];

export { projectsInfo, projectLevels, projectStates };
