import { v4 as uuidV4 } from 'uuid';
import { SiJest, SiTestinglibrary, SiVitest, SiPlaywright, SiStorybook } from 'react-icons/si';
import { areas } from '../areas';
import { states, types } from './constants';

export const testingTechnologies = {
  jest: {
    id: uuidV4(),
    name: 'Jest',
    area: areas.testing.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libTesting,
    icon: <SiJest />,
    color: '#ca451a',
    colorLayer1: '#ca451a',
    colorLayer2: 'grey.200',
    ecosystem: ['javascript'],
    state: states.conocidas
  },
  SiVitest: {
    id: uuidV4(),
    name: 'Vitest',
    area: areas.testing.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libTesting,
    icon: <SiVitest />,
    color: '#a842f6',
    colorLayer1: '#6aa108',
    colorLayer2: '#f6c928',
    ecosystem: ['javascript'],
    state: states.conocidas
  },
  reactTestingLibrary: {
    id: uuidV4(),
    name: 'React Testing Library',
    area: areas.testing.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libTesting,
    icon: <SiTestinglibrary />,
    color: '#ff4949',
    colorLayer1: '#ff4949',
    colorLayer2: 'grey.200',
    ecosystem: ['javascript', 'React.js'],
    state: states.conocidas
  },
  playwright: {
    id: uuidV4(),
    name: 'Playwright',
    area: areas.testing.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libTesting,
    icon: <SiPlaywright />,
    color: '#dc594f',
    colorLayer1: '#dc594f',
    colorLayer2: '#2EAD33',
    ecosystem: ['design'],
    state: states.aprendiendo
  },
  storybook: {
    id: uuidV4(),
    name: 'Storybook',
    area: areas.testing.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libTesting,
    icon: <SiStorybook />,
    color: '#FF4785',
    colorLayer1: 'grey.200',
    colorLayer2: '#FF4785',
    ecosystem: ['design'],
    state: states.pendientes
  }
};
