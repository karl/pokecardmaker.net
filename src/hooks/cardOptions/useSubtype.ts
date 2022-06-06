import subtypes from '@data/cardOptions/subtypes';
import { CardInterface } from '@interfaces/card';
import { useEffect, useMemo } from 'react';
import { defaultTypeSubtypes } from '@defaults/cardOptions';
import useCardOptions from './useCardOptions';
import useCardRelations from './useCardRelations';

const useSubtype = () => {
  const { stateSetter } = useCardOptions();
  const { type, subtype } = useCardRelations();

  const setSubtype = useMemo(
    () => stateSetter<CardInterface['subtypeId']>('subtypeId'),
    [stateSetter],
  );

  useEffect(() => {
    if (!subtype || !subtype.types.includes(type.id)) {
      setSubtype(defaultTypeSubtypes[type.id]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSubtype, type]);

  return {
    subtypes,
    subtype,
    setSubtype,
  };
};

export default useSubtype;
