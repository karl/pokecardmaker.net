import { FC } from 'react';
import { AttackMoveDisplayProps } from '../../types';
import {
  MoveDamageAmountText,
  MoveDamageModifierText,
  Wrapper,
} from './styles';

const AttackMoveDamageAmount: FC<AttackMoveDisplayProps> = ({
  move,
  textOutline,
  textColor,
}) => {
  if (move?.damageAmount === '') return null;

  return (
    <Wrapper>
      <MoveDamageAmountText textOutline={textOutline} textColor={textColor}>
        {move?.damageAmount}
      </MoveDamageAmountText>
      <MoveDamageModifierText textOutline={textOutline} textColor={textColor}>
        {move?.damageModifier}
      </MoveDamageModifierText>
    </Wrapper>
  );
};

export default AttackMoveDamageAmount;
