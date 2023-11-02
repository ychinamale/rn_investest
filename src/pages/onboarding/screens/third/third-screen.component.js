import React from 'react';
import {View} from 'react-native';
import SlideButton from 'rn-slide-button';
import {FontAwesomeIcon as FaIcon} from '@fortawesome/react-native-fontawesome';

import {
  slideButtonStyles,
  StyledView,
  StyledWrapper,
} from './third-screen.styles';
import {Button} from '../../../../shared/components/button';

const showThumbIcon = () => {
  return <FaIcon icon="fa-gem" color="white" size={18} />;
};

export function ThirdScreen() {
  const onSlide = () => {
    console.log('Slide into your DMS!');
  };

  return (
    <StyledView>
      <View>
        <Button variant={'link'}>Press me</Button>
        <Button variant={'secondary'}>Press me</Button>
        <Button variant={'primary'}>Press me</Button>
        <StyledWrapper>
          <SlideButton
            title="Slide me to continue"
            {...slideButtonStyles}
            onReachedToEnd={onSlide}
            icon={showThumbIcon()}
          />
        </StyledWrapper>
      </View>
    </StyledView>
  );
}
