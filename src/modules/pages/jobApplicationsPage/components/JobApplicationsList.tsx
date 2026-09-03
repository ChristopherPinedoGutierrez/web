import React, { useState, useMemo, useEffect } from 'react';
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
  SelectChangeEvent,
  Badge,
  Button,
  Popover
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import SortIcon from '@mui/icons-material/Sort';
import CheckIcon from '@mui/icons-material/Check';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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

const MONTH_NAMES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];
const WEEKDAYS = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];

// Función para obtener la fecha local exacta en formato YYYY-MM-DD sin desfase UTC
const getLocalTodayString = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export function JobApplicationsList({
  applications,
  selectedId,
  onSelect
}: JobApplicationsListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('date-desc');
  const [sortAnchorEl, setSortAnchorEl] = useState<null | HTMLElement>(null);
  const [calendarAnchorEl, setCalendarAnchorEl] = useState<null | HTMLElement>(null);

  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // 1. Mapeo de fechas y límites dinámicos (mínima histórica y máxima fijada en la fecha local de hoy)
  const { minDateStr, maxDateStr, appsPerDay } = useMemo(() => {
    const counts: Record<string, number> = {};
    let min = '9999-99-99';

    applications.forEach((app) => {
      const d = app.date.substring(0, 10);
      counts[d] = (counts[d] || 0) + 1;
      if (d < min) min = d;
    });

    const todayStr = getLocalTodayString();
    const safeMin = min === '9999-99-99' ? todayStr : min;
    const safeMax = todayStr; // Tope máximo fijado exactamente al día de hoy local (UTC-5)

    return { minDateStr: safeMin, maxDateStr: safeMax, appsPerDay: counts };
  }, [applications]);

  // 2. Subconjunto de postulaciones filtradas por fecha seleccionada
  const dateFilteredApps = useMemo(() => {
    if (!selectedDate) return applications;
    return applications.filter((app) => app.date.startsWith(selectedDate));
  }, [applications, selectedDate]);

  // 3. Extraer lista única de empresas que tienen postulaciones en la fecha seleccionada
  const companiesList = useMemo(() => {
    const map = new Map<string, number>();
    dateFilteredApps.forEach((app) => {
      const c = app.company.trim();
      map.set(c, (map.get(c) || 0) + 1);
    });
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [dateFilteredApps]);

  // 4. Conteos por estado dentro de la fecha seleccionada
  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = { all: dateFilteredApps.length };
    dateFilteredApps.forEach((app) => {
      counts[app.status] = (counts[app.status] || 0) + 1;
    });
    return counts;
  }, [dateFilteredApps]);

  // 5. Auto-reset de selectores si la empresa o estado ya no existe en la fecha activa
  useEffect(() => {
    if (selectedCompany !== 'all') {
      const exists = companiesList.some(([c]) => c === selectedCompany);
      if (!exists) setSelectedCompany('all');
    }
  }, [companiesList, selectedCompany]);

  useEffect(() => {
    if (selectedStatus !== 'all') {
      const exists = Boolean(statusCounts[selectedStatus]);
      if (!exists) setSelectedStatus('all');
    }
  }, [statusCounts, selectedStatus]);

  // Estado del mes visualizado en el calendario
  const [calYear, setCalYear] = useState<number>(() => {
    const d = new Date();
    return d.getFullYear();
  });
  const [calMonth, setCalMonth] = useState<number>(() => {
    const d = new Date();
    return d.getMonth();
  });

  const handleOpenCalendar = (event: React.MouseEvent<HTMLElement>) => {
    if (selectedDate) {
      const [y, m] = selectedDate.split('-').map(Number);
      setCalYear(y);
      setCalMonth(m - 1);
    } else if (maxDateStr) {
      const [y, m] = maxDateStr.split('-').map(Number);
      setCalYear(y);
      setCalMonth(m - 1);
    }
    setCalendarAnchorEl(event.currentTarget);
  };

  const minYear = parseInt(minDateStr.substring(0, 4), 10);
  const minMonth = parseInt(minDateStr.substring(5, 7), 10) - 1;
  const maxYear = parseInt(maxDateStr.substring(0, 4), 10);
  const maxMonth = parseInt(maxDateStr.substring(5, 7), 10) - 1;

  const canPrevMonth = calYear > minYear || (calYear === minYear && calMonth > minMonth);
  const canNextMonth = calYear < maxYear || (calYear === maxYear && calMonth < maxMonth);

  const handlePrevMonth = () => {
    if (!canPrevMonth) return;
    if (calMonth === 0) {
      setCalYear(calYear - 1);
      setCalMonth(11);
    } else {
      setCalMonth(calMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (!canNextMonth) return;
    if (calMonth === 11) {
      setCalYear(calYear + 1);
      setCalMonth(0);
    } else {
      setCalMonth(calMonth + 1);
    }
  };

  // Cálculo de la grilla de días del mes
  const calendarDays = useMemo(() => {
    const firstDayOfWeek = (new Date(calYear, calMonth, 1).getDay() + 6) % 7; // Lunes = 0
    const totalDays = new Date(calYear, calMonth + 1, 0).getDate();
    const prevMonthTotalDays = new Date(calYear, calMonth, 0).getDate();

    const days: Array<{
      dayNum: number;
      dateStr: string;
      isCurrentMonth: boolean;
      isSelectable: boolean;
      count: number;
    }> = [];

    // Relleno mes anterior
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const dayNum = prevMonthTotalDays - i;
      const m = calMonth === 0 ? 12 : calMonth;
      const y = calMonth === 0 ? calYear - 1 : calYear;
      const dateStr = `${y}-${String(m).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
      days.push({
        dayNum,
        dateStr,
        isCurrentMonth: false,
        isSelectable: false,
        count: appsPerDay[dateStr] || 0
      });
    }

    // Días del mes actual
    for (let d = 1; d <= totalDays; d++) {
      const dateStr = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const isSelectable = dateStr >= minDateStr && dateStr <= maxDateStr;
      days.push({
        dayNum: d,
        dateStr,
        isCurrentMonth: true,
        isSelectable,
        count: appsPerDay[dateStr] || 0
      });
    }

    // Relleno mes siguiente
    const remaining = (7 - (days.length % 7)) % 7;
    for (let d = 1; d <= remaining; d++) {
      const m = calMonth === 11 ? 1 : calMonth + 2;
      const y = calMonth === 11 ? calYear + 1 : calYear;
      const dateStr = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      days.push({
        dayNum: d,
        dateStr,
        isCurrentMonth: false,
        isSelectable: false,
        count: appsPerDay[dateStr] || 0
      });
    }

    return days;
  }, [calYear, calMonth, minDateStr, maxDateStr, appsPerDay]);

  const handleSortClick = (event: React.MouseEvent<HTMLElement>) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleSortClose = (newSort?: string) => {
    if (newSort) setSortBy(newSort);
    setSortAnchorEl(null);
  };

  const filteredApplications = useMemo(() => {
    const list = dateFilteredApps.filter((app) => {
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
  }, [dateFilteredApps, searchQuery, selectedCompany, selectedStatus, sortBy]);

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
      {/* FILA 2: Select Empresas + Select Estados + Botón Calendario */}
      {/* ========================================================= */}
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: selectedDate ? 1 : 1.5 }}>
        {/* Select de Empresas (Reactivo a la fecha activa) */}
        <FormControl size="small" sx={{ flexGrow: 1, minWidth: 0 }}>
          <Select
            value={selectedCompany}
            onChange={(e: SelectChangeEvent) => setSelectedCompany(e.target.value)}
            displayEmpty
            renderValue={(val) => {
              if (val === 'all') return 'Empresas (' + dateFilteredApps.length + ')';
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
              <ListItemText primary={`Todas las empresas (${dateFilteredApps.length})`} />
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

        {/* Select de Estados (Reactivo a la fecha activa) */}
        <FormControl size="small" sx={{ flexGrow: 1, minWidth: 0 }}>
          <Select
            value={selectedStatus}
            onChange={(e: SelectChangeEvent) => setSelectedStatus(e.target.value)}
            displayEmpty
            renderValue={(val) => {
              if (val === 'all') return 'Estados (' + dateFilteredApps.length + ')';
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
              <ListItemText primary={`Todos los estados (${dateFilteredApps.length})`} />
            </MenuItem>
            {Object.entries(STATUS_CONFIG)
              .filter(([statusKey]) => Boolean(statusCounts[statusKey]))
              .map(([statusKey, config]) => {
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

        {/* Botón Calendario */}
        <Tooltip title={selectedDate ? `Filtrando por: ${selectedDate}` : 'Filtrar por fecha'}>
          <IconButton
            size="small"
            onClick={handleOpenCalendar}
            sx={{
              border: '1px solid',
              borderColor: selectedDate ? 'primary.main' : 'divider',
              borderRadius: 1.5,
              p: 0.8,
              bgcolor: selectedDate ? (isDark ? 'rgba(59, 130, 246, 0.18)' : 'rgba(37, 99, 235, 0.12)') : 'transparent',
              color: selectedDate ? 'primary.main' : 'text.secondary',
              flexShrink: 0,
              transition: 'all 0.15s ease',
              '&:hover': {
                borderColor: 'primary.main',
                color: 'primary.main'
              }
            }}
          >
            <Badge
              color="primary"
              variant="dot"
              invisible={!selectedDate}
              sx={{ '& .MuiBadge-badge': { right: -2, top: -2 } }}
            >
              <CalendarTodayIcon fontSize="small" />
            </Badge>
          </IconButton>
        </Tooltip>
      </Stack>

      {/* Chip de Filtro Activo por Fecha */}
      {selectedDate && (
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
          <Chip
            size="small"
            color="primary"
            variant="outlined"
            icon={<CalendarTodayIcon sx={{ fontSize: '0.85rem !important' }} />}
            label={`Fecha: ${selectedDate} (${filteredApplications.length})`}
            onDelete={() => setSelectedDate(null)}
            sx={{
              fontSize: '0.75rem',
              fontWeight: 600,
              borderRadius: 1.5,
              bgcolor: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.06)'
            }}
          />
        </Stack>
      )}

      {/* Popover del Calendario */}
      <Popover
        open={Boolean(calendarAnchorEl)}
        anchorEl={calendarAnchorEl}
        onClose={() => setCalendarAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 2,
            width: 290,
            borderRadius: 3,
            boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.12)',
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper'
          }
        }}
      >
        {/* Cabecera del Calendario: Mes, Año y Flechas de Navegación */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1.5 }}>
          <IconButton size="small" onClick={handlePrevMonth} disabled={!canPrevMonth}>
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.88rem' }}>
            {MONTH_NAMES[calMonth]} {calYear}
          </Typography>
          <IconButton size="small" onClick={handleNextMonth} disabled={!canNextMonth}>
            <ChevronRightIcon fontSize="small" />
          </IconButton>
        </Stack>

        {/* Encabezado de Días de la Semana */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 0.5, mb: 1, textAlign: 'center' }}>
          {WEEKDAYS.map((w) => (
            <Typography key={w} variant="caption" sx={{ fontSize: '0.7rem', fontWeight: 700, color: 'text.secondary' }}>
              {w}
            </Typography>
          ))}
        </Box>

        {/* Grilla de Días */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 0.5, mb: 2 }}>
          {calendarDays.map((item, idx) => {
            const isSelected = selectedDate === item.dateStr;
            const hasApps = item.count > 0;

            return (
              <Box
                key={idx}
                onClick={() => {
                  if (item.isSelectable) {
                    setSelectedDate(isSelected ? null : item.dateStr);
                    setCalendarAnchorEl(null);
                  }
                }}
                sx={{
                  position: 'relative',
                  height: 32,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 1.5,
                  cursor: item.isSelectable ? 'pointer' : 'default',
                  opacity: !item.isCurrentMonth ? 0.25 : item.isSelectable ? 1 : 0.35,
                  bgcolor: isSelected
                    ? 'primary.main'
                    : hasApps
                    ? isDark
                      ? 'rgba(59, 130, 246, 0.2)'
                      : 'rgba(37, 99, 235, 0.1)'
                    : 'transparent',
                  color: isSelected
                    ? '#ffffff'
                    : hasApps
                    ? 'primary.main'
                    : 'text.primary',
                  fontWeight: isSelected || hasApps ? 700 : 400,
                  fontSize: '0.78rem',
                  border: '1px solid',
                  borderColor: isSelected
                    ? 'primary.main'
                    : hasApps
                    ? isDark
                      ? 'rgba(59, 130, 246, 0.4)'
                      : 'rgba(37, 99, 235, 0.3)'
                    : 'transparent',
                  transition: 'all 0.15s ease',
                  '&:hover': item.isSelectable
                    ? {
                        bgcolor: isSelected ? 'primary.dark' : isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                        borderColor: 'primary.light'
                      }
                    : {}
                }}
              >
                <span>{item.dayNum}</span>
                {hasApps && !isSelected && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 2,
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      bgcolor: 'primary.main'
                    }}
                  />
                )}
                {hasApps && isSelected && (
                  <Typography
                    variant="caption"
                    sx={{
                      position: 'absolute',
                      top: -4,
                      right: -4,
                      bgcolor: 'error.main',
                      color: '#fff',
                      fontSize: '0.6rem',
                      px: 0.4,
                      borderRadius: 1,
                      fontWeight: 800,
                      lineHeight: 1.2
                    }}
                  >
                    {item.count}
                  </Typography>
                )}
              </Box>
            );
          })}
        </Box>

        {/* Acciones Rápidas del Calendario */}
        <Divider sx={{ my: 1 }} />
        <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
          <Button
            size="small"
            variant="text"
            onClick={() => {
              setSelectedDate(null);
              setCalendarAnchorEl(null);
            }}
            sx={{ fontSize: '0.75rem', textTransform: 'none', px: 1, py: 0.4 }}
          >
            Todas ({applications.length})
          </Button>

          {appsPerDay[maxDateStr] && (
            <Button
              size="small"
              variant={selectedDate === maxDateStr ? 'contained' : 'outlined'}
              onClick={() => {
                setSelectedDate(maxDateStr);
                setCalendarAnchorEl(null);
              }}
              sx={{ fontSize: '0.75rem', textTransform: 'none', px: 1, py: 0.4, borderRadius: 1.5 }}
            >
              Hoy ({appsPerDay[maxDateStr]})
            </Button>
          )}
        </Stack>
      </Popover>

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
                <Stack spacing={0.6} sx={{ width: '100%' }}>
                  {/* Título Principal: Cargo al que se ha postulado */}
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" gap={1}>
                    <Typography
                      variant="subtitle2"
                      fontWeight="700"
                      color={isSelected ? 'primary.main' : 'text.primary'}
                      sx={{ fontSize: '0.92rem', lineHeight: 1.3 }}
                    >
                      {app.role}
                    </Typography>
                    <Chip
                      label={statusInfo.label}
                      size="small"
                      color={statusInfo.color}
                      sx={{ height: 20, fontSize: '0.68rem', fontWeight: 600, flexShrink: 0 }}
                    />
                  </Stack>

                  {/* Subtítulo: Nombre de la Empresa */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                    <BusinessIcon sx={{ fontSize: 14, color: isSelected ? 'primary.main' : 'text.secondary' }} />
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        color: isSelected ? (isDark ? 'primary.light' : 'primary.dark') : 'text.secondary',
                        lineHeight: 1.3
                      }}
                    >
                      {app.company}
                    </Typography>
                  </Box>

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
