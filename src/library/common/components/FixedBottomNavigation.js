import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { dashboardMainRoutes } from '../../../main/router/routes/dashboardMainRoutes';
import { Link as RouterLink } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

// eslint-disable-next-line react/prop-types
export default function FixedBottomNavigation({ children }) {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <CssBaseline />
      {children}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {dashboardMainRoutes.map((item, i) => (
            <BottomNavigationAction
              key={i}
              label={item.label}
              icon={item.icon}
              component={RouterLink}
              to={item.route}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
}
