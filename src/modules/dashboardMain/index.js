import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import FixedBottomNavigation from '../../library/common/components/FixedBottomNavigation';
import PersistentDrawerLeft from '../../library/common/components/PersistentDrawerLeft';
import { Outlet } from 'react-router-dom';

function DashboardMain() {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      {matchesMD ? (
        // DESKTOP
        <PersistentDrawerLeft>
          <Outlet />
        </PersistentDrawerLeft>
      ) : (
        // MOBILE
        <FixedBottomNavigation>
          <Outlet />
        </FixedBottomNavigation>
      )}
    </>
  );
}

export { DashboardMain };
