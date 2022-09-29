import { useCardLogic } from '@cardEditor/cardLogic';
import { FC } from 'react';
import { AttackMoveDisplayProps } from '../../types';
import { MoveNameText } from './styles';

const AttackMoveName: FC<AttackMoveDisplayProps> = ({
  move,
  color,
  outline,
}) => {
  const { greatestEnergyCost } = useCardLogic();

  return (
    <MoveNameText
      $energyCost={greatestEnergyCost}
      outline={outline}
      color={color}
    >
      {move?.name}
    </MoveNameText>
  );
};

export default AttackMoveName;
