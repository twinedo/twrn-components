import { View } from 'react-native';
import type { TSpacerProps } from './spacer.type';

const isValidDimension = (value: number | string) => {
  return (
    typeof value === 'number' ||
    (typeof value === 'string' && (value.endsWith('px') || value.endsWith('%')))
  );
};

const Spacer = (props: TSpacerProps) => {
  const {height, width} = props;

  const getStyleValue = (value?: number | string): number | string => {
    if (typeof value === 'number') {
      return value;
    } else if (typeof value === 'string') {
      if (value.endsWith('px')) {
        return parseInt(value, 10);
      } else if (value.endsWith('%')) {
        return value;
      }
    }
    return value!;
  };

  const heightStyle = getStyleValue(height);
  const widthStyle = getStyleValue(width);

  const viewStyle: any = {
    ...(heightStyle !== undefined && isValidDimension(heightStyle) && { height: heightStyle }),
    ...(widthStyle !== undefined && isValidDimension(widthStyle) && { width: widthStyle }),
  };
  return <View style={viewStyle} />;
};

export default Spacer;
