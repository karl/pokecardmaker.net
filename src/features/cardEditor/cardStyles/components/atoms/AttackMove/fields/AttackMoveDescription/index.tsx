import { useCardStyles } from '@cardEditor/cardStyles';
import { FC } from 'react';
import { MoveDescriptionText } from './styles';
import { AttackMoveDescriptionProps } from './types';

const AttackMoveDescription: FC<AttackMoveDescriptionProps> = ({
  move,
  isLastMove,
  isOnlyMove,
  textColor: color,
  textOutline: outline,
}) => {
  const { alignMovesBottom } = useCardStyles();

  return (
    <MoveDescriptionText
      textOutline={outline}
      textColor={color}
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
