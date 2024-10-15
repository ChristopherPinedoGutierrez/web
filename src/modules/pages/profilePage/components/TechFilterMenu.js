/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Stack,
  Switch,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PendingIcon from '@mui/icons-material/Pending';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ListRadioButtonsGroupTechAreas } from './ListRadioButtonsGroupTechAreas';
import { useState } from 'react';
import { ListSwitchGroupTech } from './ListSwitchGroupTech';

// function ListSwitchGroupTech({ checkedObj, handleCheck, disablePendientes }) {
//   return (
//     <List sx={{ backgroundColor: 'background.paper' }}>
//       <ListItem>
//         <ListItemIcon>
//           <SchoolIcon />
//         </ListItemIcon>
//         <ListItemText>Conocidas</ListItemText>
//         <Switch edge="end" checked={checkedObj.conocida} onChange={handleCheck('conocida')} />
//       </ListItem>
//       <ListItem>
//         <ListItemIcon>
//           <LocalLibraryIcon />
//         </ListItemIcon>
//         <ListItemText>Aprendiendo</ListItemText>
//         <Switch edge="end" checked={checkedObj.aprendiendo} onChange={handleCheck('aprendiendo')} />
//       </ListItem>
//       <ListItem disabled={disablePendientes}>
//         <ListItemIcon>
//           <PendingIcon />
//         </ListItemIcon>
//         <ListItemText>Pendientes</ListItemText>
//         <Switch
//           disabled={disablePendientes}
//           edge="end"
//           checked={checkedObj.pendiente}
//           onChange={handleCheck('pendiente')}
//         />
//       </ListItem>
//     </List>
//   );
// }

function TechFilterMenu({ area, setArea, checkedObj, handleCheck, disablePendientes }) {
  const [openSections, setOpenSections] = useState({
    area: false,
    estado: false
  });

  const handleCollapseSections = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };
  return (
    <Box sx={{ height: 1, borderRadius: 2, overflow: 'auto', backgroundColor: 'background.paper' }}>
      <Stack>
        <Box sx={{ p: 2, backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
          <Typography variant="h5">Tecnologías</Typography>
        </Box>
        <Box>
          <ListItemButton onClick={() => handleCollapseSections('area')}>
            <ListItemText primary="Area" />
            {openSections.area ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={openSections.area}>
            <ListRadioButtonsGroupTechAreas area={area} setArea={setArea} />
          </Collapse>
          <Divider />
          <ListItemButton onClick={() => handleCollapseSections('estado')}>
            <ListItemText primary="Estado" />
            {openSections.estado ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={openSections.estado}>
            <ListSwitchGroupTech
              checkedObj={checkedObj}
              handleCheck={handleCheck}
              disablePendientes={disablePendientes}
            />
          </Collapse>
          <Divider />
          <List>
            <ListItem></ListItem>
          </List>
        </Box>
      </Stack>
    </Box>
  );
}

export { TechFilterMenu };
