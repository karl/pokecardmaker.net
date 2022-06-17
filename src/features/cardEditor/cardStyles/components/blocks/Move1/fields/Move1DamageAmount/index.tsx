import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles';
import { FC } from 'react';
import { MoveDamageAmountText } from './styles';

const Move1DamageAmount: FC = () => {
  const { move1 } = useCardOptions();
  const { movesOutline, movesTextColor } = useCardStyles();

  return (
    <MoveDamageAmountText $outline={movesOutline} $color={movesTextColor}>
      {move1?.damageAmount}
    </MoveDamageAmountText>
  );
};

export default Move1DamageAmount;
