import supertypes from '@data/cardOptions/supertypes';
import { CardInterface } from '@interfaces/card';
import { useMemo } from 'react';
import useCardOptions from './useCardOptions';
import useCardRelations from './useCardRelations';

const useSupertype = () => {
  const { stateSetter } = useCardOptions();
  const { supertype } = useCardRelations();

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
