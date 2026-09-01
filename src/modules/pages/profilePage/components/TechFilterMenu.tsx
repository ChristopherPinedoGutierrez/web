/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Box,
  Typography,
  Stack,
  Chip,
  Divider,
  Checkbox,
  TextField,
  InputAdornment,
  Tooltip,
  IconButton
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PendingIcon from '@mui/icons-material/Pending';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useMemo } from 'react';

const STANDARD_AREAS = [
  { id: 'AI Engineering', name: 'AI Engineering' },
  { id: 'Frontend', name: 'Frontend' },
  { id: 'Backend', name: 'Backend' },
  { id: 'Mobile', name: 'Mobile' },
  { id: 'Database', name: 'Database' },
  { id: 'DevOps & Tools', name: 'DevOps & Tools' },
  { id: 'Management', name: 'Management' },
  { id: 'Testing', name: 'Testing' },
  { id: 'Design', name: 'Design' },
  { id: 'Architecture & Fundamentals', name: 'Architecture & Fundamentals' }
].sort((a, b) => a.name.localeCompare(b.name));

const DOMAIN_STATES = [
  { id: 'aprendiendo', name: 'Aprendiendo', Icon: LocalLibraryIcon },
  { id: 'conocidas', name: 'Conocidas', Icon: SchoolIcon },
  { id: 'pendientes', name: 'Pendientes', Icon: PendingIcon }
].sort((a, b) => a.name.localeCompare(b.name));

function TechFilterMenu({ 
  checkedAreas, handleCheckArea, handleToggleAllAreas, 
  checkedObj, handleCheck, handleToggleAllStates, 
  disablePendientes, technologies,
  searchQuery, setSearchQuery
}) {
  const activeAreas = Object.values(checkedAreas).filter(Boolean).length;
  const totalAreas = Object.keys(checkedAreas).length;
  const isAllAreasChecked = activeAreas === totalAreas;
  const isIndeterminateAreas = activeAreas > 0 && activeAreas < totalAreas;

  const activeStates = Object.values(checkedObj).filter(Boolean).length;
  const totalStates = Object.keys(checkedObj).length;
  const isAllStatesChecked = activeStates === totalStates;
  const isIndeterminateStates = activeStates > 0 && activeStates < totalStates;

  // Calcula contadores dinámicos basados en la búsqueda
  const counts = useMemo(() => {
    const areaCount = {};
    const stateCount = {};
    Object.values(technologies || {}).forEach((tech: any) => {
      const matchesSearch = !searchQuery || tech.name.toLowerCase().includes(searchQuery.toLowerCase());
      if (matchesSearch) {
        areaCount[tech.area] = (areaCount[tech.area] || 0) + 1;
        stateCount[tech.state.name] = (stateCount[tech.state.name] || 0) + 1;
      }
    });
    return { areaCount, stateCount };
  }, [technologies, searchQuery]);

  const totalTechs = Object.keys(technologies || {}).length;

  return (
    <Box sx={{ 
      borderRadius: 2, 
      pt: 4,
      pb: 4,
      px: 3, 
      bgcolor: 'background.paper', 
      width: { md: '300px' },
      position: { md: 'sticky' },
      top: { md: 96 },
      height: { md: 'calc(100vh - 128px)' },
      overflowY: { md: 'auto' },
      '&::-webkit-scrollbar': {
        width: '6px',
      },
      '&::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '10px',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: 'rgba(255,255,255,0.2)',
      }
    }}>
      <Stack spacing={3}>
        <Box>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
            <Typography variant="subtitle1" color="text.secondary" fontWeight="bold">BUSCAR CONOCIMIENTO</Typography>
            <Box component="span" sx={{ fontSize: '0.75rem', opacity: 0.7, bgcolor: 'action.selected', px: 0.8, py: 0.2, borderRadius: 1, fontWeight: 'bold' }}>
              {totalTechs}
            </Box>
          </Stack>
          <TextField
            fullWidth
            size="small"
            placeholder=""
            value={searchQuery || ''}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: searchQuery ? (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={() => setSearchQuery('')} edge="end">
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ) : null,
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 1,
                fontSize: '0.875rem',
              }
            }}
          />
        </Box>

        <Divider />

        <Box>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
            <Typography variant="subtitle1" color="text.secondary" fontWeight="bold">ÁREAS DE CONOCIMIENTO</Typography>
            <Checkbox
              size="small"
              checked={isAllAreasChecked}
              indeterminate={isIndeterminateAreas}
              onChange={() => handleToggleAllAreas(!(isAllAreasChecked || isIndeterminateAreas))}
              sx={{ p: 0 }}
            />
          </Stack>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {STANDARD_AREAS.map((a) => {
              const count = counts.areaCount[a.id] || 0;
              const isDisabled = count === 0;
              return (
                <Chip
                  key={a.id}
                  label={
                    <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      {a.name}
                      <Box component="span" sx={{ fontSize: '0.7rem', opacity: 0.7, bgcolor: 'action.selected', px: 0.6, borderRadius: 1 }}>
                        {count}
                      </Box>
                    </Box>
                  }
                  onClick={isDisabled ? undefined : handleCheckArea(a.id)}
                  disabled={isDisabled}
                  color={checkedAreas[a.id] ? 'primary' : 'default'}
                  variant={checkedAreas[a.id] ? 'filled' : 'outlined'}
                />
              );
            })}
          </Stack>
        </Box>

        <Divider />

        <Box>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="subtitle1" color="text.secondary" fontWeight="bold">ESTADO DE DOMINIO</Typography>
            </Box>
            <Checkbox
              size="small"
              checked={isAllStatesChecked}
              indeterminate={isIndeterminateStates}
              onChange={() => handleToggleAllStates(!(isAllStatesChecked || isIndeterminateStates))}
              sx={{ p: 0 }}
            />
          </Stack>
          <Stack direction="column" gap={1}>
            {DOMAIN_STATES.map((state) => {
              const count = counts.stateCount[state.id] || 0;
              const isDisabled = (disablePendientes && state.id === 'pendientes') || count === 0;
              
              let tooltipText = "";
              if (state.id === 'conocidas') tooltipText = "Tecnologías que conozco por estudios académicos o tengo proyectos relacionados.";
              else if (state.id === 'aprendiendo') tooltipText = "Tecnologías que estoy aprendiendo en curso mediante el desarrollo de proyectos actuales.";
              else if (state.id === 'pendientes') tooltipText = "Tecnologías con las que siento afinidad y están en mi lista para desarrollar nuevas soluciones.";

              return (
                <Chip
                  key={state.id}
                  icon={<state.Icon fontSize="small" />}
                  label={
                    <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexGrow: 1, justifyContent: 'space-between' }}>
                      <Box component="span">{state.name}</Box>
                      <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Box component="span" sx={{ fontSize: '0.7rem', opacity: 0.7, bgcolor: 'action.selected', px: 0.6, borderRadius: 1 }}>
                          {count}
                        </Box>
                        <Tooltip title={<Typography variant="body2">{tooltipText}</Typography>} placement="top">
                          <InfoOutlinedIcon sx={{ fontSize: 15, opacity: 0.4, cursor: 'help' }} />
                        </Tooltip>
                      </Box>
                    </Box>
                  }
                  onClick={isDisabled ? undefined : handleCheck(state.id)}
                  disabled={isDisabled}
                  color={checkedObj[state.id] ? 'primary' : 'default'}
                  variant={checkedObj[state.id] ? 'filled' : 'outlined'}
                  sx={{ width: '100%', justifyContent: 'flex-start', '& .MuiChip-label': { flexGrow: 1, pr: 1 } }}
                />
              );
            })}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export { TechFilterMenu };
