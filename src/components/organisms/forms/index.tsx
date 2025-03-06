import { View } from 'react-native'
import { TWColors, TWStyles } from 'twrn-styles'
import type { FormInputProps, InputField } from './forms.type';
import { styles } from './forms.style';
import { Controller } from 'react-hook-form';
import { EInputType, ETextType } from './forms.enum';
import { Input } from '../../molecules';
import { Dropdown } from 'twrn-components';
import { memo } from 'react';
import DateTime from '../date-time-picker';

const Forms = (props: FormInputProps) => {
  const { inputFields, formControl, setFormControl, errors, containerStyle } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      {inputFields.map((inputField: InputField) => (
        <Controller
          key={inputField.controlName}
          name={inputField.controlName}
          control={formControl}
          render={({ field: { onChange, onBlur, value } }) => {
            const rowGap = 12; // Adjust the gap size as needed
            return (
              <View style={{ rowGap: 32 }}>
                {(() => {
                  switch (inputField.inputType) {
                    case EInputType.DROPDOWN:
                      return (
                        <View style={[TWStyles.displayFlex, TWStyles.alignEnd, TWStyles.row]}>
                          <View style={TWStyles.w100}>
                            <Dropdown
                              title={inputField.title}
                              required={inputField.isRequired}
                              keyValue={inputField.dropdownProps?.keyValue ?? ''}
                              data={inputField?.dropdownProps?.data!}
                              placeholder={inputField.placeholder}
                              renderButton={inputField.dropdownProps?.renderButton! ?? undefined}
                              renderItem={inputField.dropdownProps?.renderItem! ?? undefined}
                              onSelect={(selectedValue: any) => {
                                onChange(selectedValue);
                                setFormControl(inputField.controlName, selectedValue);
                              }}
                              errors={[errors[inputField.controlName]?.message?.toString() ?? '', 'right']}
                              {...inputField.dropdownProps}
                            />
                          </View>
                        </View>
                      );
                    case EInputType.DATE_TIME:
                      return (
                        <View style={[TWStyles.displayFlex, TWStyles.row, TWStyles.alignEnd, TWStyles.w100]}>
                          {/* Date input field */}
                          <DateTime
                            title={inputField.title}
                            required={inputField.isRequired}
                            placeholder={inputField.placeholder}
                            value={value}
                            errors={[errors[inputField.controlName]?.message?.toString() ?? '', 'right']}
                            onSelect={(_, date) => {
                              onChange(date);
                              setFormControl(inputField.controlName, date);
                            }}
                            dateFormat='longdate'
                            {...inputField.dateTimeProps}
                          />
                        </View>
                      );
                    default:
                      return (
                        <View style={[TWStyles.row, TWStyles.alignEnd, TWStyles.w100, { marginBottom: rowGap }]}>
                          <Input
                            {...inputField.inputProps}
                            containerStyle={[{ borderColor: errors[inputField.controlName] ? TWColors.RED : TWColors.GREY7F }]}
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
                            errors={[errors[inputField.controlName]?.message?.toString() ?? '', 'right']}
                          />
                        </View>
                      );
                  }
                })()}
              </View>
            );
          }}
        />
      ))}

    </View>
  );
}

export default memo(Forms)
