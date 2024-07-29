/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  AppBar,
  Box,
  Checkbox,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

function ClippedDrawerContained({ children, title }) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        flexDirection: { xs: 'column', md: 'row' },
        borderRadius: 2,
        backgroundColor: 'background.default',
        overflow: 'auto'
      }}
    >
      <AppBar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer - 1000,
          position: 'absolute',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px'
        }}
      >
        <Toolbar sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
          <Typography variant="h5" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: { xs: 1, md: drawerWidth },
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: { xs: 1, md: drawerWidth },
            boxSizing: 'border-box',
            position: 'static'
          }
        }}
      >
        <Toolbar />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Checkbox indeterminate={true} />
              </ListItemIcon>
              <ListItemText>ele 1</ListItemText>
            </ListItemButton>
          </ListItem>
          <Box sx={{ pl: 3 }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox checked />
                </ListItemIcon>
                <ListItemText>ele 1.1</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox />
                </ListItemIcon>
                <ListItemText>ele 1.2</ListItemText>
              </ListItemButton>
            </ListItem>
          </Box>
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 4 } }}>
        {matchesMD && <Toolbar />}
        {children}
      </Box>
    </Box>
  );
}

export { ClippedDrawerContained };
