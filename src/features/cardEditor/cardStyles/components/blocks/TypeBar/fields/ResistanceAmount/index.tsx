import { useCardOptions } from '@cardEditor/cardOptions';
import { FC } from 'react';
import { ModifierText, ResistanceText, Wrapper } from './styles';

const ResistanceAmount: FC = () => {
  const { resistanceAmount } = useCardOptions();

  return (
    <Wrapper>
      <ModifierText>-</ModifierText>
      <ResistanceText>{resistanceAmount}</ResistanceText>
    </Wrapper>
  );
};

export default ResistanceAmount;
