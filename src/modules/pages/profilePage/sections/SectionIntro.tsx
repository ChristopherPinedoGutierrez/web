import React from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
  Divider,
  Avatar
} from '@mui/material';
import { CardItemText } from '../components/CardItemText';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { personalInfo } from '../../../../resources/data/personalInfo';
import profileFace11 from '../../../../resources/images/ProfilePic-1-1.jpg';
import ReactWhatsapp from 'react-whatsapp';

function SectionIntro() {
  const theme = useTheme();
  const background = theme.palette.mode === 'light' ? theme.custom.svgBackgroundLight : theme.custom.svgBackgroundDark;

  return (
    <Grid container spacing={3} sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
      {/* LADO IZQUIERDO: Descripción */}
      <Grid item xs={12} md sx={{ flexGrow: 1 }}>
        <Card
          sx={{
            height: 1,
            display: 'flex',
            borderRadius: 2,
            p: 1
          }}
          elevation={0}
        >
          <CardContent sx={{ width: '100%', p: 3 }}>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={{ xs: 3, md: 4 }} 
              alignItems="center"
            >
              <Avatar 
                src={profileFace11} 
                sx={{ 
                  width: { xs: 150, md: 180 }, 
                  height: { xs: 150, md: 180 }, 
                  boxShadow: theme.shadows[3] 
                }} 
              />
              <Stack
                spacing={2}
                sx={{
                  alignItems: { xs: 'center', sm: 'flex-start' },
                  textAlign: { xs: 'center', sm: 'left' },
                }}
              >
                <Box>
                  <Typography variant="h4" fontWeight="bold">{personalInfo.variable.shortName}</Typography>
                  <Typography variant="subtitle1" color="primary" fontWeight="bold">
                    {String(personalInfo.variable.mainRole).toUpperCase()}
                  </Typography>
                </Box>

                <Stack spacing={1} sx={{ color: 'text.secondary' }}>
                  <Typography variant="body2">{personalInfo.variable.presentationMessage1}</Typography>
                  <Typography variant="body2">{personalInfo.variable.presentationMessage2}</Typography>
                  <Typography variant="body2">{personalInfo.variable.presentationMessage3}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      {/* LADO DERECHO: Datos de Contacto */}
      <Grid item xs={12} md="auto">
        <Card
          elevation={0}
          sx={{
            height: 1,
            width: { md: '300px' },
            backgroundImage: background,
            backgroundAttachment: 'fixed',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Stack spacing={3}>
              <Typography align="left" variant="h5" color="text.primary" fontWeight="bold">
                Contacto
              </Typography>
              
              <Stack spacing={1.5}>
                <CardItemText title={'Email:'} content={personalInfo.variable.email} />
                <CardItemText
                  title={'Teléfono:'}
                  content={personalInfo.variable.telephone.countryCode + ' ' + personalInfo.variable.telephone.number}
                />
                <CardItemText title={'País:'} content={personalInfo.fixed.country} />
              </Stack>
            </Stack>
          </CardContent>

          <CardActions sx={{ p: 2, pt: 0, flexDirection: 'column', gap: 1 }}>
            <Divider flexItem sx={{ mb: 1 }} />
            <Stack direction="row" width={1} justifyContent="flex-end" alignItems="center">
              <Stack direction="row" spacing={1}>
                <IconButton size="medium" href={`https://${personalInfo.variable.socialMedia.linkedin}`} target="_blank">
                  <LinkedInIcon />
                </IconButton>
                <IconButton size="medium" href={`https://${personalInfo.variable.socialMedia.github}`} target="_blank">
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  component={ReactWhatsapp as any}
                  {...({
                    number: `${personalInfo.variable.telephone.countryCode} ${personalInfo.variable.telephone.number}`,
                    message: 'Saludos. Me interesa tu perfil ...'
                  } as any)}
                  size="medium"
                >
                  <WhatsAppIcon />
                </IconButton>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export { SectionIntro };
