import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import AbilityDescription from './fields/AbilityDescription';
import AbilityName from './fields/AbilityName';
import AbilitySymbol from './fields/AbilitySymbol';
import { TitleBar, Wrapper } from './styles';

const Ability: FC = () => {
  const {
    positions: { ability: placement, abilityTitleBar: titleBarPlacement },
  } = useCardStyles();
  const { hasAbility } = useCardOptions();

  if (!hasAbility) return null;

  return (
    <Wrapper placement={placement}>
      <TitleBar placement={titleBarPlacement}>
        <AbilitySymbol />
        <AbilityName />
      </TitleBar>
      <AbilityDescription />
    </Wrapper>
  );
};

export default Ability;
