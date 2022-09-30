import { MoveBackground, TextColor } from '@cardEditor/cardStyles/types';
import { AttackMove } from '@cardEditor/types';
import { CardTextProps } from '../CardText/types';
import { PlacementBlockProps } from '../PlacementBlock/types';

export type AttackMoveProps = PlacementBlockProps & {
  move: AttackMove | undefined;
  isLastMove?: boolean;
  isOnlyMove?: boolean;
  forceShow?: boolean;
  background?: MoveBackground;
  descriptionTextColor?: TextColor;
  descriptionOutline?: TextColor;
  nameTextColor?: TextColor;
  nameOutline?: TextColor;
  hasAttackCostBorder: boolean;
};

export type AttackMoveDisplayProps = CardTextProps & {
  move: AttackMoveProps['move'];
};
