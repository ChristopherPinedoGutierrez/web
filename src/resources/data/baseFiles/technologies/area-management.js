import { v4 as uuidV4 } from 'uuid';
import { SiJirasoftware, SiNotion } from 'react-icons/si';
import { areas } from '../areas';
import { states, types } from './constants';

export const managementTechnologies = {
  jira: {
    id: uuidV4(),
    name: 'Jira',
    area: areas.management.name,
    group: types.prjMgt.name,
    type: types.prjMgt,
    typeDef: types.prjMgt.types.agile,
    icon: <SiJirasoftware />,
    color: '#2580f7',
    colorLayer1: '#2580f7',
    colorLayer2: 'grey.200',
    ecosystem: ['management'],
    state: states.conocidas
  },
  notion: {
    id: uuidV4(),
    name: 'Notion',
    area: areas.management.name,
    group: types.app.name,
    type: types.app,
    typeDef: types.app.types.management,
    icon: <SiNotion />,
    color: 'grey.200',
    colorLayer1: 'grey.200',
    colorLayer2: 'grey.800',
    ecosystem: ['management'],
    state: states.conocidas
  }
};
