import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Chip,
  Divider
} from '@mui/material';
import Image from 'mui-image';
import { CardItemText } from '../components/CardItemText';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FolderIcon from '@mui/icons-material/Folder';

import { personalInfo } from '../../../../resources/data/personalInfo';
import profileFace169 from '../../../../resources/images/ProfilePic-16-9.jpg';
import profileFace43 from '../../../../resources/images/ProfilePic-4-3.jpg';
import profileFace11 from '../../../../resources/images/ProfilePic-1-1.jpg';
import ReactWhatsapp from 'react-whatsapp';

interface GitHubData {
  public_repos: number;
}

function SectionIntro() {
  const theme = useTheme();
  const background = theme.palette.mode === 'light' ? theme.custom.svgBackgroundLight : theme.custom.svgBackgroundDark;
  
  // Breakpoints originales de visualización de fotos
  const matchesUpXS = useMediaQuery(theme.breakpoints.up('xs'));
  const matchesDownSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesUpSM = useMediaQuery(theme.breakpoints.up('sm'));
  const matchesDownMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesUpMD = useMediaQuery(theme.breakpoints.up('md'));
  const matchesDownLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesUpLG = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesDownXL = useMediaQuery(theme.breakpoints.down('xl'));
  const matchesUpXL = useMediaQuery(theme.breakpoints.up('xl'));

  const [githubData, setGithubData] = useState<GitHubData | null>(null);

  // Consumir datos rápidos de la API de GitHub en background
  useEffect(() => {
    fetch('https://api.github.com/users/christopherpinedogutierrez')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data: any) => {
        if (data) {
          setGithubData({
            public_repos: data.public_repos || 0
          });
        }
      })
      .catch(err => console.warn('Error fetching GitHub stats:', err));
  }, []);

  return (
    <Paper sx={{ borderRadius: 2, pt: 4 }} elevation={1}>
      <Grid container px={4} pb={4} spacing={4}>
        {/* LADO IZQUIERDO: Estructura Original de Foto Grande y Descripción */}
        <Grid item xs={12} md={6} lg={7}>
          <Card
            sx={{
              height: 1,
              display: 'flex',
              borderRadius: 2,
              flexDirection: { xs: 'column', sm: 'row', md: 'column', lg: 'row' }
            }}
            elevation={0}
          >
            {matchesUpSM && matchesDownMD && (
              <CardMedia component="img" sx={{ width: '150px' }} image={profileFace169} alt="Profile image" />
            )}
            {matchesUpLG && matchesDownXL && (
              <CardMedia component="img" sx={{ width: '200px' }} image={profileFace169} alt="Profile image" />
            )}
            {matchesUpXL && (
              <CardMedia component="img" sx={{ width: '300px' }} image={profileFace43} alt="Profile image" />
            )}
            
            <CardContent>
              <Stack
                spacing={{ xs: 2, md: 3, lg: 4 }}
                sx={{
                  alignItems: { xs: 'center', sm: 'flex-start', md: 'center', lg: 'flex-start' },
                  textAlign: { xs: 'center', sm: 'left', md: 'center', lg: 'left' },
                  pl: { xs: 0, sm: 1, md: 0, lg: 1 }
                }}
              >
                <Stack direction="column" spacing={{ lg: 1 }}>
                  <Typography variant="h4">{personalInfo.variable.shortName}</Typography>
                  <Typography variant="subtitle1" color="primary">
                    {String(personalInfo.variable.mainRole).toUpperCase()}
                  </Typography>
                </Stack>
                
                {matchesUpXS && matchesDownSM && (
                  <Image src={profileFace11} height="120px" width="120px" sx={{ borderRadius: 25 }} duration={0} />
                )}
                {matchesUpMD && matchesDownLG && (
                  <Image src={profileFace11} height="180px" width="180px" sx={{ borderRadius: 25 }} duration={0} />
                )}

                <Stack spacing={{ xs: 0.5, lg: 1 }} sx={{ color: 'grey.600' }}>
                  <Typography variant="subtitle2">{personalInfo.variable.presentationMessage1}</Typography>
                  <Typography variant="subtitle2">{personalInfo.variable.presentationMessage2}</Typography>
                  <Typography variant="subtitle2">{personalInfo.variable.presentationMessage3}</Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* LADO DERECHO: Datos Personales (Efecto Ventana con Transparencia/Alineación Fija Pura) */}
        <Grid item xs={12} md={6} lg={5}>
          <Card
            elevation={0}
            sx={{
              height: 1,
              backgroundImage: background,
              backgroundAttachment: 'fixed',
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <CardContent sx={{ pl: { md: 4 } }}>
              <Stack spacing={3}>
                <Typography align="center" variant="h5">
                  Datos de contacto
                </Typography>
                
                <Stack spacing={1.5}>
                  <CardItemText title={'Apellidos:'} content={personalInfo.fixed.surnames} />
                  <CardItemText title={'Nombres:'} content={personalInfo.fixed.names} />
                  <CardItemText title={'Email:'} content={personalInfo.variable.email} />
                  <CardItemText
                    title={'Teléfono:'}
                    content={personalInfo.variable.telephone.countryCode + ' ' + personalInfo.variable.telephone.number}
                  />
                  <CardItemText title={'País:'} content={personalInfo.fixed.country} />
                </Stack>
              </Stack>
            </CardContent>

            <CardActions sx={{ p: 2, flexDirection: 'column', gap: 1 }}>
              <Divider flexItem />
              <Stack direction="row" width={1} justifyContent="space-between" alignItems="center">
                {/* Repositorios de GitHub del lado izquierdo */}
                {githubData ? (
                  <Chip
                    icon={<FolderIcon style={{ fontSize: 16 }} />}
                    label={`${githubData.public_repos} Repositorios`}
                    size="small"
                    variant="outlined"
                  />
                ) : (
                  <Box />
                )}

                {/* Botones de Redes Sociales */}
                <Stack direction="row" spacing={1}>
                  <IconButton size="large" href={`https://${personalInfo.variable.socialMedia.linkedin}`} target="_blank">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton size="large" href={`https://${personalInfo.variable.socialMedia.github}`} target="_blank">
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    component={ReactWhatsapp as any}
                    {...({
                      number: `${personalInfo.variable.telephone.countryCode} ${personalInfo.variable.telephone.number}`,
                      message: 'Saludos. Me interesa tu perfil ...'
                    } as any)}
                    size="large"
                  >
                    <WhatsAppIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}

export { SectionIntro };
