import type { TextStyle, ViewStyle } from "react-native";
import type { SelectDropdownProps } from "react-native-select-dropdown";
import type { DropdownFields } from "../forms/forms.type";

export type TDropdownProps = {
  data: string[] | DropdownFields[];
  placeholder?: string;
  keyValue?: string;
  renderItem?: (selectedItem: any, isOpened: boolean) => React.ReactNode;
  renderButton?: (selectedItem: any, index: number, isSelected: boolean) => React.ReactNode;
  iconColor?: string;
  title?: string;
  titleStyle?: TextStyle;
  required?: boolean;
  dropdownButtonStyle?: ViewStyle | ViewStyle[];
  dropdownButtonErrorStyle?: ViewStyle | ViewStyle[];
  dropdownItemStyle?: ViewStyle | ViewStyle[];
  dropdownButtonTxtStyle?: TextStyle;
  dropdownItemTxtStyle?: TextStyle;
  errors?: [string, position?: 'left' | 'right'];
  textErrorStyle?: TextStyle
} & SelectDropdownProps;
