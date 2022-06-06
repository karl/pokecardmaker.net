import variations from '@data/cardOptions/variations';
import { CardInterface } from '@interfaces/card';
import { useEffect, useMemo } from 'react';
import { defaultSubtypeVariations } from '@defaults/cardOptions';
import useCardOptions from './useCardOptions';
import useCardRelations from './useCardRelations';

const useVariation = () => {
  const { stateSetter } = useCardOptions();
  const { variation, subtype } = useCardRelations();

  const setVariation = useMemo(
    () => stateSetter<CardInterface['variationId']>('variationId'),
    [stateSetter],
  );

  useEffect(() => {
    if (!subtype) setVariation(undefined);
    else setVariation(defaultSubtypeVariations[subtype.id]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setVariation, subtype]);

  return {
    variations,
    variation,
    setVariation,
  };
};

export default useVariation;
