import variations from '@data/cardOptions/variations';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useEffect, useMemo } from 'react';
import {
  defaultRelations,
  defaultSubtypeVariations,
} from '@defaults/cardOptions';
import useCardOptions from './useCardOptions';
import useSubtype from './useSubtype';

const useVariation = () => {
  const {
    state: { variationId },
    stateSetter,
  } = useCardOptions();
  const { subtype } = useSubtype();

  const variation = useMemo<RelationsInterface['variation']>(
    () => findById(variations, variationId, defaultRelations.variation),
    [variationId],
  );

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
