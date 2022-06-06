import { CardInterface } from '@interfaces/card';
import { useMemo } from 'react';
import baseSets from '@data/cardOptions/baseSets';
import useCardOptions from './useCardOptions';
import useCardRelations from './useCardRelations';

const useBaseSet = () => {
  const { stateSetter } = useCardOptions();
  const { baseSet } = useCardRelations();

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
