import { Pressable, Text, View } from 'react-native'
import { useState } from 'react'
import { TWColors, TWStyles } from 'twrn-styles'
import DateTimePicker, { type DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { styles } from './date-time-picker.style';
import type { TDateTimePicker } from './date-time-picker.type';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment';

const DateTime = (props: TDateTimePicker) => {
  const { dateFormat = 'DD MMM YYYY', errors, icon, iconColor = TWColors.GREYB11, title, titleStyle, required, onSelect, textErrorStyle, placeholder } = props

  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedDateWithFormat, setSelectedDateWithFormat] = useState('')
  const [show, setShow] = useState(false)

  return (
    <View style={[TWStyles.displayFlex, TWStyles.relative]}>
      <View style={[TWStyles.rowGap12, TWStyles.relative]}>
        {title && (
          <View style={[TWStyles.row, TWStyles.columnGap4, titleStyle]}>
            <Text style={[TWStyles.headingMedium.h3]}>{title}</Text>
            {required && <Text style={{ color: TWColors.RED }}>*</Text>}
          </View>
        )}

        <Pressable onPress={() => setShow(!show)} style={[TWStyles.columnGap8, errors?.[0].length! > 0 ? styles.datePickerErrorStyle : styles.datePickerStyle]}>
          <Text style={[selectedDateWithFormat === '' ? styles.pickerTxtSelectedStyle : styles.pickerTxtStyle]}>{selectedDateWithFormat === '' ? moment(placeholder).format(dateFormat) : selectedDateWithFormat}</Text>
          {icon ? icon : <MaterialCommunityIcons name="calendar" color={iconColor} size={24} />}
        </Pressable>
        {show && (
          <DateTimePicker
            {...props}
            value={selectedDate}
            onChange={(event: DateTimePickerEvent, date?: Date) => {
              setSelectedDate(date!);
              const formattedDate = moment(date).format(dateFormat);
              onSelect(event, date);
              setSelectedDateWithFormat(formattedDate)
              setShow(false)
            }}
          />

        )}
        <View>
          {errors?.[0]?.length! > 0 &&
            <Text style={[styles.textError, { textAlign: errors?.[1] === 'left' ? 'left' : 'right' }, textErrorStyle]}>
              {errors?.[0]}
            </Text>
          }
        </View>
      </View>

    </View>
  )
}

export default DateTime
