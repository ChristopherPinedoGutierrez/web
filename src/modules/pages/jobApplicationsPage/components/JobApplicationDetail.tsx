import React, { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Chip,
  Card,
  CardContent,
  Button,
  Divider,
  Tooltip,
  useTheme,
  Snackbar,
  Alert,
  Paper
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { JobApplication } from '../../../../library/common/utils/vaultCrypto';

interface JobApplicationDetailProps {
  application: JobApplication;
  activeTechId?: string;
  isRightDrawerOpen?: boolean;
  onToggleTech: (techId: string) => void;
}

export function JobApplicationDetail({
  application,
  activeTechId,
  isRightDrawerOpen,
  onToggleTech
}: JobApplicationDetailProps) {
  const [copiedSnackbar, setCopiedSnackbar] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Extraer el speech de 30 segundos
  const extractSpeech = () => {
    const lines = application.markdownContent.split('\n');
    const speechStartIndex = lines.findIndex(l => l.includes('Speech de 30 Segundos'));
    if (speechStartIndex !== -1) {
      const speechLines = [];
      for (let i = speechStartIndex + 1; i < lines.length; i++) {
        if (lines[i].startsWith('## ') || lines[i].startsWith('### ')) break;
        if (lines[i].trim().startsWith('>')) {
          speechLines.push(lines[i].replace(/^>\s*/, '').replace(/\*/g, '').trim());
        }
      }
      if (speechLines.length > 0) return speechLines.join(' ');
    }
    return `Hola, soy Christopher Pinedo. Ingeniero de software enfocado en soluciones end-to-end con React, TypeScript y arquitecturas modulares. Cuento con experiencia en metodologías ágiles, Spec-Driven Development (SDD) y control estricto de calidad. Me entusiasma unirme a ${application.company} para impulsar la evolución de sus productos digitales.`;
  };

  const speechText = extractSpeech();

  const handleCopySpeech = () => {
    navigator.clipboard.writeText(speechText);
    setCopiedSnackbar(true);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',
        borderRadius: 2,
        p: { xs: 2.5, md: 3.5 },
        border: '1px solid',
        borderColor: 'divider',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Barra Superior con Empresa y Enlace a la Oferta */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        spacing={2}
        sx={{ mb: 2 }}
      >
        <Box>
          <Typography variant="h5" fontWeight="800" color="primary.main">
            {application.company}
          </Typography>
          <Typography variant="h6" color="text.primary" fontWeight="700" sx={{ mt: 0.5 }}>
            {application.role}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight="500">
            {application.area}
          </Typography>
        </Box>

        {application.jobUrl && (
          <Button
            variant="outlined"
            href={application.jobUrl}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<OpenInNewIcon fontSize="small" />}
            sx={{ flexShrink: 0, borderRadius: 2 }}
          >
            Ver Oferta
          </Button>
        )}
      </Stack>

      {/* Metadatos Rápidos */}
      <Stack direction="row" spacing={3} flexWrap="wrap" sx={{ gap: 1.5, mb: 2, color: 'text.secondary', fontSize: '0.85rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
          <LocationOnOutlinedIcon fontSize="small" color="action" />
          <span>{application.location}</span>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
          <CalendarTodayIcon fontSize="small" color="action" />
          <span>Fecha: <b>{application.date.replace(' ', ' • ')}</b></span>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
          <WorkOutlineIcon fontSize="small" color="action" />
          <span>Estado: <b>{application.status.toUpperCase()}</b></span>
        </Box>
      </Stack>

      {/* Chips interactivos de Tecnologías (abren/conmutan el Glosario) */}
      {application.technologies && application.technologies.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="caption" fontWeight="700" color="text.secondary" sx={{ textTransform: 'uppercase', mb: 1, display: 'block' }}>
            Stack Requerido (Haz clic para ver glosario & tips):
          </Typography>
          <Stack direction="row" spacing={0.8} flexWrap="wrap" sx={{ gap: 0.8 }}>
            {application.technologies.map((tech) => {
              const isSelected = isRightDrawerOpen && activeTechId === tech.id;
              return (
                <Chip
                  key={tech.id}
                  label={tech.name}
                  onClick={() => onToggleTech(tech.id)}
                  color={isSelected ? 'primary' : 'default'}
                  variant={isSelected ? 'filled' : 'outlined'}
                  size="small"
                  sx={{
                    cursor: 'pointer',
                    fontWeight: isSelected ? '700' : '500',
                    height: 26,
                    fontSize: '0.78rem',
                    transition: 'all 0.15s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-1px)'
                    }
                  }}
                />
              );
            })}
          </Stack>
        </Box>
      )}

      <Divider sx={{ mb: 3 }} />

      {/* ⚡ TARJETA DESTACADA: SPEECH DE 30 SEGUNDOS */}
      <Card
        sx={{
          mb: 3,
          borderRadius: 2.5,
          border: '2px solid',
          borderColor: 'primary.main',
          bgcolor: isDark ? 'rgba(59, 130, 246, 0.08)' : 'rgba(37, 99, 235, 0.04)',
          overflow: 'hidden'
        }}
      >
        <CardContent sx={{ p: { xs: 2, sm: 2.5 } }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
            <Box
              sx={{
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                px: 1.5,
                py: 0.4,
                borderRadius: 1,
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: 0.5
              }}
            >
              ⚡ SPEECH DE 30 SEGUNDOS (PARA LLAMADA)
            </Box>

            <Tooltip title="Copiar speech para llamada">
              <Button
                size="small"
                variant="outlined"
                startIcon={<ContentCopyIcon fontSize="small" />}
                onClick={handleCopySpeech}
                sx={{ borderRadius: 1.5 }}
              >
                Copiar
              </Button>
            </Tooltip>
          </Stack>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.7,
              fontWeight: 500,
              color: 'text.primary',
              fontStyle: 'italic',
              fontSize: '1rem'
            }}
          >
            "{speechText}"
          </Typography>
        </CardContent>
      </Card>

      {/* 💰 PARÁMETROS SALARIALES & CALIBRACIÓN */}
      <Card
        sx={{
          mb: 3,
          borderRadius: 2.5,
          bgcolor: isDark ? 'rgba(34, 197, 94, 0.08)' : 'rgba(34, 197, 94, 0.04)',
          border: '1px solid',
          borderColor: isDark ? 'rgba(34, 197, 94, 0.3)' : 'rgba(34, 197, 94, 0.3)'
        }}
      >
        <CardContent sx={{ p: 2.5 }}>
          <Typography variant="subtitle2" fontWeight="700" color="success.main" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
            <AttachMoneyIcon fontSize="small" /> ESTRATEGIA DE CALIBRACIÓN SALARIAL
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1.5, sm: 4 }}>
            <Box>
              <Typography variant="caption" color="text.secondary" fontWeight="600">
                Pretensión recomendada para negociación:
              </Typography>
              <Typography variant="h6" fontWeight="800" color="success.main" sx={{ mt: 0.2 }}>
                {application.salaryRange}
              </Typography>
            </Box>

            {application.lastSalaryRef && (
              <Box>
                <Typography variant="caption" color="text.secondary" fontWeight="600">
                  Referencia anterior declarada:
                </Typography>
                <Typography variant="body1" fontWeight="700" color="text.primary" sx={{ mt: 0.2 }}>
                  {application.lastSalaryRef}
                </Typography>
              </Box>
            )}
          </Stack>
        </CardContent>
      </Card>

      {/* 📝 CUERPO Y NOTAS COMPLETAS */}
      <Box sx={{ mt: 1 }}>
        <Typography variant="subtitle1" fontWeight="700" color="text.primary" sx={{ mb: 1.5, textTransform: 'uppercase', letterSpacing: 0.5 }}>
          FICHA TÉCNICA Y PREGUNTAS PREPARADAS
        </Typography>

        <Box
          sx={{
            p: { xs: 2, sm: 3 },
            borderRadius: 2,
            bgcolor: isDark ? 'rgba(255,255,255,0.02)' : 'grey.50',
            border: '1px solid',
            borderColor: 'divider',
            '& h1, & h2, & h3': {
              color: 'text.primary',
              fontWeight: '700',
              mt: 2.5,
              mb: 1
            },
            '& h1': { fontSize: '1.25rem' },
            '& h2': { fontSize: '1.1rem', borderBottom: '1px solid', borderColor: 'divider', pb: 0.8 },
            '& h3': { fontSize: '0.95rem' },
            '& p': { mb: 1.5, lineHeight: 1.7, fontSize: '0.92rem', color: 'text.primary' },
            '& ul': { pl: 2.5, mb: 2 },
            '& li': { mb: 0.6, fontSize: '0.9rem', color: 'text.primary', lineHeight: 1.6 },
            '& blockquote': {
              borderLeft: '4px solid',
              borderColor: 'primary.main',
              m: 0,
              p: 1.5,
              bgcolor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
              borderRadius: 1,
              fontStyle: 'italic',
              mb: 2
            }
          }}
        >
          {application.markdownContent
            .split('\n\n')
            .filter(block => !block.includes('Speech de 30 Segundos') && !block.startsWith('# ['))
            .map((block, idx) => {
              if (block.startsWith('## ') || block.startsWith('### ')) {
                return (
                  <Typography key={idx} variant="subtitle1" fontWeight="700" color="primary.main" sx={{ mt: 2.5, mb: 1 }}>
                    {block.replace(/^#+\s*/, '')}
                  </Typography>
                );
              }
              if (block.startsWith('- ') || block.startsWith('* ') || block.startsWith('1. ')) {
                const items = block.split('\n');
                return (
                  <ul key={idx} style={{ paddingLeft: '20px', margin: '8px 0' }}>
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx} style={{ marginBottom: '6px' }}>
                        {item.replace(/^[-*0-9.]+\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1')}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <Typography key={idx} variant="body2" sx={{ mb: 1.5, lineHeight: 1.7 }}>
                  {block.replace(/\*\*(.*?)\*\*/g, '$1')}
                </Typography>
              );
            })}
        </Box>
      </Box>

      {/* Snackbar feedback */}
      <Snackbar
        open={copiedSnackbar}
        autoHideDuration={2500}
        onClose={() => setCopiedSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%', borderRadius: 2 }}>
          ¡Speech copiado al portapapeles listo para usar!
        </Alert>
      </Snackbar>
    </Paper>
  );
}
