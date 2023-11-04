import React from 'react';
import {SafeView} from '../../../../widgets/safe-view';
import {StyledText, StyledView} from './second-screen.styles';
import {Button} from '../../../../shared/components/button';
import {useNavigation} from '@react-navigation/native';
import {OnboardingScreens} from '../../onboarding-navigator/onboarding-navigator.types';
import {Variants} from '../../../../app/types';

export function SecondScreen() {
  const navigation = useNavigation();
  const gotoFirst = () => {
    navigation.navigate(OnboardingScreens.FIRST);
  };

  const gotoSecond = () => {
    navigation.navigate(OnboardingScreens.SECOND);
  };

  const gotoThird = () => {
    navigation.navigate(OnboardingScreens.THIRD);
  };

  return (
    <SafeView>
      <StyledText>
        🤪 welcome to the SECOND SCREEN.{'\n\n'}These buttons can take you back
        as well 👇🏾{' '}
      </StyledText>
      <StyledView>
        <Button variant={Variants.LINK} onPress={gotoFirst}>
          First View
        </Button>
        <Button variant={Variants.LINK} onPress={gotoSecond}>
          Second View
        </Button>
        <Button variant={Variants.LINK} onPress={gotoThird}>
          Third View
        </Button>
      </StyledView>
    </SafeView>
  );
}
