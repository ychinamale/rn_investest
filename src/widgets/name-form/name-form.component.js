import React, {useState} from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import {StyledText, StyledTextInput} from './name-form.styles';

export function NameForm() {
  const [username, setUsername] = useState();

  function onChangeText(text) {
    setUsername(text);
  }

  function onSetUsername() {
    console.log('You want to set the username huh?');
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
