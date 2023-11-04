import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function ErrorFallback() {
  return (
    <View style={s.container}>
      <Text>We had an error 😢</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    padding: 32,
  },
});
