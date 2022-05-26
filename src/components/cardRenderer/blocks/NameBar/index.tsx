import Name from '@components/cardRenderer/components/Name';
import NameSymbol from '@components/cardRenderer/components/NameSymbol';
import { FC } from 'react';
import { Block } from './styles';

const NameBar: FC = () => (
  <Block>
    <Name />
    <NameSymbol />
  </Block>
);

export default NameBar;
