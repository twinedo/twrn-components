import { Dimensions } from "react-native";

export const numColumns = 2;
export const { width, height } = Dimensions.get('window');
export const itemWidth = (width - (numColumns - 1) * 8 - 10) / numColumns;
export const itemHeight = itemWidth;
