import type { ReactNode } from "react";
import type { TextInputProps, TextStyle, ViewStyle } from "react-native";

export type TInputProps = {
  prefix?: ReactNode;
  postfix?: ReactNode;
  style?: TextStyle | TextStyle[];
  containerStyle?: ViewStyle | ViewStyle[];
  prefixStyle?: ViewStyle | ViewStyle[];
  postfixStyle?: ViewStyle | ViewStyle[];
  inputStyle?: TextStyle | TextStyle[];
  title?: ReactNode | string;
  titleStyle?: TextStyle;
  required?: boolean;
  errors?: [string, position?: 'left' | 'right']; //["error message", "position error message: left | right"];
  textErrorStyle?: TextStyle;
  // You can add more TextInput props here
} & TextInputProps
