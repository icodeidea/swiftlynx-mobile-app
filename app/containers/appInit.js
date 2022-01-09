import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useDispatch, useSelector} from "react-redux";
import { Auth, MainApp} from './layouts';

const Stack = createNativeStackNavigator();

//initializing application
const AppInit = () => {
    const dispatch = useDispatch();
    // const token = useSelector(({auth}) => auth.token);
    // const authUser = useSelector(({auth}) => auth.authUser);
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Auth"
        >
            <Stack.Screen name="Auth" component={Auth.Layout} />
            <Stack.Screen name="MainApp" component={MainApp.Layout} />
        </Stack.Navigator>
    );
};

export default AppInit;