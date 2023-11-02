import React, {useState} from 'react';
import {View} from 'react-native';
import {StyledText, StyledTextInput} from './name-form.styles';
import {useProfile} from '../../features/profile';
import {logger} from '../../services/logger';
import {Button} from '../../shared/components/button';

export function NameForm() {
  const [username, setUsername] = useState();
  const [showSuccess, setShowSuccess] = useState(false);
  const {updateName} = useProfile();

  function onChangeText(text) {
    if (showSuccess) {
      setShowSuccess(false);
    }
    setUsername(text);
  }

  function onSetUsername() {
    try {
      if (username) {
        updateName(username);
      }
      setShowSuccess(true);
    } catch (error) {
      logger('onSetUsername()', error);
    } finally {
      setUsername('');
    }
  }

  return (
    <View>
      <StyledText>Please enter your name</StyledText>

      <StyledTextInput
        value={username}
        onChangeText={onChangeText}
        keyboardType="default"
      />

      <Button onPress={onSetUsername}>Update username</Button>
      {showSuccess && (
        <StyledText>That worked! Go to second view to see it! </StyledText>
      )}
    </View>
  );
}
