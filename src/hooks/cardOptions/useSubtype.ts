import subtypes from '@data/cardOptions/subtypes';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useEffect, useMemo } from 'react';
import { defaultRelations, defaultTypeSubtypes } from '@defaults/cardOptions';
import useCardOptions from './useCardOptions';
import useType from './useType';

const useSubtype = () => {
  const {
    state: { subtypeId },
    stateSetter,
  } = useCardOptions();
  const { type } = useType();

  const subtype = useMemo<RelationsInterface['subtype']>(
    () => findById(subtypes, subtypeId, defaultRelations.subtype),
    [subtypeId],
  );

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
