import type { ReactNode } from "react"
import type { TextStyle, ViewStyle } from "react-native";

export type TAccordionProps = {
  children: ReactNode;
  containerStyle?: ViewStyle;
  titleContainerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  bodyContainerStyle?: ViewStyle;
  bodyStyle?: TextStyle;
  isShow?: boolean;
  disabled: boolean;
  title: string;
  icon?: ReactNode;
}
