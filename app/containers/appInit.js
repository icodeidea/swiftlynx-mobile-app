import React from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
} from 'react-native';

//initializing application
const AppInit: () => Node = () => {
    return (
        <View>
            <Text style={{color: '#000', fontSize: 20}}>App Initialization</Text>
        </View>
    );
};

export default AppInit;