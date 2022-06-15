import { CardInterface, RelationsInterface } from 'src/features/cardEditor/types';
import findById from '@utils/findById';
import { useMemo } from 'react';
import useType from './useType';
import { defaultRelations } from 'src/features/cardEditor/cardOptions';
import useCardOptions from '../../hooks/useCardOptions';

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
