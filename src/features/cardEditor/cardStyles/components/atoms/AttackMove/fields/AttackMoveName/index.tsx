import { useCardLogic } from '@cardEditor/cardLogic';
import { FC } from 'react';
import { AttackMoveDisplayProps } from '../../types';
import { MoveNameText } from './styles';

const AttackMoveName: FC<AttackMoveDisplayProps> = ({
  move,
  textColor: color,
  textOutline: outline,
}) => {
  const { greatestEnergyCost } = useCardLogic();

  return (
    <MoveNameText
      $energyCost={greatestEnergyCost}
      textOutline={outline}
      textColor={color}
    >
      {move?.name}
    </MoveNameText>
  );
};

export default AttackMoveName;
