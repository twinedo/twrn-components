import type { Control, FieldError, FieldErrors, UseFormSetValue } from "react-hook-form";
import type { EInputType, ETextType } from "./forms.enum";
import type { ReactNode } from "react";
import type { ViewStyle } from "react-native";
import type { TDropdown } from "../dropdown/dropdown.type";

export type DropdownFields = {
  id?: string;
  label: string;
  value: string;
};

export type InputField = {
  inputType: EInputType;
  controlName: string;
  title: string;
  placeholder: string;
  minLength?: number | 0;
  maxLength?: number | 0;
  type?: ETextType;
  isRequired?: boolean;
  isHide?: boolean;
  isDisabled?: boolean;
  dropdownOptions?: DropdownFields[]; // dropdown mode
  formatDate?: string; // date mode
  tooltipDesc?: string;
  tooltipList?: string[] | [];
  icon?: ReactNode;
  dropdownProps?: TDropdown;

};

export type FormInputProps = {
  inputFields: InputField[];
  formControl: Control<any, any>;
  setFormControl: UseFormSetValue<any>;
  errors: FieldErrors<any>;
  containerStyle?: ViewStyle | ViewStyle[];
};
