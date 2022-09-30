import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import { ModifierText, ResistanceText, Wrapper } from './styles';

const ResistanceAmount: FC = () => {
  const { resistanceAmount } = useCardOptions();
  const { typeBarTextColor, typeBarOutline } = useCardStyles();

  return (
    <Wrapper textColor={typeBarTextColor} textOutline={typeBarOutline}>
      <ModifierText>-</ModifierText>
      <ResistanceText>{resistanceAmount}</ResistanceText>
    </Wrapper>
  );
};

export default ResistanceAmount;
