/* eslint-disable react/prop-types */
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useState } from 'react';

// eslint-disable-next-line react/prop-types

const ThemeContext = createContext();

function CustomTheme({ children }) {
  const [mode, setMode] = useState('dark');

  const theme = createTheme({
    palette: {
      mode: mode,
      projectLevels: {
        Junior: '#aad742',
        Intermediate: '#f1b604',
        Advanced: '#f48925',
        Guru: '#ed2c49',
        contrastText: '#242105'
      }
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
