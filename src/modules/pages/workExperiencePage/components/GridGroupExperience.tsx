/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import { workExperienceInfo } from '../../../../resources/data/workExperienceInfo';
import { RadarChartAptitudes } from './RadarChartAptitudes';

function GridGroupExperience() {
  return (
    <Grid container spacing={{ xs: 2, md: 4 }}>
      {workExperienceInfo.map((item, i) => (
        <Grid key={i} item xs={12} md={6} lg={12}>
          <Card sx={{ maxWidth: { xs: '100%', lg: '100%' }, margin: 'auto' }}>
            <Box sx={{ p: 3, pb: 1 }}>
              <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2}>
                <Box>
                  <Typography variant="h5" fontWeight="bold" color="text.primary">{item.role}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">{item.company}</Typography>
                </Box>
                <Chip 
                  label={`${item.period.startDate} — ${item.period.endDate} (${item.period.duration})`}
                  color={item.period.state === 'En curso' ? 'primary' : 'default'}
                  variant={item.period.state === 'En curso' ? 'filled' : 'outlined'}
                  size="small"
                />
              </Stack>
            </Box>
            <Divider variant="middle" sx={{ my: 2 }} />
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={12} lg={5}>
                  <Stack spacing={3}>
                    <Box>
                      <Typography variant="subtitle2" color="primary" gutterBottom>{'RESPONSABILIDADES'}</Typography>
                      <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>{item.jobFunctions}</Typography>
                    </Box>
                  </Stack>
                </Grid>

                <Grid item xs={12} lg={4}>
                  <Stack spacing={3}>
                    <Box>
                      <Typography variant="subtitle2" color="primary" gutterBottom>{'CORE COMPETENCIES'}</Typography>
                      <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
                        {item.coreCompetencies.map((skill, i) => (
                          <Chip key={i} label={skill.name} variant="outlined" size="small" />
                        ))}
                      </Stack>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="primary" gutterBottom>{'TECHNICAL SKILLS'}</Typography>
                      <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
                        {item.technicalSkills.map((skill, i) => (
                          <Chip key={i} label={skill.name} variant="outlined" size="small" />
                        ))}
                      </Stack>
                    </Box>
                  </Stack>
                </Grid>

                <Grid item xs={12} lg={3} sx={{ alignSelf: { xs: 'auto', lg: 'center' } }}>
                  <RadarChartAptitudes 
                    skills={[...item.coreCompetencies, ...item.technicalSkills]} 
                    radarCount={item.radarCount} 
                  />
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
