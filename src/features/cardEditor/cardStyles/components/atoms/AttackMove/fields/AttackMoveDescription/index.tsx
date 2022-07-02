import { useCardStyles } from '@cardEditor/cardStyles';
import { FC } from 'react';
import { AttackMoveDisplayProps } from '../../types';
import { MoveDescriptionText } from './styles';

const AttackMoveDescription: FC<AttackMoveDisplayProps> = ({ move }) => {
  const { movesOutline, movesTextColor } = useCardStyles();

  return (
    <MoveDescriptionText $outline={movesOutline} $color={movesTextColor}>
      {move?.description}
    </MoveDescriptionText>
  );
};

export default AttackMoveDescription;
