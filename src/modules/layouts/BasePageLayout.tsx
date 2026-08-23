/* eslint-disable react/prop-types */
import { Container, Grid, Box, useTheme } from '@mui/material';
import React from 'react';

function BasePageLayout({ children }) {
  const theme = useTheme();
  const background = theme.palette.mode === 'light' ? theme.custom.svgBackgroundLight : theme.custom.svgBackgroundDark;

  return (
    <Box sx={{ backgroundImage: background, minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' }, mt: { xs: '56px', sm: '64px' }, pt: { xs: 2, md: 3 } }}>
      <Container maxWidth="xxl">
        <Grid container spacing={{ xs: 2, md: 3 }} pb={{ xs: 2, md: 3 }}>
          {children}
        </Grid>
      </Container>
    </Box>
  );
}

export { BasePageLayout };
