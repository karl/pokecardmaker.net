import { CardInterface } from '@cardEditor';
import { useCallback, useEffect, useMemo } from 'react';
import {
  defaultSubtypeVariations,
  defaultTypeSubtypes,
  defaultTypeVariations,
  useCardOptions,
  useCardRelations,
} from '@cardEditor/cardOptions';
import { subtypes } from '@cardEditor/cardOptions/subtype';
import findById from '@utils/findById';
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
      /**
       * Changing supertype from Trainer to Pokemon causes subtype to be `undefined` for 1 render,
       * because it hasn't updated the hook yet, while it should be the default subtype. This logic counters that inconsistency
       */
      const tempSubtype =
        type.logic?.isSubtypeRequired && !subtype
          ? findById(subtypes, defaultTypeSubtypes[type.id])
          : subtype;
      const baseSetVariation = v?.baseSetDependencies[baseSet.id];
      if (!baseSetVariation) return false;
      return tempSubtype
        ? !!baseSetVariation.subtypes[tempSubtype.id]
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
