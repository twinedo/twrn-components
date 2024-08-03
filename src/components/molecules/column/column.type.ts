import type { ReactNode } from "react"
import type { ViewProps, ViewStyle } from "react-native";

export type TColumn = {
  children: ReactNode;
  padding?: number;
  backgroundColor?: string;
  rowGap?: number;
  containerStyle?: ViewStyle;
} & ViewProps;
