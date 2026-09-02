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

// Parser inline de Markdown: Negrita, Cursiva, Código, Enlaces
function parseInlineMarkdown(text: string, isDark: boolean): React.ReactNode {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`|\[.*?\]\(.*?\))/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      return (
        <strong key={idx} style={{ fontWeight: 700, color: isDark ? '#FFFFFF' : '#000000' }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
      return <em key={idx}>{part.slice(1, -1)}</em>;
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
      return (
        <code
          key={idx}
          style={{
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.07)',
            padding: '2px 6px',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '0.86em',
            color: isDark ? '#93c5fd' : '#1d4ed8'
          }}
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return (
        <a
          key={idx}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#3b82f6', textDecoration: 'underline' }}
        >
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}

// Renderizador completo de bloques Markdown a componentes nativos de MUI
function MarkdownRenderer({ content }: { content: string }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // 1. Líneas vacías
    if (!trimmed) {
      i++;
      continue;
    }

    // 2. Divisores horizontales (--- o ***)
    if (trimmed === '---' || trimmed === '***') {
      elements.push(<Divider key={`div-${i}`} sx={{ my: 2.5 }} />);
      i++;
      continue;
    }

    // 3. Encabezados
    if (trimmed.startsWith('# ')) {
      elements.push(
        <Typography key={`h1-${i}`} variant="h6" fontWeight="800" color="primary.main" sx={{ mt: 3, mb: 1.5, fontSize: '1.25rem' }}>
          {parseInlineMarkdown(trimmed.slice(2), isDark)}
        </Typography>
      );
      i++;
      continue;
    }
    if (trimmed.startsWith('## ')) {
      elements.push(
        <Typography key={`h2-${i}`} variant="subtitle1" fontWeight="700" color="primary.main" sx={{ mt: 3, mb: 1, borderBottom: '1px solid', borderColor: 'divider', pb: 0.5 }}>
          {parseInlineMarkdown(trimmed.slice(3), isDark)}
        </Typography>
      );
      i++;
      continue;
    }
    if (trimmed.startsWith('### ')) {
      elements.push(
        <Typography key={`h3-${i}`} variant="subtitle2" fontWeight="700" color="text.primary" sx={{ mt: 2, mb: 0.8, fontSize: '0.94rem' }}>
          {parseInlineMarkdown(trimmed.slice(4), isDark)}
        </Typography>
      );
      i++;
      continue;
    }

    // 4. Citas / Blockquotes (> ...)
    if (trimmed.startsWith('>')) {
      const quoteLines = [];
      while (i < lines.length && (lines[i].trim().startsWith('>') || (lines[i].trim() && !lines[i].trim().startsWith('#') && !lines[i].trim().startsWith('-') && !lines[i].trim().startsWith('1.')))) {
        if (lines[i].trim().startsWith('>')) {
          quoteLines.push(lines[i].trim().replace(/^>\s*/, ''));
        } else {
          quoteLines.push(lines[i].trim());
        }
        i++;
      }
      elements.push(
        <Box
          key={`quote-${i}`}
          sx={{
            borderLeft: '4px solid',
            borderColor: 'primary.main',
            pl: 2,
            py: 1.2,
            my: 1.5,
            bgcolor: isDark ? 'rgba(59, 130, 246, 0.08)' : 'rgba(37, 99, 235, 0.04)',
            borderRadius: 1.5
          }}
        >
          <Typography variant="body2" sx={{ lineHeight: 1.7, fontStyle: 'italic', color: 'text.primary' }}>
            {parseInlineMarkdown(quoteLines.join(' '), isDark)}
          </Typography>
        </Box>
      );
      continue;
    }

    // 5. Tablas Markdown (| col 1 | col 2 |)
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      if (tableLines.length >= 2) {
        const headerCells = tableLines[0].split('|').map(c => c.trim()).filter(Boolean);
        const dataRows = tableLines.slice(2);
        elements.push(
          <Box key={`table-${i}`} sx={{ overflowX: 'auto', my: 2, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(128,128,128,0.3)', backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)' }}>
                  {headerCells.map((h, hIdx) => (
                    <th key={hIdx} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 'bold', color: isDark ? '#F9FAFB' : '#111827' }}>
                      {parseInlineMarkdown(h, isDark)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, rIdx) => {
                  const cells = row.split('|').map(c => c.trim()).filter(Boolean);
                  return (
                    <tr key={rIdx} style={{ borderBottom: '1px solid rgba(128,128,128,0.15)' }}>
                      {cells.map((cell, cIdx) => (
                        <td key={cIdx} style={{ padding: '8px 14px', color: isDark ? '#E5E7EB' : '#374151' }}>
                          {parseInlineMarkdown(cell, isDark)}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Box>
        );
        continue;
      }
    }

    // 6. Listas no ordenadas (- item o * item)
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const listItems = [];
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        listItems.push(lines[i].trim().replace(/^[-*]\s*/, ''));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} style={{ paddingLeft: '24px', margin: '8px 0', color: isDark ? '#E5E7EB' : '#374151' }}>
          {listItems.map((item, itemIdx) => (
            <li key={itemIdx} style={{ marginBottom: '6px', lineHeight: 1.6, fontSize: '0.9rem' }}>
              {parseInlineMarkdown(item, isDark)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // 7. Listas numeradas (1. item)
    if (/^\d+\.\s/.test(trimmed)) {
      const listItems = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s*/, ''));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} style={{ paddingLeft: '24px', margin: '8px 0', color: isDark ? '#E5E7EB' : '#374151' }}>
          {listItems.map((item, itemIdx) => (
            <li key={itemIdx} style={{ marginBottom: '6px', lineHeight: 1.6, fontSize: '0.9rem' }}>
              {parseInlineMarkdown(item, isDark)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // 8. Párrafo regular
    elements.push(
      <Typography key={`p-${i}`} variant="body2" sx={{ mb: 1.5, lineHeight: 1.7, color: 'text.primary', fontSize: '0.92rem' }}>
        {parseInlineMarkdown(trimmed, isDark)}
      </Typography>
    );
    i++;
  }

  return <Box>{elements}</Box>;
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
          <span>Estado: <b>{application.status === 'review' ? 'EN EVALUACIÓN' : application.status.toUpperCase()}</b></span>
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

      {/* 📝 CUERPO Y NOTAS COMPLETAS CON RENDERIZADO MARKDOWN COMPLETO */}
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
            borderColor: 'divider'
          }}
        >
          <MarkdownRenderer
            content={application.markdownContent
              .split('\n')
              .filter(l => !l.includes('Speech de 30 Segundos') && !l.startsWith('# ['))
              .join('\n')}
          />
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
