/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { workExperienceInfo } from '../../../../resources/data/workExperienceInfo';
import { RadarChartAptitudes } from './RadarChartAptitudes';

function CardItem({ title, content }) {
  return (
    <Stack
      spacing={{ xs: 1, md: 2 }}
      // direction={{ xs: 'column', md: 'row' }}
      // justifyContent={'space-between'}
      alignItems={'baseline'}
    >
      <Typography variant="caption">{title}</Typography>
      <Typography variant="body1">{content}</Typography>
    </Stack>
  );
}

function GridGroupExperience() {
  return (
    <Grid container spacing={{ xs: 2, md: 4 }}>
      {workExperienceInfo.map((item, i) => (
        <Grid key={i} item xs={12} md={6} lg={12}>
          <Card sx={{ maxWidth: { xs: '500px', lg: '100%' }, margin: 'auto' }}>
            <CardHeader sx={{ padding: 0.5, backgroundColor: 'primary.main' }} />
            <Box sx={{ p: 2 }}>
              <Typography variant="h5">{item.role}</Typography>
            </Box>
            <Divider variant="middle" />
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={12} lg={4}>
                  <Stack spacing={2}>
                    {/* <Typography variant="h5">{item.role}</Typography>
                    <Divider variant="middle" /> */}
                    <CardItem title={'Empresa :'} content={item.company} />
                    <Stack spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
                      <Typography variant="caption">{'Funciones :'}</Typography>
                      <Typography variant="body1">{item.jobFunctions}</Typography>
                    </Stack>
                    <Typography variant="caption">{'Periodo :'}</Typography>
                    <TableContainer component={Paper} elevation={2}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Inicio </TableCell>
                            <TableCell>Final </TableCell>
                            <TableCell>Duración </TableCell>
                            <TableCell>Estado </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>{item.period.startDate}</TableCell>
                            <TableCell>{item.period.endDate}</TableCell>
                            <TableCell>{item.period.duration}</TableCell>
                            <TableCell>{item.period.state}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Stack>
                </Grid>

                <Grid item xs={12} lg={4}>
                  <Stack spacing={2}>
                    <Typography variant="caption">{'Habilidades blandas :'}</Typography>
                    <Stack direction={'row'} flexWrap={'wrap'}>
                      {item.softSkills.map((skill, i) => (
                        <Chip key={i} label={skill.name} sx={{ m: 0.5 }} />
                      ))}
                    </Stack>
                    <Divider />
                    <Typography variant="caption">{'Aptitudes :'}</Typography>
                    <Stack direction={'row'} flexWrap={'wrap'}>
                      {item.aptitudes.map((apt, i) => (
                        <Chip key={i} label={apt.name} sx={{ m: 0.5 }} />
                      ))}
                    </Stack>
                  </Stack>
                </Grid>

                <Grid item xs={12} lg={4} sx={{ alignSelf: { xs: 'auto', lg: 'center' } }}>
                  <RadarChartAptitudes aptitudes={item.aptitudes} aptitudesCount={item.aptitudesCount} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export { GridGroupExperience };
