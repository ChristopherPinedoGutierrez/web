/* eslint-disable no-unused-vars */
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { RadioButtonsGroupTechAreas } from '../components/RadioButtonsGroupTechAreas';
import { GridGroupTechAreas } from '../components/GridGroupTechAreas';
import { ClippedDrawerTech } from '../components/ClippedDrawerTech';
import { TechFilterMenu } from '../components/TechFilterMenu';

function SectionKnowledge() {
  const [currentArea, setCurrentArea] = useState('Frontend');

  useEffect(() => {
    console.log(currentArea);
  }, [currentArea]);

  return (
    <Grid container spacing={2}>
      {/* <Stack
        spacing={2}
        mb={4}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={'center'}
        gap={{ xs: 0, md: 8 }}
      >
        <Typography variant="h4">Tecnologías</Typography>
        <RadioButtonsGroupTechAreas area={currentArea} setArea={setCurrentArea} />
      </Stack> */}
      <Grid item md={4} lg={2}>
        <TechFilterMenu area={currentArea} setArea={setCurrentArea} />
      </Grid>
      <Grid item md={8} lg={10}>
        <GridGroupTechAreas area={currentArea} />
      </Grid>
    </Grid>
  );
}

export { SectionKnowledge };
