import supertypes from '@data/cardOptions/supertypes';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useContext, useMemo } from 'react';
import { CardCreatorContext } from 'src/context/CardCreatorContext';
import { defaultRelations } from 'src/defaults/cardOptions';

const useSupertype = () => {
  const {
    state: { supertypeId },
    setState,
  } = useContext(CardCreatorContext);

  const supertype = useMemo<RelationsInterface['supertype']>(
    () => findById(supertypes, supertypeId, defaultRelations.supertype),
    [supertypeId],
  );

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
