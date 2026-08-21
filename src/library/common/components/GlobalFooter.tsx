import React from 'react';
import { Box, Typography, Stack, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { personalInfo } from '../../../resources/data/personalInfo';

function GlobalFooter() {
  return (
    <Box sx={{ 
      backgroundColor: '#111827', // Gris muy oscuro
      borderTop: '1px solid rgba(255,255,255,0.05)',
      py: 2,
      px: 2,
      mt: 'auto',
      width: '100%'
    }}>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
        <Typography variant="body2" sx={{ color: '#ffffff' }}>
          Desarrollado por Christopher Pinedo Gutiérrez - 2026
        </Typography>
        <IconButton 
          component={Link} 
          href={`https://${personalInfo.variable.socialMedia.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          sx={{ color: '#ffffff', '&:hover': { color: '#0077b5' } }}
        >
          <LinkedInIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Box>
  );
}

export { GlobalFooter };

