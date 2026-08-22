import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
  useTheme,
  Skeleton
} from '@mui/material';
import { DynamicIcon } from '../../../../library/common/components/DynamicIcon';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LaunchIcon from '@mui/icons-material/Launch';
import { useNavigate } from 'react-router-dom';
import { projectsInfo } from '../../../../resources/data/projectsInfo';

const SimpleMarkdown = ({ text }: { text: string }) => {
  const renderLine = (line: string) => {
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} style={{ color: 'inherit' }}>{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  const lines = text.split('\n');
  return (
    <Box sx={{ color: 'text.primary', typography: 'body1', fontSize: '0.95rem', lineHeight: 1.6, '& ul, & ol': { pl: 3, m: 0, mt: 0.5, mb: 1 } }}>
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


interface GridGroupExperienceProps {
  experience: any[];
}

function getTypeIcon(type: string) {
  switch (type) {
    case 'education': return <SchoolIcon fontSize="small" sx={{ mr: 1 }} />;
    default: return <WorkIcon fontSize="small" sx={{ mr: 1 }} />;
  }
}

function getTypeName(type: string) {
  switch (type) {
    case 'education': return 'Educación';
    default: return 'Laboral';
  }
}

function getTypeColor(type: string): "success" | "secondary" {
  switch (type) {
    case 'education': return 'success';
    default: return 'secondary';
  }
}

function GridGroupExperience({ experience }: GridGroupExperienceProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ width: '100%', position: 'relative' }}>
        {/* Línea Vertical Global */}
        <Box 
          sx={{
            position: 'absolute',
            left: { xs: '140px', sm: '180px', md: '240px' }, 
            top: -24,
            bottom: -64,
            width: '2px',
            backgroundColor: theme.palette.divider,
            zIndex: 0,
          }}
        />
        
        {Array.from(new Array(2)).map((_, i) => (
          <Box 
            key={i} 
            sx={{ 
              minHeight: { xs: 'auto', md: '45vh' },
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'flex-start',
              py: { xs: 2, md: 3 },
              position: 'relative',
              width: '100%'
            }}
          >
            <Box sx={{ display: 'flex', width: '100%' }}>
              {/* Left Column Skeleton */}
              <Box 
                sx={{ 
                  width: { xs: '140px', sm: '180px', md: '240px' }, 
                  flexShrink: 0,
                  position: 'relative', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'flex-start',
                  pr: { xs: 2, md: 3 }, 
                }}
              >
                <Box 
                  sx={{
                    position: 'absolute',
                    right: '-9px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    backgroundColor: theme.palette.divider,
                    border: `4px solid ${theme.palette.background.default}`,
                    zIndex: 2
                  }}
                />
                <Skeleton variant="text" width="80%" height={28} animation="wave" />
                <Skeleton variant="text" width="60%" height={20} animation="wave" sx={{ mb: 1 }} />
                <Skeleton variant="rounded" width={90} height={24} animation="wave" sx={{ borderRadius: 4 }} />
              </Box>

              {/* Right Column Skeleton */}
              <Box sx={{ flexGrow: 1, pl: { xs: 3, md: 4 }, pr: 0 }}>
                <Skeleton variant="rounded" width="100%" height={320} animation="wave" sx={{ borderRadius: 3 }} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      {/* Línea Vertical Global */}
      <Box 
        sx={{
          position: 'absolute',
          left: { xs: '140px', sm: '180px', md: '240px' }, 
          top: -24, // Conecta con el AppBar
          bottom: -64, // Conecta con el Footer
          width: '2px',
          backgroundColor: theme.palette.divider,
          zIndex: 0,
        }}
      />

      {experience.map((item, i) => (
        <Box 
          key={i} 
          id={`experience-step-${i}`}
          data-index={i}
          className="experience-step-card"
          sx={{ 
            minHeight: { xs: 'auto', md: '45vh' },
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            py: { xs: 2, md: 3 },
            position: 'relative',
            width: '100%'
          }}
        >
          <Box sx={{ display: 'flex', width: '100%' }}>
            
            {/* Columna Izquierda: Tiempo y Tipo */}
            <Box 
              sx={{ 
                width: { xs: '140px', sm: '180px', md: '240px' }, 
                flexShrink: 0,
                position: 'relative', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'flex-start',
                pr: { xs: 2, md: 3 }, 
                textAlign: 'left'
              }}
            >
              
              <Box 
                sx={{
                  position: 'absolute',
                  right: '-9px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                  boxShadow: `0 0 12px ${theme.palette.primary.main}`,
                  border: `4px solid ${theme.palette.background.default}`,
                  zIndex: 2
                }}
              />
              
              <Box>
                <Typography variant="h5" fontWeight="900" color="primary.main" sx={{ fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' } }}>
                  {item.period.startDate} — {item.period.endDate}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" fontWeight="bold" sx={{ mb: 1, fontSize: { xs: '0.85rem', md: '0.95rem' } }}>
                  {item.period.duration}
                </Typography>
                <Chip 
                  icon={getTypeIcon(item.type)} 
                  label={getTypeName(item.type)} 
                  variant="outlined" 
                  color={getTypeColor(item.type)}
                  size="small"
                  sx={{ fontWeight: 'bold' }} 
                />
              </Box>
            </Box>

            {/* Columna Derecha: Tarjeta de Contenido */}
            <Box sx={{ flexGrow: 1, pl: { xs: 3, md: 4 }, pr: 0 }}>
              <Card 
                elevation={4}
                sx={{ 
                  width: '100%', 
                  borderRadius: 3,
                  border: '1px solid ' + theme.palette.divider,
                  position: 'relative',
                  zIndex: 1,
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(17, 24, 39, 0.7)' : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(12px)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 16px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.1)'}`
                  }
                }}
              >
                <Box sx={{ p: { xs: 2.5, md: 3 }, pb: 1.5 }}>
                  <Typography variant="h4" fontWeight="900" color="primary.main" gutterBottom sx={{ fontSize: { xs: '1.3rem', md: '1.75rem' } }}>
                    {item.role}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" fontWeight="600" sx={{ fontSize: { xs: '1rem', md: '1.15rem' } }}>
                    {item.company}
                  </Typography>
                  
                  {item.linkedProjects && item.linkedProjects.length > 0 && (
                    <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap', gap: 1 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                        Proyectos vinculados:
                      </Typography>
                      {item.linkedProjects.map((projId: string) => {
                        const project = projectsInfo.find(p => p.id === projId.toLowerCase());
                        const label = project ? project.content.name : projId;
                        return (
                          <Chip 
                            key={projId} 
                            label={label} 
                            size="small" 
                            variant="outlined" 
                            color="primary" 
                            clickable
                            onClick={() => navigate(`/projects/${projId.toLowerCase()}`)}
                            icon={<LaunchIcon sx={{ fontSize: '14px !important' }} />}
                            sx={{ fontWeight: 'bold', '& .MuiChip-icon': { ml: 1 } }} 
                          />
                        );
                      })}
                    </Stack>
                  )}
                  {item.links && item.links.length > 0 && (
                    <Stack direction="row" spacing={1} sx={{ mt: 1.5, flexWrap: 'wrap', gap: 1 }}>
                      {item.links.map((link: any, idx: number) => (
                        <Chip 
                          key={idx} 
                          label={link.title} 
                          size="small" 
                          color="secondary" 
                          component="a" 
                          href={link.url} 
                          target="_blank" 
                          clickable 
                          sx={{ fontWeight: 'bold' }}
                        />
                      ))}
                    </Stack>
                  )}
                </Box>
                
                <Divider variant="middle" sx={{ my: 1 }} />
                
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3 }}>
                    <Box sx={{ flex: 1 }}>
                      <Box>
                        <Typography variant="overline" color="text.secondary" fontWeight="bold" letterSpacing={1.2}>
                          RESUMEN GENERAL
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                          <SimpleMarkdown text={item.jobFunctions} />
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Stack spacing={3}>
                        {item.technicalSkills && item.technicalSkills.length > 0 && (
                          <Box>
                            <Typography variant="overline" color="text.secondary" fontWeight="bold" letterSpacing={1.2} gutterBottom>
                              TECHNICAL SKILLS & APTITUDES
                            </Typography>
                            <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
                              {item.technicalSkills.map((skill: any, idx: number) => (
                                <Chip 
                                  key={idx} 
                                  icon={skill.iconName ? <DynamicIcon name={skill.iconName} size={14} /> : undefined}
                                  label={skill.name} 
                                  variant="outlined" 
                                  size="small"
                                  sx={{ 
                                    px: 0.25, 
                                    py: 1.5, 
                                    borderRadius: 1.5, 
                                    borderColor: theme.palette.divider, 
                                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                                    fontWeight: 500
                                  }}
                                />
                              ))}
                            </Stack>
                          </Box>
                        )}
                        
                        {item.coreCompetencies && item.coreCompetencies.length > 0 && (
                          <Box>
                            <Typography variant="overline" color="text.secondary" fontWeight="bold" letterSpacing={1.2} gutterBottom>
                              CORE COMPETENCIES (SOFT SKILLS)
                            </Typography>
                            <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
                              {item.coreCompetencies.map((skill: any, idx: number) => (
                                <Chip 
                                  key={idx} 
                                  icon={skill.iconName ? <DynamicIcon name={skill.iconName} size={14} /> : undefined}
                                  label={skill.name} 
                                  variant="outlined" 
                                  size="small"
                                  sx={{ 
                                    px: 0.25, 
                                    py: 1.5, 
                                    borderRadius: 1.5, 
                                    borderColor: theme.palette.divider, 
                                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                                    fontWeight: 500
                                  }}
                                />
                              ))}
                            </Stack>
                          </Box>
                        )}
                      </Stack>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export { GridGroupExperience };
