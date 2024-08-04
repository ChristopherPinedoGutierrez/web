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
    name: 'Pensamiento Crítico',
    type: types.ss
  },
  ssCreaThink: {
    id: uuidV4(),
    name: 'Pensamiento Creativo',
    type: types.ss
  },
  ssEthi: {
    id: uuidV4(),
    name: 'Ética laboral',
    type: types.ss
  },
  ssResProb: {
    id: uuidV4(),
    name: 'Resolución de Problemas',
    type: types.ss
  },
  ssResConf: {
    id: uuidV4(),
    name: 'Resolución de Conflictos',
    type: types.ss
  },
  ssTeamW: {
    id: uuidV4(),
    name: 'Trabajo en Equipo',
    type: types.ss
  },
  ssCommu: {
    id: uuidV4(),
    name: 'Comunicación Asertiva',
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
