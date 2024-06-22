import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    projectLevels: {
      Junior: '#aad742',
      Intermediate: '#f1b604',
      Advanced: '#f48925',
      Guru: '#ed2c49',
      contrastText: '#242105'
    }
  }
});

// eslint-disable-next-line react/prop-types
function CustomTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export { CustomTheme };
