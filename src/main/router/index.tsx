import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { dashboardMainRoutes } from './routes/dashboardMainRoutes';
import { DashboardMain } from '../../modules/dashboardMain';
import { ProjectsPage } from '../../modules/pages/projectsPage';
import { JobApplicationsPage } from '../../modules/pages/jobApplicationsPage';

function Router() {
  return (
    <Routes>
      <Route path="*" element={<div>Página no encontrada</div>} />
      <Route path="/" element={<DashboardMain />}>
        <Route index element={<Navigate to="/profile" />} />
        {dashboardMainRoutes.map((item, i) => (
          <Route path={item.route} element={item.component} key={i} />
        ))}
        {/* Ruta para capturar parámetros de tecnología en proyectos */}
        <Route path="/projects/:id" element={<ProjectsPage />} />
        {/* Ruta privada para el Vault de Postulaciones Laborales */}
        <Route path="/postulaciones" element={<JobApplicationsPage />} />
      </Route>
    </Routes>
  );
}

export { Router };
