import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import SongListPage from './containers/SongListPage.js'

function App() {
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: 'dark'
        },
      }),
    [],
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
