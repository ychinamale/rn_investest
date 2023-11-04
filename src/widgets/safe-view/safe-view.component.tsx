import React, {ReactElement, useMemo} from 'react';
import {View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type SafeViewProps = {
  children: ReactElement | ReactElement[];
  viewStyle?: ViewStyle;
};

export function SafeView(props: SafeViewProps) {
  const {children, viewStyle} = props;
  const insets = useSafeAreaInsets();
  const containerStyle = useMemo(
    () => [
      {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingRight: insets.right,
        paddingLeft: insets.left,
        ...viewStyle,
      },
    ],
    [insets.bottom, insets.left, insets.right, insets.top, viewStyle],
  );

  return <View style={containerStyle}>{children}</View>;
}
