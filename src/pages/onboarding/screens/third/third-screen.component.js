import React from 'react';
import {View} from 'react-native';
import {StyledView} from './third-screen.styles';
import {Button} from '../../../../shared/components/button';

export function ThirdScreen() {
  return (
    <StyledView>
      <View>
        <Button variant={'link'}>Press me</Button>
        <Button variant={'secondary'}>Press me</Button>
        <Button variant={'primary'}>Press me</Button>
      </View>
    </StyledView>
  );
}
