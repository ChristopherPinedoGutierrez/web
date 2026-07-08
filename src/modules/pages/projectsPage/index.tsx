import React from 'react';
import { Grid } from '@mui/material';
import { BasePageLayout } from '../../layouts/BasePageLayout';
import { SectionDashboardProjects } from './sections/SectionDashboardProjects';
import { useParams } from 'react-router-dom';

function ProjectsPage() {
  const { id } = useParams<{ id?: string }>();

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
