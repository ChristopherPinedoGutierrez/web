/* eslint-disable react/prop-types */
import { Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

function BasePageLayout({ children }) {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.only('xs'));
  return (
    <Container maxWidth="xl">
      <Grid container spacing={8} mt={8} pb={12} {...(matchesXS && { sx: { mt: 2, pb: 8 } })}>
        {children}
      </Grid>
    </Container>
  );
}

export { BasePageLayout };
