import React, { ReactNode } from 'react';
import { AppBar, Box, Button, Container, CssBaseline, Stack, Slide, useScrollTrigger } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { handleDescargarCV } from '../utils/functionUtils';
import pdfFile from '../../../resources/data/curriculum/cv.pdf';
import { dashboardMainRoutes } from '../../../main/router/routes/dashboardMainRoutes';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { ToggleThemeSwitch } from './ToggleThemeSwitch';

interface DesktopAppBarProps {
  children?: ReactNode;
}

function DesktopAppBar({ children }: DesktopAppBarProps) {
  const location = useLocation();
  // Al bajar el threshold a 20, detecta el primer movimiento de la rueda del ratón (sincronizando con el FAB).
  const trigger = useScrollTrigger({ threshold: 20 });
  const isProfile = location.pathname.startsWith('/profile');
  
  // En perfil siempre se muestra. En otras vistas, se oculta al hacer scroll down y aparece al hacer scroll up.
  const showNav = isProfile || !trigger;

  return (
    <Box>
      <CssBaseline />
      <Slide appear={false} direction="down" in={showNav}>
        <AppBar position="fixed" sx={{ backgroundColor: 'background.default', paddingY: 2, zIndex: 1300 }}>
        <Container maxWidth="xxl">
          <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
            <Stack spacing={5} direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              {dashboardMainRoutes.map((item, i) => (
                <Button
                  key={i}
                  startIcon={item.icon}
                  component={RouterLink}
                  to={item.route}
                  sx={{ px: 2 }}
                  variant={location.pathname.startsWith(item.route) ? 'contained' : 'outlined'}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
            <Stack direction={'row'} spacing={2}>
              <ToggleThemeSwitch />
              <Button
                sx={{ height: 40 }}
                variant="contained"
                endIcon={<DownloadIcon />}
                onClick={() => handleDescargarCV(pdfFile)}
              >
                Descargar CV
              </Button>
            </Stack>
          </Stack>
        </Container>
      </AppBar>
      </Slide>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>{children}</Box>
    </Box>
  );
}

export { DesktopAppBar };
