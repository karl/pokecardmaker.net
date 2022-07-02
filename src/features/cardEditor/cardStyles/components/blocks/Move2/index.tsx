import { useCardOptions } from '@cardEditor/cardOptions';
import { FC } from 'react';
import AttackMove from '../../atoms/AttackMove';

const Move2: FC = () => {
  const { move2, hasMove2 } = useCardOptions();

  if (!hasMove2) return null;

  return <AttackMove move={move2} />;
};

export default Move2;
