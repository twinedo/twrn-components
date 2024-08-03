import type { SelectDropdownProps } from "react-native-select-dropdown";

export type TDropdown = {
  data: any[];
  placeholder: string;
  keyValue: string;
  renderItem?: (selectedItem: any, isOpened: boolean) => React.ReactNode;
  renderButton?: (selectedItem: any, index: number, isSelected: boolean) => React.ReactNode;
  iconColor?: string;
} & SelectDropdownProps;
