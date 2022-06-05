import Name from '@components/cardRenderer/components/Name';
import NameSymbol from '@components/cardRenderer/components/NameSymbol';
import useCardLogic from '@hooks/cardOptions/useCardLogic';
import { FC } from 'react';
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
