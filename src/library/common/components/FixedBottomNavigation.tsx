import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { dashboardMainRoutes } from '../../../main/router/routes/dashboardMainRoutes';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Button, CssBaseline, Toolbar, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import pdfFile from '../../../resources/data/curriculum/cv.pdf';
import { handleDescargarCV } from '../utils/functionUtils';
import { ToggleThemeSwitch } from './ToggleThemeSwitch';

interface FixedBottomNavigationProps {
  children?: React.ReactNode;
}

export default function FixedBottomNavigation({ children }: FixedBottomNavigationProps) {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  // Sincronizar el valor seleccionado si cambia la ruta interna
  React.useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

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
      <Box sx={{ minHeight: '100vh' }}>{children}</Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }} elevation={3}>
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
