import { View } from 'react-native'
import type { TColumn } from './column.type'

const Column = (props: TColumn) => {
  const { children, rowGap = 8, padding = 8, backgroundColor = 'white', containerStyle } = props;
  return (
    <View style={[{rowGap, backgroundColor, padding}, containerStyle]} {...props}>
      {children}
    </View>
  )
}

export default Column
