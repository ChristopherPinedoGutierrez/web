/* eslint-disable no-unused-vars */
import React from 'react';
import { ClippedDrawerContained } from '../../../../library/common/components/ClippedDrawerContained';
import { GridGroupExperience } from '../components/GridGroupExperience';
import { Box, Stack, Typography } from '@mui/material';

function SectionDashboardExperience() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          p: 2,
          borderRadius: 2,
          mb: { xs: 2, md: 4 }
        }}
      >
        <Typography variant="h5">Experiencia Laboral</Typography>
      </Box>
      <GridGroupExperience />
    </>
    // <ClippedDrawerContained title={'Experiencia Laboral'} filters={''} handleFilters={''} handleToggleAllFilters={''}>
    //   <GridGroupExperience />
    // </ClippedDrawerContained>
  );
}

export { SectionDashboardExperience };
