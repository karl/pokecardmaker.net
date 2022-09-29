import { MoveBackground, TextColor } from '@cardEditor/cardStyles/types';
import { AttackMove } from '@cardEditor/types';
import { CardTextProps } from '../CardText/types';

export interface AttackMoveProps {
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
}

export interface AttackMoveDisplayProps extends CardTextProps {
  move: AttackMoveProps['move'];
}
