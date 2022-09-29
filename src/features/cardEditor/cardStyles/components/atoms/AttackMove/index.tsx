import { useCardLogic } from '@cardEditor/cardLogic';
import useBase64Img from '@hooks/useBase64Image';
import Routes from '@routes';
import { FC } from 'react';
import AttackMoveDamageAmount from './fields/AttackMoveDamageAmount';
import AttackMoveDescription from './fields/AttackMoveDescription';
import AttackMoveEnergyCost from './fields/AttackMoveEnergyCost';
import AttackMoveName from './fields/AttackMoveName';
import { TitleBar, Wrapper } from './styles';
import { AttackMoveProps } from './types';

const AttackMove: FC<AttackMoveProps> = ({
  move,
  isLastMove,
  isOnlyMove,
  forceShow,
  descriptionOutline,
  descriptionTextColor,
  nameOutline,
  nameTextColor,
  background,
  hasAttackCostBorder,
  ...props
}) => {
  const { hasMoves } = useCardLogic();
  const backgroundImg = useBase64Img(
    background ? Routes.Assets.Symbols.MoveBackground(background) : undefined,
  );

  if (!hasMoves || (!forceShow && !move?.name)) return null;

  return (
    <Wrapper $hasBackground={!!background} {...props}>
      <TitleBar $background={backgroundImg}>
        <AttackMoveEnergyCost
          move={move}
          hasAttackCostBorder={hasAttackCostBorder}
        />
        <AttackMoveName
          move={move}
          outline={nameOutline}
          color={nameTextColor}
        />
        <AttackMoveDamageAmount
          move={move}
          outline={nameOutline}
          color={nameTextColor}
        />
      </TitleBar>
      <AttackMoveDescription
        move={move}
        isLastMove={isLastMove}
        isOnlyMove={isOnlyMove}
        outline={descriptionOutline}
        color={descriptionTextColor}
      />
    </Wrapper>
  );
};

export default AttackMove;
