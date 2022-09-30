import { TextColor } from '@cardEditor/cardStyles';
import { PlacementBlockProps } from '../PlacementBlock/types';

export type CardTextProps = PlacementBlockProps & {
  textOutline?: TextColor;
  textColor?: TextColor;
};
