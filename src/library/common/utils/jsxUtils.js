import { Chip, Grid } from '@mui/material';

const renderChips = (key, array, color) => {
  if (array.length === 0) return null;
  return (
    <Grid container spacing={0.25} key={key}>
      {array.map((item, index) => (
        <Grid key={index} item>
          <Chip label={item} color={color} />
        </Grid>
      ))}
    </Grid>
  );
};

export { renderChips };
