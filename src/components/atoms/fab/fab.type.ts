import type { ReactNode } from "react";
import type { ViewStyle } from "react-native";

export type TFab = {
    backgroundColor?: string;
    children?: ReactNode;
    onPress?: () => void;
    position?: 'bottom-right' | 'bottom-center' | 'bottom-left';
  }
