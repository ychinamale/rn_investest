import React, {useMemo} from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {colors} from '../../../app/colors';

type TextPillProps = {
  children: string;
  style?: TextStyle;
  containerStyle?: ViewStyle;
};

export function TextPill(props: TextPillProps) {
  const {children, style = {}, containerStyle = {}} = props;
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
