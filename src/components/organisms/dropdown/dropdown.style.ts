import { StyleSheet } from "react-native";
import { TWColors } from "twrn-styles";

export const styles = StyleSheet.create({
  dropdownButtonStyle: {
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
  dropdownButtonErrorStyle: {
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
  dropdownButtonTxtStyle: {
    flex: 1,
    // fontSize: 14,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonTxtSelectedStyle: {
    flex: 1,
    // fontSize: 18,
    // fontWeight: 'bold',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    // fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  textError: {
    color: TWColors.RED,
    fontStyle: 'italic'
  }
});
