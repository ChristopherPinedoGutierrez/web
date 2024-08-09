import { v4 as uuidV4 } from 'uuid';

const types = {
  mgt: {
    name: 'Management',
    value: 10
  },
  dev: {
    name: 'Development',
    value: 10
  },
  des: {
    name: 'Design',
    value: 10
  },
  hr: {
    name: 'Human Resources',
    value: 10
  },
  fi: {
    name: 'Finance',
    value: 10
  },
  wh: {
    name: 'Warehouse',
    value: 10
  }
};

const aptitudes = {
  mgtProj: {
    id: uuidV4(),
    name: 'Gestión de proyectos',
    type: types.mgt
  },
  mgtProd: {
    id: uuidV4(),
    name: 'Gestión de producto',
    type: types.mgt
  },
  mgtAdms: {
    id: uuidV4(),
    name: 'Gestión de administrativa',
    type: types.mgt
  },
  mgtDocs: {
    id: uuidV4(),
    name: 'Gestión de documentos',
    type: types.mgt
  },
  mgtTeam: {
    id: uuidV4(),
    name: 'Gestión de equipos',
    type: types.mgt
  },
  devFunc: {
    id: uuidV4(),
    name: 'Metodología funcional',
    type: types.dev
  },
  devOop: {
    id: uuidV4(),
    name: 'Metodología orientada a objetos',
    type: types.dev
  },
  devEvent: {
    id: uuidV4(),
    name: 'Metodología orientada a eventos',
    type: types.dev
  },
  desGraph: {
    id: uuidV4(),
    name: 'Diseño gráfico',
    type: types.des
  },
  desUI: {
    id: uuidV4(),
    name: 'Diseño UI',
    type: types.des
  },
  desUX: {
    id: uuidV4(),
    name: 'Diseño UX',
    type: types.des
  },
  hrSche: {
    id: uuidV4(),
    name: 'Control de horarios',
    type: types.hr
  },
  hrAtten: {
    id: uuidV4(),
    name: 'Control de asistencia',
    type: types.hr
  },
  fiPayroll: {
    id: uuidV4(),
    name: 'Control de nómina salarial',
    type: types.fi
  },
  fiBonus: {
    id: uuidV4(),
    name: 'Control de bonificaciones',
    type: types.fi
  },
  whMgt: {
    id: uuidV4(),
    name: 'Administración de almacén',
    type: types.wh
  },
  whInv: {
    id: uuidV4(),
    name: 'Control de inventario',
    type: types.wh
  }
};

export { aptitudes, types };
