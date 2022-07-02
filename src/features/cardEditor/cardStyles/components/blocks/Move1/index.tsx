import { useCardOptions } from '@cardEditor/cardOptions';
import { FC } from 'react';
import { AttackMove1 } from './styles';

const Move1: FC = () => {
  const { move1, hasMove2, move2 } = useCardOptions();

  return <AttackMove1 move={move1} $hasMove2={hasMove2 && !!move2?.name} />;
};

export default Move1;
