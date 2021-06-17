import '../styles/globals.css';
import '../styles/toastify.css';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { darkTheme, lightTheme } from '../styles/theme';

const App = function ({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={lightTheme}>
      <StylesProvider injectFirst>
        <Component {...pageProps} />
      </StylesProvider>
    </MuiThemeProvider>
  );
};

export default App;
