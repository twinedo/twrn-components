import { memo, useCallback, useState, forwardRef } from 'react';
import { View, TextInput, Text } from 'react-native';
import { TWStyles, TWColors } from 'twrn-styles';
import { CDefaultValues } from '../../../utils/common.const';
import type { TInputProps } from './input.type';
import { styles } from './input.style';

const Input = forwardRef<TextInput, TInputProps>(
  (
    {
      prefix,
      postfix,
      style,
      containerStyle,
      prefixStyle,
      postfixStyle,
      title = '',
      titleStyle,
      required,
      maxLength = 0,
      onChangeText,
      errors = ['', 'right'],
      textErrorStyle,
      value: controlledValue,
      ...textInputProps
    },
    ref
  ) => {
    // Use internal state only when uncontrolled
    const [internalValue, setInternalValue] = useState<string>(
      controlledValue || CDefaultValues.DEFAULT_STRING
    );

    // Handle character count
    const [textCounter, setTextCounter] = useState<number>(
      (controlledValue || '').length
    );

    const isControlled = controlledValue !== undefined;

    const onTextChange = useCallback(
      (val: string) => {
        const limitedText = val.slice(0, maxLength || val.length);
        if (isControlled) {
          onChangeText?.(limitedText);
        } else {
          setInternalValue(limitedText);
          onChangeText?.(limitedText);
        }
        setTextCounter(limitedText.length);
      },
      [isControlled, maxLength, onChangeText]
    );

    return (
      <View
        style={[
          title !== '' && TWStyles.rowGap12,
          TWStyles.w100,
          TWStyles.relative,
        ]}
      >
        {/* Title and Counter */}
        <View
          style={[
            TWStyles.row,
            TWStyles.alignCenter,
            TWStyles.justifySpaceBetween,
          ]}
        >
          {title && (
            <View style={[TWStyles.row, TWStyles.columnGap4, titleStyle]}>
              <Text style={[styles.h3]}>{title}</Text>
              {required && <Text style={{ color: TWColors.RED }}>*</Text>}
            </View>
          )}
          {maxLength > 0 && (
            <Text style={[styles.h3, titleStyle]}>
              {textCounter}/{maxLength}
            </Text>
          )}
        </View>

        <View
          style={[
            TWStyles.row,
            TWStyles.alignCenter,
            errors[0]?.length! > 0 ? styles.containerError : styles.container,
            containerStyle,
          ]}
        >
          {prefix && <View style={[styles.prefix, prefixStyle]}>{prefix}</View>}
          <TextInput
            {...textInputProps}
            ref={ref}
            style={[TWStyles.displayFlex, styles.input, style]}
            onChangeText={onTextChange}
            value={isControlled ? controlledValue : internalValue}
            maxLength={maxLength || undefined}
          />
          {postfix && (
            <View style={[styles.postfix, postfixStyle]}>{postfix}</View>
          )}
        </View>

        {/* Error Message */}
        {errors[0]?.length! > 0 && (
          <Text
            style={[
              styles.textError,
              { textAlign: errors[1] === 'left' ? 'left' : 'right' },
              textErrorStyle,
            ]}
          >
            {errors[0]}
          </Text>
        )}
      </View>
    );
  }
);

export default memo(Input);
