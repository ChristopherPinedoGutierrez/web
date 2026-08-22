import React from 'react';
import { Box, Container, useTheme } from '@mui/material';
import { SectionDashboardExperience } from './sections/SectionDashboardExperience';

function WorkExperiencePage() {
  const theme = useTheme();
  const background = theme.palette.mode === 'light' ? (theme as any).custom.svgBackgroundLight : (theme as any).custom.svgBackgroundDark;

  return (
    <Box sx={{ backgroundImage: background, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container maxWidth="xxl" disableGutters>
        <Box sx={{ mt: { xs: '56px', sm: '64px' }, pb: 0, display: 'flex', flexGrow: 1 }}>
          <SectionDashboardExperience />
        </Box>
      </Container>
    </Box>
  );
}

export { WorkExperiencePage };
