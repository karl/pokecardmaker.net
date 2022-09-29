import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { AttackMove } from '@cardEditor/types';
import { FC, useMemo } from 'react';
import { AttackMove3 } from './styles';

const Move3: FC = () => {
  const {
    move3: {
      type,
      descriptionTextColor,
      descriptionOutline,
      nameOutline,
      nameTextColor,
      background,
      hasAttackCostBorder,
    },
  } = useCardStyles();
  const { hasMove3 } = useCardLogic();
  const { move3 } = useCardOptions();

  const finalMove = useMemo<AttackMove | undefined>(() => {
    switch (type) {
      case 'gx':
      default:
        return move3
          ? {
              ...move3,
              name: move3.name ? `_${move3?.name}_ [X]` : '[X]',
            }
          : undefined;
    }
  }, [type, move3]);

  if (!hasMove3) return null;

  return (
    <AttackMove3
      move={finalMove}
      isLastMove
      descriptionTextColor={descriptionTextColor}
      descriptionOutline={descriptionOutline}
      nameTextColor={nameTextColor}
      nameOutline={nameOutline}
      background={background}
      hasAttackCostBorder={hasAttackCostBorder!}
    />
  );
};

export default Move3;
