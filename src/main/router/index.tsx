import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { dashboardMainRoutes } from './routes/dashboardMainRoutes';
import { DashboardMain } from '../../modules/dashboardMain';
import { ProjectsPage } from '../../modules/pages/projectsPage';

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
      </Route>
    </Routes>
  );
}

export { Router };
