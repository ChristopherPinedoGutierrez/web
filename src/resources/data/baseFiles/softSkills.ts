import { v4 as uuidV4 } from 'uuid';

const types = {
  ss: {
    name: 'Soft Skills',
    value: 5
  }
};

const softSkills = {
  ssLead: {
    id: uuidV4(),
    name: 'Liderazgo',
    type: types.ss
  },
  ssAdapt: {
    id: uuidV4(),
    name: 'Adaptabilidad',
    type: types.ss
  },
  ssCritThink: {
    id: uuidV4(),
    name: 'Pensamiento crítico',
    type: types.ss
  },
  ssCreaThink: {
    id: uuidV4(),
    name: 'Pensamiento creativo',
    type: types.ss
  },
  ssEthi: {
    id: uuidV4(),
    name: 'Ética laboral',
    type: types.ss
  },
  ssResProb: {
    id: uuidV4(),
    name: 'Resolución de problemas',
    type: types.ss
  },
  ssResConf: {
    id: uuidV4(),
    name: 'Resolución de conflictos',
    type: types.ss
  },
  ssTeamW: {
    id: uuidV4(),
    name: 'Trabajo en equipo',
    type: types.ss
  },
  ssCommu: {
    id: uuidV4(),
    name: 'Comunicación asertiva',
    type: types.ss
  },
  ssProac: {
    id: uuidV4(),
    name: 'Proactividad',
    type: types.ss
  },
  ssResil: {
    id: uuidV4(),
    name: 'Resiliencia',
    type: types.ss
  }
};

export { softSkills };
