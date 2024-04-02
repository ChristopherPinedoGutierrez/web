import { Navigate, Route, Routes } from 'react-router-dom';
import { dashboardMainRoutes } from './routes/dashboardMainRoutes';
import { DashboardMain } from '../../modules/dashboardMain';

function Router() {
  return (
    <Routes>
      <Route path="*" element={'<PageNotFound/>'} />
      <Route path="/" element={<DashboardMain />}>
        <Route index element={<Navigate to="/profile" />} />
        {dashboardMainRoutes.map((item, i) => (
          <Route path={item.route} element={item.component} key={i} />
        ))}
      </Route>
    </Routes>
  );
}

export { Router };
