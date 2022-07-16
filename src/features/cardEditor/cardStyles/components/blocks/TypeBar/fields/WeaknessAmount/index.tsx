import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import { ModifierText, WeaknessText, Wrapper } from './styles';

const WeaknessAmount: FC = () => {
  const { weaknessAmount } = useCardOptions();
  const { typeBarTextColor } = useCardStyles();

  return (
    <Wrapper $color={typeBarTextColor}>
      <ModifierText>×</ModifierText>
      <WeaknessText>{weaknessAmount}</WeaknessText>
    </Wrapper>
  );
};

export default WeaknessAmount;
