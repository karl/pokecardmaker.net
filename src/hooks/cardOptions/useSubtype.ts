import subtypes from '@data/cardOptions/subtypes';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useMemo } from 'react';
import { defaultRelations } from 'src/defaults/cardOptions';
import useCardOptions from './useCardOptions';

const useSubtype = () => {
  const {
    state: { subtypeId },
    setState,
  } = useCardOptions();

  const subtype = useMemo<RelationsInterface['subtype']>(
    () => findById(subtypes, subtypeId, defaultRelations.subtype),
    [subtypeId],
  );

  const setSubtype = useCallback(
    (id: CardInterface['subtypeId']) =>
      setState(prev => ({ ...prev, subtypeId: id })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    subtypes,
    subtype,
    setSubtype,
  };
};

export default useSubtype;
