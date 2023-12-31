import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {FirstScreen, SecondScreen, ThirdScreen} from '../screens';
import {NamePill} from '../../../widgets';
import {
  OnboardingParamList,
  OnboardingScreens,
} from './onboarding-navigator.types';

const Drawer = createDrawerNavigator<OnboardingParamList>();

const showNamePill = () => <NamePill />;

function OnboardingNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={OnboardingScreens.FIRST} component={FirstScreen} />
      <Drawer.Screen
        name={OnboardingScreens.SECOND}
        component={SecondScreen}
        options={{headerRight: showNamePill}}
      />
      <Drawer.Screen
        name={OnboardingScreens.THIRD}
        component={ThirdScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

export {OnboardingNavigator, OnboardingScreens};
