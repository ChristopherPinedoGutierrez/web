import React, { useState, useMemo } from 'react';
import {
  Box,
  Typography,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
  List,
  ListItemButton,
  Divider,
  useTheme,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  FormControl,
  Select,
  SelectChangeEvent
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import SortIcon from '@mui/icons-material/Sort';
import CheckIcon from '@mui/icons-material/Check';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import { JobApplication } from '../../../../library/common/utils/vaultCrypto';

interface JobApplicationsListProps {
  applications: JobApplication[];
  selectedId: string;
  onSelect: (app: JobApplication) => void;
}

const STATUS_CONFIG: Record<string, { label: string; color: 'info' | 'warning' | 'primary' | 'secondary' | 'success' | 'error' | 'default' }> = {
  applied: { label: 'Postulado', color: 'info' },
  review: { label: 'En Evaluación', color: 'warning' },
  interview: { label: 'Entrevista', color: 'primary' },
  challenge: { label: 'Prueba Técnica', color: 'secondary' },
  offer: { label: 'Oferta', color: 'success' },
  rejected: { label: 'Descartado', color: 'error' },
  draft: { label: 'Borrador', color: 'default' }
};

const SORT_OPTIONS = [
  { id: 'date-desc', label: 'Fecha: Más recientes primero' },
  { id: 'date-asc', label: 'Fecha: Más antiguas primero' },
  { id: 'az', label: 'Empresa: A → Z' },
  { id: 'za', label: 'Empresa: Z → A' }
];

export function JobApplicationsList({
  applications,
  selectedId,
  onSelect
}: JobApplicationsListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date-desc');
  const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);

  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Extraer lista única de empresas ordenadas
  const companiesList = useMemo(() => {
    const map = new Map<string, number>();
    applications.forEach((app) => {
      const c = app.company.trim();
      map.set(c, (map.get(c) || 0) + 1);
    });
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [applications]);

  // Conteos por estado
  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = { all: applications.length };
    applications.forEach((app) => {
      counts[app.status] = (counts[app.status] || 0) + 1;
    });
    return counts;
  }, [applications]);

  const handleSortClick = (event: React.MouseEvent<HTMLElement>) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleSortClose = (newSort?: string) => {
    if (newSort) setSortBy(newSort);
    setSortAnchorEl(null);
  };

  const filteredApplications = useMemo(() => {
    const list = applications.filter((app) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        app.company.toLowerCase().includes(q) ||
        app.role.toLowerCase().includes(q) ||
        app.area.toLowerCase().includes(q) ||
        app.technologies.some((t) => t.name.toLowerCase().includes(q));

      const matchesCompany = selectedCompany === 'all' || app.company.trim() === selectedCompany;
      const matchesStatus = selectedStatus === 'all' || app.status === selectedStatus;

      return matchesSearch && matchesCompany && matchesStatus;
    });

    list.sort((a, b) => {
      if (sortBy === 'date-desc') {
        return b.date.localeCompare(a.date);
      } else if (sortBy === 'date-asc') {
        return a.date.localeCompare(b.date);
      } else if (sortBy === 'az') {
        return a.company.localeCompare(b.company);
      } else if (sortBy === 'za') {
        return b.company.localeCompare(a.company);
      }
      return 0;
    });

    return list;
  }, [applications, searchQuery, selectedCompany, selectedStatus, sortBy]);

  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return '';
    return dateStr.replace(' ', ' • ');
  };

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
      {/* ========================================================= */}
      {/* FILA 1: Buscador ("Buscar postulación") + Botón Ordenar    */}
      {/* ========================================================= */}
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Buscar postulación"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" sx={{ color: 'text.secondary' }} />
              </InputAdornment>
            ),
            endAdornment: searchQuery ? (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setSearchQuery('')}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ) : null
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 1.5,
              fontSize: '0.85rem'
            }
          }}
        />

        <Tooltip title="Ordenar postulaciones">
          <IconButton
            size="small"
            onClick={handleSortClick}
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1.5,
              p: 0.8,
              flexShrink: 0
            }}
          >
            <SortIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Stack>

      {/* Menú desplegable de ordenamiento */}
      <Menu
        anchorEl={sortAnchorEl}
        open={Boolean(sortAnchorEl)}
        onClose={() => handleSortClose()}
        PaperProps={{ sx: { borderRadius: 2, minWidth: 220 } }}
      >
        {SORT_OPTIONS.map((option) => {
          const isCurrent = sortBy === option.id;
          return (
            <MenuItem key={option.id} onClick={() => handleSortClose(option.id)}>
              <ListItemIcon sx={{ minWidth: 28 }}>
                {isCurrent && <CheckIcon fontSize="small" color="primary" />}
              </ListItemIcon>
              <ListItemText primary={option.label} primaryTypographyProps={{ fontSize: '0.85rem', fontWeight: isCurrent ? 700 : 400 }} />
            </MenuItem>
          );
        })}
      </Menu>

      {/* ========================================================= */}
      {/* FILA 2: Select Empresas + Select Estados en paralelo      */}
      {/* ========================================================= */}
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
        {/* Select de Empresas */}
        <FormControl size="small" sx={{ width: '50%', flexGrow: 1 }}>
          <Select
            value={selectedCompany}
            onChange={(e: SelectChangeEvent) => setSelectedCompany(e.target.value)}
            displayEmpty
            renderValue={(val) => {
              if (val === 'all') return 'Empresas (' + applications.length + ')';
              return val;
            }}
            sx={{
              borderRadius: 1.5,
              fontSize: '0.78rem',
              fontWeight: 500,
              '& .MuiSelect-select': {
                py: 0.8,
                px: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }
            }}
          >
            <MenuItem value="all" sx={{ fontSize: '0.82rem' }}>
              <ListItemIcon sx={{ minWidth: 26 }}>
                <BusinessIcon fontSize="small" color="action" />
              </ListItemIcon>
              <ListItemText primary={`Todas las empresas (${applications.length})`} />
            </MenuItem>
            {companiesList.map(([companyName, count]) => (
              <MenuItem key={companyName} value={companyName} sx={{ fontSize: '0.82rem' }}>
                <ListItemIcon sx={{ minWidth: 26 }}>
                  <BusinessIcon fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText primary={`${companyName} (${count})`} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Select de Estados */}
        <FormControl size="small" sx={{ width: '50%', flexGrow: 1 }}>
          <Select
            value={selectedStatus}
            onChange={(e: SelectChangeEvent) => setSelectedStatus(e.target.value)}
            displayEmpty
            renderValue={(val) => {
              if (val === 'all') return 'Estados (' + applications.length + ')';
              const config = STATUS_CONFIG[val];
              return config ? config.label : val;
            }}
            sx={{
              borderRadius: 1.5,
              fontSize: '0.78rem',
              fontWeight: 500,
              '& .MuiSelect-select': {
                py: 0.8,
                px: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }
            }}
          >
            <MenuItem value="all" sx={{ fontSize: '0.82rem' }}>
              <ListItemIcon sx={{ minWidth: 26 }}>
                <FactCheckOutlinedIcon fontSize="small" color="action" />
              </ListItemIcon>
              <ListItemText primary={`Todos los estados (${applications.length})`} />
            </MenuItem>
            {Object.entries(STATUS_CONFIG).map(([statusKey, config]) => {
              const count = statusCounts[statusKey] || 0;
              return (
                <MenuItem key={statusKey} value={statusKey} sx={{ fontSize: '0.82rem' }}>
                  <ListItemIcon sx={{ minWidth: 26 }}>
                    <FactCheckOutlinedIcon fontSize="small" color={config.color === 'default' ? 'action' : config.color} />
                  </ListItemIcon>
                  <ListItemText primary={`${config.label} (${count})`} />
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Stack>

      <Divider sx={{ mb: 1.5 }} />

      {/* ========================================================= */}
      {/* LISTA DE POSTULACIONES                                    */}
      {/* ========================================================= */}
      <List
        disablePadding
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          pr: 0.5,
          pb: 2,
          '&::-webkit-scrollbar': { width: 5 },
          '&::-webkit-scrollbar-thumb': {
            background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
            borderRadius: 4
          }
        }}
      >
        {filteredApplications.length === 0 ? (
          <Box sx={{ py: 6, textAlign: 'center', color: 'text.secondary' }}>
            <Typography variant="body2">No se encontraron postulaciones con los filtros activos.</Typography>
          </Box>
        ) : (
          filteredApplications.map((app) => {
            const isSelected = app.id === selectedId;
            const statusInfo = STATUS_CONFIG[app.status] || { label: app.status, color: 'default' };

            return (
              <ListItemButton
                key={app.id}
                selected={isSelected}
                onClick={() => onSelect(app)}
                sx={{
                  borderRadius: 1.5,
                  mb: 1.2,
                  p: 1.5,
                  border: '1px solid',
                  borderColor: isSelected ? 'primary.main' : 'divider',
                  borderLeft: isSelected ? '4px solid' : '1px solid',
                  borderLeftColor: isSelected ? 'primary.main' : 'divider',
                  bgcolor: isSelected
                    ? (isDark ? 'rgba(59, 130, 246, 0.14)' : 'rgba(37, 99, 235, 0.08)')
                    : (isDark ? 'rgba(255, 255, 255, 0.02)' : 'background.paper'),
                  transition: 'all 0.15s ease',
                  alignItems: 'flex-start',
                  '&:hover': {
                    borderColor: 'primary.light',
                    bgcolor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0,0,0,0.03)'
                  }
                }}
              >
                <Stack spacing={0.8} sx={{ width: '100%' }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" gap={1}>
                    <Typography
                      variant="subtitle2"
                      fontWeight="700"
                      color={isSelected ? 'primary.main' : 'text.primary'}
                      sx={{ fontSize: '0.92rem', lineHeight: 1.3 }}
                    >
                      {app.company}
                    </Typography>
                    <Chip
                      label={statusInfo.label}
                      size="small"
                      color={statusInfo.color}
                      sx={{ height: 20, fontSize: '0.68rem', fontWeight: 600, flexShrink: 0 }}
                    />
                  </Stack>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: '0.84rem',
                      fontWeight: 500,
                      lineHeight: 1.4
                    }}
                  >
                    {app.role}
                  </Typography>

                  <Stack direction="row" spacing={2} sx={{ fontSize: '0.74rem', color: 'text.secondary', pt: 0.2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarTodayIcon sx={{ fontSize: 13 }} />
                      <span>{formatDateDisplay(app.date)}</span>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationOnOutlinedIcon sx={{ fontSize: 14 }} />
                      <span style={{ maxWidth: 110, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {app.location.split('(')[0].trim()}
                      </span>
                    </Box>
                  </Stack>

                  {/* Chips de tecnologías requeridas */}
                  <Stack direction="row" spacing={0.5} flexWrap="wrap" sx={{ gap: 0.5, pt: 0.5 }}>
                    {app.technologies.slice(0, 3).map((tech) => (
                      <Chip
                        key={tech.id}
                        label={tech.name}
                        size="small"
                        sx={{
                          height: 20,
                          fontSize: '0.68rem',
                          bgcolor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                          color: 'text.secondary'
                        }}
                      />
                    ))}
                    {app.technologies.length > 3 && (
                      <Typography variant="caption" color="text.secondary" sx={{ alignSelf: 'center', fontSize: '0.68rem' }}>
                        +{app.technologies.length - 3}
                      </Typography>
                    )}
                  </Stack>
                </Stack>
              </ListItemButton>
            );
          })
        )}
      </List>
    </Box>
  );
}
