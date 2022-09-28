import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC, useMemo } from 'react';
import { AttackMove1 } from './styles';

const Move1: FC = () => {
  const { move1, hasMove2, move2, hasAbility, ability } = useCardOptions();
  const {
    alignMovesBottom,
    movesTextColor,
    movesOutline,
    hasAttackCostBorder,
  } = useCardStyles();
  const { bonusMoveRequired, hasMove3 } = useCardLogic();

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
      isOnlyMove={!abilityExists && !move2Exists && !hasMove3}
      descriptionTextColor={movesTextColor}
      descriptionOutline={movesOutline}
      nameTextColor={movesTextColor}
      nameOutline={movesOutline}
      hasAttackCostBorder={hasAttackCostBorder}
      $hasMove2={move2Exists}
      $alignBottom={alignMovesBottom}
    />
  );
};

export default Move1;
