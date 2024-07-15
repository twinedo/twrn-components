import { Pressable } from 'react-native';
import { TWColors, TWStyles } from 'twrn-styles';
import { styles } from './card.style';
import type { TCardProps } from './card.type';
import type { PressableProps } from 'react-native';

const Card = (props: TCardProps & PressableProps) => {
  const {
    children,
    containerStyle,
    borderRadius = 8,
    backgroundColor = TWColors.WHITE,
  } = props;
  return (
    <Pressable
      style={[
        TWStyles.verticalDefaultPadding,
        TWStyles.horizontalDefaultPadding,
        styles.container,
        containerStyle,
        {borderRadius, backgroundColor},
      ]}
      {...props}>
      {children}
    </Pressable>
  );
};

export default Card;
