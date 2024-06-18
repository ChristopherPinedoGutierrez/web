/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AppBar, Box, Button, Container, CssBaseline, Stack, SvgIcon, Toolbar, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { handleDescargarCV } from '../utils/functionUtils';
import pdfFile from '../../../resources/data/curriculum/cv.pdf';
import { dashboardMainRoutes } from '../../../main/router/routes/dashboardMainRoutes';
import { Link as RouterLink } from 'react-router-dom';
// import { personalInfo } from '../../../resources/data/personalInfo';
import { BiCodeAlt } from 'react-icons/bi';
import { personalInfo } from '../../../resources/data/personalInfo';

function DesktopAppBar({ children }) {
  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ backgroundColor: 'background.default' }}>
          <Container maxWidth="xl">
            <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
              <Stack spacing={5} direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                {/* <Box
                  sx={{
                    borderRadius: 25,
                    width: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'grey.800'
                  }}
                >
                  <SvgIcon sx={{ width: 24, height: 24, color: 'grey.200' }}>
                    <BiCodeAlt />
                  </SvgIcon>
                  <Typography variant="subtitle2">CDPG</Typography>
                </Box> */}
                {/* <Typography color={'grey.800'} variant="subtitle2">
                  {personalInfo.variable.shortName.toUpperCase()}
                </Typography> */}
                {dashboardMainRoutes.map((item, i) => (
                  <Button key={i} startIcon={item.icon} component={RouterLink} to={item.route}>
                    {item.label}
                  </Button>
                ))}
              </Stack>
              <Button
                sx={{ height: 40 }}
                variant="outlined"
                endIcon={<DownloadIcon />}
                onClick={() => handleDescargarCV(pdfFile)}
              >
                Descargar CV
              </Button>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}

export { DesktopAppBar };
