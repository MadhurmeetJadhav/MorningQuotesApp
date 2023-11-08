import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

const App = () => {
  const Navigation = NavigationContainer;
  return (
    <Navigation>
      <MainNavigation />
    </Navigation>
  );
};

export default App;
