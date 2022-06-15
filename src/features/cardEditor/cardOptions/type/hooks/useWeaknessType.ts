import { CardInterface, RelationsInterface } from '@cardEditor';
import findById from '@utils/findById';
import { useMemo } from 'react';
import { defaultRelations, useCardOptions } from '@cardEditor/cardOptions';
import useType from './useType';

const useWeaknessType = () => {
  const { weaknessTypeId, stateSetter } = useCardOptions();
  const { attackCostTypes } = useType();

  const weaknessType = useMemo<RelationsInterface['weaknessType']>(
    () =>
      findById(attackCostTypes, weaknessTypeId, defaultRelations.weaknessType),
    [attackCostTypes, weaknessTypeId],
  );

  const setWeaknessType = useMemo(
    () => stateSetter<CardInterface['weaknessTypeId']>('weaknessTypeId'),
    [stateSetter],
  );

  return {
    weaknessType,
    setWeaknessType,
  };
};

export default useWeaknessType;
