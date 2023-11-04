import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {OnboardingNavigator, OnboardingParamList} from './onboarding';

export function NavigationRoot() {
  return (
    <NavigationContainer>
      <OnboardingNavigator />
    </NavigationContainer>
  );
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends OnboardingParamList {}
  }
}
