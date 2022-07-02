import { useCardStyles } from '@cardEditor/cardStyles';
import { FC } from 'react';
import { AttackMoveDisplayProps } from '../../types';
import { MoveNameText } from './styles';

const AttackMoveName: FC<AttackMoveDisplayProps> = ({ move }) => {
  const { movesOutline, movesTextColor } = useCardStyles();

  return (
    <MoveNameText $outline={movesOutline} $color={movesTextColor}>
      {move?.name}
    </MoveNameText>
  );
};

export default AttackMoveName;
