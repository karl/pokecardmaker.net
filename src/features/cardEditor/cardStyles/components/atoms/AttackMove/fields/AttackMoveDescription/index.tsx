import { useCardStyles } from '@cardEditor/cardStyles';
import { FC } from 'react';
import { AttackMoveDisplayProps } from '../../types';
import { MoveDescriptionText } from './styles';

const AttackMoveDescription: FC<AttackMoveDisplayProps> = ({
  move,
  isLastMove,
  isOnlyMove,
}) => {
  const { movesOutline, movesTextColor, alignMovesBottom } = useCardStyles();

  return (
    <MoveDescriptionText
      outline={movesOutline}
      color={movesTextColor}
      $alignBottom={alignMovesBottom}
      $isLastMove={!!isLastMove}
      $isEmpty={!move?.description}
      $isOnlyMove={!!isOnlyMove}
    >
      {move?.description}
    </MoveDescriptionText>
  );
};

export default AttackMoveDescription;
