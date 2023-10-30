import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {StyledText} from './first-screen.styles';
import colors from '../../../../app/colors';

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

export function FirstScreen() {
  const [username, setUsername] = useState();

  function onChangeText(text) {
    setUsername(text);
  }

  function onSetUsername() {
    console.log('You want to set the username huh?');
  }

  return (
    <SafeAreaView>
      <View>
        <StyledText>Please enter your name</StyledText>
        <TextInput
          style={{
            borderWidth: 1,
            alignSelf: 'flex-start',
            width: 100,
            height: 40,
            color: colors.BASE_COLORS.BLACK,
          }}
          value={username}
          onChangeText={onChangeText}
          keyboardType="default"
        />

        <Button onPress={onSetUsername}>Update username</Button>
      </View>
    </SafeAreaView>
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
