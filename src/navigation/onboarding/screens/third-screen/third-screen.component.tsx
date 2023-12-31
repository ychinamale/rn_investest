import React, {useMemo} from 'react';
import {View} from 'react-native';
import SlideButton from 'rn-slide-button';
import {FontAwesomeIcon as FaIcon} from '@fortawesome/react-native-fontawesome';

import {
  slideButtonStyles,
  StyledView,
  StyledWrapper,
} from './third-screen.styles';
import {Button} from '../../../../shared/components/button';
import {logger} from '../../../../services/logger';
import {SafeView} from '../../../../widgets/safe-view';
import {colors} from '../../../../app/colors';
import {Variants} from '../../../../app/types';

const showThumbIcon = () => {
  return <FaIcon icon="fa-gem" color="white" size={18} />;
};

export function ThirdScreen() {
  const onSlide = () => {
    logger('onSlide()', 'Slide into your DMS!');
  };

  const viewStyle = useMemo(
    () => ({
      backgroundColor: colors.background.default,
    }),
    [],
  );

  return (
    <SafeView viewStyle={viewStyle}>
      <StyledView>
        <View>
          <Button variant={Variants.LINK}>Press me</Button>
          <Button variant={Variants.SECONDARY}>Press me</Button>
          <Button variant={Variants.PRIMARY}>Press me</Button>
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
    </SafeView>
  );
}
