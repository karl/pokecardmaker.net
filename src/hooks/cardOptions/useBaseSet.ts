import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useMemo } from 'react';
import { defaultRelations } from '@defaults/cardOptions';
import baseSets from '@data/cardOptions/baseSets';
import useCardOptions from './useCardOptions';

const useBaseSet = () => {
  const { baseSetId, stateSetter } = useCardOptions();

  const baseSet = useMemo<RelationsInterface['baseSet']>(
    () => findById(baseSets, baseSetId, defaultRelations.baseSet),
    [baseSetId],
  );

  const setBaseSet = useMemo(
    () => stateSetter<CardInterface['baseSetId']>('baseSetId'),
    [stateSetter],
  );

  return {
    baseSets,
    baseSet,
    setBaseSet,
  };
};

export default useBaseSet;
