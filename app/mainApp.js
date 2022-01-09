import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import InitApp from '~/containers/appInit';
import { appStore } from '~/appRedux';

const store = appStore.configureStore();

//initializing application
const MainApp = () => {
    return (
        <Provider store={store}>
            <InitApp/>
        </Provider>
    );
};

export default MainApp;