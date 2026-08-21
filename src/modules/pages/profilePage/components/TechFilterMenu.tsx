/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Box,
  Typography,
  Stack,
  Chip,
  Divider,
  Checkbox
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PendingIcon from '@mui/icons-material/Pending';
import { useMemo } from 'react';

const STANDARD_AREAS = [
  { id: 'Frontend', name: 'Frontend' },
  { id: 'Backend', name: 'Backend' },
  { id: 'Mobile', name: 'Mobile' },
  { id: 'Database', name: 'Base de datos' },
  { id: 'DevOps', name: 'DevOps' },
  { id: 'Management', name: 'Management' }
].sort((a, b) => a.name.localeCompare(b.name));

const DOMAIN_STATES = [
  { id: 'aprendiendo', name: 'Aprendiendo', Icon: LocalLibraryIcon },
  { id: 'conocidas', name: 'Conocidas', Icon: SchoolIcon },
  { id: 'pendientes', name: 'Pendientes', Icon: PendingIcon }
].sort((a, b) => a.name.localeCompare(b.name));

function TechFilterMenu({ 
  checkedAreas, handleCheckArea, handleToggleAllAreas, 
  checkedObj, handleCheck, handleToggleAllStates, 
  disablePendientes, technologies 
}) {
  const activeAreas = Object.values(checkedAreas).filter(Boolean).length;
  const totalAreas = Object.keys(checkedAreas).length;
  const isAllAreasChecked = activeAreas === totalAreas;
  const isIndeterminateAreas = activeAreas > 0 && activeAreas < totalAreas;

  const activeStates = Object.values(checkedObj).filter(Boolean).length;
  const totalStates = Object.keys(checkedObj).length;
  const isAllStatesChecked = activeStates === totalStates;
  const isIndeterminateStates = activeStates > 0 && activeStates < totalStates;

  // Calcula contadores
  const counts = useMemo(() => {
    const areaCount = {};
    const stateCount = {};
    Object.values(technologies || {}).forEach((tech: any) => {
      // Si el elemento está visible según los filtros combinados, pero como 
      // queremos el count TOTAL estático por categoría, contamos todos.
      // Opcional: contar solo si el state opuesto está activo (se deja total por simplicidad).
      areaCount[tech.area] = (areaCount[tech.area] || 0) + 1;
      stateCount[tech.state.name] = (stateCount[tech.state.name] || 0) + 1;
    });
    return { areaCount, stateCount };
  }, [technologies]);

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
      overflowY: { md: 'auto' }
    }}>
      <Stack spacing={4}>
        <Box>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
            <Typography variant="subtitle1" color="text.secondary" fontWeight="bold">ÁREA DE DESARROLLO</Typography>
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
                  onClick={handleCheckArea(a.id)}
                  color={checkedAreas[a.id] ? 'primary' : 'default'}
                  variant={checkedAreas[a.id] ? 'filled' : 'outlined'}
                />
              );
            })}
          </Stack>
        </Box>

        <Divider />

        <Box>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
            <Typography variant="subtitle1" color="text.secondary" fontWeight="bold">ESTADO DE DOMINIO</Typography>
            <Checkbox
              size="small"
              checked={isAllStatesChecked}
              indeterminate={isIndeterminateStates}
              onChange={() => handleToggleAllStates(!(isAllStatesChecked || isIndeterminateStates))}
              sx={{ p: 0 }}
            />
          </Stack>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {DOMAIN_STATES.map((state) => {
              const count = counts.stateCount[state.id] || 0;
              const isDisabled = disablePendientes && state.id === 'pendientes';
              return (
                <Chip
                  key={state.id}
                  icon={<state.Icon fontSize="small" />}
                  label={
                    <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      {state.name}
                      <Box component="span" sx={{ fontSize: '0.7rem', opacity: 0.7, bgcolor: 'action.selected', px: 0.6, borderRadius: 1 }}>
                        {count}
                      </Box>
                    </Box>
                  }
                  onClick={isDisabled ? undefined : handleCheck(state.id)}
                  disabled={isDisabled}
                  color={checkedObj[state.id] ? 'primary' : 'default'}
                  variant={checkedObj[state.id] ? 'filled' : 'outlined'}
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
