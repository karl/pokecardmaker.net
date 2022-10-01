import { CardInterface } from '@cardEditor';
import { useCallback, useEffect, useMemo } from 'react';
import {
  defaultSubtypeVariations,
  defaultTypeVariations,
  useCardOptions,
  useCardRelations,
} from '@cardEditor/cardOptions';
import { variations } from '../data';
import { Variation } from '../types';

const useVariation = () => {
  const { stateSetter } = useCardOptions();
  const { baseSet, type, subtype, variation } = useCardRelations();

  const setVariation = useMemo(
    () => stateSetter<CardInterface['variationId']>('variationId'),
    [stateSetter],
  );

  useEffect(() => {
    if (!variationIsAvailable(variation)) {
      setVariation(
        subtype
          ? defaultSubtypeVariations[subtype.id]
          : defaultTypeVariations[type.id],
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setVariation, type, subtype, baseSet]);

  const variationIsAvailable = useCallback(
    (v?: Variation) => {
      const baseSetVariation = v?.baseSetDependencies[baseSet.id];
      if (!baseSetVariation) return false;
      return subtype
        ? !!baseSetVariation.subtypes[subtype.id]
        : !!baseSetVariation.types?.includes(type.id);
    },
    [baseSet, type, subtype],
  );

  return {
    variations,
    variation,
    setVariation,
    variationIsAvailable,
  };
};

export default useVariation;
