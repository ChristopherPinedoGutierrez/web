/* eslint-disable react/prop-types */
import { Box, Card, Grid, Stack, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { technologies } from '../../../resources/data/baseFiles/technologies';

function GridGroupTechAreas({ area }) {
  if (area === 'All') {
    return (
      <Grid container spacing={2}>
        {Object.values(technologies).map((ele) => (
          <Grid item key={ele.id} xs={6} md={2}>
            <Card>
              <Stack p={2} spacing={2} alignItems={'center'}>
                <Box
                  sx={{
                    borderRadius: 25,
                    width: 80,
                    height: 80,
                    backgroundColor: ele.color,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <SvgIcon sx={{ width: 48, height: 48, color: ele.contrastColor }}>{ele.icon}</SvgIcon>
                </Box>
                <Typography variant="h6" align="center">
                  {ele.name}
                </Typography>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  } else {
    return <div>ASD</div>;
  }
}

export { GridGroupTechAreas };
