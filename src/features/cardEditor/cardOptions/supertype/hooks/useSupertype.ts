import { useCardOptions, useCardRelations } from '@cardEditor/cardOptions';
import { CardInterface } from '@cardEditor';
import { useMemo } from 'react';
import { supertypes } from '../data';

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
