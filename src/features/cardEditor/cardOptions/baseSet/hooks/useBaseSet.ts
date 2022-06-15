import { CardInterface } from '@cardEditor';
import { useMemo } from 'react';
import { useCardOptions, useCardRelations } from '@cardEditor/cardOptions';
import { baseSets } from '../data';

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
