import React from 'react';
import { ClippedDrawerContained } from '../components/ClippedDrawerContained';
import { GridGroupProjects } from '../components/GridGroupProjects';

function SectionDashboardProjects() {
  return (
    <ClippedDrawerContained title={'Proyectos'}>
      <GridGroupProjects />
    </ClippedDrawerContained>
  );
}

export { SectionDashboardProjects };
