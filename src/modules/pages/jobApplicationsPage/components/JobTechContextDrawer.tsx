import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Chip,
  Card,
  Divider,
  Button,
  useTheme
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import FolderSpecialOutlinedIcon from '@mui/icons-material/FolderSpecialOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { DynamicIcon } from '../../../../library/common/components/DynamicIcon';
import { JobApplication, JobTechnology } from '../../../../library/common/utils/vaultCrypto';
import { Link as RouterLink } from 'react-router-dom';

interface JobTechContextDrawerProps {
  application: JobApplication;
  selectedTechId?: string;
  onSelectTech: (techId: string) => void;
}

export function JobTechContextDrawer({
  application,
  selectedTechId,
  onSelectTech
}: JobTechContextDrawerProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const selectedTech = application.technologies.find(t => t.id === selectedTechId) || application.technologies[0] || null;

  return (
    <Box
      sx={{
        p: 2.5,
        pb: 3,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box',
        overflowY: 'auto',
        pr: 1.5,
        '&::-webkit-scrollbar': { width: 5 },
        '&::-webkit-scrollbar-thumb': {
          background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
          borderRadius: 4
        }
      }}
    >
      {/* Cabecera */}
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
        <AutoAwesomeIcon color="primary" fontSize="small" />
        <Typography variant="subtitle1" fontWeight="700" color="primary.main">
          Glosario & Stack
        </Typography>
      </Stack>

      <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block', lineHeight: 1.4 }}>
        Definiciones, tips de entrevista y proyectos respaldados para <b>{application.company}</b>.
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {/* Selector de Chips de Tecnologías */}
      <Typography variant="caption" fontWeight="700" color="text.secondary" sx={{ textTransform: 'uppercase', mb: 1, display: 'block' }}>
        TECNOLOGÍAS DE LA OFERTA ({application.technologies.length})
      </Typography>

      <Stack direction="row" spacing={0.8} flexWrap="wrap" sx={{ gap: 0.8, mb: 2.5 }}>
        {application.technologies.map((tech) => {
          const isSelected = selectedTech?.id === tech.id;
          return (
            <Chip
              key={tech.id}
              label={tech.name}
              onClick={() => onSelectTech(tech.id)}
              color={isSelected ? 'primary' : 'default'}
              variant={isSelected ? 'filled' : 'outlined'}
              size="small"
              sx={{
                fontWeight: isSelected ? '700' : '500',
                cursor: 'pointer',
                height: 26,
                fontSize: '0.78rem'
              }}
            />
          );
        })}
      </Stack>

      {/* Detalle de la Tecnología Seleccionada (Flujo único vertical continuo) */}
      {selectedTech ? (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {/* Identificador de la Tecnología */}
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 1.5,
                bgcolor: selectedTech.brandColor || 'primary.main',
                color: selectedTech.invertColors ? '#000' : '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                flexShrink: 0
              }}
            >
              <DynamicIcon name={selectedTech.iconName || 'SiReact'} size={20} />
            </Box>
            <Box>
              <Typography variant="subtitle2" fontWeight="700" color="text.primary">
                {selectedTech.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Área: {selectedTech.area}
              </Typography>
            </Box>
          </Stack>

          <Divider sx={{ my: 1.5 }} />

          {/* Definición / Concepto Clave */}
          <Typography variant="caption" fontWeight="700" color="primary.main" sx={{ textTransform: 'uppercase' }}>
            Concepto Clave
          </Typography>
          <Typography variant="body2" color="text.primary" sx={{ mt: 0.5, mb: 2, lineHeight: 1.6, fontSize: '0.86rem' }}>
            {selectedTech.description || 'Tecnología estándar implementada en el ecosistema de software.'}
          </Typography>

          {/* Tip para llamada de reclutador */}
          <Box
            sx={{
              p: 1.5,
              borderRadius: 1.5,
              bgcolor: isDark ? 'rgba(59, 130, 246, 0.12)' : 'rgba(37, 99, 235, 0.06)',
              borderLeft: '4px solid',
              borderColor: 'primary.main',
              mb: 2
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
              <LightbulbOutlinedIcon color="primary" sx={{ fontSize: 16 }} />
              <Typography variant="caption" fontWeight="700" color="primary.main">
                Cómo defenderlo en entrevista:
              </Typography>
            </Stack>
            <Typography variant="caption" color="text.primary" display="block" sx={{ lineHeight: 1.5 }}>
              Menciona tu experiencia aplicando {selectedTech.name} bajo arquitectura limpia, control de calidad y tipado estricto en tus proyectos core.
            </Typography>
          </Box>

          {/* Proyectos del portafolio que respaldan esta experiencia */}
          {application.linkedProjects && application.linkedProjects.length > 0 && (
            <Box sx={{ mt: 1 }}>
              <Typography variant="caption" fontWeight="700" color="text.secondary" sx={{ textTransform: 'uppercase' }}>
                Proyectos vinculados:
              </Typography>
              <Stack spacing={0.8} sx={{ mt: 1 }}>
                {application.linkedProjects.map((proj) => (
                  <Card key={proj.id} variant="outlined" sx={{ borderRadius: 1.5, p: 1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                        <FolderSpecialOutlinedIcon fontSize="small" color="secondary" />
                        <Typography variant="caption" fontWeight="700" color="text.primary">
                          {proj.name}
                        </Typography>
                      </Box>
                      <Button
                        size="small"
                        component={RouterLink}
                        to={`/projects/:${selectedTech.id}`}
                        endIcon={<OpenInNewIcon sx={{ fontSize: 11 }} />}
                        sx={{ fontSize: '0.68rem', py: 0.1, px: 0.8 }}
                      >
                        Ver
                      </Button>
                    </Stack>
                  </Card>
                ))}
              </Stack>
            </Box>
          )}
        </Box>
      ) : (
        <Box sx={{ p: 4, textAlign: 'center', color: 'text.secondary' }}>
          <Typography variant="body2">Selecciona una tecnología para ver su glosario y tips.</Typography>
        </Box>
      )}
    </Box>
  );
}
