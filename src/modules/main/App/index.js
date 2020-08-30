import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AboutApp from 'modules/about';
import SearchApp from 'modules/search';

import BackgroundOverlay from 'modules/main/components/BackgroundOverlay';
import Navbar from 'modules/main/components/Navbar';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <BackgroundOverlay />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/about'>
            <AboutApp />
          </Route>
          <Route path='/'>
            <SearchApp />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
