/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Rating,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React, { useEffect } from 'react';
import { projectsInfo } from '../../../resources/data/projectsInfo';
// import { AccordionFilter } from '../../../library/common/components/AccordionFilter';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import { renderChips } from '../../../library/common/utils/jsxUtils';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleIcon from '@mui/icons-material/Circle';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const CustomizedLegend = ({ payload }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const textColor = theme.palette.text.primary; // O cualquier otro color que desees

  const legendStyle = {
    listStyleType: 'none',
    padding: 0,
    display: isMobile ? 'flex' : 'block',
    flexWrap: isMobile ? 'wrap' : 'nowrap',
    gap: isMobile ? '8px' : '0',
    justifyContent: isMobile ? 'center' : 'flex-start',
    alignItems: 'center',
    margin: isMobile ? '0' : '0 auto'
  };

  return (
    <ul style={legendStyle}>
      {payload.map((entry, index) => (
        <li key={`item-${index}`} style={{ color: textColor, marginBottom: isMobile ? '0' : '4px' }}>
          <span style={{ color: entry.color, marginRight: '8px' }}>■</span>
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

const MyPieChartComponent = ({ item }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Mapeo de los datos para incluir colores desde el tema de MUI
  const data = item.map((tech) => ({
    name: tech.name,
    value: tech.type.value,
    color: tech.color
  }));

  return (
    <ResponsiveContainer width={'100%'} height={200}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          // cy={isMobile ? '75%' : '50%'}
          // startAngle={isMobile ? 180 : 0}
          // endAngle={isMobile ? 0 : 360}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          layout={isMobile ? 'horizontal' : 'vertical'}
          verticalAlign={isMobile ? 'bottom' : 'middle'}
          align={isMobile ? 'center' : 'right'}
          content={<CustomizedLegend />}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

function ProjectsPage() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Container maxWidth="xl">
      <Grid container spacing={8} mt={8} mb={4} alignItems={'stretch'} {...(matchesXS && { sx: { mt: 7, mb: 11 } })}>
        <Grid item xs={12}>
          <Typography align="center" variant="h4">
            Proyectos
          </Typography>
        </Grid>
        {projectsInfo.map((item, i) => (
          <Grid key={i} item xs={12} md={6} xl={4}>
            <Card
              sx={{
                height: 1,
                maxWidth: '500px',
                margin: 'auto',
                borderColor: `projectLevels.${item.level}`,
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
                      value={item.rating}
                      sx={{ color: `projectLevels.${item.level}` }}
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
                <MyPieChartComponent item={item.technologies} />
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
