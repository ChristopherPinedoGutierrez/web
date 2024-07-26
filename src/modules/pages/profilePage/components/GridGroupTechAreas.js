/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  Chip,
  Grid,
  IconButton,
  Stack,
  styled,
  SvgIcon,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import React from 'react';
import { technologies } from '../../../../resources/data/baseFiles/technologies';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function GridTechAreas({ element }) {
  return (
    <Grid item key={element.id} xs={6} sm={4} md={3} lg={2}>
      <Card sx={{ height: 1, borderRadius: 2 }}>
        <Stack spacing={2} alignItems={'center'} sx={{ p: 2, position: 'relative' }}>
          <Tooltip title="View related projects" placement="top">
            <IconButton sx={{ position: 'absolute', top: 8, right: 8 }}>
              <OpenInNewIcon />
            </IconButton>
          </Tooltip>
          <Box
            sx={{
              borderRadius: 25,
              width: 80,
              height: 80,
              backgroundColor: element.colorLayer1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <SvgIcon sx={{ width: 40, height: 40, color: element.colorLayer2 }}>{element.icon}</SvgIcon>
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
  const theme = useTheme();
  const background = theme.palette.mode === 'light' ? theme.custom.svgBackgroundLight : theme.custom.svgBackgroundDark;

  return (
    <Grid container spacing={4}>
      {area === 'All'
        ? Object.values(technologies).map((ele) => <GridTechAreas key={ele.id} element={ele} />)
        : Object.values(technologies)
            .filter((e) => e.area === area)
            .map((ele) => <GridTechAreas key={ele.id} element={ele} />)}
    </Grid>
  );
}

export { GridGroupTechAreas };
