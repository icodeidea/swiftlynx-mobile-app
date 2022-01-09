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
        <Suspense fallback="Loading....">
            <Stack.Navigator headerMode="none" initialRouteName="Home">
                <Stack.Screen name="Home" component={() => <Text>Home Page</Text>} />
                <Stack.Screen name="Profile" component={() => <Text>Profile Page</Text>} />
            </Stack.Navigator>
        </Suspense>
    );
};