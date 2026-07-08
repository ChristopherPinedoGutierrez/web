/* eslint-disable react/prop-types */
import { Grid, Typography } from '@mui/material';

function CardItemText({ title, content }) {
  return (
    <Grid container spacing={{ xs: 1, md: 0 }} gap={{ md: 2, lg: 4 }} alignItems={'baseline'}>
      <Grid item xs={12} sm={3} md={12} lg={2} xl={3}>
        <Typography variant="body2">{title}</Typography>
      </Grid>
      <Grid item xs={12} sm={'auto'} md={12} lg={'auto'}>
        <Typography variant="body1">{content}</Typography>
      </Grid>
    </Grid>
  );
}

export { CardItemText };
