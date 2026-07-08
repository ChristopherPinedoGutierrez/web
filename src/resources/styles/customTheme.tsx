import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { createContext, useEffect, useState, ReactNode } from 'react';

// Declaración de módulos para extender el tema de MUI en TypeScript
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
  }
  interface Theme {
    custom: {
      svgBackgroundDark: string;
      svgBackgroundLight: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      svgBackgroundDark?: string;
      svgBackgroundLight?: string;
    };
  }
  interface Palette {
    projectLevels: {
      Newbie: string;
      Junior: string;
      Intermediate: string;
      Advanced: string;
      Expert: string;
      contrastText: string;
    };
  }
  interface PaletteOptions {
    projectLevels?: {
      Newbie?: string;
      Junior?: string;
      Intermediate?: string;
      Advanced?: string;
      Expert?: string;
      contrastText?: string;
    };
  }
}

interface ThemeContextType {
  mode: string;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'dark',
  toggleMode: () => {}
});

interface CustomThemeProps {
  children: ReactNode;
}

function CustomTheme({ children }: CustomThemeProps) {
  const storedMode = localStorage.getItem('themeMode') || 'dark';

  const [mode, setMode] = useState<string>(storedMode);

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 1024,
        xl: 1200,
        xxl: 1440
      }
    },
    palette: {
      mode: mode as 'light' | 'dark',
      projectLevels: {
        Newbie: '#6abecd',
        Junior: '#aad742',
        Intermediate: '#f1b604',
        Advanced: '#f48925',
        Expert: '#ed2c49',
        contrastText: '#242105'
      }
    },
    custom: {
      svgBackgroundDark: `
      background-color: #000000;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
      `,
      svgBackgroundLight: `
      background-color: #FFFFFF;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23EEEEEE' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
      `
    }
  });

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export { CustomTheme, ThemeContext };
