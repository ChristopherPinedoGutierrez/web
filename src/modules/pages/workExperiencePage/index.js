/* eslint-disable react/prop-types */
import { Card, CardContent, Container, Divider, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { workExperienceInfo } from '../../../resources/data/workExperienceInfo';
import { renderChips } from '../../../library/common/utils/jsxUtils';

function CardItem({ title, content }) {
  return (
    <Stack spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
      <Typography variant="caption">{title}</Typography>
      <Typography variant="body1">{content}</Typography>
    </Stack>
  );
}

function WorkExperiencePage() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Container>
      <Grid container spacing={6} {...(matchesXS && { sx: { mt: 3, mb: 9 } })}>
        <Grid item xs={12} md={12}>
          <Stack spacing={4}>
            <Typography align={'center'} variant="h4">
              Experiencia laboral
            </Typography>
            {/* <AccordionFilter /> */}
          </Stack>
        </Grid>
        {workExperienceInfo.map((item, i) => (
          <Grid key={i} item xs={12} md={6}>
            <Card>
              <CardContent>
                <Stack spacing={1}>
                  <Typography mb={2} variant="h5">
                    {item.role}
                  </Typography>
                  <CardItem title={'Empresa:'} content={item.company} />
                  <CardItem title={'Cargo:'} content={item.role} />
                  <CardItem title={'Funciones:'} content={item.jobFunctions} />
                  <Stack direction={'row'} spacing={6}>
                    <CardItem title={'Fecha de inicio:'} content={item.period.startDate} />
                    <CardItem title={'Fecha de término:'} content={item.period.endDate} />
                  </Stack>
                  <CardItem title={'Duración:'} content={item.period.duration} />
                </Stack>
              </CardContent>
              <Divider variant="middle" />
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6">Aptitudes</Typography>
                </Stack>
                <Stack spacing={1}>
                  {Object.entries(item.aptitudes).map(([key, value]) => renderChips(key, value, 'secondary'))}
                </Stack>
              </CardContent>
              <Divider variant="middle" />
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6">Tecnologias</Typography>
                </Stack>
                <Stack spacing={1}>
                  {Object.entries(item.technologies).map(([key, value]) => renderChips(key, value, 'primary'))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export { WorkExperiencePage };
