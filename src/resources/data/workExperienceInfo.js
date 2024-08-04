/* eslint-disable no-unused-vars */
import { aptitudes as ap } from './baseFiles/aptitudes';
import { softSkills as ss } from './baseFiles/softSkills';

const workExperienceInfo = [
  {
    company: 'Autonomo',
    role: 'Desarrollador fullstack - Freelance',
    period: {
      startDate: 'Abr/2024',
      endDate: '-',
      duration: '-',
      state: 'En curso'
    },
    jobFunctions: 'Desarrollo de aplicaciones web usando PAAS(Firebase) en el backend y React en el frontend.',
    softSkills: [ss.ssAdapt, ss.ssCreaThink, ss.ssResProb, ss.ssResil],
    aptitudes: [ap.mgtProj, ap.devFunc, ap.devOop, ap.desUX],
    aptitudesCount: 20
  },
  {
    company: 'All The Keys Of The Marketing SAC',
    role: 'Auxiliar administrativo de operaciones',
    period: {
      startDate: 'Nov/2021',
      endDate: 'Mar/2024',
      duration: '2 años 5 meses',
      state: 'Finalizado'
    },
    jobFunctions:
      'Gestión y control de procesos e información cumpliendo la función de vinculo entre mi sede y las areas de recursos humanos, producción y procesos.',
    softSkills: [ss.ssLead, ss.ssCritThink, ss.ssEthi, ss.ssResConf, ss.ssTeamW, ss.ssProac, ss.ssResil],
    aptitudes: [
      ap.mgtProj,
      ap.mgtAdms,
      ap.mgtDocs,
      ap.mgtTeam,
      ap.devFunc,
      ap.desGraph,
      ap.hrSche,
      ap.hrAtten,
      ap.fiBonus,
      ap.whMgt,
      ap.whInv
    ],
    aptitudesCount: 40
  }
];

export { workExperienceInfo };
