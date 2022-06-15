import supertypes from 'src/features/cardEditor/cardOptions/supertype/data';
import { CardInterface } from 'src/features/cardEditor/types';
import { useMemo } from 'react';
import useCardOptions from '../../hooks/useCardOptions';
import useCardRelations from '../../hooks/useCardRelations';

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
