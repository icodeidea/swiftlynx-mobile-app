import React, {useEffect} from "react";
import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';
import {
  Text,
  View,
  SafeAreaView,
  useColorScheme,
} from 'react-native';

const Screen = (props) => {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView  style={backgroundStyle}>
      <View>
          <Text>Sign In Page</Text>
      </View>
    </SafeAreaView>   
  )
};

export default Screen;