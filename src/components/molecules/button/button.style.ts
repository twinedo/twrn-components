import { StyleSheet } from "react-native";
import { TWColors } from "twrn-styles";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: TWColors.RED,
    },
    text: {
      color: 'white',
      fontWeight: '500',
      fontSize: 20
    },
    prefixContainer: {
      flex: 0.5
    },
    postfixContainer: {
      flex: 0.5,
    }
  })