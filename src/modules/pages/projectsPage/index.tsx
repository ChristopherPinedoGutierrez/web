import React from 'react';
import { Box, Container, useTheme } from '@mui/material';
import { SectionDashboardProjects } from './sections/SectionDashboardProjects';
import { useParams } from 'react-router-dom';

function ProjectsPage() {
  const { id } = useParams<{ id?: string }>();
  const theme = useTheme();
  const background = theme.palette.mode === 'light' ? (theme as any).custom.svgBackgroundLight : (theme as any).custom.svgBackgroundDark;

  return (
    <Box sx={{ display: 'flex', mt: { xs: '56px', sm: '64px' }, minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' }, backgroundImage: background, justifyContent: 'center' }}>
      <Container maxWidth="xxl" disableGutters sx={{ display: 'flex', flexGrow: 1 }}>
        <SectionDashboardProjects selectedId={id} />
      </Container>
    </Box>
  );
}

export { ProjectsPage };
