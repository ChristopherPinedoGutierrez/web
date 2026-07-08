import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PendingIcon from '@mui/icons-material/Pending';

export const states = {
  conocidas: {
    name: 'conocidas',
    icon: <SchoolIcon />
  },
  aprendiendo: {
    name: 'aprendiendo',
    icon: <LocalLibraryIcon />
  },
  pendientes: {
    name: 'pendientes',
    icon: <PendingIcon />
  }
};

export const types = {
  lang: {
    name: 'Language',
    types: {
      langMark: 'Markup language',
      langStyle: 'Style language',
      langProg: 'Programing language',
      langSset: 'Language superset',
      langQuery: 'Query language'
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
      frwReact: 'React framework',
      frwCSharp: 'C# framework'
    }
  },
  rtm: {
    name: 'Runtime',
    types: {
      rtmJsBrowser: 'Browser Js Runtime',
      rtmJsCross: 'Cross Platform Js Runtime'
    }
  },
  db: {
    name: 'Database',
    types: {
      dbEngine: 'Database Engine'
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
