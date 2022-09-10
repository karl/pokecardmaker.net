import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import AbilityDescription from './fields/AbilityDescription';
import AbilityName from './fields/AbilityName';
import AbilitySymbol from './fields/AbilitySymbol';
import { TextContainer, TitleBar, Wrapper } from './styles';

const Ability: FC = () => {
  const {
    positions: { ability: placement },
  } = useCardStyles();
  const { hasAbility } = useCardOptions();

  if (!hasAbility) return null;

  return (
    <Wrapper {...placement}>
      <TitleBar>
        <AbilitySymbol />
        <AbilityName />
      </TitleBar>
      <TextContainer>
        <AbilityDescription />
      </TextContainer>
    </Wrapper>
  );
};

export default Ability;
