import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light'
  }
});

// eslint-disable-next-line react/prop-types
function CustomTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export { CustomTheme };
