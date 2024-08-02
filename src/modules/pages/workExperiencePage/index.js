/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Card, CardContent, CardHeader, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { workExperienceInfo } from '../../../resources/data/workExperienceInfo';
import { BasePageLayout } from '../../layouts/BasePageLayout';
import { SectionDashboardExperience } from './sections/SectionDashboardExperience';
// import { renderChips } from '../../../library/common/utils/jsxUtils';
// import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';

function WorkExperiencePage() {
  return (
    <BasePageLayout>
      <Grid item xs={12}>
        <SectionDashboardExperience />
      </Grid>
    </BasePageLayout>
  );
}

export { WorkExperiencePage };
