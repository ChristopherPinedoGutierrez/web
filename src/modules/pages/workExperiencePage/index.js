/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React from 'react';
import { workExperienceInfo } from '../../../resources/data/workExperienceInfo';
import { renderChips } from '../../../library/common/utils/jsxUtils';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';

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
    <Container maxWidth="xl">
      <Grid container spacing={4} mt={8} mb={4} {...(matchesXS && { sx: { mt: 7, mb: 11 } })}>
        <Grid item xs={12}>
          <Typography align={'center'} variant="h4">
            Experiencia laboral
          </Typography>
        </Grid>
        {workExperienceInfo.map((item, i) => (
          <Grid key={i} item xs={12} md={6}>
            <Card>
              <CardHeader title={item.role} sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }} />
              <CardContent>
                <Stack spacing={1}>
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
                <SimpleTreeView>
                  <TreeItem itemId="Aptitudes" label="Aptitudes">
                    <Stack spacing={1} pt={2}>
                      {Object.entries(item.aptitudes).map(([key, value]) => renderChips(key, value, 'secondary'))}
                    </Stack>
                  </TreeItem>
                </SimpleTreeView>
              </CardContent>
              <Divider variant="middle" />
              <CardContent>
                <SimpleTreeView>
                  <TreeItem itemId="Tecnologias" label="Tecnologías">
                    <Stack spacing={1} pt={2}>
                      {Object.entries(item.technologies).map(([key, value]) => renderChips(key, value, 'primary'))}
                    </Stack>
                  </TreeItem>
                </SimpleTreeView>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export { WorkExperiencePage };
