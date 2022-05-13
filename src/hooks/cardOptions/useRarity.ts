import rarities from '@data/cardOptions/rarities';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useContext, useMemo } from 'react';
import { CardCreatorContext } from 'src/context/CardCreatorContext';
import { defaultRelations } from 'src/defaults/cardOptions';

const useRarity = () => {
  const {
    state: { rarityId },
    setState,
  } = useContext(CardCreatorContext);

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
