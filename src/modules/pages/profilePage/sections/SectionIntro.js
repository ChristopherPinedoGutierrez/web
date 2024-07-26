import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import Image from 'mui-image';
import { CardItemText } from '../components/CardItemText';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { personalInfo } from '../../../../resources/data/personalInfo';
import profileFace1 from '../../../../resources/images/ProfileFace1.jpg';
import ReactWhatsapp from 'react-whatsapp';

function SectionIntro() {
  const theme = useTheme();
  const background = theme.palette.mode === 'light' ? theme.custom.svgBackgroundLight : theme.custom.svgBackgroundDark;

  return (
    <Paper sx={{ borderRadius: 2, py: { xs: 4, md: 8 }, px: { xs: 2, md: 0 } }} elevation={1}>
      <Grid container spacing={2}>
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
          <Card
            elevation={0}
            sx={{
              backgroundImage: background,
              maxWidth: 500,
              margin: 'auto',
              borderRadius: 2,
              pt: 2
            }}
          >
            <CardContent sx={{ pl: { md: 4 } }}>
              <Stack spacing={4}>
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
            <CardActions sx={{ p: 2 }}>
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
      </Grid>
    </Paper>
  );
}

export { SectionIntro };
