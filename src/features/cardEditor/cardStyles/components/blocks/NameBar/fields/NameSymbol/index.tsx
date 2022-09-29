import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardStyles } from '@cardEditor/cardStyles';
import DisplayImg from '@cardEditor/cardStyles/components/atoms/DisplayImg';
import Routes from '@routes';
import { FC } from 'react';
import { Wrapper } from './styles';

const NameSymbol: FC = () => {
  const { nameSymbol } = useCardStyles();
  const { hasNameSymbol } = useCardLogic();
  const imgSrc = !!nameSymbol && Routes.Assets.Symbols.Name(nameSymbol);

  if (!hasNameSymbol || !imgSrc) return null;

  return (
    <Wrapper $symbol={nameSymbol}>
      <DisplayImg src={imgSrc} />
    </Wrapper>
  );
};

export default NameSymbol;
