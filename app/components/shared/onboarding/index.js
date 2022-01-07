import React from 'react';
import type {Node} from 'react';
import {
    StatusBar,
    Alert
  } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper'; // 0.4.0
import LottieView from 'lottie-react-native';

import { 
    Button, 
    Icon 
  } from 'react-native-elements';

export const OnBoarding: () => Node = ({ getStarted }) => {

    return (

    <Onboarding
        showDone={false}
        onSkip={() => getStarted()}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <LottieView
                style={{width: '100%', height: 'auto'}} 
                source={require('~/assets/lottie/trader.json')} 
                autoPlay 
                loop 
              />
            ),
            title: 'Save and Invest',
            subtitle: 'find over a million projects and invest your money',
          },
          {
            backgroundColor: '#fff',
            image: (
              <LottieView
                style={{width: '100%', height: 'auto'}} 
                source={require('~/assets/lottie/capital-fund.json')} 
                autoPlay 
                loop 
              />
            ),
            title: 'Get Funding',
            subtitle: 'find potential investors for your business',
          },
          {
            backgroundColor: '#fff',
            image: (
              <LottieView
                style={{width: '100%', height: 'auto'}} 
                source={require('~/assets/lottie/rocket-flighting.json')} 
                autoPlay 
                loop 
              />
            ),
            title: 'Business Insights',
            subtitle: (
              <Button
                title={'Get Started'}
                containerViewStyle={{ marginTop: 20 }}
                backgroundColor={'white'}
                borderRadius={5}
                textStyle={{ color: '#003c8f' }}
                onPress={() => {
                  getStarted();
                  StatusBar.setBarStyle('default');
                }}
              />
            ),
          },
        ]}
      />
    );
};