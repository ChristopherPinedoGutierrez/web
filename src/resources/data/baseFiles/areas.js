import { v4 as uuidV4 } from 'uuid';

const areas = {
  frontend: {
    id: uuidV4(),
    name: 'Frontend',
    color: 'primary',
    filterProfile: true,
    filterProjects: true,
    disabled: false
  },
  backend: {
    id: uuidV4(),
    name: 'Backend',
    color: 'secondary',
    filterProfile: true,
    filterProjects: true,
    disabled: false
  },
  testing: {
    id: uuidV4(),
    name: 'Testing',
    color: 'gray',
    filterProfile: true,
    filterProjects: false,
    disabled: false
  },
  design: {
    id: uuidV4(),
    name: 'Design',
    color: 'warning',
    filterProfile: true,
    filterProjects: false,
    disabled: false
  },
  management: {
    id: uuidV4(),
    name: 'Management',
    color: 'error',
    filterProfile: true,
    filterProjects: false,
    disabled: false
  },
  // --------- NO FILTERABLE
  fullstack: {
    id: uuidV4(),
    name: 'FullStack',
    color: 'success',
    filterProfile: false,
    filterProjects: true
  },
  development: {
    id: uuidV4(),
    name: 'Development',
    color: 'gray',
    filterProfile: false,
    filterProjects: false
  }
};

export { areas };
