import { v4 as uuidV4 } from 'uuid';
import { areas } from './areas';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiJest,
  SiTestinglibrary,
  SiReactrouter,
  SiReacthookform,
  SiRedux,
  SiNodedotjs,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJirasoftware,
  SiNotion,
  SiFigma,
  SiMiro,
  SiAdobeillustrator,
  SiMui,
  SiStyledcomponents,
  SiSass,
  // SiNormalizedotcss,
  SiBem,
  SiTailwindcss,
  // SiVite,
  // SiNextdotjs,
  // SiNextui,
  // SiPlaywright,
  // SiStorybook,
  // SiCreatereactapp,
  SiShadcnui,
  SiReactquery
  // SiExpo
} from 'react-icons/si';

import { TbAtom2 } from 'react-icons/tb';

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
      libTesting: 'Testing Library',
      libstateMgt: 'State management library',
      libFormVal: 'Form validation library',
      libStyle: 'Style library',
      libWebRequest: 'Web request management library'
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
  pckRun: {
    name: 'Package runner',
    types: {
      pckRunJs: 'Javascript package runner'
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
  },
  vcs: {
    name: 'Version control system',
    types: {
      center: 'Centralized version control',
      distrib: 'Distributed version control'
    }
  },
  prjMgt: {
    name: 'Project Management',
    types: {
      agile: 'Agile project management',
      wfall: 'Waterfall project management'
    }
  },
  app: {
    name: 'App',
    types: {
      design: 'Design app',
      management: 'Management App'
    }
  },
  methodology: {
    name: 'Methodology',
    types: {
      design: 'Design methodology',
      development: 'Development methodology'
    }
  }
};

const technologies = {
  git: {
    id: uuidV4(),
    name: 'Git',
    area: areas.management.name,
    group: types.vcs.name,
    type: types.vcs.types.distrib,
    icon: <SiGit />,
    color: '#f05539',
    contrastColor: 'grey.200',
    ecosystem: ['git']
  },
  github: {
    id: uuidV4(),
    name: 'Github',
    area: areas.management.name,
    group: types.vcs.name,
    type: types.vcs.types.distrib,
    icon: <SiGithub />,
    color: 'grey.800',
    contrastColor: 'grey.200',
    ecosystem: ['git']
  },
  jira: {
    id: uuidV4(),
    name: 'Jira',
    area: areas.management.name,
    group: types.prjMgt.name,
    type: types.prjMgt.types.agile,
    icon: <SiJirasoftware />,
    color: '#2580f7',
    contrastColor: 'grey.200',
    ecosystem: ['management']
  },
  notion: {
    id: uuidV4(),
    name: 'Notion',
    area: areas.management.name,
    group: types.app.name,
    type: types.app.types.management,
    icon: <SiNotion />,
    color: 'grey.200',
    contrastColor: 'grey.800',
    ecosystem: ['management']
  },
  html: {
    id: uuidV4(),
    name: 'Html',
    area: areas.frontend.name,
    group: types.lang.name,
    type: types.lang.types.langMark,
    icon: <SiHtml5 />,
    color: '#ec7430',
    contrastColor: 'grey.200',
    ecosystem: ['html']
  },
  css: {
    id: uuidV4(),
    name: 'Css',
    area: areas.frontend.name,
    group: types.lang.name,
    type: types.lang.types.langStyle,
    icon: <SiCss3 />,
    color: '#2862e9',
    contrastColor: 'grey.200',
    ecosystem: ['css']
  },
  js: {
    id: uuidV4(),
    name: 'Javascript',
    area: areas.frontend.name,
    group: types.lang.name,
    type: types.lang.types.langProg,
    icon: <SiJavascript />,
    color: 'grey.800',
    contrastColor: '#efd81d',
    ecosystem: ['javascript']
  },
  react: {
    id: uuidV4(),
    name: 'React',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib.types.libUi,
    icon: <SiReact />,
    color: 'grey.800',
    contrastColor: '#5bd9fb',
    ecosystem: ['javascript', 'react']
  },
  // cra: {
  //   id: uuidV4(),
  //   name: 'Create React App',
  //   area: areas.frontend.name,
  //   group: types.pckRun.name,
  //   type: types.pckRun.types.pckRunJs,
  //   icon: <SiCreatereactapp />,
  //   color: '#09d3ac',
  //   contrastColor: 'grey.800',
  //   ecosystem: ['javascript', 'react']
  // },
  // vite: {
  //   id: uuidV4(),
  //   name: 'Vite',
  //   area: areas.frontend.name,
  //   group: types.pckRun.name,
  //   type: types.pckRun.types.pckRunJs,
  //   icon: <SiVite />,
  //   color: '#a842f6',
  //   contrastColor: '#f6c928',
  //   ecosystem: ['javascript', 'react']
  // },
  ts: {
    id: uuidV4(),
    name: 'Typescript',
    area: areas.frontend.name,
    group: types.lang.name,
    type: types.lang.types.langSset,
    icon: <SiTypescript />,
    color: 'grey.200',
    contrastColor: '#377cc8',
    ecosystem: ['javascript']
  },
  node: {
    id: uuidV4(),
    name: 'Node.js',
    area: areas.backend.name,
    group: types.rtm.name,
    type: types.rtm.types.rtmJsCross,
    icon: <SiNodedotjs />,
    color: '#58a149',
    contrastColor: 'grey.200',
    ecosystem: ['javascript']
  },
  // reactNative: {
  //   id: uuidV4(),
  //   name: 'React Native',
  //   area: areas.frontend.name,
  //   group: types.lib.name,
  //   type: types.lib.types.libUi,
  //   icon: <SiReact />,
  //   color: '#5bd9fb',
  //   contrastColor: 'grey.800',
  //   ecosystem: ['javascript', 'react']
  // },
  // expo: {
  //   id: uuidV4(),
  //   name: 'Expo',
  //   area: areas.frontend.name,
  //   group: types.lib.name,
  //   type: types.lib.types.libUi,
  //   icon: <SiExpo />,
  //   color: 'grey.200',
  //   contrastColor: 'grey.800',
  //   ecosystem: ['javascript', 'react']
  // },
  firebase: {
    id: uuidV4(),
    name: 'Firebase',
    area: areas.backend.name,
    group: types.cloud.name,
    type: types.cloud.types.baas,
    icon: <SiFirebase />,
    color: 'grey.800',
    contrastColor: '#ffcd32',
    ecosystem: ['javascript']
  },
  jest: {
    id: uuidV4(),
    name: 'Jest',
    area: areas.testing.name,
    group: types.lib.name,
    type: types.lib.types.libTesting,
    icon: <SiJest />,
    color: '#ca451a',
    contrastColor: 'grey.200',
    ecosystem: ['javascript']
  },
  reactTestingLibrary: {
    id: uuidV4(),
    name: 'React Testing Library',
    area: areas.testing.name,
    group: types.lib.name,
    type: types.lib.types.libTesting,
    icon: <SiTestinglibrary />,
    color: '#ff4949',
    contrastColor: 'grey.200',
    ecosystem: ['javascript', 'React.js']
  },
  reactRouter: {
    id: uuidV4(),
    name: 'React Router',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib.types.libRoute,
    icon: <SiReactrouter />,
    color: 'grey.200',
    contrastColor: '#d10a22',
    ecosystem: ['javascript', 'React.js']
  },
  reactHookForm: {
    id: uuidV4(),
    name: 'React Hook Form',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib.types.libFormVal,
    icon: <SiReacthookform />,
    color: '#ed5e93',
    contrastColor: 'grey.200',
    ecosystem: ['javascript', 'React.js']
  },
  tanStackQuery: {
    id: uuidV4(),
    name: 'TanStack Query',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib.types.libWebRequest,
    icon: <SiReactquery />,
    color: '#ff4759',
    contrastColor: '#ffda52',
    ecosystem: ['javascript', 'React.js']
  },
  redux: {
    id: uuidV4(),
    name: 'Redux',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib.types.libstateMgt,
    icon: <SiRedux />,
    color: 'grey.200',
    contrastColor: '#764abc',
    ecosystem: ['javascript', 'React.js']
  },
  mui: {
    id: uuidV4(),
    name: 'Material UI',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib.types.libComp,
    icon: <SiMui />,
    color: 'grey.200',
    contrastColor: '#007fff',
    ecosystem: ['design']
  },
  shadcn: {
    id: uuidV4(),
    name: 'Shadcn/ui',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib.types.libComp,
    icon: <SiShadcnui />,
    color: 'black',
    contrastColor: 'grey.200',
    ecosystem: ['design']
  },
  tailwind: {
    id: uuidV4(),
    name: 'Tailwind Css',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib.types.libStyle,
    icon: <SiTailwindcss />,
    color: 'grey.200',
    contrastColor: '#06B6D4',
    ecosystem: ['design']
  },
  // next: {
  //   id: uuidV4(),
  //   name: 'Next.js',
  //   area: areas.frontend.name,
  //   group: types.frw.name,
  //   type: types.frw.types.frwReact,
  //   icon: <SiNextdotjs />,
  //   color: 'grey.200',
  //   contrastColor: 'black',
  //   ecosystem: ['design']
  // },
  // nextUi: {
  //   id: uuidV4(),
  //   name: 'Next UI',
  //   area: areas.frontend.name,
  //   group: types.lib.name,
  //   type: types.lib.types.libComp,
  //   icon: <SiNextui />,
  //   color: 'grey.200',
  //   contrastColor: 'black',
  //   ecosystem: ['design']
  // },
  // playwright: {
  //   id: uuidV4(),
  //   name: 'Playwright',
  //   area: areas.testing.name,
  //   group: types.lib.name,
  //   type: types.lib.types.libTesting,
  //   icon: <SiPlaywright />,
  //   color: '#dc594f',
  //   contrastColor: '#2EAD33',
  //   ecosystem: ['design']
  // },
  // storybook: {
  //   id: uuidV4(),
  //   name: 'Storybook',
  //   area: areas.testing.name,
  //   group: types.lib.name,
  //   type: types.lib.types.libTesting,
  //   icon: <SiStorybook />,
  //   color: 'grey.200',
  //   contrastColor: '#FF4785',
  //   ecosystem: ['design']
  // },
  sass: {
    id: uuidV4(),
    name: 'Sass',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib.types.libStyle,
    icon: <SiSass />,
    color: 'grey.200',
    contrastColor: '#CC6699',
    ecosystem: ['design']
  },
  styledComp: {
    id: uuidV4(),
    name: 'Styled Components',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib.types.libStyle,
    icon: <SiStyledcomponents />,
    color: 'grey.200',
    contrastColor: '#DB7093',
    ecosystem: ['design']
  },
  // normalCss: {
  //   id: uuidV4(),
  //   name: 'Normalize Css',
  //   area: areas.frontend.name,
  //   group: types.lib.name,
  //   type: types.lib.types.libStyle,
  //   icon: <SiNormalizedotcss />,
  //   color: 'grey.200',
  //   contrastColor: '#E3695F',
  //   ecosystem: ['design']
  // },
  figma: {
    id: uuidV4(),
    name: 'Figma',
    area: areas.design.name,
    group: types.app.name,
    type: types.app.types.design,
    icon: <SiFigma />,
    color: 'grey.200',
    contrastColor: '#5551ff',
    ecosystem: ['javascript', 'React.js']
  },
  miro: {
    id: uuidV4(),
    name: 'Miro',
    area: areas.design.name,
    group: types.app.name,
    type: types.app.types.design,
    icon: <SiMiro />,
    color: '#ffdd33',
    contrastColor: 'grey.800',
    ecosystem: ['design']
  },
  illustrator: {
    id: uuidV4(),
    name: 'Adobe Illustrator',
    area: areas.design.name,
    group: types.app.name,
    type: types.app.types.design,
    icon: <SiAdobeillustrator />,
    color: '#ff9a00',
    contrastColor: '#330000',
    ecosystem: ['design']
  },
  bem: {
    id: uuidV4(),
    name: 'BEM',
    area: areas.design.name,
    group: types.methodology.name,
    type: types.methodology.types.design,
    icon: <SiBem />,
    color: 'grey.200',
    contrastColor: 'grey.800',
    ecosystem: ['design methodologies']
  },
  atomicDsg: {
    id: uuidV4(),
    name: 'Atomic Design',
    area: areas.design.name,
    group: types.methodology.name,
    type: types.methodology.types.design,
    icon: <TbAtom2 />,
    color: 'grey.800',
    contrastColor: '#bc6719',
    ecosystem: ['design methodologies']
  }
};

export { technologies };
