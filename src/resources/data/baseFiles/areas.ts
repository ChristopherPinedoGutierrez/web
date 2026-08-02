const areas = {
  frontend: {
    id: 'frontend',
    name: 'Frontend',
    color: 'primary',
    filterProfile: true,
    filterProjects: true,
    disabled: false
  },
  backend: {
    id: 'backend',
    name: 'Backend',
    color: 'secondary',
    filterProfile: true,
    filterProjects: true,
    disabled: false
  },
  testing: {
    id: 'testing',
    name: 'Testing',
    color: 'gray',
    filterProfile: true,
    filterProjects: false,
    disabled: false
  },
  design: {
    id: 'design',
    name: 'Design',
    color: 'warning',
    filterProfile: true,
    filterProjects: false,
    disabled: false
  },
  management: {
    id: 'management',
    name: 'Management',
    color: 'error',
    filterProfile: true,
    filterProjects: false,
    disabled: false
  },
  // --------- NO FILTERABLE
  fullstack: {
    id: 'fullstack',
    name: 'FullStack',
    color: 'success',
    filterProfile: false,
    filterProjects: true
  },
  development: {
    id: 'development',
    name: 'Development',
    color: 'gray',
    filterProfile: false,
    filterProjects: false
  }
};

export { areas };
