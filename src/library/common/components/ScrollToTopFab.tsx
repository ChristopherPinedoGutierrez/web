import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useLocation } from 'react-router-dom';

function ScrollToTopFab() {
  const [showFab, setShowFab] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowFab(window.scrollY >= 72);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Ocultar el FAB en la vista de postulaciones para no solapar los drawers ni el glosario
  if (!showFab || location.pathname.startsWith('/postulaciones')) return null;

  return (
    <Fab 
      color="primary"
      onClick={scrollToTop}
      sx={{ position: 'fixed', bottom: { xs: 72, md: 32 }, right: { xs: 16, md: 32 }, zIndex: 1301 }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
}

export { ScrollToTopFab };
