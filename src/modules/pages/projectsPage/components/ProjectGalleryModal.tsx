import React, { useState, useEffect } from 'react';
import { Dialog, IconButton, Box, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function ProjectGalleryModal({ open, onClose, gallery }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when modal opens
  useEffect(() => {
    if (open) setCurrentIndex(0);
  }, [open]);

  if (!gallery || gallery.length === 0) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleSelect = (index, e) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="lg" 
      fullWidth
      PaperProps={{
        sx: { 
          backgroundColor: '#0A0F1C', 
          boxShadow: 'none',
          backgroundImage: 'none'
        }
      }}
    >
      <Box sx={{ position: 'relative', height: '80vh', display: 'flex', flexDirection: 'column' }}>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, right: 8, color: 'white', zIndex: 10, bgcolor: 'rgba(0,0,0,0.5)', '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' } }}
        >
          <CloseIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', p: 2 }}>
          {gallery.length > 1 && (
            <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 16, color: 'white', bgcolor: 'rgba(0,0,0,0.5)', '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' } }}>
              <ArrowBackIosNewIcon />
            </IconButton>
          )}

          <img 
            src={gallery[currentIndex]} 
            alt={`Gallery ${currentIndex}`} 
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '8px' }}
          />

          {gallery.length > 1 && (
            <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 16, color: 'white', bgcolor: 'rgba(0,0,0,0.5)', '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' } }}>
              <ArrowForwardIosIcon />
            </IconButton>
          )}
        </Box>

        {gallery.length > 1 && (
          <Stack direction="row" spacing={1} sx={{ p: 2, overflowX: 'auto', justifyContent: 'center', bgcolor: 'rgba(0,0,0,0.2)' }}>
            {gallery.map((img, idx) => (
              <Box
                key={idx}
                onClick={(e) => handleSelect(idx, e)}
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: 1,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: currentIndex === idx ? '2px solid' : '2px solid transparent',
                  borderColor: currentIndex === idx ? 'primary.main' : 'transparent',
                  opacity: currentIndex === idx ? 1 : 0.6,
                  '&:hover': { opacity: 1 },
                  flexShrink: 0
                }}
              >
                <img src={img} alt={`Thumb ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
            ))}
          </Stack>
        )}
      </Box>
    </Dialog>
  );
} 
