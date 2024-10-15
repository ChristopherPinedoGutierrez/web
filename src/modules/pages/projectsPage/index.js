/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Grid } from '@mui/material';
import { BasePageLayout } from '../../layouts/BasePageLayout';
import { SectionDashboardProjects } from './sections/SectionDashboardProjects';
import { useParams } from 'react-router-dom';

function ProjectsPage() {
  const { id } = useParams();

  return (
    <BasePageLayout>
      {/* Sección: DashboardProjects */}
      <Grid item xs={12}>
        <SectionDashboardProjects selectedId={id} />
      </Grid>
    </BasePageLayout>
  );
}

export { ProjectsPage };
