import { v4 as uuidV4 } from 'uuid';
import { SiFigma, SiMiro, SiAdobeillustrator, SiBem } from 'react-icons/si';
import { TbAtom2 } from 'react-icons/tb';
import { areas } from '../areas';
import { states, types } from './constants';

export const designTechnologies = {
  figma: {
    id: uuidV4(),
    name: 'Figma',
    area: areas.design.name,
    group: types.app.name,
    type: types.app,
    typeDef: types.app.types.design,
    icon: <SiFigma />,
    color: '#5551ff',
    colorLayer1: 'grey.200',
    colorLayer2: '#5551ff',
    ecosystem: ['javascript', 'React.js'],
    state: states.conocidas
  },
  miro: {
    id: uuidV4(),
    name: 'Miro',
    area: areas.design.name,
    group: types.app.name,
    type: types.app,
    typeDef: types.app.types.design,
    icon: <SiMiro />,
    color: '#ffdd33',
    colorLayer1: '#ffdd33',
    colorLayer2: 'grey.800',
    ecosystem: ['design'],
    state: states.conocidas
  },
  illustrator: {
    id: uuidV4(),
    name: 'Adobe Illustrator',
    area: areas.design.name,
    group: types.app.name,
    type: types.app,
    typeDef: types.app.types.design,
    icon: <SiAdobeillustrator />,
    color: '#330000',
    colorLayer1: '#ff9a00',
    colorLayer2: '#330000',
    ecosystem: ['design'],
    state: states.conocidas
  },
  bem: {
    id: uuidV4(),
    name: 'BEM',
    area: areas.design.name,
    group: types.methodology.name,
    type: types.methodology,
    typeDef: types.methodology.types.design,
    icon: <SiBem />,
    color: 'grey.200',
    colorLayer1: 'grey.200',
    colorLayer2: 'grey.800',
    ecosystem: ['design methodologies'],
    state: states.conocidas
  },
  atomicDsg: {
    id: uuidV4(),
    name: 'Atomic Design',
    area: areas.design.name,
    group: types.methodology.name,
    type: types.methodology,
    typeDef: types.methodology.types.design,
    icon: <TbAtom2 />,
    color: '#bc6719',
    colorLayer1: 'grey.800',
    colorLayer2: '#bc6719',
    ecosystem: ['design methodologies'],
    state: states.conocidas
  }
};
