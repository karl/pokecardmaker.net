import supertypes from '@data/cardOptions/supertypes';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useMemo } from 'react';
import { defaultRelations } from '@defaults/cardOptions';
import useCardOptions from './useCardOptions';

const useSupertype = () => {
  const {
    state: { supertypeId },
    setState,
  } = useCardOptions();

  const supertype = useMemo<RelationsInterface['supertype']>(
    () => findById(supertypes, supertypeId, defaultRelations.supertype),
    [supertypeId],
  );

  // TODO: Replace this and in other hooks with useCardOptions' stateSetter
  const setSupertype = useCallback(
    (id: CardInterface['supertypeId']) =>
      setState(prev => ({ ...prev, supertypeId: id })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    supertypes,
    supertype,
    setSupertype,
  };
};

export default useSupertype;