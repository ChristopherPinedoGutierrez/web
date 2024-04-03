import { ProfilePage } from '../../../modules/pages/profilePage';
import { ProjectsPage } from '../../../modules/pages/projectsPage';
// import { CurriculumPage } from '../../../modules/pages/curriculumPage';
import { WorkExperiencePage } from '../../../modules/pages/workExperiencePage';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BackupTableIcon from '@mui/icons-material/BackupTable';
// import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';

const dashboardMainRoutes = [
  {
    route: '/profile',
    component: <ProfilePage />,
    label: 'Perfil',
    icon: <AccountBoxIcon />
  },
  {
    route: '/projects',
    component: <ProjectsPage />,
    label: 'Proyectos',
    icon: <BackupTableIcon />
  },
  // {
  //   route: '/curriculum',
  //   component: <CurriculumPage />,
  //   label: 'Curriculum',
  //   icon: <ArticleIcon />
  // },
  {
    route: '/work-experience',
    component: <WorkExperiencePage />,
    label: 'Experiencia',
    icon: <WorkIcon />
  }
];

export { dashboardMainRoutes };
