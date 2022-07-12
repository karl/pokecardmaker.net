import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { FC } from 'react';
import ResistanceAmount from './fields/ResistanceAmount';
import ResistanceType from './fields/ResistanceType';
import RetreatCost from './fields/RetreatCost';
import WeaknessAmount from './fields/WeaknessAmount';
import WeaknessType from './fields/WeaknessType';
import { Block, ResistanceWrapper, WeaknessWrapper } from './styles';

const TypeBar: FC = () => {
  const { hasTypeBar } = useCardLogic();
  const { weaknessTypeId, weaknessAmount, resistanceTypeId, resistanceAmount } =
    useCardOptions();

  if (!hasTypeBar) return null;

  return (
    <Block>
      {!!weaknessAmount && !!weaknessTypeId && (
        <WeaknessWrapper>
          <WeaknessType />
          <WeaknessAmount />
        </WeaknessWrapper>
      )}
      {!!resistanceAmount && !!resistanceTypeId && (
        <ResistanceWrapper>
          <ResistanceType />
          <ResistanceAmount />
        </ResistanceWrapper>
      )}
      <RetreatCost />
    </Block>
  );
};

export default TypeBar;
