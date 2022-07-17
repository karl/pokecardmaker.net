import { useCardStyles } from '@cardEditor/cardStyles';
import { FC } from 'react';
import { AttackMoveDisplayProps } from '../../types';
import {
  MoveDamageAmountText,
  MoveDamageModifierText,
  Wrapper,
} from './styles';

const AttackMoveDamageAmount: FC<AttackMoveDisplayProps> = ({ move }) => {
  const { movesOutline, movesTextColor } = useCardStyles();

  if (move?.damageAmount === '') return null;

  return (
    <Wrapper>
      <MoveDamageAmountText $outline={movesOutline} $color={movesTextColor}>
        {move?.damageAmount}
      </MoveDamageAmountText>
      <MoveDamageModifierText $outline={movesOutline} $color={movesTextColor}>
        {move?.damageModifier}
      </MoveDamageModifierText>
    </Wrapper>
  );
};

export default AttackMoveDamageAmount;
