import { FlatList, Pressable, View, type DimensionValue } from 'react-native';
import type { TGridProps } from './grid.type';

const Grid = (props: TGridProps) => {
  const {
    data,
    id,
    gridSize = 3,
    itemComponent,
    onPressItem,
    gap = 4,
    gapHorizontal = 0,
    gapVertical = 0,
  } = props;

  const itemWidth = `${100 / gridSize}%` as DimensionValue;

  return (
    <View>
      <FlatList
        {...props}
        data={data}
        keyExtractor={(item) => (typeof item === 'string' ? item : item[id])}
        numColumns={gridSize}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => onPressItem?.(item, index)}
            style={[
              {
                width: itemWidth,
              },
              gap ? { padding: gap } : {},
              gapHorizontal ? { paddingHorizontal: gapHorizontal } : {},
              gapVertical ? { paddingVertical: gapVertical } : {},
            ]}
          >
            <View style={{ width: '100%' }}>{itemComponent(item, index)}</View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Grid;
