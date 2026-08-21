/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardActionArea,
  Chip,
  Grid,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import { useEffect, useState, useMemo } from 'react';
import { projectsInfo } from '../../../../resources/data/projectsInfo';
import { Link as RouterLink } from 'react-router-dom';
import { DynamicIcon } from '../../../../library/common/components/DynamicIcon';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PendingIcon from '@mui/icons-material/Pending';

function StateIcon({ name, size = 16 }: { name: string; size?: number }) {
  if (name === 'conocidas') return <SchoolIcon sx={{ fontSize: size }} />;
  if (name === 'aprendiendo') return <LocalLibraryIcon sx={{ fontSize: size }} />;
  return <PendingIcon sx={{ fontSize: size }} />;
}

interface GridTechAreasProps {
  element: any;
}

function GridTechAreas({ element }: GridTechAreasProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  let bgColor = isDark ? 'grey.800' : 'grey.200';
  let iconColor = element.brandColor || (isDark ? '#ffffff' : '#000000');

  if (element.monochrome) {
    bgColor = element.contrast ? '#ffffff' : (isDark ? 'grey.800' : 'grey.200');
    iconColor = element.contrast ? '#000000' : (isDark ? '#f5f5f5' : '#222222');
  } else if (element.invertColors) {
    bgColor = element.brandColor;
    iconColor = element.contrast ? '#ffffff' : (isDark ? 'grey.200' : 'grey.800');
  } else {
    bgColor = element.contrast ? '#ffffff' : (isDark ? 'grey.800' : 'grey.200');
    iconColor = element.brandColor;
  }

  return (
    <Grid item key={element.id} xs={6} sm={4} md={4} lg={3} xl={2}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            borderColor: 'primary.main',
          }
        }}
      >
        <Tooltip title={`Estado: ${element.state.name}`} placement="top">
          <Box sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary', opacity: 0.5, zIndex: 1 }}>
            <StateIcon name={element.state.name} />
          </Box>
        </Tooltip>
        <CardActionArea
          component={RouterLink}
          to={`/projects/:${element.id}`}
          disabled={!element.hasProjects}
          sx={{ height: '100%', p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              backgroundColor: bgColor,
              color: iconColor,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 1.5
            }}
          >
            <DynamicIcon name={element.iconName} size={28} color={iconColor} />
          </Box>
            <Typography variant="body2" fontWeight="600" textAlign="center" sx={{ mb: 1 }}>
              {element.name}
            </Typography>
            {element.hasProjects ? (
              <Typography variant="caption" color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                Ver proyectos <OpenInBrowserIcon fontSize="inherit" />
              </Typography>
            ) : (
              <Typography variant="caption" color="text.secondary">
                Sin proyectos
              </Typography>
            )}
          </CardActionArea>
      </Card>
    </Grid>
  );
}

interface GridGroupTechAreasProps {
  checkedAreas: Record<string, boolean>;
  technologies: Record<string, any>;
  checkedObj: Record<string, boolean>;
}

function GridGroupTechAreas({ checkedAreas, technologies, checkedObj }: GridGroupTechAreasProps) {
  const [filteredTechs, setFilteredTechs] = useState<any[]>([]);

  useEffect(() => {
    const techlist: Record<string, any> = {};
    Object.entries(technologies).forEach(([key, value]) => {
      const val = value as any;
      techlist[key] = {
        ...val,
        hasProjects: projectsInfo.some((project) =>
          project.content.technologies.some((projectTech) => projectTech.name === val.name)
        )
      };
    });
    
    // Filtramos por las áreas que están marcadas como true
    let techListByArea = Object.values(techlist).filter((e) => checkedAreas[e.area]);
    setFilteredTechs(techListByArea);
  }, [technologies, checkedAreas]);

  // Agrupamos las tecnologías por su área.
  const groupedTechs = useMemo(() => {
    const groups: Record<string, any[]> = {};
    filteredTechs.forEach(t => {
      // Usar el nombre "bonito" del área si es posible para agrupar, pero "t.area" ya es Frontend, Backend, etc.
      // Así que lo agrupamos por "t.area".
      if (!groups[t.area]) groups[t.area] = [];
      groups[t.area].push(t);
    });
    
    // Sort keys alphabetically so areas are rendered in A-Z order
    const sortedGroups: Record<string, any[]> = {};
    Object.keys(groups).sort().forEach(key => {
      sortedGroups[key] = groups[key];
    });

    return sortedGroups;
  }, [filteredTechs]);

  return (
    <Stack gap={4}>
      {Object.entries(groupedTechs).map(([groupArea, techs]) => (
        <Box key={groupArea}>
          <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 2, px: 1 }}>
            <Typography variant="subtitle1" color="text.secondary" fontWeight="bold" sx={{ textTransform: 'uppercase' }}>
              {groupArea}
            </Typography>
            <Chip label={techs.length} size="small" variant="outlined" sx={{ height: 20, fontSize: '0.7rem' }} />
          </Stack>
          <Grid container spacing={2}>
            {techs.map((ele) => (
              <GridTechAreas key={ele.id} element={ele} />
            ))}
          </Grid>
        </Box>
      ))}
    </Stack>
  );
}

export { GridGroupTechAreas };
