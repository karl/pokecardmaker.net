import variations from '@data/cardOptions/variations';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useContext, useMemo } from 'react';
import { CardCreatorContext } from 'src/context/CardCreatorContext';
import { defaultRelations } from 'src/defaults/cardOptions';

const useVariation = () => {
  const {
    state: { variationId },
    setState,
  } = useContext(CardCreatorContext);

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
