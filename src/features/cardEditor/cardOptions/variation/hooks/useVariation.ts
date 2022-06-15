import variations from 'src/features/cardEditor/cardOptions/variation/data';
import { CardInterface } from 'src/features/cardEditor/types';
import { useEffect, useMemo } from 'react';
import useCardOptions from '../../hooks/useCardOptions';
import useCardRelations from '../../hooks/useCardRelations';
import { defaultSubtypeVariations } from 'src/features/cardEditor/cardOptions';

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
