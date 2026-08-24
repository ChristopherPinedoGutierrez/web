import React, { useEffect, useState } from 'react';
import { Box, Typography, Tooltip, IconButton, useTheme, ToggleButtonGroup, ToggleButton, AppBar, Toolbar } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { GridGroupExperience } from '../components/GridGroupExperience';
import { workExperienceInfo } from '../../../../resources/data/workExperienceInfo';

import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ChecklistIcon from '@mui/icons-material/Checklist';

function SectionDashboardExperience() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [filter, setFilter] = useState('all');

  const filteredExperience = filter === 'all' 
    ? workExperienceInfo 
    : workExperienceInfo.filter((item: any) => item.type === filter);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.experience-step-card');
      if (elements.length === 0) return;

      // Si el usuario llega al final de la página, activar el último hito
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom) {
        setActiveStep(elements.length - 1);
        return;
      }

      const triggerPosition = window.scrollY + window.innerHeight * 0.35;
      let currentActive = 0;

      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (triggerPosition >= top) {
          currentActive = Number(el.getAttribute('data-index') || 0);
        }
      });

      setActiveStep(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Sincronizar tras el montaje del Skeleton loader (300ms)
    const timer = setTimeout(handleScroll, 350);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [filteredExperience]);

  const handleScrollTo = (index: number) => {
    const element = document.getElementById(`experience-step-${index}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleFilterChange = (event: React.MouseEvent<HTMLElement>, newFilter: string | null) => {
    if (newFilter !== null) {
      setFilter(newFilter);
      setActiveStep(0);
    }
  };

  return (
    <Box sx={{ width: '100%', position: 'relative', pb: { xs: 0, md: 8 } }}>
      
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          top: 0, 
          zIndex: 1250, 
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(17,24,39,0.95)' : 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
          backgroundImage: 'none',
          borderBottom: '1px solid '+ theme.palette.divider,
          margin: 0, 
          borderRadius: 0 
        }}
      >
        <Toolbar sx={{ minHeight: '64px !important', px: { xs: 2, md: 3 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, py: { xs: 2, md: 0 }, gap: 2 }}>
          
          <Typography variant="h5" component="div" sx={{ width: { xs: '100%', md: 'auto' }, textAlign: { xs: 'center', md: 'left' }, flexGrow: 1, fontWeight: '900', color: 'primary.main', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
            Línea de Tiempo Profesional
          </Typography>
          
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={handleFilterChange}
            aria-label="Filtro de experiencia"
            size="small"
            sx={{
              width: { xs: '100%', md: 'auto' },
              backgroundColor: theme.palette.background.paper,
              '& .MuiToggleButton-root': {
                flex: { xs: 1, md: 'initial' },
                px: { xs: 1, md: 3 },
                py: 0.75,
                textTransform: 'none',
                fontWeight: 'bold',
                borderColor: theme.palette.divider,
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.75
              }
            }}
          >
            <ToggleButton 
              value="all"
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: '#ffffff !important',
                  '&:hover': { backgroundColor: 'primary.dark' }
                }
              }}
            >
              <ChecklistIcon fontSize="small" />
              Todas
            </ToggleButton>

            <ToggleButton 
              value="work"
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'secondary.main',
                  color: '#ffffff !important',
                  '&:hover': { backgroundColor: 'secondary.dark' }
                }
              }}
            >
              <WorkIcon fontSize="small" />
              Laboral
            </ToggleButton>

            <ToggleButton 
              value="education"
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'success.main',
                  color: '#ffffff !important',
                  '&:hover': { backgroundColor: 'success.dark' }
                }
              }}
            >
              <SchoolIcon fontSize="small" />
              Educación
            </ToggleButton>
          </ToggleButtonGroup>

        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', position: 'relative', width: '100%', pt: 0, px: { xs: 2, md: 3 } }}>
        
        <Box sx={{ flexGrow: 1, pr: { xs: 0, md: 3 } }}>
          <GridGroupExperience experience={filteredExperience} />
        </Box>

        <Box sx={{ width: { xs: 40, md: 60 }, flexShrink: 0, position: 'relative', display: { xs: 'none', md: 'block' } }}>
          <Box
            sx={{
              position: 'sticky',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1.5,
              zIndex: 100,
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)',
              padding: 1,
              borderRadius: 8,
              backdropFilter: 'blur(8px)'
            }}
          >
            {filteredExperience.map((item: any, index: number) => (
              <Tooltip key={index} title={item.role || item.company} placement="left" arrow>
                <IconButton 
                  onClick={() => handleScrollTo(index)}
                  size="small"
                  sx={{ 
                    p: 0.5,
                    color: activeStep === index ? 'primary.main' : 'text.disabled',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: activeStep === index ? 'scale(1.25)' : 'scale(0.85)',
                    filter: activeStep === index ? `drop-shadow(0 0 5px ${theme.palette.primary.main})` : 'none',
                    '&:hover': {
                      color: activeStep === index ? 'primary.main' : 'text.primary',
                      transform: 'scale(1.25)'
                    }
                  }}
                >
                  <CircleIcon sx={{ fontSize: 14 }} />
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Box>

      </Box>
    </Box>
  );
}

export { SectionDashboardExperience };
