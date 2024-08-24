import React, { memo, useCallback, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import { TWStyles, TWColors } from 'twrn-styles';
import type { ReactNode } from 'react';
import type { TextStyle, ViewStyle, TextInputProps } from 'react-native';
import { CDefaultValues } from '../../../utils/common.const';

export interface IInputProps extends TextInputProps {
  prefix?: ReactNode;
  postfix?: ReactNode;
  style?: TextStyle | TextStyle[];
  containerStyle?: ViewStyle | ViewStyle[];
  prefixStyle?: ViewStyle | ViewStyle[];
  postfixStyle?: ViewStyle | ViewStyle[];
  title?: ReactNode | string;
  titleStyle?: TextStyle;
  required?: boolean;
  errors?: [string, position?: 'left' | 'right']; //["error message", "position error message: left | right"];
  textErrorStyle?: TextStyle;
  // You can add more TextInput props here
}

const Input: React.FC<IInputProps> = ({
  prefix,
  postfix,
  style,
  containerStyle,
  prefixStyle,
  postfixStyle,
  title,
  titleStyle,
  required,
  maxLength,
  onChangeText,
  errors = ['', 'right'],
  textErrorStyle,
  ...textInputProps
}) => {
  const [value, setValue] = useState<string>(CDefaultValues.DEFAULT_STRING)

  const onTextChange = useCallback((value: string) => {
    if (value.length <= maxLength!) {
      setValue(value);
      if (onChangeText) {
        onChangeText(value);
      }
    }
  }, [maxLength, onChangeText]);

  return (
    <View style={[TWStyles.rowGap12, TWStyles.w100, TWStyles.relative]}>
      <View style={[TWStyles.row, TWStyles.alignCenter, TWStyles.justifySpaceBetween]}>

        {title && (
          <View style={[TWStyles.row, TWStyles.columnGap4, titleStyle]}>
            <Text style={[TWStyles.headingMedium.h3]}>{title}</Text>
            {required && <Text style={{ color: TWColors.RED }}>*</Text>}
          </View>
        )}
        {maxLength && <View><Text style={[TWStyles.headingMedium.h3, titleStyle]}>{value.length}/ {maxLength}</Text></View>}
      </View>

      <View
        style={[
          TWStyles.row,
          TWStyles.alignCenter,
          errors ? styles.containerError : styles.container,
          containerStyle,
        ]}>
        {prefix && <View style={[styles.prefix, prefixStyle]}>{prefix}</View>}
        <TextInput
          {...textInputProps}
          style={[TWStyles.displayFlex, styles.input, style]}
          onChangeText={onTextChange}
          value={value}

        />
        {postfix && <View style={[styles.postfix, postfixStyle]}>{postfix}</View>}
      </View>
      {errors &&
        <Text style={[styles.textError, { textAlign: errors[1] === 'left' ? 'left' : 'right' }, textErrorStyle]}>
          {errors[0]}
        </Text>
      }
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
  containerError: {
    borderWidth: 1,
    borderColor: TWColors.GREYB11,
    borderRadius: 5,
    position: 'relative',
  },
  textError: {
    color: TWColors.RED,
    fontStyle: 'italic'
  }
});

export default memo(Input);
