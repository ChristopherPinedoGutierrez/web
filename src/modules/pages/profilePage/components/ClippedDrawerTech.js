/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import { RadioButtonsGroupTechAreas } from './RadioButtonsGroupTechAreas';

const drawerWidth = 240;

function ClippedDrawerTech({ children, area, setArea }) {
  return (
    <Box sx={{ display: 'flex', position: 'relative' }}>
      <AppBar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer - 1000,
          position: 'absolute',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px'
        }}
      >
        <Toolbar>
          <Typography variant="h5" noWrap component="div">
            Tecnologías
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'static',
            borderBottomLeftRadius: '8px'
          }
        }}
      >
        <Toolbar />
        <Box>
          <List>
            <ListItem>
              <RadioButtonsGroupTechAreas area={area} setArea={setArea} />
            </ListItem>
            <Divider />
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export { ClippedDrawerTech };
