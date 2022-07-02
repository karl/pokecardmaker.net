import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardStyles } from '@cardEditor/cardStyles';
import { FC } from 'react';
import { AttackMoveDisplayProps } from '../../types';
import { MoveNameText } from './styles';

const AttackMoveName: FC<AttackMoveDisplayProps> = ({ move }) => {
  const { movesOutline, movesTextColor } = useCardStyles();
  const { greatestEnergyCost } = useCardLogic();

  return (
    <MoveNameText
      $energyCost={greatestEnergyCost}
      $outline={movesOutline}
      $color={movesTextColor}
    >
      {move?.name}
    </MoveNameText>
  );
};

export default AttackMoveName;
