import useCardLogic from '@hooks/cardOptions/useCardLogic';
import { FC } from 'react';
import Ability from '../Ability';
import { Wrapper } from './styles';

const Moves: FC = () => {
  const { hasMoves } = useCardLogic();

  if (!hasMoves) return null;

  return (
    <Wrapper>
      <Ability />
    </Wrapper>
  );
};

export default Moves;
