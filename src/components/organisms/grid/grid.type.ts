import type { ReactNode } from "react";

export type TGridProps = {
  data: any[];
  id: string | number;
  gridSize: 1 | 2 | 3 | 4;
  itemComponent: (item: any, index: number) => ReactNode;
  onPressItem?: (selectedItem?: any, index?: number) => void;
  itemComponentHeight?: number;
}
