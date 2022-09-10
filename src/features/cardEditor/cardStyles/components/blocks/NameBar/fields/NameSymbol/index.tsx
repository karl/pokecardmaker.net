import { useCardStyles } from '@cardEditor/cardStyles';
import DisplayImg from '@cardEditor/cardStyles/components/atoms/DisplayImg';
import Routes from '@routes';
import { FC } from 'react';
import { Wrapper } from './styles';

const NameSymbol: FC = () => {
  const {
    positions: { nameSymbol: placement },
  } = useCardStyles();
  const { nameSymbol } = useCardStyles();
  const imgSrc = !!nameSymbol && Routes.Assets.Symbols.Name(nameSymbol);

  if (!imgSrc) return null;

  return (
    <Wrapper {...placement}>
      <DisplayImg src={imgSrc} />
    </Wrapper>
  );
};

export default NameSymbol;
