/* eslint-disable react/prop-types */
import { Container, Grid, Box, useTheme } from '@mui/material';
import React from 'react';

function BasePageLayout({ children }) {
  const theme = useTheme();
  const background = theme.palette.mode === 'light' ? theme.custom.svgBackgroundLight : theme.custom.svgBackgroundDark;

  return (
    <Box sx={{ backgroundImage: background, minHeight: '100vh' }}>
      <Container maxWidth="xxl">
        <Grid container spacing={4} mt={8} pb={12}>
          {children}
        </Grid>
      </Container>
    </Box>
  );
}

export { BasePageLayout };
