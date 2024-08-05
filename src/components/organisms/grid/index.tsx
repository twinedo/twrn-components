import { Dimensions, FlatList, Pressable, View } from 'react-native'
import type { TGrid } from './grid.type';

const Grid = (props: TGrid) => {
  const {data, id, gridSize = 2, itemComponent, onPressItem, itemComponentHeight} = props;

  const { width } = Dimensions.get('window');
  const itemWidth = (width - (gridSize - 1) * 8 - 10) / gridSize;
  const itemHeight = itemComponentHeight ?? itemWidth;

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => typeof item === 'string' ? item : item[id]}
        numColumns={gridSize}
        contentContainerStyle={{ flexGrow: 1, gap: 8 }}
        columnWrapperStyle={{ gap: 8 }}
        renderItem={({item, index}) => (
          <Pressable onPress={() => onPressItem?.(item, index)} style={{width: itemWidth, height: itemHeight}}>
            {itemComponent(item, index)}
          </Pressable>
        )}
      />
    </View>
  )
}

export default Grid
