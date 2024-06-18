/* eslint-disable no-unused-vars */
import { aptitudes } from './baseFiles/aptitudes';
import { technologies } from './baseFiles/technologies';

const aptMgt = aptitudes.management;
const aptDev = aptitudes.development;
const aptDes = aptitudes.design;
const aptSkl = aptitudes.softSkills;

const tecMgt = technologies.management;
const tecDev = technologies.development;
const tecDes = technologies.design;

const workExperienceInfo = [
  {
    company: 'All The Keys Of The Marketing SAC',
    role: 'Auxiliar administrativo de operaciones',
    period: {
      startDate: 'Nov/2021',
      inProgress: false,
      endDate: 'Mar/2024',
      duration: '2 años 5 meses'
    },
    jobFunctions:
      'Gestión y control de procesos e información cumpliendo la función de vinculo entre mi sede y las areas de recursos humanos, producción y procesos. Gestión de planillas, procesos y producción.',
    aptitudes: {
      management: [
        aptMgt.gestionProyectos.name,
        aptMgt.gestionAdministrativa.name,
        aptMgt.rhSoporte.name,
        aptMgt.gestionEquiposGrandes.name
      ],
      development: [],
      design: [],
      softSkills: [
        aptSkl.adaptabilidad.name,
        aptSkl.etica.name,
        aptSkl.liderazgo.name,
        aptSkl.pensaCritico.name,
        aptSkl.proactividad.name,
        aptSkl.resConflictos.name
      ]
    },
    technologies: {
      management: [],
      development: [],
      design: []
    },
    relatedProjects: []
  }
];

export { workExperienceInfo };
