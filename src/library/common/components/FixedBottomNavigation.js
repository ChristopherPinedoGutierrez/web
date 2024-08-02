/* eslint-disable no-unused-vars */
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { dashboardMainRoutes } from '../../../main/router/routes/dashboardMainRoutes';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Button, CssBaseline, Toolbar, Typography, Box, useTheme } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import pdfFile from '../../../resources/data/curriculum/cv.pdf';
import { handleDescargarCV } from '../utils/functionUtils';
import { personalInfo } from '../../../resources/data/personalInfo';
import { ToggleThemeSwitch } from './ToggleThemeSwitch';

// eslint-disable-next-line react/prop-types
export default function FixedBottomNavigation({ children }) {
  const location = useLocation();
  const theme = useTheme();
  const background = theme.palette.mode === 'light' ? theme.custom.svgBackgroundLight : theme.custom.svgBackgroundDark;

  const [value, setValue] = React.useState(location.pathname);

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: 'background.default', alignItems: 'center' }}>
          <ToggleThemeSwitch />
          <Button size="small" variant="outlined" endIcon={<DownloadIcon />} onClick={() => handleDescargarCV(pdfFile)}>
            Descargar CV
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ backgroundColor: background, minHeight: '90vh' }}>{children}</Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {dashboardMainRoutes.map((item, i) => (
            <BottomNavigationAction
              key={i}
              label={item.label}
              value={item.route}
              icon={item.icon}
              component={RouterLink}
              to={item.route}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
}
