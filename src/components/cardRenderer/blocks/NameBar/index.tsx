import Name from '@components/cardRenderer/components/Name';
import NameSymbol from '@components/cardRenderer/components/NameSymbol';
import useType from '@hooks/cardOptions/useType';
import { FC } from 'react';
import { Block } from './styles';

const NameBar: FC = () => {
  const { type } = useType();

  if (!type.logic.hasName) return null;

  return (
    <Block>
      <Name />
      <NameSymbol />
    </Block>
  );
};

export default NameBar;
