import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

// eslint-disable-next-line react/prop-types
function AccordionFilter() {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="filter">
        <FilterAltIcon /> Filtros
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.
      </AccordionDetails>
      <AccordionActions>
        <Button>Cancelar</Button>
        <Button>Aceptar</Button>
      </AccordionActions>
    </Accordion>
  );
}

export { AccordionFilter };
