
import { Text, View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { styles } from './dropdown.style'
import Entypo from 'react-native-vector-icons/Entypo'
import type { TDropdownProps } from './dropdown.type'
import { TWColors, TWStyles } from 'twrn-styles'
import { memo } from 'react'

const Dropdown = (props: TDropdownProps) => {
  const {
    placeholder = 'Select',
    data,
    keyValue,
    renderButton = undefined,
    renderItem = undefined,
    icon,
    iconColor = TWColors.GREYB11,
    title,
    required,
    titleStyle,
    dropdownButtonStyle,
    dropdownButtonErrorStyle,
    dropdownItemStyle,
    dropdownButtonTxtStyle,
    dropdownItemTxtStyle,
    errors = ['', 'right'],
    textErrorStyle,
    onSelect
  } = props;

  return (
    <View style={[TWStyles.rowGap12, TWStyles.relative]}>
      {title && (
        <View style={[TWStyles.row, TWStyles.columnGap4, titleStyle]}>
          <Text style={[TWStyles.headingMedium.h3]}>{title}</Text>
          {required && <Text style={{ color: TWColors.RED }}>*</Text>}
        </View>
      )}

      <SelectDropdown
        {...props}
        data={data}
        onSelect={(selectedItem, index) => {
          const selectedValue = typeof selectedItem === 'object' ? selectedItem[keyValue ?? ''] : selectedItem;
          onSelect(selectedValue, index)
        }}
        renderButton={(selectedItem, isOpened) => {
          if (!renderButton) {
            return (
              <View style={[errors[0]?.length > 0 ? styles.dropdownButtonErrorStyle : styles.dropdownButtonStyle, errors[0]?.length > 0 ? dropdownButtonErrorStyle : dropdownButtonStyle]}>
                <Text style={[selectedItem ? styles.dropdownButtonTxtStyle : styles.dropdownButtonTxtSelectedStyle, dropdownButtonTxtStyle]}>
                  {selectedItem && typeof selectedItem === 'object' ? selectedItem[keyValue ?? ''] : (selectedItem ?? placeholder)}                </Text>
                {!icon && <Entypo name={isOpened ? 'chevron-up' : 'chevron-down'} color={iconColor} style={styles.dropdownButtonArrowStyle} />}
              </View>
            )
          } else {
            return renderButton(selectedItem, isOpened);
          }
        }}
        renderItem={(item, index, isSelected) => {
          if (!renderItem) {
            return (
              <View style={[styles.dropdownItemStyle, (isSelected && { backgroundColor: '#D2D9DF' }), dropdownItemStyle]}>
                <Text style={[styles.dropdownItemTxtStyle, dropdownItemTxtStyle]}>{item && typeof item === 'object' ? item[keyValue ?? ''] : item}
                </Text>
              </View>
            );
          } else {
            return renderItem(item, index, isSelected)
          }
        }}
        dropdownStyle={styles.dropdownMenuStyle}
      />
      <View>
        {errors?.[0]?.length! > 0 &&
          <Text style={[styles.textError, { textAlign: errors?.[1] === 'left' ? 'left' : 'right' }, textErrorStyle]}>
            {errors?.[0]}
          </Text>
        }
      </View>
    </View>
  )
}

export default memo(Dropdown)
