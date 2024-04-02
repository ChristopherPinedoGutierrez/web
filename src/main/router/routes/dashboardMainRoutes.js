import { ProfilePage } from '../../../modules/pages/profilePage';
import { ProjectsPage } from '../../../modules/pages/projectsPage';
import { CurriculumPage } from '../../../modules/pages/curriculumPage';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import ArticleIcon from '@mui/icons-material/Article';

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
  {
    route: '/curriculum',
    component: <CurriculumPage />,
    label: 'Curriculum',
    icon: <ArticleIcon />
  }
];

export { dashboardMainRoutes };
