import { useCardStyles } from '@cardEditor/cardStyles';
import { FC } from 'react';
import { AttackMoveDisplayProps } from '../../types';
import { MoveDamageAmountText } from './styles';

const AttackMoveDamageAmount: FC<AttackMoveDisplayProps> = ({ move }) => {
  const { movesOutline, movesTextColor } = useCardStyles();

  return (
    <MoveDamageAmountText $outline={movesOutline} $color={movesTextColor}>
      {move?.damageAmount}
    </MoveDamageAmountText>
  );
};

export default AttackMoveDamageAmount;
