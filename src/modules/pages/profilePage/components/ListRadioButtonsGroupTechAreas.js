/* eslint-disable react/prop-types */
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { areas } from '../../../../resources/data/baseFiles/areas';
import { List, ListItem, ListItemButton, ListSubheader } from '@mui/material';

function ListRadioButtonsGroupTechAreas({ area, setArea }) {
  return (
    <List subheader={<ListSubheader>Areas</ListSubheader>}>
      <RadioGroup value={area} name="row-radio-buttons-group">
        {/* <FormControlLabel
          value={'All'}
          control={<Radio />}
          label="All"
          onChange={(e) => {
            setArea(e.target.value);
          }}
        /> */}
        {Object.values(areas).map(
          (ele, i) =>
            ele.filterable && (
              <ListItem disablePadding key={i}>
                <ListItemButton onClick={() => setArea(ele.name)}>
                  <FormControlLabel
                    key={ele.id}
                    value={ele.name}
                    control={<Radio />}
                    label={ele.name}
                    disabled={ele.disabled}
                    // onChange={(e) => {
                    //   setArea(e.target.value);
                    // }}
                  />
                </ListItemButton>
              </ListItem>
            )
        )}
      </RadioGroup>
    </List>
  );
}

export { ListRadioButtonsGroupTechAreas };
