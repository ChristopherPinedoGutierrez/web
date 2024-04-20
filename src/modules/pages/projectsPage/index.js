/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React from 'react';
import { projectsInfo } from '../../../resources/data/projectsInfo';
// import { AccordionFilter } from '../../../library/common/components/AccordionFilter';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import { renderChips } from '../../../library/common/utils/jsxUtils';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';

function ProjectsPage() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Container>
      <Grid container spacing={6} {...(matchesXS && { sx: { mt: 3, mb: 9 } })}>
        <Grid item xs={12} md={12}>
          <Stack spacing={4}>
            <Typography align="center" variant="h4">
              Proyectos
            </Typography>
            {/* <AccordionFilter /> */}
          </Stack>
        </Grid>
        {projectsInfo.map((item, i) => (
          <Grid key={i} item xs={12} md={6}>
            <Card>
              <CardContent>
                <Stack spacing={1}>
                  <Stack direction={'row'} justifyContent={'space-between'} pb={2}>
                    <Stack direction={'row'} alignItems={'baseline'} spacing={1}>
                      <Chip label={item.area.name} color={item.area.color} size="small" />
                    </Stack>
                    <Stack direction={'row'} alignItems={'flex-end'} spacing={1}>
                      {/* <Typography variant="caption">Dificultad:</Typography> */}
                      <Rating readOnly precision={0.5} value={item.rating} />
                    </Stack>
                  </Stack>
                  <Typography mb={2} variant="h5">
                    {item.name}
                  </Typography>
                  <Stack direction={'row'} spacing={{ xs: 4, md: 12 }}>
                    <Stack alignItems={'baseline'} spacing={{ xs: 1, md: 2 }}>
                      <Typography variant="caption">Estado:</Typography>
                      <Chip label={item.status} size="small" />
                    </Stack>
                    <Stack alignItems={'baseline'} spacing={{ xs: 1, md: 2 }}>
                      <Typography variant="caption">Fuente:</Typography>
                      <Chip label={item.source} size="small" />
                    </Stack>
                  </Stack>
                  <Stack spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
                    <Typography variant="caption">Objetivo:</Typography>
                    <Typography variant="body1">{item.goal}</Typography>
                  </Stack>
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
        ))}
      </Grid>
    </Container>
  );
}

export { ProjectsPage };
