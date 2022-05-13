import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useMemo } from 'react';
import { defaultRelations } from 'src/defaults/cardOptions';
import useCardOptions from './useCardOptions';
import useType from './useType';

const useResistanceType = () => {
  const {
    state: { resistanceTypeId },
    setState,
  } = useCardOptions();
  const { attackCostTypes } = useType();

  const resistanceType = useMemo<RelationsInterface['resistanceType']>(
    () =>
      findById(
        attackCostTypes,
        resistanceTypeId,
        defaultRelations.resistanceType,
      ),
    [attackCostTypes, resistanceTypeId],
  );

  const setResistanceType = useCallback(
    (id: CardInterface['resistanceTypeId']) =>
      setState(prev => ({ ...prev, resistanceTypeId: id })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    resistanceType,
    setResistanceType,
  };
};

export default useResistanceType;
