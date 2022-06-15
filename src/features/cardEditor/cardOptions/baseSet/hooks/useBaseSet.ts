import { CardInterface } from 'src/features/cardEditor/types';
import { useMemo } from 'react';
import baseSets from 'src/features/cardEditor/cardOptions/baseSet/data';
import useCardOptions from '../../hooks/useCardOptions';
import useCardRelations from '../../hooks/useCardRelations';

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
