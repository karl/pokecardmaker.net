import { CardInterface, RelationsInterface } from '@cardEditor';
import findById from '@utils/findById';
import { useMemo } from 'react';
import { defaultRelations, useCardOptions } from '@cardEditor/cardOptions';
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
