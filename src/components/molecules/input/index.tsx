import React, { memo, useCallback, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import { TWStyles, TWColors } from 'twrn-styles';
import { CDefaultValues } from '../../../utils/common.const';
import type { TInputProps } from './input.type';

const Input: React.FC<TInputProps> = ({
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
  value = CDefaultValues.DEFAULT_STRING,
  ...textInputProps
}) => {

  const [textCounter, setTextCounter] = useState(0);

  const onTextChange = useCallback((val: string) => {
    const limitedText = val.slice(0, maxLength);
    if (onChangeText) {
      onChangeText(limitedText);
      if (value !== undefined) return;
      setTextCounter(limitedText.length);
    }
  }, [maxLength, onChangeText, value]);

  return (
    <View style={[TWStyles.rowGap12, TWStyles.w100, TWStyles.relative]}>
      <View style={[TWStyles.row, TWStyles.alignCenter, TWStyles.justifySpaceBetween]}>

        {title && (
          <View style={[TWStyles.row, TWStyles.columnGap4, titleStyle]}>
            <Text style={[TWStyles.headingMedium.h3]}>{title}</Text>
            {required && <Text style={{ color: TWColors.RED }}>*</Text>}
          </View>
        )}
        {maxLength && <View><Text style={[TWStyles.headingMedium.h3, titleStyle]}>{value.length ?? textCounter}/ {maxLength}</Text></View>}
      </View>

      <View
        style={[
          TWStyles.row,
          TWStyles.alignCenter,
          errors[0].length > 0 ? styles.containerError : styles.container,
          containerStyle,
        ]}>
        {prefix && <View style={[styles.prefix, prefixStyle]}>{prefix}</View>}
        <TextInput
          {...textInputProps}
          style={[TWStyles.displayFlex, styles.input, style]}
          onChangeText={onTextChange}
          value={value}
          maxLength={maxLength}
        />
        {postfix && <View style={[styles.postfix, postfixStyle]}>{postfix}</View>}
      </View>
      {errors[0].length > 0 &&
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
    height: 50
  },
  postfix: {
    padding: 8,
  },
  containerError: {
    borderWidth: 1,
    borderColor: TWColors.RED,
    borderRadius: 5,
    position: 'relative',
  },
  textError: {
    color: TWColors.RED,
    fontStyle: 'italic'
  }
});

export default memo(Input);
