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

function ProjectCard({ item }) {
  return (
    <Grid item xs={12} lg={6} xxl={4}>
      <Card
        sx={{
          height: 1,
          maxWidth: '500px',
          margin: 'auto',
          // borderColor: `projectLevels.${item.level.name}`,
          borderRadius: 2
        }}
        variant="outlined"
      >
        <CardContent>
          <Stack spacing={2}>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Stack direction={'row'} spacing={{ xs: 1, lg: 2 }}>
                <Chip label={item.config.area.name} color={item.config.area.color} size="small" />
                <Chip label={item.config.status.keyName} color={item.config.status.color} size="small" />
              </Stack>
              <Rating
                readOnly
                value={item.config.level.rating}
                sx={{ color: `projectLevels.${item.config.level.name}` }}
                icon={<CircleIcon />}
                emptyIcon={<RadioButtonUncheckedIcon />}
              />
            </Stack>
            <Divider />
            <Typography variant="h5">{item.content.name}</Typography>
            {item.config.image ? (
              <CardMedia component={'img'} height={200} image={item.config.image} alt={`Image ${item.content.name}`} />
            ) : (
              <CardMedia
                component={'img'}
                height={200}
                image={projectUnderConstructionImg}
                alt={`Image Project under construction`}
              />
            )}
            {/* <Typography variant="h5">{item.content.name}</Typography> */}
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
