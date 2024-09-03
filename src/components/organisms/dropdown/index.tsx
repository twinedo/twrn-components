import { Text, View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { styles } from './dropdown.style'
import Entypo from 'react-native-vector-icons/Entypo'
import type { TDropdownProps } from './dropdown.type'

const Dropdown = (props: TDropdownProps) => {
  const { placeholder = 'Select', data, keyValue = '', renderButton, renderItem, iconColor = 'grey' } = props;
  return (
    <View>
      <SelectDropdown
        {...props}
        data={data}
        renderButton={(selectedItem, isOpened) => {
          if (renderButton === undefined) {
            return (
              <View style={styles.dropdownButtonStyle}>
                <Text style={selectedItem ? styles.dropdownButtonTxtStyle : styles.dropdownButtonTxtSelectedStyle}>
                  {(selectedItem && selectedItem[keyValue]) || placeholder}
                </Text>
                <Entypo name={isOpened ? 'chevron-up' : 'chevron-down'} color={iconColor} style={styles.dropdownButtonArrowStyle} />
              </View>
            )
          }
          return renderButton(selectedItem, isOpened);
        }}
        renderItem={(item, index, isSelected) => {
          if (renderItem === undefined) {
            return (
              <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                <Text style={styles.dropdownItemTxtStyle}>{item[keyValue]}</Text>
              </View>
            );
          }
          return renderItem(item, index, isSelected)
        }}
        dropdownStyle={styles.dropdownMenuStyle}
      />
    </View>
  )
}

export default Dropdown
