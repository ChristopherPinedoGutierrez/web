import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import FixedBottomNavigation from '../../library/common/components/FixedBottomNavigation';
import { Outlet } from 'react-router-dom';
import { DesktopAppBar } from '../../library/common/components/DesktopAppBar';

function DashboardMain() {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      {matchesMD ? (
        <DesktopAppBar>
          <Outlet />
        </DesktopAppBar>
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
