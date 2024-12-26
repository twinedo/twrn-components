import { FlatList, Pressable, View, type DimensionValue } from 'react-native';
import type { TGridProps } from './grid.type';

const Grid = (props: TGridProps) => {
  const {
    data,
    id,
    gridSize = 3,
    itemComponent,
    onPressItem,
    gap = 0,
    gapHorizontal = 0,
    gapVertical = 0,
  } = props;

  const itemWidth = `${100 / gridSize}%` as DimensionValue;

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => (typeof item === 'string' ? item : item[id])}
        numColumns={gridSize}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => onPressItem?.(item, index)}
            style={{
              width: itemWidth,
              padding: gap,
              paddingHorizontal: gapHorizontal,
              paddingVertical: gapVertical,
            }}
          >
            <View style={{ width: '100%' }}>{itemComponent(item, index)}</View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Grid;
