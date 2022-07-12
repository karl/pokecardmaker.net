import { useCardOptions } from '@cardEditor/cardOptions';
import { FC } from 'react';
import { ModifierText, WeaknessText, Wrapper } from './styles';

const WeaknessAmount: FC = () => {
  const { weaknessAmount } = useCardOptions();

  return (
    <Wrapper>
      <ModifierText>×</ModifierText>
      <WeaknessText>{weaknessAmount}</WeaknessText>
    </Wrapper>
  );
};

export default WeaknessAmount;
