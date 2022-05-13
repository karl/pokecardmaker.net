import rarities from '@data/cardOptions/rarities';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useMemo } from 'react';
import { defaultRelations } from 'src/defaults/cardOptions';
import useCardOptions from './useCardOptions';

const useRarity = () => {
  const {
    state: { rarityId },
    setState,
  } = useCardOptions();

  const rarity = useMemo<RelationsInterface['rarity']>(
    () => findById(rarities, rarityId, defaultRelations.rarity),
    [rarityId],
  );

  const setRarity = useCallback(
    (id: CardInterface['rarityId']) =>
      setState(prev => ({ ...prev, rarityId: id })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    rarities,
    rarity,
    setRarity,
  };
};

export default useRarity;
