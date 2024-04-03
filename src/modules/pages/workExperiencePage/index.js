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
  Typography
} from '@mui/material';
import React from 'react';
import { workExperienceInfo } from '../../../resources/data/workExperienceInfo';
import GitHubIcon from '@mui/icons-material/GitHub';

function WorkExperiencePage() {
  const renderChips = (key, array) => {
    if (array.length === 0) return null;
    return (
      <Box key={key}>
        {array.map((item, index) => (
          <Chip key={index} label={item} />
        ))}
      </Box>
    );
  };

  return (
    <Container>
      <Grid container spacing={6} mb={12}>
        <Grid item xs={12} md={12}>
          <Stack mt={4} spacing={4}>
            <Typography align={'center'} variant="h4">
              Experiencia laboral
            </Typography>
            {/* <AccordionFilter /> */}
          </Stack>
        </Grid>
        {workExperienceInfo.map((item, i) => (
          <Grid key={i} item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Stack spacing={1}>
                  <Typography mb={2} variant="h5">
                    {item.role}
                  </Typography>
                  <Stack spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
                    <Typography variant="caption">Empresa:</Typography>
                    <Typography variant="body1">{item.company}</Typography>
                  </Stack>
                  <Stack spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
                    <Typography variant="caption">Cargo:</Typography>
                    <Typography variant="body1">{item.role}</Typography>
                  </Stack>
                  <Stack spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
                    <Typography variant="caption">Funciones:</Typography>
                    <Typography variant="body1">{item.jobFunctions}</Typography>
                  </Stack>
                  <Stack direction={'row'} spacing={6}>
                    <Stack spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
                      <Typography variant="caption">Fecha de inicio:</Typography>
                      <Typography variant="body1">{item.period.startDate}</Typography>
                    </Stack>
                    <Stack spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
                      <Typography variant="caption">Fecha de término:</Typography>
                      <Typography variant="body1">{item.period.endDate}</Typography>
                    </Stack>
                  </Stack>
                  <Stack spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
                    <Typography variant="caption">Duración:</Typography>
                    <Typography variant="body1">{item.period.duration}</Typography>
                  </Stack>
                </Stack>
              </CardContent>
              <Divider variant="middle" />
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6">Aptitudes</Typography>
                </Stack>
                <Stack spacing={1}>
                  {Object.entries(item.aptitudes).map(([key, value]) => renderChips(key, value))}
                </Stack>
              </CardContent>
              <Divider variant="middle" />
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6">Tecnologias</Typography>
                </Stack>
                <Stack spacing={1}>
                  {Object.entries(item.technologies).map(([key, value]) => renderChips(key, value))}
                </Stack>
              </CardContent>
              <Divider variant="middle" />
              <CardActions>
                <IconButton href={item.repository} target="_blank">
                  <GitHubIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export { WorkExperiencePage };
