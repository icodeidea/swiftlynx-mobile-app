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
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

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

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getStarted = () => {
    setNewToApp(false);
  }

  return (
    <>
    {
      !isNewToApp && (
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <MainApp/>
        </SafeAreaView>
      )
    }
    {
      isNewToApp && <SharedComponent.OnBoarding getStarted={getStarted}/>
    }
    </>
  );
};

export default App;
