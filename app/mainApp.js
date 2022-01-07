import React from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitApp from '~/containers/appInit';
import { appStore } from '~/appRedux';

const Stack = createNativeStackNavigator();
const store = appStore.configureStore();

//initializing application
const MainApp: () => Node = () => {
    return (
        <Provider store={store}>
            {/* <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="/" component={InitApp} />
                </Stack.Navigator>
            </NavigationContainer> */}
            <InitApp/>
        </Provider>
    );
};

export default MainApp;