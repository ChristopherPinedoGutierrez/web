import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ScrollToTopFab() {
  const [showFab, setShowFab] = useState(false);

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

  if (!showFab) return null;

  return (
    <Fab 
      color="primary"
      onClick={scrollToTop}
      sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1301 }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
}

export { ScrollToTopFab };

