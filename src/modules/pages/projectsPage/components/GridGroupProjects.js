/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  IconButton,
  Rating,
  Skeleton,
  Stack,
  Typography
} from '@mui/material';
import { PieChartTechnologies } from './PieChartTechnologies';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleIcon from '@mui/icons-material/Circle';

import projectUnderConstructionImg from '../../../../resources/images/underConstruction.jpg';
import { useEffect } from 'react';

function ProjectCard({ item }) {
  useEffect(() => console.log(item), [item]);
  return (
    <Grid item xs={12} lg={6} xxl={4}>
      <Card
        sx={{
          height: 1,
          maxWidth: '500px',
          margin: 'auto',
          // borderColor: `projectLevels.${item.config.level.name}`,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column'
          // justifyContent: 'space-between'
        }}
        variant="outlined"
      >
        <CardContent>
          <Stack justifyContent={'space-between'} gap={2} divider={<Divider flexItem orientation="horizontal" />}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography variant="subtitle2">NIVEL</Typography>
              <Stack direction={'row'} gap={1}>
                <Chip label={item.config.level.name} size="small" />
                <Rating
                  readOnly
                  value={item.config.level.rating}
                  sx={{ color: `projectLevels.${item.config.level.name}` }}
                  icon={<CircleIcon />}
                  emptyIcon={<RadioButtonUncheckedIcon />}
                />
              </Stack>
            </Stack>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              divider={<Divider flexItem orientation="vertical" />}
              gap={1}
            >
              <Stack gap={1} direction={'row'} alignItems={'center'} flexWrap={'wrap'}>
                <Typography variant="subtitle2">AREA</Typography>
                <Chip label={item.config.area.name} color={item.config.area.color} size="small" />
              </Stack>
              <Stack gap={1} direction={'row'} alignItems={'center'} flexWrap={'wrap'}>
                <Typography variant="subtitle2">ESTADO</Typography>
                <Chip label={item.config.status.keyName} color={item.config.status.color} size="small" />
              </Stack>
            </Stack>
            {/* <Grid container>
              <Grid item xs={12} md={6}>
                <Stack gap={1} direction={'row'} alignItems={'center'} flexWrap={'wrap'}>
                  <Typography variant="subtitle2">AREA</Typography>
                  <Chip label={item.config.area.name} color={item.config.area.color} size="small" />
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack gap={1} direction={'row'} alignItems={'center'} flexWrap={'wrap'}>
                  <Divider flexItem orientation="vertical" />
                  <Typography variant="subtitle2">ESTADO</Typography>
                  <Chip label={item.config.status.keyName} color={item.config.status.color} size="small" />
                </Stack>
              </Grid>
            </Grid> */}
          </Stack>
        </CardContent>
        <Divider variant="middle" />
        <CardContent sx={{ flexGrow: 1 }}>
          <Stack spacing={2}>
            <Typography variant="h5">{item.content.name}</Typography>
            <Card elevation={0} variant="outlined" sx={{ borderRadius: 2 }}>
              {item.config.image ? (
                <CardMedia
                  component={'img'}
                  height={200}
                  image={item.config.image}
                  alt={`Image ${item.content.name}`}
                />
              ) : (
                <CardMedia
                  component={'img'}
                  height={200}
                  image={projectUnderConstructionImg}
                  alt={`Image Project under construction`}
                />
              )}
            </Card>
            <Stack spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
              <Typography variant="body1">{item.content.description}</Typography>
            </Stack>
          </Stack>
        </CardContent>
        <Divider variant="middle" />
        <CardContent>
          <PieChartTechnologies item={item.content.technologies} />
        </CardContent>
        <Divider variant="middle" />
        <CardActions sx={{ justifyContent: 'space-between', padding: 2 }}>
          <IconButton href={item.config.repository} target="_blank" disabled={item.config.url ? false : true}>
            <GitHubIcon />
          </IconButton>
          <Button
            variant="contained"
            size="small"
            color="inherit"
            disabled={item.config.url ? false : true}
            href={item.config.url}
            target="_blank"
            endIcon={<OpenInBrowserIcon />}
          >
            Visitar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

function GridGroupProjects({ projects }) {
  // console.log(projects);
  return (
    <Grid container spacing={{ xs: 2, md: 4 }}>
      {projects.map((item, i) => (
        <ProjectCard item={item} key={i} />
      ))}
    </Grid>
  );
}

export { GridGroupProjects };
