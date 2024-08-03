import { View } from 'react-native'
import type { TRow } from './row.type'
import { TWStyles } from 'twrn-styles';

const Row = (props: TRow) => {
  const { children, columnGap = 8, padding = 8, backgroundColor = 'white', alignItems = 'center', justifyContent = 'flex-start', containerStyle} = props;
  return (
    <View style={[TWStyles.row, { borderWidth: 1, columnGap, backgroundColor, padding, alignItems, justifyContent}, containerStyle]}  {...props}>
      {children}
    </View>
  )
}

export default Row
