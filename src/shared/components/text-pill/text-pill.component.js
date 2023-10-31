import React from 'react';
import {Text, View} from 'react-native';

export function TextPill({children}) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}
