import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {FirstScreen, SecondScreen, ThirdScreen} from '../screens';
import {NamePill} from '../../../widgets';

type OnboardingParamList = {
  'First View': undefined;
  'Second View': undefined;
  'Third View': undefined;
};

const Drawer = createDrawerNavigator<OnboardingParamList>();

const showNamePill = () => <NamePill />;

function OnboardingNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="First View" component={FirstScreen} />
      <Drawer.Screen
        name="Second View"
        component={SecondScreen}
        options={{headerRight: showNamePill}}
      />
      <Drawer.Screen
        name="Third View"
        component={ThirdScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

export {OnboardingNavigator};
