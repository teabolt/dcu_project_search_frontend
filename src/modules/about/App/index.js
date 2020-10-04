import React from 'react';

import AppLayout from 'prosearch-components/AppLayout';

import Card from './Card';
import Header from './Header';

import './App.scss';

const App = () => {
  return (
    <AppLayout appClass='about-app' appName='About' showBreadcrumbs={true}>
      <Header />
      <Card />
    </AppLayout>
  );
};

export default App;
