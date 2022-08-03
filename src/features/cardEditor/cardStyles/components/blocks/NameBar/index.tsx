import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import Name from './fields/Name';
import NameSymbol from './fields/NameSymbol';
import { Block } from './styles';

const NameBar: FC = () => {
  const { hasName } = useCardLogic();
  const {
    positions: { name: namePosition },
  } = useCardStyles();

  if (!hasName) return null;

  return (
    <Block {...namePosition}>
      <Name />
      <NameSymbol />
    </Block>
  );
};

export default NameBar;
