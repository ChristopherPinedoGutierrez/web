import React, { ReactElement } from 'react';
import { ProfilePage } from '../../../modules/pages/profilePage';
import { ProjectsPage } from '../../../modules/pages/projectsPage';
import { WorkExperiencePage } from '../../../modules/pages/workExperiencePage';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import WorkIcon from '@mui/icons-material/Work';

export interface RouteItem {
  route: string;
  component: ReactElement;
  label: string;
  icon: ReactElement;
}

const dashboardMainRoutes: RouteItem[] = [
  {
    route: '/profile',
    component: <ProfilePage />,
    label: 'Perfil',
    icon: <AccountBoxIcon />
  },
  {
    route: '/projects', // Ruta limpia para evitar literal ':id' en el menú
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
