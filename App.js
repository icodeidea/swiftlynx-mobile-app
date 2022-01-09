/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from  "react-native-splash-screen";
import {SharedComponent} from './app/components';
import MainApp from './app/mainApp';

const App: () => Node = () => {
  //Hide Splash screen on app load.
  React.useEffect(() => {
    SplashScreen.hide();
  });

  const [isNewToApp, setNewToApp] = useState(true);

  const isDarkMode = useColorScheme() === 'dark';

  const getStarted = () => {
    setNewToApp(false);
  }

  return (
    <>
      {
        !isNewToApp && (
          <NavigationContainer>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <MainApp/>
          </NavigationContainer>
        )
      }
      {
        isNewToApp && <SharedComponent.OnBoarding getStarted={getStarted}/>
      }
    </>
  );
};

export default App;
