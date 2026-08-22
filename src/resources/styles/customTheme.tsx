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
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h5: {
        fontWeight: 600,
      }
    },
    shape: {
      borderRadius: 16
    },
    palette: {
      mode: mode as 'light' | 'dark',
      primary: {
        main: mode === 'dark' ? '#3b82f6' : '#2563eb', // Blue modern accent
      },
      background: {
        default: mode === 'dark' ? '#0B0F19' : '#F9FAFB',
        paper: mode === 'dark' ? '#111827' : '#FFFFFF',
      },
      divider: mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
      projectLevels: {
        Newbie: '#6abecd',
        Junior: '#aad742',
        Intermediate: '#f1b604',
        Advanced: '#f48925',
        Expert: '#ed2c49',
        contrastText: '#242105'
      }
    },
    components: {
        MuiSkeleton: {
          styleOverrides: {
            root: {
              '&::after': {
                animationDelay: '0s !important',
              }
            }
          }
        },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none', // Remove MUI default dark mode overlay
            boxShadow: 'none',
            border: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 8
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500
          }
        }
      },
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            scrollBehavior: 'smooth'
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none'
          }
        }
      }
    },
    custom: {
      svgBackgroundDark: `
      background-color: #0B0F19;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23111827' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
      `,
      svgBackgroundLight: `
      background-color: #F9FAFB;
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

