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

function ProjectCard({ item }) {
  return (
    <Grid item xs={12} md={6} lg={4}>
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
            <Stack direction={'row'} justifyContent={'space-between'} pb={2}>
              <Chip label={item.area.name} color={item.area.color} size="small" />
              <Rating
                readOnly
                value={item.level.rating}
                sx={{ color: `projectLevels.${item.level.name}` }}
                icon={<CircleIcon />}
                emptyIcon={<RadioButtonUncheckedIcon />}
              />
            </Stack>
            {item.image ? (
              <CardMedia component={'img'} height={200} image={item.image} alt={`Image ${item.name}`} />
            ) : (
              <Skeleton animation={false} sx={{ height: 200 }} variant="rectangular" />
            )}
            <Typography variant="h5">{item.name}</Typography>
            <Stack spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
              {/* <Typography variant="caption">Descripción:</Typography> */}
              <Typography variant="body1">{item.description}</Typography>
            </Stack>
          </Stack>
        </CardContent>
        <Divider variant="middle" />
        <CardContent>
          <PieChartTechnologies item={item.technologies} />
        </CardContent>
        <Divider variant="middle" />
        <CardActions sx={{ justifyContent: 'space-between', padding: 2 }}>
          <IconButton href={item.repository} target="_blank" disabled={item.url ? false : true}>
            <GitHubIcon />
          </IconButton>
          <Button
            variant="contained"
            size="small"
            color="inherit"
            disabled={item.url ? false : true}
            href={item.url}
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
