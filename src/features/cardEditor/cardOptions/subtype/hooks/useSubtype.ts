import { CardInterface } from '@cardEditor';
import { useEffect, useMemo } from 'react';
import {
  defaultTypeSubtypes,
  useCardOptions,
  useCardRelations,
} from '@cardEditor/cardOptions';
import { subtypes } from '../data';

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
