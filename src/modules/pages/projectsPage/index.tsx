import React from 'react';
import { Box } from '@mui/material';
import { SectionDashboardProjects } from './sections/SectionDashboardProjects';
import { useParams } from 'react-router-dom';

function ProjectsPage() {
  const { id } = useParams<{ id?: string }>();

  return (
    <Box sx={{ display: 'flex', mt: '72px', minHeight: 'calc(100vh - 72px)' }}>
      <SectionDashboardProjects selectedId={id} />
    </Box>
  );
}

export { ProjectsPage };
