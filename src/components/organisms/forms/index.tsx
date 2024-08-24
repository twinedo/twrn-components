import { Text, View } from 'react-native'
import { TWColors, TWStyles } from 'twrn-styles'
import type { FormInputProps, InputField } from './forms.type';
import { styles } from './forms.style';
import { Controller } from 'react-hook-form';
import { EInputType, ETextType } from './forms.enum';
import Dropdown from '../dropdown';
import { Input } from '../../molecules';

const Forms = (props: FormInputProps) => {
  const {inputFields, formControl, setFormControl, errors, containerStyle } = props;
  const formValues = formControl._formValues;
    return (
        <View style={[styles.container, containerStyle]}>
            {inputFields.map((inputField: InputField, index: number) => (
                <Controller
                    key={inputField.controlName}
                    name={inputField.controlName}
                    control={formControl}
                    render={({ field: { onChange, onBlur, value } }) => {
                        switch (inputField.inputType) {
                            case EInputType.DROPDOWN:
                                return (
                                    <>
                                        {/* <View style={[TWStyles.displayFlex, TWStyles.alignEnd, TWStyles.row]}>
                                            <View style={TWStyles.w100}>
                                                <Dropdown
                                                    data={inputField.dropdownOptions ?? []}
                                                    onSelect={(selectedValue: any) => {
                                                        onChange(selectedValue);
                                                        setFormControl(inputField.controlName, selectedValue);
                                                    }}
                                                    {...inputField.dropdownProps}
                                                />
                                            </View>
                                        </View>
                                        {errors && errors[inputField.controlName] && formValues[inputField.controlName] === "" && <Text style={{ color: TWColors.RED }}>{errors[inputField.controlName]?.message?.toString()}</Text>} */}
                                    </>
                                );
                            case EInputType.DATE:
                                return (
                                    <View style={[TWStyles.row, TWStyles.alignEnd, TWStyles.w100]}>


                                    </View>
                                );
                            default:
                                return (
                                    <View style={[TWStyles.row, TWStyles.alignEnd, TWStyles.w100]}>
                                        {/* <View style={[TWStyles.px4]}>
                                            {inputField.icon}
                                        </View> */}

                                        <Input
                                            style={[TWStyles.displayFlex]}
                                            required={inputField.isRequired}
                                            title={inputField.title}
                                            placeholder={inputField.placeholder}
                                            maxLength={inputField.maxLength}
                                            onChangeText={(val) => {
                                                onChange(val)
                                                setFormControl(inputField.controlName, val);
                                            }}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            keyboardType={inputField.type || ETextType.TEXT}
                                            editable={!inputField.isDisabled}
                                            autoCapitalize="characters"
                                            // errors={[errors[inputField.controlName]?.message?.toString() ?? '']}
                                        />
                                    </View>
                                );
                        }
                    }}
                />
            ))}
        </View>
    );
}

export default Forms
