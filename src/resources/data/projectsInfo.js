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

const projectsInfo = [
  {
    date: '01/04/2024',
    name: 'Web personal, portafolio y curriculum',
    goal: 'Sitio web que me permite gestionar proyectos e informacion personal y laboral a travez del tiempo.',
    status: 'En desarrollo',
    ranking: '2',
    repository: 'https://github.com/ChristopherPinedo/WEB',
    aptitudes: {
      management: [aptMgt.gestionProyectos.name],
      development: [],
      design: [],
      softSkills: []
    },
    technologies: {
      management: [
        tecMgt.mgtAgile.name,
        tecMgt.jira.name,
        tecMgt.mgtKanaban.name,
        tecMgt.miro.name,
        tecMgt.github.name,
        tecMgt.wofCentralizado.name
      ],
      development: [tecDev.react.name, tecDev.reactJsx.name, tecDev.reactHooks.name, tecDev.reactRouter.name],
      design: [tecDes.metAtomicDesign.name]
    }
  },
  {
    date: '01/12/2023',
    name: 'Production System Control',
    goal: 'Plataforma que permite gestionar producción y asignacion del personal a cargo estructurado por sedes en tiempo real',
    status: 'En refactorización',
    ranking: '1',
    repository: 'https://github.com/ChristopherPinedo/PRODUCTION-SYSTEM',
    aptitudes: {
      management: [aptMgt.gestionProyectos.name],
      development: [aptDev.progFuncional.name],
      design: [],
      softSkills: [
        aptSkl.adaptabilidad.name,
        aptSkl.gestionTiempo.name,
        aptSkl.pensaCritico.name,
        aptSkl.resProblemas.name
      ]
    },
    technologies: {
      management: [
        tecMgt.mgtAgile.name,
        tecMgt.jira.name,
        tecMgt.mgtScrum.name,
        tecMgt.miro.name,
        tecMgt.github.name,
        tecMgt.wofCentralizado.name
      ],
      development: [
        tecDev.react.name,
        tecDev.reactJsx.name,
        tecDev.reactHooks.name,
        tecDev.reactRouter.name,
        tecDev.firebase.name,
        tecDev.fibAuth.name,
        tecDev.fibFirestore.name
      ],
      design: [tecDes.metAtomicDesign.name]
    }
  }
];

export { projectsInfo };
