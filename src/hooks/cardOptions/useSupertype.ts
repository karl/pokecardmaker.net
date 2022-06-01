import supertypes from '@data/cardOptions/supertypes';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useMemo } from 'react';
import { defaultRelations } from '@defaults/cardOptions';
import useCardOptions from './useCardOptions';

const useSupertype = () => {
  const {
    state: { supertypeId },
    stateSetter,
  } = useCardOptions();

  const supertype = useMemo<RelationsInterface['supertype']>(
    () => findById(supertypes, supertypeId, defaultRelations.supertype),
    [supertypeId],
  );

  const setSupertype = useMemo(
    () => stateSetter<CardInterface['supertypeId']>('supertypeId'),
    [stateSetter],
  );

  return {
    supertypes,
    supertype,
    setSupertype,
  };
};

export default useSupertype;
