import { useCardStyles } from '@cardEditor/cardStyles';
import DisplayImg from '@cardEditor/cardStyles/components/atoms/DisplayImg';
import Routes from '@routes';
import { FC } from 'react';
import { Wrapper } from './styles';

const AbilitySymbol: FC = () => {
  const { abilitySymbol } = useCardStyles();
  const imgSrc =
    !!abilitySymbol && Routes.Assets.Symbols.Ability(abilitySymbol);

  if (!imgSrc) return null;

  return (
    <Wrapper>
      <DisplayImg src={imgSrc} />
    </Wrapper>
  );
};

export default AbilitySymbol;
