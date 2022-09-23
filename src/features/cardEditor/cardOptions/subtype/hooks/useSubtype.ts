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
  const { baseSet, type, subtype } = useCardRelations();

  const setSubtype = useMemo(
    () => stateSetter<CardInterface['subtypeId']>('subtypeId'),
    [stateSetter],
  );

  useEffect(() => {
    if (
      !subtype ||
      !subtype.baseSetDependencies[baseSet.id]?.find(r => r.type === type.id)
    ) {
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
