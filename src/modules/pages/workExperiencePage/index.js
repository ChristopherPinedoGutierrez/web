/* eslint-disable react/prop-types */
import { Card, CardContent, CardHeader, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { workExperienceInfo } from '../../../resources/data/workExperienceInfo';
import { BasePageLayout } from '../../layouts/BasePageLayout';
// import { renderChips } from '../../../library/common/utils/jsxUtils';
// import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';

function CardItem({ title, content }) {
  return (
    <Stack spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
      <Typography variant="caption">{title}</Typography>
      <Typography variant="body1">{content}</Typography>
    </Stack>
  );
}

function WorkExperiencePage() {
  return (
    <BasePageLayout>
      <Grid item xs={12}>
        <Typography align={'center'} variant="h4">
          Experiencia laboral
        </Typography>
      </Grid>
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
            {/* <Divider variant="middle" /> */}
            {/* <CardContent>
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
              </CardContent> */}
          </Card>
        </Grid>
      ))}
    </BasePageLayout>
  );
}

export { WorkExperiencePage };
