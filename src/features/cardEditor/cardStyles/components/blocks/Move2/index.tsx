import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import AttackMove from '../../atoms/AttackMove';

const Move2: FC = () => {
  const {
    positions: { move2: placement },
  } = useCardStyles();
  const { hasMove3, bonusMoveRequired } = useCardLogic();
  const { movesTextColor, movesOutline, hasAttackCostBorder } = useCardStyles();
  const { move2, hasMove2 } = useCardOptions();

  if (!hasMove2) return null;

  return (
    <AttackMove
      move={move2}
      isLastMove={!hasMove3}
      forceShow={bonusMoveRequired}
      descriptionTextColor={movesTextColor}
      descriptionOutline={movesOutline}
      nameTextColor={movesTextColor}
      nameOutline={movesOutline}
      hasAttackCostBorder={hasAttackCostBorder}
      placement={placement}
    />
  );
};

export default Move2;
