import { v4 as uuidV4 } from 'uuid';
import {
  SiNodedotjs,
  SiFirebase,
  SiSupabase,
  SiMysql,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiDotnet,
  SiStrapi,
  SiCsharp
} from 'react-icons/si';
import { areas } from '../areas';
import { states, types } from './constants';

export const backendTechnologies = {
  // Lenguajes
  cSharp: {
    id: uuidV4(),
    name: 'C#',
    area: areas.backend.name,
    group: types.lang.name,
    type: types.lang,
    typeDef: types.lang.types.langQuery,
    icon: <SiCsharp />,
    color: '#9078e3',
    colorLayer1: '#9078e3',
    colorLayer2: 'grey.200',
    ecosystem: ['Language'],
    state: states.aprendiendo
  },

  // Runtime
  node: {
    id: uuidV4(),
    name: 'Node.js',
    area: areas.backend.name,
    group: types.rtm.name,
    type: types.rtm,
    typeDef: types.rtm.types.rtmJsCross,
    icon: <SiNodedotjs />,
    color: '#58a149',
    colorLayer1: '#58a149',
    colorLayer2: 'grey.200',
    ecosystem: ['javascript'],
    state: states.conocidas
  },

  // Frameworks
  dotNet: {
    id: uuidV4(),
    name: '.NET',
    area: areas.backend.name,
    group: types.frw.name,
    type: types.frw,
    typeDef: types.frw.types.frwCSharp,
    icon: <SiDotnet />,
    color: '#5632d5',
    colorLayer1: '#5632d5',
    colorLayer2: 'grey.200',
    ecosystem: ['Language'],
    state: states.pendientes
  },
  strapi: {
    id: uuidV4(),
    name: 'Strapi',
    area: areas.backend.name,
    group: types.frw.name,
    type: types.frw,
    typeDef: types.frw.types.frwJs,
    icon: <SiStrapi />,
    color: '#5632d5',
    colorLayer1: 'grey.200',
    colorLayer2: '#4f4bfe',
    ecosystem: ['Framework'],
    state: states.pendientes
  },

  // Cloud/BaaS
  firebase: {
    id: uuidV4(),
    name: 'Firebase',
    area: areas.backend.name,
    group: types.cloud.name,
    type: types.cloud,
    typeDef: types.cloud.types.baas,
    icon: <SiFirebase />,
    color: '#ffcd32',
    colorLayer1: 'grey.800',
    colorLayer2: '#ffcd32',
    ecosystem: ['javascript'],
    state: states.conocidas
  },
  supabase: {
    id: uuidV4(),
    name: 'Supabase',
    area: areas.backend.name,
    group: types.cloud.name,
    type: types.cloud,
    typeDef: types.cloud.types.baas,
    icon: <SiSupabase />,
    color: '#47cf93',
    colorLayer1: 'grey.800',
    colorLayer2: '#47cf93',
    ecosystem: ['javascript'],
    state: states.pendientes
  },

  // Bases de datos
  sqlServer: {
    id: uuidV4(),
    name: 'SQL Server',
    area: areas.backend.name,
    group: types.db.name,
    type: types.db,
    typeDef: types.db.types.dbEngine,
    icon: <SiMicrosoftsqlserver />,
    color: '#ef372e',
    colorLayer1: 'grey.200',
    colorLayer2: '#ef372e',
    ecosystem: ['Database'],
    state: states.aprendiendo
  },
  mySql: {
    id: uuidV4(),
    name: 'MySQL',
    area: areas.backend.name,
    group: types.db.name,
    type: types.db,
    typeDef: types.db.types.dbEngine,
    icon: <SiMysql />,
    color: '#e48e00',
    colorLayer1: 'grey.200',
    colorLayer2: '#e48e00',
    ecosystem: ['Database'],
    state: states.pendientes
  },
  postgreSql: {
    id: uuidV4(),
    name: 'PostgreSQL',
    area: areas.backend.name,
    group: types.db.name,
    type: types.db,
    typeDef: types.db.types.dbEngine,
    icon: <SiPostgresql />,
    color: '#396c94',
    colorLayer1: 'grey.200',
    colorLayer2: '#396c94',
    ecosystem: ['Database'],
    state: states.pendientes
  }
};
