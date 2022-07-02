import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import { FC } from 'react';
import AttackMoveForm from '../../atoms/AttackMoveForm';

const Move2Form: FC = () => {
  const { move2, setMove2, hasMove2 } = useCardOptions();

  if (!move2 || !hasMove2) return null;

  return (
    <AttackMoveForm
      label="Second move"
      slug="move2"
      move={move2}
      setMove={setMove2}
    />
  );
};

export default Move2Form;
