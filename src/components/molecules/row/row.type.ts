import type { ReactNode } from "react"
import type { FlexAlignType, ViewProps, ViewStyle } from "react-native";

export type TRow = {
  children: ReactNode;
  padding?: number;
  backgroundColor?: string;
  columnGap?: number;
  containerStyle?: ViewStyle;
  alignItems?: FlexAlignType | undefined;
  justifyContent?:
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined;
} & ViewProps;
