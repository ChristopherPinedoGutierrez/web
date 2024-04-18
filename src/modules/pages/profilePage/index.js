/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  Box,
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
import { Gauge } from '@mui/x-charts';
import { technologiesInfo } from '../../../resources/data/technologiesInfo';

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

function KnowledgeCard({ data }) {
  const [progressCounter, setProgressCounter] = useState({
    counter: 0,
    total: 0
  });
  const [rowsContent, setRowsContent] = useState({
    completed: [],
    inProgress: []
  });

  useEffect(() => {
    const rows = {
      completed: [],
      inProgress: []
    };
    const counter = {
      counter: 0,
      total: 0
    };
    data.content.forEach((ele) => {
      if (ele.completed) {
        rows.completed.push(ele);
        counter.counter = counter.counter + ele.value;
      } else {
        rows.inProgress.push(ele);
      }
      counter.total = counter.total + ele.value;
    });
    setRowsContent(rows);
    setProgressCounter(counter);
  }, []);

  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardContent>
          <Stack direction={'column'} spacing={1} divider={<Divider />}>
            <Stack direction={'row'} justifyContent={'space-evenly'} alignItems={'center'}>
              <Typography variant="h6">{data?.name}</Typography>
              <div>
                <Gauge
                  width={100}
                  height={75}
                  value={progressCounter.counter}
                  valueMax={progressCounter.total}
                  startAngle={-90}
                  endAngle={90}
                  text={() => `${progressCounter.counter} / ${progressCounter.total}`}
                />
              </div>
            </Stack>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant="body1" pb={1}>
                  Completado
                </Typography>
                <Stack spacing={1}>
                  {rowsContent.completed.map((ele) => (
                    <Stack key={ele.id} direction={'row'} alignItems={'baseline'} spacing={1}>
                      <Chip label={ele.value} size="small" />
                      <Typography variant="caption">{ele.name}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" pb={1}>
                  En curso
                </Typography>
                <Stack spacing={1}>
                  {rowsContent.inProgress.map((ele) => (
                    <Stack key={ele.id} direction={'row'} alignItems={'baseline'} spacing={1}>
                      <Chip label={ele.value} size="small" />
                      <Typography variant="caption">{ele.name}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}

function ProfilePage() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Container>
      <Grid container spacing={6} mt={1} {...(matchesXS && { sx: { mt: 3, mb: 9 } })}>
        {/* Sección: Presentación */}
        <Grid container item xs={12} md={6} spacing={2}>
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
        {/* Sección: Información personal */}
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
        {/* Sección: Disclaimer */}
        <Grid item width={1}>
          <Divider sx={{ mt: 5 }} />
          <Stack alignItems={'center'} pt={2}>
            <Typography variant="caption">
              ** La infomación en los siguientes graficos es orientativa, los porcentajes son calculados en base a mi
              percepción de la tecnologia usando un sistema de puntos.**
            </Typography>
          </Stack>
        </Grid>
        {/* Sección: Conocimiento */}
        <Grid item xs={12}>
          <Typography variant="h4" pb={2}>
            Frontend
          </Typography>
          <Grid container spacing={2}>
            {technologiesInfo.frontEnd.map((data) => (
              <KnowledgeCard data={data} key={data.id} />
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" pb={2}>
            Backend
          </Typography>
          <Grid container spacing={2}>
            {technologiesInfo.backEnd.map((data) => (
              <KnowledgeCard data={data} key={data.id} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export { ProfilePage };
