import { useCardStyles } from '@cardEditor/cardStyles';
import { FC } from 'react';
import { MoveDescriptionText } from './styles';
import { AttackMoveDescriptionProps } from './types';

const AttackMoveDescription: FC<AttackMoveDescriptionProps> = ({
  move,
  isLastMove,
  isOnlyMove,
  color,
  outline,
}) => {
  const { alignMovesBottom } = useCardStyles();

  return (
    <MoveDescriptionText
      outline={outline}
      color={color}
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
