import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type { TouchableOpacityProps } from 'react-native';
import type { TButtonProps } from './button.type';
import { styles } from './button.style';
import { TWStyles } from 'twrn-styles';

export default function Button(props: TButtonProps & TouchableOpacityProps) {
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
    <TouchableOpacity
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
    </TouchableOpacity>
  );
}
