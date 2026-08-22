/* eslint-disable no-unused-vars */
import { Grid } from '@mui/material';
import { useState } from 'react';
import { GridGroupTechAreas } from '../components/GridGroupTechAreas';
import { TechFilterMenu } from '../components/TechFilterMenu';
import { technologies } from '../../../../resources/data/baseFiles/technologies';

function SectionKnowledge() {
  const [checkedAreas, setCheckedAreas] = useState({
    Frontend: true,
    Backend: true,
    Mobile: true,
    Database: true,
    "DevOps & Tools": true,
    Management: true,
    Testing: true,
    Design: true,
    "Architecture & Fundamentals": true
  });
  
  const [checked, setChecked] = useState({
    conocidas: true,
    aprendiendo: true,
    pendientes: true
  });

  const handleCheckArea = (key) => () => {
    setCheckedAreas(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCheck = (key) => () => {
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleToggleAllAreas = (forceCheck) => {
    setCheckedAreas(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(k => next[k] = forceCheck);
      return next;
    });
  };

  const handleToggleAllStates = (forceCheck) => {
    setChecked(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(k => next[k] = forceCheck);
      return next;
    });
  };

  const filteredTechnologiesByState = Object.keys(technologies).reduce((acc, key) => {
    if (checked[technologies[key].state.name]) {
      acc[key] = technologies[key];
    }
    return acc;
  }, {});

  return (
    <Grid container spacing={{ xs: 2, md: 4 }} sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
      <Grid item xs={12} md="auto">
        <TechFilterMenu
          checkedAreas={checkedAreas}
          handleCheckArea={handleCheckArea}
          handleToggleAllAreas={handleToggleAllAreas}
          checkedObj={checked}
          handleCheck={handleCheck}
          handleToggleAllStates={handleToggleAllStates}
          disablePendientes={false}
          technologies={technologies}
        />
      </Grid>
      <Grid item xs={12} md sx={{ flexGrow: 1 }}>
        <GridGroupTechAreas checkedAreas={checkedAreas} technologies={filteredTechnologiesByState} checkedObj={checked} />
      </Grid>
    </Grid>
  );
}

export { SectionKnowledge };
