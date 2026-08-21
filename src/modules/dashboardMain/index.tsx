import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import FixedBottomNavigation from '../../library/common/components/FixedBottomNavigation';
import { Outlet } from 'react-router-dom';
import { DesktopAppBar } from '../../library/common/components/DesktopAppBar';
import { GlobalFooter } from '../../library/common/components/GlobalFooter';
import { ScrollToTopFab } from '../../library/common/components/ScrollToTopFab';
import { Box } from '@mui/material';

function DashboardMain() {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ flexGrow: 1 }}>
        {matchesMD ? (
          <DesktopAppBar>
            <Outlet />
          </DesktopAppBar>
        ) : (
          <FixedBottomNavigation>
            <Outlet />
          </FixedBottomNavigation>
        )}
      </Box>
      <GlobalFooter />
      <ScrollToTopFab />
    </Box>
  );
}

export { DashboardMain };
