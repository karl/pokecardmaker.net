import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useMemo } from 'react';
import { defaultRelations } from '@defaults/cardOptions';
import baseSets from '@data/cardOptions/baseSets';
import useCardOptions from './useCardOptions';

const useBaseSet = () => {
  const {
    state: { baseSetId },
    setState,
  } = useCardOptions();

  const baseSet = useMemo<RelationsInterface['baseSet']>(
    () => findById(baseSets, baseSetId, defaultRelations.baseSet),
    [baseSetId],
  );

  const setBaseSet = useCallback(
    (id: CardInterface['baseSetId']) =>
      setState(prev => ({ ...prev, baseSetId: id })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    baseSets,
    baseSet,
    setBaseSet,
  };
};

export default useBaseSet;
