import React, { lazy, Suspense } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useDispatch, useSelector} from "react-redux";

const Stack = createNativeStackNavigator();

//initializing auth View
export const Views = () => {
    return (
        <Suspense fallback={<Text>Loading....</Text>}>
            <Stack.Navigator 
                screenOptions={{
                headerShown: false
                }} 
                initialRouteName="SignIn"
            >
                <Stack.Screen name="SignIn" component={lazy(() => import('./signIn'))} />
                <Stack.Screen name="SignUp" component={lazy(() => import('./signUp'))} />
            </Stack.Navigator>
        </Suspense>
    );
};