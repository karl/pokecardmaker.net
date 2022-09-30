import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import ResistanceAmount from './fields/ResistanceAmount';
import ResistanceType from './fields/ResistanceType';
import RetreatCost from './fields/RetreatCost';
import WeaknessAmount from './fields/WeaknessAmount';
import WeaknessType from './fields/WeaknessType';
import { Block, TypeWrapper } from './styles';

const TypeBar: FC = () => {
  const { hasTypeBar } = useCardLogic();
  const { weaknessTypeId, weaknessAmount, resistanceTypeId, resistanceAmount } =
    useCardOptions();
  const {
    positions: {
      typeBar: placement,
      weakness: weaknessPlacement,
      resistance: resistancePlacement,
    },
  } = useCardStyles();

  if (!hasTypeBar) return null;

  return (
    <Block placement={placement}>
      {!!weaknessAmount && !!weaknessTypeId && (
        <TypeWrapper placement={weaknessPlacement}>
          <WeaknessType />
          <WeaknessAmount />
        </TypeWrapper>
      )}
      {!!resistanceAmount && !!resistanceTypeId && (
        <TypeWrapper placement={resistancePlacement}>
          <ResistanceType />
          <ResistanceAmount />
        </TypeWrapper>
      )}
      <RetreatCost />
    </Block>
  );
};

export default TypeBar;
