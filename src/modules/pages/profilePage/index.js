import React from 'react';
import { Box, Card, CardActions, CardContent, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import profileFace1 from '../../../resources/images/ProfileFace1.jpeg';
import Image from 'mui-image';
import { personalInfo } from '../../../resources/data/personalInfo';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProfilePage() {
  return (
    <Container>
      <Grid container spacing={6} mt={1} mb={12}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Stack direction="column" justifyContent="center" alignItems="center">
                <Typography variant="h4">{personalInfo.variable.shortName}</Typography>
                <Typography variant="h5">{personalInfo.variable.mainRole}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Image src={profileFace1} height="100px" width="100px" sx={{ borderRadius: 25 }} duration={500} />
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box sx={{ pl: 2, pr: 2, textAlign: 'center' }}>
                <Typography variant="caption">{personalInfo.variable.presentationMessage}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography mb={2} variant="h6">
                Datos personales
              </Typography>
              <Stack direction={'row'} spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
                <Typography variant="caption">Apellidos:</Typography>
                <Typography variant="body1">{personalInfo.fixed.surnames}</Typography>
              </Stack>
              <Stack direction={'row'} spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
                <Typography variant="caption">Nombres:</Typography>
                <Typography variant="body1">{personalInfo.fixed.names}</Typography>
              </Stack>
              <Stack direction={'row'} spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
                <Typography variant="caption">Telefono:</Typography>
                <Typography variant="body1">
                  {personalInfo.variable.telephone.countryCode + ' / ' + personalInfo.variable.telephone.number}
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
                <Typography variant="caption">Email:</Typography>
                <Typography variant="body1">{personalInfo.variable.email}</Typography>
              </Stack>
              <Stack direction={'row'} spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
                <Typography variant="caption">País:</Typography>
                <Typography variant="captbody1ion">{personalInfo.fixed.country}</Typography>
              </Stack>
              <Stack direction={'row'} spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
                <Typography variant="caption">Nro DNI:</Typography>
                <Typography variant="body1">{personalInfo.fixed.docIdNumber}</Typography>
              </Stack>
              <Stack direction={'row'} spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
                <Typography variant="caption">Genero:</Typography>
                <Typography variant="body1">{personalInfo.fixed.gender}</Typography>
              </Stack>
            </CardContent>
            <CardActions>
              <IconButton href={`https://${personalInfo.variable.socialMedia.linkedin}`} target="_blank">
                <LinkedInIcon />
              </IconButton>
              <IconButton href={`https://${personalInfo.variable.socialMedia.github}`} target="_blank">
                <GitHubIcon />
              </IconButton>
              {/* <ReactWhatsapp
                number={`${personalInfo.variable.telephone.countryCode}${personalInfo.variable.telephone.number}`}
                message="Hola. Tengo interes en tu perfil"
              >
                <IconButton>
                  <WhatsAppIcon />
                </IconButton>
              </ReactWhatsapp> */}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export { ProfilePage };
