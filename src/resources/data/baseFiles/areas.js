import { v4 as uuidV4 } from 'uuid';

const areas = {
  frontend: {
    id: uuidV4(),
    name: 'Frontend',
    color: 'primary',
    filterable: true,
    disabled: false
  },
  backend: {
    id: uuidV4(),
    name: 'Backend',
    color: 'secondary',
    filterable: true,
    disabled: false
  },
  testing: {
    id: uuidV4(),
    name: 'Testing',
    color: 'gray',
    filterable: true,
    disabled: false
  },
  design: {
    id: uuidV4(),
    name: 'Design',
    color: 'warning',
    filterable: true,
    disabled: false
  },
  management: {
    id: uuidV4(),
    name: 'Management',
    color: 'error',
    filterable: true,
    disabled: false
  },
  // --------- NO FILTERABLE
  fullstack: {
    id: uuidV4(),
    name: 'FullStack',
    color: 'success',
    filterable: false
  },
  development: {
    id: uuidV4(),
    name: 'Development',
    color: 'gray',
    filterable: false
  }
};

export { areas };
