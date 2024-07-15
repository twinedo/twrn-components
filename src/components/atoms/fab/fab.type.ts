import type { ReactNode } from "react";

export type TFab = {
    backgroundColor?: string;
    children?: ReactNode;
    onPress?: () => void;
    position?: 'bottom-right' | 'bottom-center' | 'bottom-left';
  }