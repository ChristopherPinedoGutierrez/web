import { v4 as uuidV4 } from 'uuid';
import { areas } from './areas';

import { RiReactjsFill, RiNodejsFill } from 'react-icons/ri';

import { DiJavascript1 } from 'react-icons/di';

import { MdOutlineCss, MdOutlineHtml } from 'react-icons/md';

import { SiTypescript } from 'react-icons/si';

const types = {
  lang: {
    name: 'Language',
    types: {
      langMark: 'Markup language',
      langStyle: 'Style language',
      langProg: 'Programing language',
      langSset: 'Language superset'
    }
  },
  lib: {
    name: 'Library',
    types: {
      libUi: 'UI library',
      libComp: 'Component library',
      libRoute: 'Routing library',
      libTesting: 'Testing Library'
    }
  },
  frw: {
    name: 'Framework',
    types: {
      frwJs: 'JS framework',
      frwNode: 'Node framework',
      frwReact: 'React framework'
    }
  },
  rtm: {
    name: 'Runtime',
    types: {
      rtmJsBrowser: 'Browser Js Runtime',
      rtmJsCross: 'Cross Platform Js Runtime'
    }
  },
  cloud: {
    name: 'Cloud computing',
    types: {
      paas: 'Platform as a service',
      iaas: 'Infrastructure as a service',
      saas: 'Software as a service',
      baas: 'Backend as a service'
    }
  }
};

const technologies = {
  // management: {
  //   git: { name: 'GIT' },
  //   github: { name: 'GitHub' },
  //   gitlab: { name: 'GitLab' },
  //   wofCentralizado: { name: 'Centralized workflow' },
  //   wofFeatureB: { name: 'Feature branch workflow' },
  //   wofGitflow: { name: 'GitFlow workflow' },
  //   jira: { name: 'JIRA' },
  //   notion: { name: 'Notion' },
  //   miro: { name: 'Miro' },
  //   azureDO: { name: 'Azure DevOps' },
  //   mgtAgile: { name: 'Agile management' },
  //   mgtScrum: { name: 'Scrum' },
  //   mgtKanaban: { name: 'Kanban' },
  //   oficceGoogle: { name: 'Google office suite' },
  //   oficceMicro: { name: 'Microsoft office suite' },
  //   mgtWater: { name: 'WaterFall' }
  // },
  html: {
    id: uuidV4(),
    name: 'Html',
    icon: <MdOutlineHtml />,
    color: '#ec7430',
    contrastColor: 'white',
    area: areas.frontend.name,
    group: types.lang.name,
    type: types.lang.types.langMark,
    ecosystem: ['html']
  },
  css: {
    id: uuidV4(),
    name: 'Css',
    icon: <MdOutlineCss />,
    color: '#2862e9',
    contrastColor: 'white',
    area: areas.frontend.name,
    group: types.lang.name,
    type: types.lang.types.langStyle,
    ecosystem: ['css']
  },
  js: {
    id: uuidV4(),
    name: 'Javascript',
    icon: <DiJavascript1 />,
    color: '#efd81d',
    contrastColor: 'black',
    area: areas.frontend.name,
    group: types.lang.name,
    type: types.lang.types.langProg,
    ecosystem: ['javascript']
  },
  react: {
    id: uuidV4(),
    name: 'React.js',
    icon: <RiReactjsFill />,
    color: 'grey.800',
    contrastColor: '#5bd9fb',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib.types.libUi,
    ecosystem: ['javascript', 'react']
  },
  ts: {
    id: uuidV4(),
    name: 'Typescript',
    icon: <SiTypescript />,
    color: '#377cc8',
    contrastColor: 'grey.200',
    area: areas.frontend.name,
    group: types.lang.name,
    type: types.lang.types.langSset,
    ecosystem: ['javascript']
  },
  node: {
    id: uuidV4(),
    name: 'Node.js',
    icon: <RiNodejsFill />,
    color: '#58a149',
    contrastColor: 'white',
    area: areas.backend.name,
    group: types.rtm.name,
    type: types.rtm.types.rtmJsCross,
    ecosystem: ['javascript']
  },
  firebase: {
    id: uuidV4(),
    name: 'Firebase',
    icon: '',
    color: 'black',
    contrastColor: 'white',
    area: areas.backend.name,
    group: types.cloud.name,
    type: types.cloud.types.baas,
    ecosystem: ['javascript']
  },
  jest: {
    id: uuidV4(),
    name: 'Jest',
    icon: '',
    color: 'black',
    contrastColor: 'white',
    area: areas.testing.name,
    group: types.lib.name,
    type: types.lib.types.libTesting,
    ecosystem: ['javascript']
  },
  reactTestingLibrary: {
    id: uuidV4(),
    name: 'React Testing Library',
    icon: '',
    color: 'black',
    contrastColor: 'white',
    area: areas.testing.name,
    group: types.lib.name,
    type: types.lib.types.libTesting,
    ecosystem: ['javascript', 'React.js']
  },
  reactRouter: {
    id: uuidV4(),
    name: 'React Router',
    icon: '',
    color: 'black',
    contrastColor: 'white',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib.types.libRoute,
    ecosystem: ['javascript', 'React.js']
  }
  // design: {
  //   metBem: { name: 'Metodologia BEM' },
  //   metAtomicDesign: { name: 'Metodologia atomic design' },
  //   figma: { name: 'Figma' },
  //   illustrator: { name: 'Adobe Illuctrator' }
  // }
};

export { technologies };
