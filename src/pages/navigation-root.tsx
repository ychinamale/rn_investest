import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {OnboardingNavigator} from './onboarding';

export function NavigationRoot() {
  return (
    <NavigationContainer>
      <OnboardingNavigator />
    </NavigationContainer>
  );
}
