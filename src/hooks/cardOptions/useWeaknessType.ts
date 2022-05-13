import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useContext, useMemo } from 'react';
import { CardCreatorContext } from 'src/context/CardCreatorContext';
import { defaultRelations } from 'src/defaults/cardOptions';
import useType from './useType';

const useWeaknessType = () => {
  const {
    state: { weaknessTypeId },
    setState,
  } = useContext(CardCreatorContext);
  const { attackCostTypes } = useType();

  const weaknessType = useMemo<RelationsInterface['weaknessType']>(
    () =>
      findById(attackCostTypes, weaknessTypeId, defaultRelations.weaknessType),
    [weaknessTypeId],
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
