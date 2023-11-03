import React from 'react';
import ModalRN from 'react-native-modal';
import {StyledText, StyledView} from './modal.styles';

export function Modal({isModalVisible, onDismiss}) {
  return (
    <ModalRN isVisible={isModalVisible} onBackdropPress={onDismiss}>
      <StyledView>
        <StyledText>
          ✋🏾{'\n'}
          {'\n'}
          Sorry mate.{'\n'}
          No simulators past this point{'\n'}
        </StyledText>
      </StyledView>
    </ModalRN>
  );
}
