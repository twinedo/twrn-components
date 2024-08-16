import { Text, View } from 'react-native';
import type { TToolbarProps } from './toolbar.type';
import type { ViewProps } from 'react-native';
import { styles } from './toolbar.style';
import { TWColors, TWStyles } from 'twrn-styles';

export default function Toolbar(props: TToolbarProps & ViewProps) {
  const {
    containerStyle,
    text = 'Toolbar',
    textStyle,
    backgroundColor = TWColors.WHITE,
    children,
    prefix,
    prefixContainerStyle,
    postfix,
    postfixContainerStyle,
  } = props;
  return (
    <View
      style={[
        TWStyles.alignCenter,
        TWStyles.row,
        TWStyles.justifySpaceBetween,
        TWStyles.horizontalDefaultPadding,
        TWStyles.verticalDefaultPadding,
        { ...styles.container },
        { backgroundColor },
        containerStyle,
      ]}
      {...props}>
      {prefix && <View style={[TWStyles.flex0p5, prefixContainerStyle]}>{prefix}</View>}
      {prefix === undefined && postfix && (
        <View style={[TWStyles.flex0p5]} />
      )}

      {text !== '' ? (
        <View style={[TWStyles.flex3, TWStyles.alignStart]}>
          <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
      ) : typeof children === 'string' ? (
        <View style={[TWStyles.flex3, TWStyles.alignCenter]}>
          <Text style={[styles.text, TWStyles.w100, textStyle]}>{children}</Text>
        </View>
      ) : (
        children
      )}

      {postfix && <View
        style={[TWStyles.flex0p5, TWStyles.alignEnd, postfixContainerStyle]}>
        {postfix}
      </View>}
      {postfix === undefined && prefix && (
        <View style={[TWStyles.flex0p5]} />
      )}

    </View>
  );
}
