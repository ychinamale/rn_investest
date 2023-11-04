import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {colors} from '../../../app/colors';

export function TextPill({children, style = {}, containerStyle = {}}) {
  const viewStyle = useMemo(
    () => ({
      borderRadius: 16,
      backgroundColor: colors.background.default,
      marginHorizontal: 8,
      padding: 4,
      paddingHorizontal: 8,
      ...containerStyle,
    }),
    [containerStyle],
  );

  const textStyle = useMemo(
    () => ({
      color: colors.text.alternate,
      fontSize: 12,
      ...style,
    }),
    [style],
  );

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{children}</Text>
    </View>
  );
}
