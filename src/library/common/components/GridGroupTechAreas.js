/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Card, Chip, Grid, Stack, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { technologies } from '../../../resources/data/baseFiles/technologies';

function GridTechAreas({ element }) {
  return (
    <Grid item key={element.id} xs={6} sm={4} md={3} lg={2}>
      <Card>
        <Stack p={2} spacing={2} alignItems={'center'}>
          <Box
            sx={{
              borderRadius: 25,
              width: 80,
              height: 80,
              backgroundColor: element.color,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <SvgIcon sx={{ width: 40, height: 40, color: element.contrastColor }}>{element.icon}</SvgIcon>
          </Box>
          <Typography variant="h6" align="center">
            {element.name}
          </Typography>
          {/* <Chip label={element.group} />
          <Chip label={element.type} /> */}
        </Stack>
      </Card>
    </Grid>
  );
}

function GridGroupTechAreas({ area }) {
  return (
    <Grid container spacing={2}>
      {area === 'All'
        ? Object.values(technologies).map((ele) => <GridTechAreas key={ele.id} element={ele} />)
        : Object.values(technologies)
            .filter((e) => e.area === area)
            .map((ele) => <GridTechAreas key={ele.id} element={ele} />)}
    </Grid>
  );
}

export { GridGroupTechAreas };
