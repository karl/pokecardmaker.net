import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useMemo } from 'react';
import { defaultRelations } from 'src/defaults/cardOptions';
import useCardOptions from './useCardOptions';
import useType from './useType';

const useWeaknessType = () => {
  const {
    state: { weaknessTypeId },
    setState,
  } = useCardOptions();
  const { attackCostTypes } = useType();

  const weaknessType = useMemo<RelationsInterface['weaknessType']>(
    () =>
      findById(attackCostTypes, weaknessTypeId, defaultRelations.weaknessType),
    [attackCostTypes, weaknessTypeId],
  );

  const setWeaknessType = useCallback(
    (id: CardInterface['weaknessTypeId']) =>
      setState(prev => ({ ...prev, weaknessTypeId: id })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    weaknessType,
    setWeaknessType,
  };
};

export default useWeaknessType;
