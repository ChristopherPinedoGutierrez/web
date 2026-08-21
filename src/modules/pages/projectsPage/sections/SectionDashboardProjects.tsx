import React, { useEffect, useState } from 'react';
import { Box, Drawer, Toolbar, Typography, Menu, MenuItem, Stack, IconButton, useTheme, useMediaQuery, AppBar, Fab, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SortIcon from '@mui/icons-material/Sort';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { GridGroupProjects } from '../components/GridGroupProjects';
import { projectsInfo, projectStates } from '../../../../resources/data/projectsInfo';
import { DrawerListFilters } from '../../../../library/common/components/DrawerListFilters';

const drawerWidth = 280;
const miniDrawerWidth = 72;

interface SectionDashboardProjectsProps {
  selectedId?: string;
}

interface FilterItem {
  name: string;
  active: boolean;
}

interface Filters {
  Tipos: Record<string, FilterItem>;
  Estados: Record<string, FilterItem>;
  Tecnologías: Record<string, FilterItem>;
}

function SectionDashboardProjects({ selectedId }: SectionDashboardProjectsProps) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(false);
  
  const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);
  const [sortBy, setSortBy] = useState('relevance');
  const [showFab, setShowFab] = useState(false);
  
  const [filters, setFilters] = useState<Filters>({
    Tipos: {},
    Estados: {},
    Tecnologías: {}
  });
  
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setShowFab(window.scrollY >= 72);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const typeFilters: Record<string, FilterItem> = {};
    projectsInfo.forEach(p => {
       const type = p.config.projectType;
       if (!typeFilters[type]) {
         typeFilters[type] = { name: type.charAt(0).toUpperCase() + type.slice(1), active: true };
       }
    });

    const stateFilters = Object.values(projectStates).reduce((acc: Record<string, FilterItem>, state: any) => {
      acc[state.id] = { name: state.name, active: true };
      return acc;
    }, {});

    const cleanSelectedId = selectedId ? selectedId.replace(/^:/, '') : '';
    const hasValidSelection = selectedId !== undefined && selectedId !== ':id';

    const techFilters = projectsInfo.reduce((acc: Record<string, FilterItem>, project: any) => {
      project.content.technologies.forEach((tech: any) => {
        if (!acc[tech.id]) {
          acc[tech.id] = { 
            name: tech.name, 
            active: hasValidSelection ? tech.id === cleanSelectedId : true 
          };
        }
      });
      return acc;
    }, {});

    setFilters({
      Tipos: typeFilters,
      Estados: stateFilters as Record<string, FilterItem>,
      Tecnologías: techFilters as Record<string, FilterItem>
    });
  }, [selectedId]);

  useEffect(() => {
    const filterProjects = () => {
      let filtered = projectsInfo.filter((project: any) => {
        const typeMatch = filters.Tipos[project.config.projectType]?.active;
        const stateMatch = filters.Estados[project.config.status.id]?.active;
        const techMatch = project.content.technologies.some((tech: any) => filters.Tecnologías[tech.id]?.active);

        return typeMatch && stateMatch && techMatch;
      });

      filtered.sort((a, b) => {
        if (sortBy === 'relevance') {
          const relevanceScore: Record<string, number> = {
            ecosystem: 3,
            application: 2,
            framework: 1
          };
          const scoreA = relevanceScore[a.config.projectType] || 0;
          const scoreB = relevanceScore[b.config.projectType] || 0;
          if (scoreA !== scoreB) {
            return scoreB - scoreA;
          }
          return a.content.name.localeCompare(b.content.name);
        } else if (sortBy === 'za') {
          return b.content.name.localeCompare(a.content.name);
        }
        return a.content.name.localeCompare(b.content.name);
      });
      return filtered;
    };
    
    if (Object.keys(filters.Estados).length > 0) {
      setFilteredProjects(filterProjects());
    }
  }, [filters, sortBy]);

  const handleFilters = (section: keyof Filters, element: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [section]: {
        ...prevFilters[section],
        [element]: {
          ...prevFilters[section][element],
          active: !prevFilters[section][element].active
        }
      }
    }));
  };

  const handleToggleAllFilters = (section: keyof Filters, allChecked: boolean) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [section]: Object.fromEntries(
        Object.entries(prevFilters[section]).map(([key, value]) => [key, { ...value, active: !allChecked }])
      )
    }));
  };

  const handleSortClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSortAnchorEl(event.currentTarget);
  };
  const handleSortClose = (val?: string) => {
    if (val) setSortBy(val);
    setSortAnchorEl(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
      {/* Drawer */}
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidth : miniDrawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : miniDrawerWidth,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: open ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            backgroundColor: '#0A0F1C',
            borderRight: '1px solid rgba(255,255,255,0.05)',
            position: 'sticky',
            top: 0, // Sticks to top of viewport when scrolling
            height: '100vh',
            zIndex: 1200,
          },
        }}
      >
        {/* Drawer Header: exact height 64px to match AppBar */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: open ? 'flex-end' : 'center', minHeight: '64px', px: open ? 1 : 0 }}>
          <IconButton 
            onClick={() => setOpen(!open)} 
            sx={{ 
              color: 'text.secondary',
              width: 40, 
              height: 40, 
              flexShrink: 0
            }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)' }} />
        
        <Box sx={{ flexGrow: 1, overflowY: 'auto', overflowX: 'hidden', pt: 2 }}>
          <DrawerListFilters
            filters={filters}
            handleFilters={handleFilters}
            handleToggleAllFilters={handleToggleAllFilters}
            isMini={!open}
            onOpenDrawer={() => setOpen(true)}
          />
        </Box>
      </Drawer>

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', width: `calc(100% - ${open ? drawerWidth : miniDrawerWidth}px)` }}>
        {/* AppBar beside the Drawer */}
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            top: 0,
            zIndex: 1199,
            backgroundColor: '#111827',
            backgroundImage: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.05)'
          }}
        >
          <Toolbar sx={{ minHeight: '64px !important', px: { xs: 2, md: 3 } }}>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              Portafolio de proyectos
            </Typography>
            
            <IconButton color="inherit" onClick={handleSortClick} sx={{ flexShrink: 0, width: 40, height: 40 }}>
              <SortIcon />
            </IconButton>
            <Menu
              anchorEl={sortAnchorEl}
              open={Boolean(sortAnchorEl)}
              onClose={() => handleSortClose()}
              PaperProps={{
                sx: { backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.08)' }
              }}
            >
              <MenuItem onClick={() => handleSortClose('relevance')} selected={sortBy === 'relevance'}>Relevancia (Por defecto)</MenuItem>
              <MenuItem onClick={() => handleSortClose('az')} selected={sortBy === 'az'}>Alfabético (A-Z)</MenuItem>
              <MenuItem onClick={() => handleSortClose('za')} selected={sortBy === 'za'}>Alfabético (Z-A)</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        {/* Content */}
        <Box sx={{ p: { xs: 2, md: 4 }, flexGrow: 1 }}>
          <GridGroupProjects projects={filteredProjects} />
        </Box>
      </Box>

      {showFab && (
        <Fab 
          color="primary" 
          size="medium" 
          onClick={scrollToTop}
          sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1300 }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </Box>
  );
}

export { SectionDashboardProjects };
