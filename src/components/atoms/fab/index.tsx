import { Pressable, StyleSheet } from 'react-native';
import { TWStyles, TWColors } from 'twrn-styles';
import type { TFabProps } from './fab.type';

const FloatingActionButton = (props: TFabProps) => {
  const {
    backgroundColor = TWColors.PRIMARY,
    children,
    onPress,
    position,
    containerStyle
  } = props;

  return (
    <Pressable
      {...props}
      onPress={onPress}
      style={[
        TWStyles.absolute,
        TWStyles.justifyCenter,
        TWStyles.alignCenter,
        position === 'bottom-center'
          ? styles.containerCenter
          : position === 'bottom-left'
          ? styles.containerLeft
          : styles.container,
        {backgroundColor},
        containerStyle
      ]}>
      {children}
    </Pressable>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  container: {
    bottom: 10,
    right: 10,
    width: 60,
    height: 60,
    borderRadius: 60,
    zIndex: 50,
  },
  containerLeft: {
    bottom: 10,
    left: 10,
    width: 60,
    height: 60,
    borderRadius: 60,
    zIndex: 50,
  },
  containerCenter: {
    bottom: 10,
    left: '50%',
    right: '50%',
    marginLeft: -30,
    width: 60,
    height: 60,
    borderRadius: 60,
    zIndex: 50,
  },
});
