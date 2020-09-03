import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AboutApp from 'modules/about';
import SearchApp from 'modules/search';

import Footer from 'prosearch-components/Footer';

import './App.scss';

function App() {
  return (
    <div className='App'>
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
    </div>
  );
}

export default App;
