import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { RadioButtonsGroupTechAreas } from '../../../library/common/components/RadioButtonsGroupTechAreas';
import { GridGroupTechAreas } from '../../../library/common/components/GridGroupTechAreas';

function SectionKnowledge() {
  const [currentArea, setCurrentArea] = useState('Frontend');

  useEffect(() => {
    console.log(currentArea);
  }, [currentArea]);

  return (
    <>
      <Stack spacing={2} mb={4}>
        <Typography align="center" variant="h4">
          Tecnologías
        </Typography>
        <RadioButtonsGroupTechAreas area={currentArea} setArea={setCurrentArea} />
      </Stack>
      <GridGroupTechAreas area={currentArea} />
    </>
  );
}

export { SectionKnowledge };
