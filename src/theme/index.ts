import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#CB9D82',
      main: '#B76A40',
    },
    secondary: {
      main: '#282828',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
