/* eslint-disable react/prop-types */
import { Grid, Typography } from '@mui/material';

function CardItemText({ title, content }) {
  return (
    <Grid container spacing={{ xs: 1, md: 0 }} gap={{ md: 2, lg: 4 }} alignItems={'baseline'}>
      <Grid item xs={12} md={3}>
        <Typography variant="body2">{title}</Typography>
      </Grid>
      <Grid item xs={12} md={'auto'}>
        <Typography variant="body1">{content}</Typography>
      </Grid>
    </Grid>
  );
}

export { CardItemText };
