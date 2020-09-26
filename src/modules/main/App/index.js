import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AboutApp from 'modules/about';
import SearchApp from 'modules/search';

import Footer from 'prosearch-components/Footer';

import './App.scss';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Noto Sans TC', 'sans-serif'].join(','),
  },
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path='/about'>
              <AboutApp />
            </Route>
            <Route path='/'>
              <SearchApp />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
