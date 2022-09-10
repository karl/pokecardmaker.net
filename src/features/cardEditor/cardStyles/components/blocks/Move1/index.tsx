import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC, useMemo } from 'react';
import { AttackMove1 } from './styles';

const Move1: FC = () => {
  const { move1, hasMove2, move2, hasAbility, ability } = useCardOptions();
  const { alignMovesBottom } = useCardStyles();
  const { bonusMoveRequired } = useCardLogic();

  const abilityExists = useMemo<boolean>(
    () => hasAbility && !!ability?.name,
    [hasAbility, ability?.name],
  );
  const move2Exists = useMemo<boolean>(
    () => (hasMove2 && !!move2?.name) || (bonusMoveRequired && hasMove2),
    [hasMove2, move2?.name, bonusMoveRequired],
  );

  return (
    <AttackMove1
      move={move1}
      isLastMove={!move2Exists}
      isOnlyMove={!abilityExists && !move2Exists}
      $hasMove2={move2Exists}
      $alignBottom={alignMovesBottom}
    />
  );
};

export default Move1;
