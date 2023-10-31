import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {FirstScreen, SecondScreen, ThirdScreen} from '../screens';
import {NamePill} from '../../../widgets';

const Drawer = createDrawerNavigator();

const SCREEN_NAMES = {
  FIRST: '1️⃣ First View',
  SECOND: '2️⃣ Second View',
  THIRD: '3️⃣ Third View',
};

const showNamePill = () => <NamePill />;

function OnboardingNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={SCREEN_NAMES.FIRST} component={FirstScreen} />
      <Drawer.Screen
        name={SCREEN_NAMES.SECOND}
        component={SecondScreen}
        options={{headerRight: showNamePill}}
      />
      <Drawer.Screen name={SCREEN_NAMES.THIRD} component={ThirdScreen} />
    </Drawer.Navigator>
  );
}

export {OnboardingNavigator, SCREEN_NAMES};
