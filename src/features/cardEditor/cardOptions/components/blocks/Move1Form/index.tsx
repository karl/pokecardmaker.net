import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import { FC } from 'react';
import AttackMoveForm from '../../atoms/AttackMoveForm';

const Move1Form: FC = () => {
  const { move1, setMove1 } = useCardOptions();

  if (!move1) return null;

  return (
    <AttackMoveForm
      label="First move"
      slug="move1"
      move={move1}
      setMove={setMove1}
    />
  );
};

export default Move1Form;
