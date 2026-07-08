/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { SectionKnowledge } from './sections/SectionKnowledge';
import { SectionIntro } from './sections/SectionIntro';
import { BasePageLayout } from '../../layouts/BasePageLayout';
import { Grid } from '@mui/material';

function ProfilePage() {
  return (
    <BasePageLayout>
      {/* Sección: Intro */}
      <Grid item xs={12}>
        <SectionIntro />
      </Grid>
      {/* Sección: Conocimiento */}
      <Grid item xs={12}>
        <SectionKnowledge />
      </Grid>
    </BasePageLayout>
  );
}

export { ProfilePage };
