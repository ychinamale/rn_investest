import React from 'react';
import ModalRN from 'react-native-modal';
import {StyledText, StyledView} from './modal.styles';

type ModalProps = {
  isModalVisible: boolean;
  onDismiss: () => void;
};

export function Modal(props: ModalProps) {
  const {isModalVisible, onDismiss} = props;
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
