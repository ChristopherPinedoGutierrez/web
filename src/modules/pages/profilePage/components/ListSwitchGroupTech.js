/* eslint-disable react/prop-types */
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PendingIcon from '@mui/icons-material/Pending';

function ListSwitchGroupTech({ checkedObj, handleCheck, disablePendientes }) {
  return (
    <List sx={{ backgroundColor: 'background.paper' }}>
      <ListItem sx={{ p: 0 }}>
        <ListItemButton onClick={() => handleCheck('conocida')({ target: { checked: !checkedObj.conocida } })}>
          <ListItemIcon sx={{ minWidth: '3rem' }}>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText>Conocidas</ListItemText>
          <Switch edge="end" checked={checkedObj.conocida} />
        </ListItemButton>
      </ListItem>
      <ListItem sx={{ p: 0 }}>
        <ListItemButton onClick={() => handleCheck('aprendiendo')({ target: { checked: !checkedObj.aprendiendo } })}>
          <ListItemIcon sx={{ minWidth: '3rem' }}>
            <LocalLibraryIcon />
          </ListItemIcon>
          <ListItemText>Aprendiendo</ListItemText>
          <Switch edge="end" checked={checkedObj.aprendiendo} />
        </ListItemButton>
      </ListItem>
      <ListItem sx={{ p: 0 }} disabled={disablePendientes}>
        <ListItemButton onClick={() => handleCheck('pendiente')({ target: { checked: !checkedObj.pendiente } })}>
          <ListItemIcon sx={{ minWidth: '3rem' }}>
            <PendingIcon />
          </ListItemIcon>
          <ListItemText>Pendientes</ListItemText>
          <Switch disabled={disablePendientes} edge="end" checked={checkedObj.pendiente} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export { ListSwitchGroupTech };
