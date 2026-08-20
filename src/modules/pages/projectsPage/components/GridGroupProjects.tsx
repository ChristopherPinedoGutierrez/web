/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
  Stack,
  Tooltip,
  Typography,
  Box
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleIcon from '@mui/icons-material/Circle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import projectUnderConstructionImg from '../../../../resources/images/underConstruction.jpg';
import { DynamicIcon } from '../../../../library/common/components/DynamicIcon';

// Helper to parse markdown description into sections
const parseDescription = (desc) => {
  if (!desc) return [];
  // Split by '## ' but keep the text
  const parts = desc.split('## ').filter(Boolean);
  // If no '## ' found, return as single block
  if (parts.length === 1 && !desc.includes('## ')) {
    return [{ title: 'Descripción', content: desc }];
  }
  return parts.map(part => {
    const lines = part.split('\n');
    const title = lines[0].trim();
    const content = lines.slice(1).join('\n').trim();
    return { title, content };
  });
};

function ProjectCard({ item }) {
  const isEcosystem = item.config.projectType === 'ecosystem';
  const isFramework = item.config.projectType === 'framework';
  const gridSpan = isEcosystem ? 12 : (isFramework ? 8 : 6);
  
  const sections = parseDescription(item.content.description);

  return (
    <Grid item xs={12} md={gridSpan} xxl={isEcosystem ? 12 : 4}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <CardContent>
          <Stack justifyContent={'space-between'} gap={2} direction={{ xs: 'column', sm: 'row' }}>
            <Stack direction={'row'} gap={1} alignItems={'center'}>
              <Chip label={item.config.level.name} size="small" variant="outlined" />
              <Rating
                readOnly
                value={item.config.level.rating}
                sx={{ color: `projectLevels.${item.config.level.name}` }}
                icon={<CircleIcon fontSize="inherit" />}
                emptyIcon={<RadioButtonUncheckedIcon fontSize="inherit" />}
                size="small"
              />
            </Stack>
            <Stack direction={'row'} gap={1} alignItems={'center'}>
              <Chip label={item.config.projectType.toUpperCase()} color="primary" size="small" />
              <Chip label={item.config.status.keyName} color={item.config.status.color as any} size="small" />
            </Stack>
          </Stack>
        </CardContent>
        
        <Divider />
        
        <CardContent sx={{ flexGrow: 1, p: 0 }}>
          <Grid container sx={{ height: '100%' }}>
            {/* Image & Tech Stack Section */}
            <Grid item xs={12} md={isEcosystem ? 5 : 12} sx={{ p: 3, borderRight: (theme) => isEcosystem ? `1px solid ${theme.palette.divider}` : 'none' }}>
              <Typography variant="h5" gutterBottom>{item.content.name}</Typography>
              
              <Box sx={{ borderRadius: 2, overflow: 'hidden', mb: 3 }}>
                <CardMedia
                  component={'img'}
                  height={220}
                  image={item.config.image || projectUnderConstructionImg}
                  alt={`Image ${item.content.name}`}
                  sx={{ objectFit: 'cover' }}
                />
              </Box>

              <Typography variant="subtitle2" color="text.secondary" gutterBottom>STACK TECNOLÓGICO</Typography>
              <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
                {item.content.technologies.map((tech, index) => (
                  <Tooltip key={index} title={tech.name} arrow>
                    <Chip
                      icon={<DynamicIcon name={tech.iconName} size={18} color={tech.colorLayer2} />}
                      size="medium"
                      sx={{
                        backgroundColor: tech.colorLayer1,
                        color: tech.colorLayer2,
                        '& .MuiChip-icon': {
                          color: tech.colorLayer2,
                          ml: 1
                        },
                        '& .MuiChip-label': {
                          display: 'none'
                        }
                      }}
                    />
                  </Tooltip>
                ))}
              </Stack>
            </Grid>

            {/* Content Section (Tabs/Accordion) */}
            <Grid item xs={12} md={isEcosystem ? 7 : 12} sx={{ p: 3 }}>
              {sections.map((sec, idx) => (
                <Accordion key={idx} disableGutters elevation={0} defaultExpanded={idx === 0} sx={{ '&:before': { display: 'none' }, borderBottom: (theme) => `1px solid ${theme.palette.divider}`, bgcolor: 'transparent' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight={600}>{sec.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-wrap' }}>
                      {sec.content}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        </CardContent>
        
        <Divider />
        
        <CardActions sx={{ justifyContent: 'space-between', padding: 2 }}>
          <IconButton href={item.config.repository} target="_blank" disabled={!item.config.repository}>
            <GitHubIcon />
          </IconButton>
          <Button
            variant="contained"
            size="small"
            color="primary"
            disabled={!item.config.url}
            href={item.config.url}
            target="_blank"
            endIcon={<OpenInBrowserIcon />}
          >
            Visitar App
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

function GridGroupProjects({ projects }) {
  return (
    <Grid container spacing={{ xs: 2, md: 4 }}>
      {projects.map((item, i) => (
        <ProjectCard item={item} key={i} />
      ))}
    </Grid>
  );
}

export { GridGroupProjects };
