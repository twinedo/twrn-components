import { StyleSheet } from "react-native";
import { TWColors } from "twrn-styles";

export const styles = StyleSheet.create({
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
  },
  h3: {
    color: TWColors.BLACK,
    fontSize: 16,
  },
});
