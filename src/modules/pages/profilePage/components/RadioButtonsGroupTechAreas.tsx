/* eslint-disable react/prop-types */
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { areas } from '../../../../resources/data/baseFiles/areas';
import { FormControl } from '@mui/material';

interface RadioButtonsGroupTechAreasProps {
  area: string;
  setArea: (area: string) => void;
}

function RadioButtonsGroupTechAreas({ area, setArea }: RadioButtonsGroupTechAreasProps) {
  return (
    <FormControl>
      <RadioGroup row defaultValue={area} name="row-radio-buttons-group" sx={{ justifyContent: 'center' }}>
        {/* <FormControlLabel
          value={'All'}
          control={<Radio />}
          label="All"
          onChange={(e) => {
            setArea(e.target.value);
          }}
        /> */}
        {Object.values(areas).map(
          (ele: any) =>
            ele.filterable && (
              <FormControlLabel
                key={ele.id}
                value={ele.name}
                control={<Radio />}
                label={ele.name}
                disabled={ele.disabled}
                onChange={(e: any) => {
                  setArea(e.target.value);
                }}
              />
            )
        )}
      </RadioGroup>
    </FormControl>
  );
}

export { RadioButtonsGroupTechAreas };
