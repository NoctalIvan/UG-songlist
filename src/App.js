import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import SongListPage from './containers/SongListPage.js'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1>Ivan's Playlist <span role="img" aria-label="guitar">🎸</span></h1>
          <SongListPage></SongListPage>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
