import { useCardLogic } from '@cardEditor/cardLogic';
import { FC } from 'react';
import Ability from '../Ability';
import Move1 from '../Move1';
import { Wrapper } from './styles';

const Moves: FC = () => {
  const { hasMoves } = useCardLogic();

  if (!hasMoves) return null;

  return (
    <Wrapper>
      <Ability />
      <Move1 />
    </Wrapper>
  );
};

export default Moves;
