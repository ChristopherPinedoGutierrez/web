/* eslint-disable no-unused-vars */
import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { RadioButtonsGroupTechAreas } from '../components/RadioButtonsGroupTechAreas';
import { GridGroupTechAreas } from '../components/GridGroupTechAreas';
import { ClippedDrawerTech } from '../components/ClippedDrawerTech';

function SectionKnowledge() {
  const [currentArea, setCurrentArea] = useState('Frontend');

  useEffect(() => {
    console.log(currentArea);
  }, [currentArea]);

  return (
    <ClippedDrawerTech area={currentArea} setArea={setCurrentArea}>
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
      <GridGroupTechAreas area={currentArea} />
    </ClippedDrawerTech>
  );
}

export { SectionKnowledge };
