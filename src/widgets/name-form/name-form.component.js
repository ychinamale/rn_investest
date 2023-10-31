import React, {useState} from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import {StyledText, StyledTextInput} from './name-form.styles';
import {useProfile} from '../../features/profile';
import {logger} from '../../services/logger';

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

function Button({onPress, children}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'},
        s.wrapperCustom,
      ]}>
      <StyledText>{children}</StyledText>
    </Pressable>
  );
}

const s = StyleSheet.create({
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    alignSelf: 'flex-start',
    marginVertical: 16,
  },
});
