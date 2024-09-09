import type { DatePickerOptions, DateTimePickerEvent, TimePickerOptions } from "@react-native-community/datetimepicker";
import type { ReactNode } from "react";
import type { TextStyle, ViewStyle } from "react-native";

export type TDateTimePicker = {
  containerStyle?: ViewStyle | ViewStyle[]
  errors?: [string, position?: 'left' | 'right']
  required?: boolean
  title?: string
  titleStyle?: TextStyle
  onSelect: (event: DateTimePickerEvent, date?: Date) => void
  textErrorStyle?: TextStyle
  placeholder?: string;
  icon?: ReactNode
  iconColor?: string;
  dateFormat?: 'DD MMM YYYY' | 'DD/MMM/YYYY' | 'MMM/DD/YYYY' | 'DD/MMMM/YYYY' | string
} & DatePickerOptions & TimePickerOptions
