import { useCardLogic } from '@cardEditor/cardLogic';
import { FC } from 'react';
import Name from './fields/Name';
import NameSymbol from './fields/NameSymbol';
import { Block } from './styles';

const NameBar: FC = () => {
  const { hasName } = useCardLogic();

  if (!hasName) return null;

  return (
    <Block>
      <Name />
      <NameSymbol />
    </Block>
  );
};

export default NameBar;
