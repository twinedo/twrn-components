import type { ReactNode } from "react";
import type { PressableProps, ViewStyle } from "react-native";

export type TFab = {
    backgroundColor?: string;
    children?: ReactNode;
    onPress?: () => void;
    position?: 'bottom-right' | 'bottom-center' | 'bottom-left';
    containerStyle?: ViewStyle | ViewStyle[]
  } & PressableProps;
