/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Stack,
  SvgIcon,
  Toolbar,
  Typography,
  useTheme
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { handleDescargarCV } from '../utils/functionUtils';
import pdfFile from '../../../resources/data/curriculum/cv.pdf';
import { dashboardMainRoutes } from '../../../main/router/routes/dashboardMainRoutes';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// import { personalInfo } from '../../../resources/data/personalInfo';
import { BiCodeAlt } from 'react-icons/bi';
import { personalInfo } from '../../../resources/data/personalInfo';
import { ToggleThemeSwitch } from './ToggleThemeSwitch';

function DesktopAppBar({ children }) {
  const location = useLocation();
  const theme = useTheme();
  const background = theme.palette.mode === 'light' ? theme.custom.svgBackgroundLight : theme.custom.svgBackgroundDark;

  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'background.default', paddingY: 2 }}>
        <Container maxWidth="xxl">
          <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
            <Stack spacing={5} direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              {dashboardMainRoutes.map((item, i) => (
                <Button
                  key={i}
                  startIcon={item.icon}
                  component={RouterLink}
                  to={item.route}
                  sx={location.pathname !== item.route && { px: 2 }}
                  variant={location.pathname === item.route ? 'outlined' : 'text'}
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
        {/* <Toolbar sx={{ backgroundColor: 'background.default', padding: 0 }}>
        </Toolbar> */}
      </AppBar>
      <Box sx={{ backgroundImage: background, minHeight: '90vh' }}>{children}</Box>
    </Box>
  );
}

export { DesktopAppBar };
