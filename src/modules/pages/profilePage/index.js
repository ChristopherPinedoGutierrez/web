/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import profileFace1 from '../../../resources/images/ProfileFace1.jpeg';
import Image from 'mui-image';
import { personalInfo } from '../../../resources/data/personalInfo';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ReactWhatsapp from 'react-whatsapp';

function CardItemText({ title, content }) {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
      <Grid item xs={12} md={2.5}>
        <Typography variant="caption">{title}</Typography>
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
    <Container>
      <Grid container spacing={6} mt={1} {...(matchesXS && { sx: { mt: 3, mb: 9 } })}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Stack direction="column" justifyContent="center" alignItems="center">
                <Typography align="center" variant="h4">
                  {personalInfo.variable.shortName}
                </Typography>
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
              <Typography align="center" mb={2} variant="h6">
                Datos personales
              </Typography>
              <CardItemText title={'Apellidos:'} content={personalInfo.fixed.surnames} />
              <CardItemText title={'Nombres:'} content={personalInfo.fixed.names} />
              <CardItemText title={'Email:'} content={personalInfo.variable.email} />
              <CardItemText
                title={'Telefono:'}
                content={personalInfo.variable.telephone.countryCode + ' ' + personalInfo.variable.telephone.number}
              />
              <CardItemText title={'DNI:'} content={personalInfo.fixed.docIdNumber} />
              <CardItemText title={'País:'} content={personalInfo.fixed.country} />
            </CardContent>
            <CardActions>
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
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export { ProfilePage };
