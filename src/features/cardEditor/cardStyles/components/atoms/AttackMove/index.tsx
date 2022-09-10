import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { FC } from 'react';
import AttackMoveDamageAmount from './fields/AttackMoveDamageAmount';
import AttackMoveDescription from './fields/AttackMoveDescription';
import AttackMoveEnergyCost from './fields/AttackMoveEnergyCost';
import AttackMoveName from './fields/AttackMoveName';
import { TextContainer, TitleBar, Wrapper } from './styles';
import { AttackMoveDisplayProps } from './types';

const AttackMove: FC<AttackMoveDisplayProps> = ({
  move,
  isLastMove,
  isOnlyMove,
  ...props
}) => {
  const { hasMoves, bonusMoveRequired } = useCardLogic();
  const { hasMove2 } = useCardOptions();

  if (
    !hasMoves ||
    // If is 2nd move while bonus move is required, force show even when name is undefined
    (!(isLastMove && bonusMoveRequired && hasMove2) && !move?.name)
  )
    return null;

  return (
    <Wrapper {...props}>
      <TitleBar>
        <AttackMoveEnergyCost move={move} />
        <AttackMoveName move={move} />
        <AttackMoveDamageAmount move={move} />
      </TitleBar>
      <TextContainer>
        <AttackMoveDescription
          move={move}
          isLastMove={isLastMove}
          isOnlyMove={isOnlyMove}
        />
      </TextContainer>
    </Wrapper>
  );
};

export default AttackMove;
