/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Box,
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
  Typography
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PendingIcon from '@mui/icons-material/Pending';
import { ListRadioButtonsGroupTechAreas } from './ListRadioButtonsGroupTechAreas';

function TechFilterMenu({ area, setArea }) {
  return (
    <Box sx={{ height: 1, borderRadius: 2, overflow: 'auto', backgroundColor: 'background.paper' }}>
      <Stack>
        <Box sx={{ p: 2, backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
          <Typography variant="h5">Tecnologías</Typography>
        </Box>
        <Box>
          <ListRadioButtonsGroupTechAreas area={area} setArea={setArea} />
          <Divider />
          <List sx={{ backgroundColor: 'background.paper' }} subheader={<ListSubheader>Estado</ListSubheader>}>
            <ListItem>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText>Conocidas</ListItemText>
              <Switch
                // edge="end"
                checked={true}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocalLibraryIcon />
              </ListItemIcon>
              <ListItemText>Aprendiendo</ListItemText>
              <Switch
                // edge="end"
                checked={true}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PendingIcon />
              </ListItemIcon>
              <ListItemText>Pendientes</ListItemText>
              <Switch
                // edge="end"
                checked={true}
              />
            </ListItem>
          </List>
          <Divider />
          <ListItem></ListItem>
        </Box>
      </Stack>
    </Box>
  );
}

export { TechFilterMenu };
