import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function SafeView({children, viewStyle}) {
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
