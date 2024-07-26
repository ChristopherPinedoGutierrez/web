/* eslint-disable react/prop-types */
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { areas } from '../../../../resources/data/baseFiles/areas';
import { FormControl } from '@mui/material';

function RadioButtonsGroupTechAreas({ area, setArea }) {
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
          (ele) =>
            ele.filterable && (
              <FormControlLabel
                key={ele.id}
                value={ele.name}
                control={<Radio />}
                label={ele.name}
                disabled={ele.disabled}
                onChange={(e) => {
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
