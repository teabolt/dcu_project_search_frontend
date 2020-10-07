import React from 'react';

import AppLayout from 'prosearch-components/AppLayout';

import Card from './Card';
import Header from './Header';

import './App.scss';

const appClass = 'about-app';

const App = () => {
  return (
    <AppLayout appClass={appClass} appName='About' showBreadcrumbs={true}>
      <Header className={appClass} />
      <Card />
    </AppLayout>
  );
};

export default App;
