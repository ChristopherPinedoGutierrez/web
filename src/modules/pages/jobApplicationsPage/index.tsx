import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Tooltip,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  Container,
  Drawer
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { jobApplicationsEncrypted } from '../../../resources/data/jobApplicationsEncrypted';
import { JobApplication, decryptJobApplications } from '../../../library/common/utils/vaultCrypto';
import { PinUnlockDialog } from './components/PinUnlockDialog';
import { JobApplicationsList } from './components/JobApplicationsList';
import { JobApplicationDetail } from './components/JobApplicationDetail';
import { JobTechContextDrawer } from './components/JobTechContextDrawer';

const SESSION_STORAGE_KEY = 'VAULT_PIN_SESSION';
const leftDrawerWidth = 320;
const rightDrawerWidth = 350;

export function JobApplicationsPage() {
  const [applications, setApplications] = useState<JobApplication[] | null>(null);
  const [selectedApp, setSelectedApp] = useState<JobApplication | null>(null);
  const [selectedTechId, setSelectedTechId] = useState<string>('');
  
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
  const isDark = theme.palette.mode === 'dark';
  const background = isDark ? (theme as any).custom?.svgBackgroundDark : (theme as any).custom?.svgBackgroundLight;

  // Control de apertura de drawers persistentes
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(false);

  // Restaurar sesión si el PIN fue ingresado previamente
  useEffect(() => {
    const savedPin = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (savedPin) {
      decryptJobApplications(jobApplicationsEncrypted, savedPin).then(result => {
        if (result && Array.isArray(result) && result.length > 0) {
          setApplications(result);
          setSelectedApp(result[0]);
          if (result[0]?.technologies?.[0]) {
            setSelectedTechId(result[0].technologies[0].id);
          }
        } else {
          sessionStorage.removeItem(SESSION_STORAGE_KEY);
        }
      });
    }
  }, []);

  // En móvil iniciamos con los drawers cerrados
  useEffect(() => {
    if (!matchesMD) {
      setLeftOpen(false);
      setRightOpen(false);
    } else {
      setLeftOpen(true);
    }
  }, [matchesMD]);

  const handleUnlock = (unlockedApps: JobApplication[], pin: string) => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, pin);
    setApplications(unlockedApps);
    setSelectedApp(unlockedApps[0] || null);
    if (unlockedApps[0]?.technologies?.[0]) {
      setSelectedTechId(unlockedApps[0].technologies[0].id);
    }
  };

  const handleLock = () => {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    setApplications(null);
    setSelectedApp(null);
  };

  const handleSelectApp = (app: JobApplication) => {
    setSelectedApp(app);
    if (app.technologies && app.technologies[0]) {
      setSelectedTechId(app.technologies[0].id);
    }
    if (!matchesMD) {
      setLeftOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Interacción al hacer clic en un chip de tecnología dentro de la oferta
  const handleToggleTech = (techId: string) => {
    if (!rightOpen) {
      setSelectedTechId(techId);
      setRightOpen(true);
    } else if (selectedTechId === techId) {
      setRightOpen(false);
    } else {
      setSelectedTechId(techId);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 74px)', md: 'calc(100vh - 76px)' },
        mt: { xs: '56px', sm: '74px', md: '76px' },
        backgroundImage: background,
        justifyContent: 'center',
        width: '100%'
      }}
    >
      <Container
        maxWidth="xxl"
        disableGutters
        sx={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          width: '100%',
          position: 'relative'
        }}
      >
        {!applications ? (
          /* Pantalla de Desbloqueo por PIN */
          <Box sx={{ py: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
            <PinUnlockDialog
              encryptedPayload={jobApplicationsEncrypted}
              onUnlock={handleUnlock}
            />
          </Box>
        ) : (
          /* Layout con Persistent Drawers nativos acotados al contenedor */
          <Box sx={{ display: 'flex', width: '100%', minHeight: '100%', position: 'relative' }}>
            
            {/* ========================================================= */}
            {/* 1. LEFT DRAWER (LISTA DE POSTULACIONES)                   */}
            {/* ========================================================= */}
            <Drawer
              variant={matchesMD ? 'persistent' : 'temporary'}
              anchor="left"
              open={leftOpen}
              onClose={() => setLeftOpen(false)}
              ModalProps={{ keepMounted: true }}
              sx={{
                width: leftOpen ? leftDrawerWidth : 0,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: leftDrawerWidth,
                  boxSizing: 'border-box',
                  backgroundColor: isDark ? '#0B0F19' : theme.palette.background.paper,
                  borderRight: '1px solid ' + theme.palette.divider,
                  position: matchesMD ? 'sticky' : 'fixed',
                  top: 0,
                  height: '100vh',
                  zIndex: matchesMD ? 1200 : 1300,
                  display: 'flex',
                  flexDirection: 'column'
                }
              }}
            >
              <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                <JobApplicationsList
                  applications={applications}
                  selectedId={selectedApp?.id || ''}
                  onSelect={handleSelectApp}
                />
              </Box>
            </Drawer>

            {/* ========================================================= */}
            {/* 2. ÁREA CENTRAL (APPBAR STICKY + MAIN CONTENT FLUIDO)     */}
            {/* ========================================================= */}
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
                width: matchesMD
                  ? `calc(100% - ${(leftOpen ? leftDrawerWidth : 0) + (rightOpen ? rightDrawerWidth : 0)}px)`
                  : '100%',
                transition: theme.transitions.create(['margin', 'width'], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen
                })
              }}
            >
              {/* AppBar Sticky alineada con la altura de navegación de 64px */}
              <AppBar
                position="sticky"
                elevation={0}
                sx={{
                  top: 0,
                  zIndex: 1199,
                  backgroundColor: isDark ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  backgroundImage: 'none',
                  borderBottom: '1px solid ' + theme.palette.divider
                }}
              >
                <Toolbar
                  sx={{
                    minHeight: '64px !important',
                    px: { xs: 2, md: 3 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  {/* Extremo Izquierdo: Botón Toggle del Drawer de Postulaciones */}
                  <Tooltip title={leftOpen ? 'Ocultar postulaciones' : 'Mostrar postulaciones'}>
                    <IconButton
                      color="inherit"
                      onClick={() => setLeftOpen(!leftOpen)}
                      edge="start"
                      sx={{
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1.5,
                        color: 'text.primary'
                      }}
                    >
                      {leftOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                  </Tooltip>

                  {/* Centro: Título limpio + Botón de Bloqueo */}
                  <Stack direction="row" alignItems="center" spacing={1.5}>
                    <Typography variant="h6" noWrap component="div" sx={{ fontWeight: '700', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                      Hub de Postulaciones
                    </Typography>

                    <Tooltip title="Bloquear bóveda y borrar sesión">
                      <IconButton
                        onClick={handleLock}
                        size="small"
                        color="inherit"
                        sx={{
                          border: '1px solid',
                          borderColor: 'divider',
                          borderRadius: 1.5,
                          '&:hover': { color: 'error.main', borderColor: 'error.main' }
                        }}
                      >
                        <LockOutlinedIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Stack>

                  {/* Extremo Derecho: Botón Toggle del Drawer de Glosario */}
                  <Tooltip title={rightOpen ? 'Ocultar glosario' : 'Mostrar glosario'}>
                    <IconButton
                      onClick={() => setRightOpen(!rightOpen)}
                      color={rightOpen ? 'primary' : 'inherit'}
                      edge="end"
                      sx={{
                        border: '1px solid',
                        borderColor: rightOpen ? 'primary.main' : 'divider',
                        borderRadius: 1.5
                      }}
                    >
                      {rightOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                  </Tooltip>
                </Toolbar>
              </AppBar>

              {/* Contenedor Principal Acotado con Scroll Único */}
              <Box
                sx={{
                  py: { xs: 2.5, md: 3.5 },
                  px: { xs: 2, md: 3 },
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {selectedApp ? (
                  <JobApplicationDetail
                    application={selectedApp}
                    activeTechId={selectedTechId}
                    isRightDrawerOpen={rightOpen}
                    onToggleTech={handleToggleTech}
                  />
                ) : (
                  <Box sx={{ py: 10, textAlign: 'center', color: 'text.secondary' }}>
                    <Typography variant="body1">Selecciona una postulación para consultar sus notas.</Typography>
                  </Box>
                )}
              </Box>
            </Box>

            {/* ========================================================= */}
            {/* 3. RIGHT DRAWER (CHEAT SHEET & GLOSARIO)                  */}
            {/* ========================================================= */}
            {selectedApp && (
              <Drawer
                variant={matchesMD ? 'persistent' : 'temporary'}
                anchor="right"
                open={rightOpen}
                onClose={() => setRightOpen(false)}
                ModalProps={{ keepMounted: true }}
                sx={{
                  width: rightOpen ? rightDrawerWidth : 0,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                    width: rightDrawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: isDark ? '#0B0F19' : theme.palette.background.paper,
                    borderLeft: '1px solid ' + theme.palette.divider,
                    position: matchesMD ? 'sticky' : 'fixed',
                    top: 0,
                    height: '100vh',
                    zIndex: matchesMD ? 1200 : 1300,
                    display: 'flex',
                    flexDirection: 'column'
                  }
                }}
              >
                <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                  <JobTechContextDrawer
                    application={selectedApp}
                    selectedTechId={selectedTechId}
                    onSelectTech={(id) => setSelectedTechId(id)}
                  />
                </Box>
              </Drawer>
            )}
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default JobApplicationsPage;
