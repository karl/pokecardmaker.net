import rarities from '@data/cardOptions/rarities';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useEffect, useMemo } from 'react';
import { defaultRelations } from '@defaults/cardOptions';
import useCardOptions from './useCardOptions';
import useSubtype from './useSubtype';
import useType from './useType';

const useRarity = () => {
  const {
    state: { rarityId },
    setState,
  } = useCardOptions();
  const { type } = useType();
  const { subtype } = useSubtype();

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

  useEffect(() => {
    if (!rarityId) return;
    if (!type.rarities.includes(rarityId)) {
      setRarity(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setRarity, type]);

  useEffect(() => {
    if (!rarityId) return;
    if (!subtype || !subtype.rarities.includes(rarityId)) {
      setRarity(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setRarity, subtype]);

  return {
    rarities,
    rarity,
    setRarity,
  };
};

export default useRarity;
