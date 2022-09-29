import { FC } from 'react';
import { AttackMoveDisplayProps } from '../../types';
import {
  MoveDamageAmountText,
  MoveDamageModifierText,
  Wrapper,
} from './styles';

const AttackMoveDamageAmount: FC<AttackMoveDisplayProps> = ({
  move,
  outline,
  color,
}) => {
  if (move?.damageAmount === '') return null;

  return (
    <Wrapper>
      <MoveDamageAmountText outline={outline} color={color}>
        {move?.damageAmount}
      </MoveDamageAmountText>
      <MoveDamageModifierText outline={outline} color={color}>
        {move?.damageModifier}
      </MoveDamageModifierText>
    </Wrapper>
  );
};

export default AttackMoveDamageAmount;
