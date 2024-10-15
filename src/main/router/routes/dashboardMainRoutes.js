// import { lazy } from 'react';
// const ProfilePage = lazy(() => import('../../../modules/pages/profilePage'));
// const ProjectsPage = lazy(() => import('../../../modules/pages/projectsPage'));
// const WorkExperiencePage = lazy(() => import('../../../modules/pages/workExperiencePage'));

import { ProfilePage } from '../../../modules/pages/profilePage';
import { ProjectsPage } from '../../../modules/pages/projectsPage';
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
    route: '/projects/:id',
    component: <ProjectsPage />,
    label: 'Proyectos',
    icon: <BackupTableIcon />
  },
  {
    route: '/work-experience',
    component: <WorkExperiencePage />,
    label: 'Experiencia',
    icon: <WorkIcon />
  }
];

export { dashboardMainRoutes };
