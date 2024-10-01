/* eslint-disable react/prop-types */
import { Container, Grid } from '@mui/material';
import React from 'react';

function BasePageLayout({ children }) {
  return (
    <Container maxWidth="xxl">
      <Grid container spacing={4} mt={8} pb={12}>
        {children}
      </Grid>
    </Container>
  );
}

export { BasePageLayout };
