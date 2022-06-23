import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { FC } from 'react';
import Ability from '../Ability';
import Move1 from '../Move1';
import Move2 from '../Move2';
import { Wrapper } from './styles';

const Moves: FC = () => {
  const { hasMoves } = useCardLogic();
  const { hasMove2, move2 } = useCardOptions();

  if (!hasMoves) return null;

  return (
    <Wrapper $hasMove2={hasMove2 && !!move2?.name}>
      <Ability />
      <Move1 />
      <Move2 />
    </Wrapper>
  );
};

export default Moves;
