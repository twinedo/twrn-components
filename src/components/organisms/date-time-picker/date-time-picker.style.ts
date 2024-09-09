import { StyleSheet } from "react-native";
import { TWColors } from "twrn-styles";

export const styles = StyleSheet.create({
  datePickerStyle: {
    // width: 200,
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderWidth: 1.5,
    borderColor: TWColors.GREYB11,
    borderRadius: 5,
  },
  datePickerErrorStyle: {
    // width: 200,
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderWidth: 1.5,
    borderColor: TWColors.RED,
    borderRadius: 5,
  },
  textError: {
    color: TWColors.RED,
    fontStyle: 'italic'
  },
  pickerTxtStyle: {
    flex: 1,
    fontWeight: '500',
    color: '#151E26',
  },
  pickerTxtSelectedStyle: {
    flex: 1,
    color: '#151E26',
  },
})
