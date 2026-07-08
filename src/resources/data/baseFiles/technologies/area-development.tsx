import { v4 as uuidV4 } from 'uuid';
import { SiGit, SiGithub } from 'react-icons/si';
import { areas } from '../areas';
import { states, types } from './constants';

export const developmentTechnologies = {
  git: {
    id: uuidV4(),
    name: 'Git',
    area: areas.development.name,
    group: types.vcs.name,
    type: types.vcs,
    typeDef: types.vcs.types.distrib,
    icon: <SiGit />,
    color: '#f05539',
    colorLayer1: '#f05539',
    colorLayer2: 'grey.200',
    ecosystem: ['git'],
    state: states.conocidas
  },
  github: {
    id: uuidV4(),
    name: 'Github',
    area: areas.development.name,
    group: types.vcs.name,
    type: types.vcs,
    typeDef: types.vcs.types.distrib,
    icon: <SiGithub />,
    color: 'grey.800',
    colorLayer1: 'grey.800',
    colorLayer2: 'grey.200',
    ecosystem: ['git'],
    state: states.conocidas
  }
};
