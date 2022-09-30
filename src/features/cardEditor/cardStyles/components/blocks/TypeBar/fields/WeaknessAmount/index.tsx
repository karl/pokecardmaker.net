import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import { ModifierText, WeaknessText, Wrapper } from './styles';

const WeaknessAmount: FC = () => {
  const { weaknessAmount } = useCardOptions();
  const { typeBarTextColor, typeBarOutline } = useCardStyles();

  return (
    <Wrapper textColor={typeBarTextColor} textOutline={typeBarOutline}>
      <ModifierText>×</ModifierText>
      <WeaknessText>{weaknessAmount}</WeaknessText>
    </Wrapper>
  );
};

export default WeaknessAmount;
