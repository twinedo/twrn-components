import { Dimensions, Pressable, StyleSheet } from 'react-native';
import { TWStyles, TWColors } from 'twrn-styles';
import type { TFab } from './fab.type';

const FloatingAactionButton = (props: TFab) => {
  const {
    backgroundColor = TWColors.PRIMARY,
    children,
    onPress,
    position,
  } = props;

  return (
    <Pressable
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
      ]}>
      {children}
    </Pressable>
  );
};

export default FloatingAactionButton;

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
    left: Dimensions.get('window').width / 2,
    right: Dimensions.get('window').width / 2,
    width: 60,
    height: 60,
    borderRadius: 60,
    zIndex: 50,
  },
});
