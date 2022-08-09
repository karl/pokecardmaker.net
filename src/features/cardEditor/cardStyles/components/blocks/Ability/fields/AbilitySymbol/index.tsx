import { useCardStyles } from '@cardEditor/cardStyles';
import Routes from '@routes';
import Image from 'next/image';
import { FC } from 'react';
import { Wrapper } from './styles';

const AbilitySymbol: FC = () => {
  const { abilitySymbol } = useCardStyles();
  const imgSrc =
    !!abilitySymbol && Routes.Assets.Symbols.Ability(abilitySymbol);

  if (!imgSrc) return null;

  return (
    <Wrapper>
      <Image layout="fill" objectFit="contain" alt="" src={imgSrc} />
    </Wrapper>
  );
};

export default AbilitySymbol;
