import { AttackMove } from '@cardEditor/types';

export interface AttackMoveDisplayProps {
  move: AttackMove | undefined;
  isLastMove?: boolean;
  isOnlyMove?: boolean;
}
