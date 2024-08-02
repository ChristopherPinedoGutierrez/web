/* eslint-disable no-unused-vars */
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { GridGroupTechAreas } from '../components/GridGroupTechAreas';
import { TechFilterMenu } from '../components/TechFilterMenu';
import { technologies } from '../../../../resources/data/baseFiles/technologies';

function SectionKnowledge() {
  const [currentArea, setCurrentArea] = useState('Frontend');
  const [checked, setChecked] = useState({
    conocida: true,
    aprendiendo: true,
    pendiente: false
  });
  const handleCheck = (key) => (event) => {
    setChecked({ ...checked, [key]: event.target.checked });
  };

  const filteredTechnologies = Object.keys(technologies).reduce((acc, key) => {
    if (checked[technologies[key].state]) {
      acc[key] = technologies[key];
    }
    return acc;
  }, {});

  return (
    <Grid container spacing={{ xs: 2, md: 4 }}>
      <Grid item xs={12} md={4} lg={3}>
        <TechFilterMenu
          area={currentArea}
          setArea={setCurrentArea}
          checkedObj={checked}
          handleCheck={handleCheck}
          disablePendientes={false}
        />
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <GridGroupTechAreas area={currentArea} technologies={filteredTechnologies} />
      </Grid>
    </Grid>
  );
}

export { SectionKnowledge };
