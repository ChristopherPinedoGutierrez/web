/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  Chip,
  Divider,
  Grid,
  IconButton,
  Stack,
  styled,
  SvgIcon,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import DatasetLinkedIcon from '@mui/icons-material/DatasetLinked';
import { useEffect } from 'react';
import { projectsInfo } from '../../../../resources/data/projectsInfo';
import { Link as RouterLink } from 'react-router-dom';

function GridTechAreas({ element, hasProjects }) {
  useEffect(() => {
    console.log(element);
  }, [element]);

  return (
    <Grid item key={element.id} xs={6} sm={4} lg={3}>
      <Card sx={{ height: 1, borderRadius: 2 }}>
        <Stack spacing={2} alignItems={'center'} sx={{ p: 2, pt: 3, position: 'relative' }}>
          <Tooltip title="View related projects" placement="top">
            <IconButton
              disabled={element.hasProjects}
              sx={{ position: 'absolute', top: 8, right: 8 }}
              component={RouterLink}
              to={`/projects/:${element.name}`}
            >
              <DatasetLinkedIcon />
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

function GridGroupTechAreas({ area, technologies, checkedObj }) {
  useEffect(() => {
    // Agrega la propiedad `hasProjects` a cada tecnología
    Object.values(technologies).forEach((tech) => {
      tech.hasProjects = projectsInfo.some((project) =>
        project.content.technologies.some((projectTech) => projectTech.name === tech.name)
      );
    });
  }, [projectsInfo, technologies]);

  return (
    <>
      <Stack gap={2}>
        {/* <Typography variant="h5">{area}</Typography> */}
        <Card
          sx={{
            borderRadius: 2,
            padding: 2,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          <Typography variant="h5">{area.toLocaleUpperCase()}</Typography>
          <Stack
            direction={'row'}
            gap={2}
            alignItems={'baseline'}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Typography variant="subtitle2">Estado</Typography>
            <Stack direction={'row'} gap={1} flexWrap={'wrap'}>
              {Object.entries(checkedObj).map(
                (ele, i) => ele[1] === true && <Chip key={i} label={ele[0].toLocaleUpperCase()} />
              )}
            </Stack>
          </Stack>
        </Card>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {area === 'All'
            ? Object.values(technologies).map((ele) => <GridTechAreas key={ele.id} element={ele} />)
            : Object.values(technologies)
                .filter((e) => e.area === area)
                .map((ele) => <GridTechAreas key={ele.id} element={ele} />)}
        </Grid>
      </Stack>
    </>
  );
}

export { GridGroupTechAreas };
