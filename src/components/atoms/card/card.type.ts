import type { ReactNode } from "react"
import type { ViewStyle } from "react-native";

export type TCardProps = {
    children?: ReactNode;
    borderRadius?: number;
    backgroundColor?: string;
    containerStyle?: ViewStyle | ViewStyle[];
}