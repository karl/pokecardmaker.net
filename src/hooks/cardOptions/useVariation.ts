import variations from '@data/cardOptions/variations';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useMemo } from 'react';
import { defaultRelations } from 'src/defaults/cardOptions';
import useCardOptions from './useCardOptions';

const useVariation = () => {
  const {
    state: { variationId },
    setState,
  } = useCardOptions();

  const variation = useMemo<RelationsInterface['variation']>(
    () => findById(variations, variationId, defaultRelations.variation),
    [variationId],
  );

  const setVariation = useCallback(
    (id: CardInterface['variationId']) =>
      setState(prev => ({ ...prev, variationId: id })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    variations,
    variation,
    setVariation,
  };
};

export default useVariation;
