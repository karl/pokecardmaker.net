import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useMemo } from 'react';
import { defaultRelations } from '@defaults/cardOptions';
import useCardOptions from './useCardOptions';
import useType from './useType';

const useResistanceType = () => {
  const { resistanceTypeId, stateSetter } = useCardOptions();
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

  const setResistanceType = useMemo(
    () => stateSetter<CardInterface['resistanceTypeId']>('resistanceTypeId'),
    [stateSetter],
  );

  return {
    resistanceType,
    setResistanceType,
  };
};

export default useResistanceType;
