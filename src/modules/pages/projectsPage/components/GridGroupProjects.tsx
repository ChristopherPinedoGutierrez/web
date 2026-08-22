import React, { useState } from 'react';
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
  Box,
  Skeleton
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import CircleIcon from '@mui/icons-material/Circle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { FaProjectDiagram, FaLayerGroup, FaLaptopCode } from 'react-icons/fa';

import projectUnderConstructionImg from '../../../../resources/images/underConstruction.jpg';
import { DynamicIcon } from '../../../../library/common/components/DynamicIcon';
import { ProjectGalleryModal } from './ProjectGalleryModal';
import { useTheme } from '@mui/material/styles';

function TechChip({ tech, size = "medium" }: { tech: any, size?: "small" | "medium" }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  let bgColor = isDark ? 'grey.800' : 'grey.200';
  let iconColor = tech.brandColor || (isDark ? '#ffffff' : '#000000');

  if (tech.monochrome) {
    bgColor = tech.contrast ? '#ffffff' : (isDark ? 'grey.800' : 'grey.200');
    iconColor = tech.contrast ? '#000000' : (isDark ? '#f5f5f5' : '#222222');
  } else if (tech.invertColors) {
    bgColor = tech.brandColor;
    iconColor = tech.contrast ? '#ffffff' : (isDark ? 'grey.200' : 'grey.800');
  } else {
    bgColor = tech.contrast ? '#ffffff' : (isDark ? 'grey.800' : 'grey.200');
    iconColor = tech.brandColor;
  }

  return (
    <Chip
      label={tech.name}
      icon={tech.iconName ? <DynamicIcon name={tech.iconName} size={size === 'small' ? 14 : 18} color={iconColor} /> : undefined}
      size={size}
      sx={{
        backgroundColor: bgColor,
        color: iconColor,
        height: size === 'small' ? 24 : undefined,
        fontWeight: 500,
        '& .MuiChip-icon': {
          color: iconColor,
          ml: 1
        }
      }}
    />
  );
}

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

const SimpleMarkdown = ({ text }) => {
  const renderLine = (line) => {
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} style={{ color: 'white' }}>{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  const lines = text.split('\n');
  return (
    <Box sx={{ color: 'text.secondary', typography: 'body2', '& ul, & ol': { pl: 3, m: 0, mt: 0.5, mb: 1 } }}>
      {lines.map((line, i) => {
        const isBullet = line.trim().startsWith('- ');
        const isNumber = /^\d+\.\s/.test(line.trim());
        
        if (isBullet || isNumber) {
           const content = line.trim().replace(/^(- |\d+\.\s)/, '');
           return (
             <Box component={isBullet ? 'ul' : 'ol'} key={i} sx={{ my: 0.5 }}>
               <li style={{ paddingLeft: '4px' }}>{renderLine(content)}</li>
             </Box>
           );
        }

        if (line.trim() === '') return <br key={i} />;
        
        return <Box key={i} sx={{ mb: 1 }}>{renderLine(line)}</Box>;
      })}
    </Box>
  );
};

function ProjectCard({ item }) {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const isEcosystem = item.config.projectType === 'ecosystem';
  
  const sections = parseDescription(item.content.description);
  const gallery = item.config.gallery || [];
  const hasImage = gallery.length > 0;
  const mainImage = hasImage ? gallery[0] : '';

  let ProjectIcon = FaLaptopCode;
  if (item.config.projectType === 'ecosystem') ProjectIcon = FaProjectDiagram;
  if (item.config.projectType === 'framework') ProjectIcon = FaLayerGroup;

  const brandColor = item.config.brandColor;
  const isDark = theme.palette.mode === 'dark';
  const cardBg = isDark ? '#111827' : '#ffffff';
  
  return (
    <Grid item xs={12}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: cardBg,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          boxShadow: isDark ? 'none' : '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
        }}
      >
        <CardContent>
          <Stack justifyContent={'space-between'} gap={2} direction={{ xs: 'column', sm: 'row' }}>
            <Stack direction={'row'} gap={1} alignItems={'center'}>
              <Chip label={item.config.projectType.toUpperCase()} color="primary" size="small" />
            </Stack>
            <Stack direction={'row'} gap={1} alignItems={'center'}>
              <Chip label={item.config.status.keyName.toUpperCase()} color={item.config.status.color as any} size="small" />
            </Stack>
          </Stack>
        </CardContent>
        
        <Divider sx={{ borderColor: theme.palette.divider }} />
        
        <CardContent sx={{ flexGrow: 1, p: 0 }}>
          <Grid container sx={{ height: '100%' }}>
            
            {/* Left Column: Image & Tech Stack Section */}
            <Grid item xs={12} md={4} sx={{ p: 3, borderRight: { md: '1px solid rgba(255,255,255,0.08)' } }}>
              <Typography variant="h5" color="text.primary" gutterBottom fontWeight="bold">{item.content.name}</Typography>
              
              <Box 
                onClick={() => hasImage && setModalOpen(true)}
                sx={{ 
                  borderRadius: 1, 
                  overflow: 'hidden', 
                  mb: 2, 
                  backgroundColor: 'rgba(255,255,255,0.02)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  height: 220,
                  position: 'relative',
                  cursor: hasImage ? 'pointer' : 'default',
                  '&:hover': hasImage ? { opacity: 0.9 } : {}
                }}
              >
                {hasImage ? (
                  <>
                    <CardMedia
                      component={'img'}
                      height={220}
                      image={mainImage}
                      alt={`Image ${item.content.name}`}
                      loading="lazy"
                      sx={{ objectFit: 'cover' }}
                    />
                    {gallery.length > 1 && (
                      <Box sx={{ 
                        position: 'absolute', 
                        bottom: 8, 
                        right: 8, 
                        bgcolor: 'rgba(0,0,0,0.7)', 
                        color: 'white', 
                        px: 1, 
                        py: 0.5, 
                        borderRadius: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5
                      }}>
                        <PhotoLibraryIcon fontSize="small" />
                        <Typography variant="caption" fontWeight="bold">+{gallery.length - 1}</Typography>
                      </Box>
                    )}
                  </>
                ) : (
                  <ProjectIcon size={80} color="rgba(255,255,255,0.15)" />
                )}
              </Box>

              {item.content.shortDescription && (
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {item.content.shortDescription}
                </Typography>
              )}

              <Typography variant="subtitle2" color="text.secondary" gutterBottom>STACK GLOBAL</Typography>
              <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
                {item.content.technologies.map((tech, index) => (
                  <TechChip key={index} tech={tech} />
                ))}
              </Stack>
            </Grid>

            {/* Right Column: Content Section & Modules */}
            <Grid item xs={12} md={8} sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
              
              {/* If Ecosystem, render Modules here */}
              {isEcosystem && item.content.modules && item.content.modules.length > 0 && (
                <Box sx={{ mb: 4 }}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>MÓDULOS DE LA ARQUITECTURA</Typography>
                  <Stack gap={1} mt={2}>
                    {item.content.modules.map((mod, midx) => (
                      <Accordion key={midx} sx={{ backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'none', '&:before': { display: 'none' } }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'text.secondary' }} />}>
                          <Stack direction="row" gap={2} alignItems="center" width="100%">
                            <DynamicIcon name={mod.platform.toLowerCase().includes('web') ? 'FaLaptopCode' : (mod.platform.toLowerCase().includes('android') || mod.platform.toLowerCase().includes('mobile') ? 'SiAndroid' : 'FaLayerGroup')} size={20} color={theme.palette.text.secondary} />
                            <Typography variant="body2" color="text.primary" fontWeight="bold">{mod.name}</Typography>
                            <Typography variant="caption" color="text.secondary" sx={{ ml: 'auto', mr: 2 }}>{mod.platform}</Typography>
                          </Stack>
                        </AccordionSummary>
                        <AccordionDetails sx={{ borderTop: '1px solid rgba(255,255,255,0.05)', pt: 2 }}>
                          {mod.description && (
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{mod.description}</Typography>
                          )}
                          <Stack direction="row" gap={1} flexWrap="wrap">
                            {mod.technologies.map((tId) => {
                               const techObj = item.content.technologies.find(t => t.id === tId) || { name: tId, iconName: '', colorLayer1: '#ccc', colorLayer2: '#fff' };
                               return (
                                  <TechChip key={tId} tech={techObj} size="small" />
                               );
                            })}
                          </Stack>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </Stack>
                </Box>
              )}

              <Box sx={{}}>
                {sections.map((sec, idx) => (
                  <Accordion key={idx} disableGutters elevation={0} defaultExpanded={idx === 0} sx={{ '&:before': { display: 'none' }, borderBottom: `1px solid rgba(255,255,255,0.08)`, bgcolor: 'transparent' }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'text.secondary' }} />}>
                      <Typography fontWeight={600} color="text.primary">{sec.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <SimpleMarkdown text={sec.content} />
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        
        {(item.config.repository || item.config.url) && (
          <>
            <Divider sx={{ borderColor: theme.palette.divider }} />
            <CardActions sx={{ justifyContent: 'space-between', padding: 2 }}>
              {item.config.repository ? (
                <IconButton href={item.config.repository} target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
                  <GitHubIcon />
                </IconButton>
              ) : <Box />}
              
              {item.config.url && (
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  href={item.config.url}
                  target="_blank"
                  endIcon={<OpenInBrowserIcon />}
                >
                  Visitar App
                </Button>
              )}
            </CardActions>
          </>
        )}
      </Card>
      
      <ProjectGalleryModal 
        open={modalOpen} 
        onClose={() => setModalOpen(false)} 
        gallery={gallery} 
      />
    </Grid>
  );
}

function GridGroupProjects({ projects }) {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => { const timer = setTimeout(() => setIsLoading(false), 400); return () => clearTimeout(timer); }, []);

  if (isLoading) {
    return (
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {Array.from(new Array(2)).map((_, i) => (
          <Grid item xs={12} key={i}>
            <Skeleton variant="rounded" height={350} animation="wave" sx={{ borderRadius: 2 }} />
          </Grid>
        ))}
      </Grid>
    );
  }
  return (
    <Grid container spacing={{ xs: 2, md: 4 }}>
      {projects.map((item, i) => (
        <ProjectCard item={item} key={i} />
      ))}
    </Grid>
  );
}

export { GridGroupProjects };

