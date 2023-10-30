import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import {FirstScreen, SecondScreen, ThirdScreen} from '../screens';

const SCREEN_NAMES = {
  FIRST: '1️⃣ First View',
  SECOND: '2️⃣ Second View',
  THIRD: '3️⃣ Third View',
};

function OnboardingNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={SCREEN_NAMES.FIRST} component={FirstScreen} />
      <Drawer.Screen name={SCREEN_NAMES.SECOND} component={SecondScreen} />
      <Drawer.Screen name={SCREEN_NAMES.THIRD} component={ThirdScreen} />
    </Drawer.Navigator>
  );
}

export {OnboardingNavigator, SCREEN_NAMES};
