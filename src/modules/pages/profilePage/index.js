/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import profileFace1 from '../../../resources/images/ProfileFace1.jpg';
import Image from 'mui-image';
import { personalInfo } from '../../../resources/data/personalInfo';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ReactWhatsapp from 'react-whatsapp';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { SectionKnowledge } from './SectionKnowledge';

function CardItemText({ title, content }) {
  return (
    <Grid container spacing={{ xs: 1, md: 0 }} alignItems={'baseline'}>
      <Grid item xs={12} md={3}>
        <Typography variant="body2">{title}</Typography>
      </Grid>
      <Grid item xs={12} md={'auto'}>
        <Typography variant="body1">{content}</Typography>
      </Grid>
    </Grid>
  );
}

function ProfilePage() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Container maxWidth="xl">
      <Grid container spacing={8} mt={8} mb={12} {...(matchesXS && { sx: { mt: 7, mb: 11 } })}>
        {/* Sección: Presentación */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 500, margin: 'auto' }}>
            <Stack direction="column" justifyContent="center" alignItems="center" width={'inherit'}>
              <Typography align="center" variant="h4">
                {personalInfo.variable.shortName}
              </Typography>
              <Typography variant="h5">{personalInfo.variable.mainRole}</Typography>
            </Stack>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: 'inherit' }}>
              <Image src={profileFace1} height="120px" width="120px" sx={{ borderRadius: 25 }} duration={0} />
            </Box>
            <Stack sx={{ textAlign: 'center' }}>
              <Typography variant="body1">{personalInfo.variable.presentationMessage1}</Typography>
              <Typography variant="body1">{personalInfo.variable.presentationMessage2}</Typography>
            </Stack>
          </Stack>
        </Grid>
        {/* Sección: Información personal */}
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 500, margin: 'auto' }}>
            <CardContent>
              <Stack spacing={2}>
                <Typography align="center" variant="h5">
                  Datos personales
                </Typography>
                <Stack spacing={1}>
                  <CardItemText title={'Apellidos:'} content={personalInfo.fixed.surnames} />
                  <CardItemText title={'Nombres:'} content={personalInfo.fixed.names} />
                  <CardItemText title={'Email:'} content={personalInfo.variable.email} />
                  <CardItemText
                    title={'Telefono:'}
                    content={personalInfo.variable.telephone.countryCode + ' ' + personalInfo.variable.telephone.number}
                  />
                  <CardItemText title={'DNI:'} content={personalInfo.fixed.docIdNumber} />
                  <CardItemText title={'País:'} content={personalInfo.fixed.country} />
                </Stack>
              </Stack>
            </CardContent>
            <CardActions>
              <Stack direction={'row'} width={1} spacing={2} justifyContent={'flex-end'}>
                <IconButton href={`https://${personalInfo.variable.socialMedia.linkedin}`} target="_blank">
                  <LinkedInIcon />
                </IconButton>
                <IconButton href={`https://${personalInfo.variable.socialMedia.github}`} target="_blank">
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  component={ReactWhatsapp}
                  number={`${personalInfo.variable.telephone.countryCode} ${personalInfo.variable.telephone.number}`}
                  message={'Saludos. Me interesa tu perfil ...'}
                >
                  <WhatsAppIcon />
                </IconButton>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
        {/* Sección: Divider */}
        <Grid item width={1}>
          <Divider />
        </Grid>
        {/* Sección: Conocimiento */}
        <Grid item xs={12}>
          <SectionKnowledge />
        </Grid>
      </Grid>
    </Container>
  );
}

export { ProfilePage };
