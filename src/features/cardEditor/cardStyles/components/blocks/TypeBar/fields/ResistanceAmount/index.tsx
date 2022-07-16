import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import { ModifierText, ResistanceText, Wrapper } from './styles';

const ResistanceAmount: FC = () => {
  const { resistanceAmount } = useCardOptions();
  const { typeBarTextColor } = useCardStyles();

  return (
    <Wrapper $color={typeBarTextColor}>
      <ModifierText>-</ModifierText>
      <ResistanceText>{resistanceAmount}</ResistanceText>
    </Wrapper>
  );
};

export default ResistanceAmount;
