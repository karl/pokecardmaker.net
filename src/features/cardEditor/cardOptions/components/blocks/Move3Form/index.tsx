import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import { useCardStyles } from '@cardEditor/cardStyles';
import { FC } from 'react';
import AttackMoveForm from '../../atoms/AttackMoveForm';

const Move3Form: FC = () => {
  const { hasMove3 } = useCardLogic();
  const {
    move3: { displayName },
  } = useCardStyles();
  const { move3, setMove3 } = useCardOptions();

  if (!move3 || !hasMove3) return null;

  return (
    <AttackMoveForm
      label={displayName!}
      slug="move3"
      move={move3}
      setMove={setMove3}
    />
  );
};

export default Move3Form;
