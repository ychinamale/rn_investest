import React, {useState} from 'react';
import {Modal} from '../../shared/components/modal';
import {StyledText, StyledView} from './deadzone.styles';

export function Deadzone() {
  const [showModal, setShowModal] = useState(true);
  return (
    <StyledView>
      <StyledText>
        ☠️{'\n'}
        {'\n'}
        Simulator bro?{'\n'}
        Not cool bro.{'\n'}
      </StyledText>
      <Modal isModalVisible={showModal} onDismiss={() => setShowModal(false)} />
    </StyledView>
  );
}
