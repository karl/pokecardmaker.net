import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import Name from './fields/Name';
import NameSymbol from './fields/NameSymbol';
import Subname from './fields/Subname';
import { Block } from './styles';

const NameBar: FC = () => {
  const { hasName } = useCardLogic();
  const {
    positions: { name: placement },
  } = useCardStyles();

  if (!hasName) return null;

  return (
    <Block {...placement}>
      <Name />
      <NameSymbol />
      <Subname />
    </Block>
  );
};

export default NameBar;
