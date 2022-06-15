import subtypes from 'src/features/cardEditor/cardOptions/subtype/data';
import { CardInterface } from 'src/features/cardEditor/types';
import { useEffect, useMemo } from 'react';
import useCardOptions from '../../hooks/useCardOptions';
import useCardRelations from '../../hooks/useCardRelations';
import { defaultTypeSubtypes } from 'src/features/cardEditor/cardOptions';

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
