import React, { memo } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import { TWStyles, TWColors } from 'twrn-styles';
import type { ReactNode } from 'react';
import type { TextStyle, ViewStyle, TextInputProps } from 'react-native';

export interface IInputProps extends TextInputProps {
  prefix?: ReactNode;
  postfix?: ReactNode;
  style?: TextStyle | TextStyle[];
  containerStyle?: ViewStyle | ViewStyle[];
  prefixStyle?: ViewStyle | ViewStyle[];
  postfixStyle?: ViewStyle | ViewStyle[];
  // You can add more TextInput props here
}

const Input: React.FC<IInputProps> = ({
  prefix,
  postfix,
  style,
  containerStyle,
  prefixStyle,
  postfixStyle,
  ...textInputProps
}) => {

  console.log('input text custom')
  return (
    <View
      style={[
        TWStyles.row,
        TWStyles.alignCenter,
        styles.container,
        containerStyle,
      ]}>
      {prefix && <View style={[styles.prefix, prefixStyle]}>{prefix}</View>}
      <TextInput
        {...textInputProps}
        style={[TWStyles.displayFlex, styles.input, style]}
      />
      {postfix && <View style={[styles.postfix, postfixStyle]}>{postfix}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: TWColors.GREYB11,
    borderRadius: 5,
    position: 'relative',
  },
  prefix: {
    padding: 8,
  },
  input: {
    padding: 8,
  },
  postfix: {
    padding: 8,
  },
});

export default memo(Input);