import AbilityDescription from '@components/cardRenderer/components/AbilityDescription';
import AbilityName from '@components/cardRenderer/components/AbilityName';
import AbilitySymbol from '@components/cardRenderer/components/AbilitySymbol';
import useCardOptions from 'src/features/cardEditor/cardOptions/hooks/useCardOptions';
import { FC } from 'react';
import { TextContainer, TitleBar, Wrapper } from './styles';

const Ability: FC = () => {
  const { hasAbility } = useCardOptions();

  if (!hasAbility) return null;

  return (
    <Wrapper>
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
