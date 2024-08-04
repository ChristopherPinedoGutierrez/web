/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box,
  Checkbox,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useEffect, useState } from 'react';

function DrawerListFilters({ filters, handleFilters, handleToggleAllFilters }) {
  const [openSections, setOpenSections] = useState({});

  const theme = useTheme();

  const handleCollapseSections = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <Box>
      {Object.entries(filters).map(([sectionKey, sectionValue]) => {
        const allChecked = Object.values(sectionValue).every((item) => item.active);
        const someChecked = Object.values(sectionValue).some((item) => item.active);
        return (
          <List key={sectionKey}>
            <ListItemButton onClick={() => handleCollapseSections(sectionKey)}>
              <ListItemText primary={sectionKey} />
              {openSections[sectionKey] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Collapse in={openSections[sectionKey]}>
              <List>
                {/*  */}
                <ListItem key={`${sectionKey}-all`} disablePadding>
                  <ListItemButton onClick={() => handleToggleAllFilters(sectionKey, allChecked)}>
                    <ListItemIcon>
                      <Checkbox checked={allChecked} indeterminate={!allChecked && someChecked} />
                    </ListItemIcon>
                    <ListItemText primary="Seleccionar todas" />
                  </ListItemButton>
                </ListItem>
                {/*  */}
                {Object.entries(sectionValue).map(([key, value]) => (
                  <ListItem key={key} disablePadding sx={{ ml: 3 }}>
                    <ListItemButton onClick={() => handleFilters(sectionKey, key)}>
                      <ListItemIcon>
                        <Checkbox checked={filters[sectionKey][key].active} />
                      </ListItemIcon>
                      <ListItemText primary={value.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        );
      })}
    </Box>
  );
}

export { DrawerListFilters };
