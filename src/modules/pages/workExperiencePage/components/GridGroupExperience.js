/* eslint-disable react/prop-types */
import { Card, CardContent, CardHeader, Divider, Grid, Stack, Typography } from '@mui/material';
import { workExperienceInfo } from '../../../../resources/data/workExperienceInfo';

function CardItem({ title, content }) {
  return (
    <Stack spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
      <Typography variant="caption">{title}</Typography>
      <Typography variant="body1">{content}</Typography>
    </Stack>
  );
}

function GridGroupExperience() {
  return (
    <Grid container spacing={{ xs: 2, md: 4 }}>
      {workExperienceInfo.map((item, i) => (
        <Grid key={i} item xs={12} md={6} lg={4}>
          <Card sx={{ maxWidth: '500px', margin: 'auto' }}>
            <CardHeader sx={{ padding: 1, backgroundColor: 'primary.main' }} />
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="h5">{item.role}</Typography>
                <Divider variant="middle" />
                <CardItem title={'Empresa :'} content={item.company} />
                <CardItem title={'Cargo :'} content={item.role} />
                <CardItem title={'Funciones :'} content={item.jobFunctions} />
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <CardItem title={'Inicio :'} content={item.period.startDate} />
                  <CardItem title={'Final :'} content={item.period.endDate} />
                  <CardItem title={'Duración :'} content={item.period.duration} />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export { GridGroupExperience };
