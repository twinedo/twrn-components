import type { ReactNode } from 'react';
import type { FlatListProps } from 'react-native';

export type TGridProps = {
  data: any[];
  id: string | number;
  gridSize: 1 | 2 | 3 | 4;
  gap?: number;
  gapHorizontal?: number;
  gapVertical?: number;
  itemComponent: (item: any, index: number) => ReactNode;
  onPressItem?: (selectedItem?: any, index?: number) => void;
} & FlatListProps<ReactNode>;
