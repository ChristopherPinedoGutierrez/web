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
  useMediaQuery,
  Tooltip
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CategoryIcon from '@mui/icons-material/Category';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CodeIcon from '@mui/icons-material/Code';

import { useState } from 'react';
import { useEffect } from 'react';

const sectionIcons = {
  Tipos: <CategoryIcon />,
  Estados: <AutorenewIcon />,
  Tecnologías: <CodeIcon />
};

function DrawerListFilters({ filters, handleFilters, handleToggleAllFilters, isMini = false, onOpenDrawer = undefined }) {
  const theme = useTheme();
  const [openSections, setOpenSections] = useState({});

  useEffect(() => {
    if (isMini) {
      setOpenSections({});
    }
  }, [isMini]);

  const handleCollapseSections = (section) => {
    if (isMini) {
      if (onOpenDrawer) onOpenDrawer();
      setOpenSections({ [section]: true });
    } else {
      setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    }
  };

  return (
    <Box>
      {Object.entries(filters).map(([sectionKey, sectionValue]) => {
        const allChecked = Object.values(sectionValue).every((item) => item.active);
        const someChecked = Object.values(sectionValue).some((item) => item.active);
        return (
          <List key={sectionKey}>
            <Tooltip title={isMini ? sectionKey : ""} placement="right" arrow disableHoverListener={!isMini}>
              <ListItemButton onClick={() => handleCollapseSections(sectionKey)} sx={{ px: 3, justifyContent: isMini ? 'center' : 'initial' }}>
                <ListItemIcon sx={{ minWidth: 0, mr: isMini ? 0 : 2, justifyContent: 'center' }}>
                  {sectionIcons[sectionKey] || <CategoryIcon />}
                </ListItemIcon>
                {!isMini && <ListItemText primary={sectionKey} />}
                {!isMini && (openSections[sectionKey] ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
              </ListItemButton>
            </Tooltip>
            <Collapse in={!isMini && openSections[sectionKey]}>
              <List>
                {/*  */}
                <ListItem key={`${sectionKey}-all`} disablePadding>
                  <ListItemButton onClick={() => handleToggleAllFilters(sectionKey, allChecked)} sx={{ pl: '72px' }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
                      <Checkbox checked={allChecked} indeterminate={!allChecked && someChecked} />
                    </ListItemIcon>
                    <ListItemText primary="Seleccionar todas" />
                  </ListItemButton>
                </ListItem>
                {/*  */}
                {Object.entries(sectionValue).map(([key, value]) => (
                  <ListItem key={key} disablePadding>
                    <ListItemButton onClick={() => handleFilters(sectionKey, key)} sx={{ pl: '72px' }}>
                      <ListItemIcon sx={{ minWidth: 0, mr: 2 }}>
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
