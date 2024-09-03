import {
  ActivityIndicator,
  Pressable,
  Text,
  View,
} from 'react-native';
import type { TButtonProps } from './button.type';
import { styles } from './button.style';
import { TWStyles } from 'twrn-styles';
import { memo } from 'react';

const Button = (props: TButtonProps) => {
  const {
    containerStyle,
    loadingColor = 'white',
    text = "",
    textStyle,
    backgroundColor = 'red',
    borderRadius = 8,
    loading = false,
    children,
    prefix,
    prefixContainerStyle,
    postfix,
    postfixContainerStyle,
  } = props;
  return (
    <Pressable
      style={[
        TWStyles.alignCenter,
        TWStyles.row,
        TWStyles.justifySpaceBetween,
        TWStyles.horizontalDefaultPadding,
        TWStyles.verticalDefaultPadding,
        {...styles.container},
        {backgroundColor, borderRadius},
        containerStyle,
      ]}
      {...props}>
      {prefix && (
        <View style={[TWStyles.flex0p5, prefixContainerStyle]}>
          {prefix}
        </View>
      )}
      {loading && <ActivityIndicator size="large" color={loadingColor} />}
      {!loading && (
        <>
          {text !== '' ? (
            <View style={[TWStyles.flex3, TWStyles.alignCenter]}>
              <Text style={[styles.text, textStyle]}>{text}</Text>
            </View>
          ) : typeof children === 'string' ? (
            <View style={[TWStyles.flex3, TWStyles.alignCenter]}>
              <Text style={[styles.text, textStyle]}>{children}</Text>
            </View>
          ) : (
            children
          )}
        </>
      )}
      {postfix && (
        <View
          style={[
            TWStyles.alignEnd,
            TWStyles.flex0p5,
            postfixContainerStyle,
          ]}>
          {postfix}
        </View>
      )}
    </Pressable>
  );
}

export default memo(Button)
