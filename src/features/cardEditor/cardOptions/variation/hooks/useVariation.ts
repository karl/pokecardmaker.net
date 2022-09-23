import { CardInterface } from '@cardEditor';
import { useEffect, useMemo } from 'react';
import {
  defaultSubtypeVariations,
  useCardOptions,
  useCardRelations,
} from '@cardEditor/cardOptions';
import { variations } from '../data';

const useVariation = () => {
  const { stateSetter } = useCardOptions();
  const { baseSet, variation, subtype } = useCardRelations();

  const setVariation = useMemo(
    () => stateSetter<CardInterface['variationId']>('variationId'),
    [stateSetter],
  );

  useEffect(() => {
    if (!subtype) setVariation(undefined);
    else if (
      !variation?.baseSetDependencies[baseSet.id]?.subtypes.includes(subtype.id)
    ) {
      setVariation(defaultSubtypeVariations[subtype.id]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setVariation, subtype]);

  return {
    variations,
    variation,
    setVariation,
  };
};

export default useVariation;
