import { CardInterface, RelationsInterface } from 'src/features/cardEditor/types';
import findById from '@utils/findById';
import { useMemo } from 'react';
import useCardOptions from '../../hooks/useCardOptions';
import useType from './useType';
import { defaultRelations } from 'src/features/cardEditor/cardOptions';

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
