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
import CircleIcon from '@mui/icons-material/Circle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import projectUnderConstructionImg from '../../../../resources/images/underConstruction.jpg';
import { DynamicIcon } from '../../../../library/common/components/DynamicIcon';

// Helper to parse markdown description into sections
const parseDescription = (desc) => {
  if (!desc) return [];
  const parts = desc.split('## ').filter(Boolean);
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
          flexDirection: 'column',
          backgroundColor: '#111827',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 3,
          boxShadow: 'none'
        }}
      >
        <CardContent>
          <Stack justifyContent={'space-between'} gap={2} direction={{ xs: 'column', sm: 'row' }}>
            <Stack direction={'row'} gap={1} alignItems={'center'}>
              <Chip label={item.config.projectType.toUpperCase()} color="primary" size="small" />
              {item.config.date && <Typography variant="caption" color="text.secondary">{item.config.date}</Typography>}
            </Stack>
            <Stack direction={'row'} gap={1} alignItems={'center'}>
              <Chip label={item.config.status.keyName} color={item.config.status.color as any} size="small" />
            </Stack>
          </Stack>
        </CardContent>
        
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />
        
        <CardContent sx={{ flexGrow: 1, p: 0 }}>
          <Grid container sx={{ height: '100%' }}>
            
            {/* Left Column: Image & Tech Stack Section */}
            <Grid item xs={12} md={isEcosystem ? 5 : 12} sx={{ p: 3, borderRight: (theme) => isEcosystem ? `1px solid rgba(255,255,255,0.08)` : 'none' }}>
              <Typography variant="h5" color="text.primary" gutterBottom fontWeight="bold">{item.content.name}</Typography>
              
              <Box sx={{ borderRadius: 2, overflow: 'hidden', mb: 3 }}>
                <CardMedia
                  component={'img'}
                  height={220}
                  image={item.config.image || projectUnderConstructionImg}
                  alt={`Image ${item.content.name}`}
                  sx={{ objectFit: 'cover' }}
                />
              </Box>

              <Typography variant="subtitle2" color="text.secondary" gutterBottom>STACK GLOBAL</Typography>
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

            {/* Right Column: Content Section & Modules */}
            <Grid item xs={12} md={isEcosystem ? 7 : 12} sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
              
              {/* If Ecosystem, render Modules here */}
              {isEcosystem && item.content.modules && item.content.modules.length > 0 && (
                <Box sx={{ mb: 4 }}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>MÓDULOS DE LA ARQUITECTURA</Typography>
                  <Stack gap={2} mt={2}>
                    {item.content.modules.map((mod, midx) => (
                      <Box key={midx} sx={{ p: 2, borderRadius: 2, backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                          <Typography variant="body2" color="text.primary" fontWeight="bold">{mod.name}</Typography>
                          <Typography variant="caption" color="text.secondary">{mod.platform}</Typography>
                        </Stack>
                        <Stack direction="row" gap={1} flexWrap="wrap">
                          {mod.technologies.map((tId) => {
                             const techObj = item.content.technologies.find(t => t.id === tId) || { name: tId, iconName: '', colorLayer1: '#ccc', colorLayer2: '#fff' };
                             return (
                               <Tooltip key={tId} title={techObj.name} arrow>
                                  <Chip
                                    icon={<DynamicIcon name={techObj.iconName} size={14} color={techObj.colorLayer2} />}
                                    size="small"
                                    sx={{
                                      backgroundColor: techObj.colorLayer1,
                                      color: techObj.colorLayer2,
                                      height: 24,
                                      '& .MuiChip-icon': { color: techObj.colorLayer2, ml: 1 },
                                      '& .MuiChip-label': { display: 'none' }
                                    }}
                                  />
                                </Tooltip>
                             );
                          })}
                        </Stack>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}

              <Box sx={{ mt: 'auto' }}>
                {sections.map((sec, idx) => (
                  <Accordion key={idx} disableGutters elevation={0} defaultExpanded={idx === 0} sx={{ '&:before': { display: 'none' }, borderBottom: `1px solid rgba(255,255,255,0.08)`, bgcolor: 'transparent' }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'text.secondary' }} />}>
                      <Typography fontWeight={600} color="text.primary">{sec.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-wrap' }}>
                        {sec.content}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />
        
        <CardActions sx={{ justifyContent: 'space-between', padding: 2 }}>
          <IconButton href={item.config.repository} target="_blank" disabled={!item.config.repository} sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
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
