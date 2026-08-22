import React, { useEffect, useState } from 'react';
import { Box, Typography, Tooltip, IconButton, useTheme, ToggleButtonGroup, ToggleButton, AppBar, Toolbar } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveStep(index);
          }
        });
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0
      }
    );

    const elements = document.querySelectorAll('.experience-step-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
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
    <Box sx={{ width: '100%', position: 'relative', pb: 8 }}>
      
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
        <Toolbar sx={{ minHeight: '64px !important', px: { xs: 2, md: 3 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, py: { xs: 1, md: 0 }, gap: 2 }}>
          
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: '900', color: 'primary.main', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
            Línea de Tiempo Profesional
          </Typography>
          
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={handleFilterChange}
            aria-label="Filtro de experiencia"
            size="small"
            sx={{
              backgroundColor: theme.palette.background.paper,
              '& .MuiToggleButton-root': {
                px: { xs: 2, md: 3 },
                py: 0.5,
                textTransform: 'none',
                fontWeight: 'bold',
                borderColor: theme.palette.divider,
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                gap: 1
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

      <Box sx={{ display: 'flex', position: 'relative', width: '100%', pt: 3, px: { xs: 2, md: 3 } }}>
        
        <Box sx={{ flexGrow: 1, pr: { xs: 2, md: 3 } }}>
          <GridGroupExperience experience={filteredExperience} />
        </Box>

        <Box sx={{ width: { xs: 40, md: 60 }, flexShrink: 0, position: 'relative' }}>
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
                    color: activeStep === index ? 'primary.main' : 'text.disabled',
                    transition: 'all 0.3s ease',
                    transform: activeStep === index ? 'scale(1.2)' : 'scale(1)'
                  }}
                >
                  {activeStep === index ? <CircleIcon fontSize="small" /> : <CircleOutlinedIcon fontSize="small" />}
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
