import React, {ReactElement} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../app/colors';
import {Variants} from '../../../app/types';

type ButtonProps = {
  variant?: Variants;
  disabled?: boolean;
  children: string | ReactElement;
  onPress?: () => void;
};

export function Button(props: ButtonProps) {
  const {
    variant = Variants.PRIMARY,
    disabled = false,
    children,
    onPress,
  } = props;

  const {button: buttonColor} = colors;

  const defaultStyling = {
    backgroundColor: buttonColor.backgroundColor(variant),
    borderColor: buttonColor.borderColor(variant),
    color: buttonColor.textColor(variant),
  };

  const activeStyling = {
    backgroundColor: buttonColor.activeBackgroundColor(variant),
    borderColor: buttonColor.activeBorderColor(variant),
    color: buttonColor.activeTextColor(variant),
  };

  const disabledStyling = {
    backgroundColor: buttonColor.disabledBackgroundColor(variant),
    borderColor: buttonColor.disabledBorderColor(variant),
    color: buttonColor.disabledTextColor(variant),
  };

  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({pressed}) => {
          let styling = {...defaultStyling};
          if (pressed) {
            styling = {...activeStyling};
          }
          if (disabled) {
            styling = {...disabledStyling};
          }

          return [{...styling}, styles.buttonWrapper];
        }}>
        {({pressed}) => {
          if (typeof children === 'string') {
            const color = pressed
              ? buttonColor.activeTextColor(variant)
              : disabled
              ? buttonColor.disabledTextColor(variant)
              : buttonColor.textColor(variant);
            return <Text style={{color}}>{children}</Text>;
          }
          return children;
        }}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
});
