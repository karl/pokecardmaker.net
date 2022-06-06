import rarities from '@data/cardOptions/rarities';
import { CardInterface } from '@interfaces/card';
import { useEffect, useMemo } from 'react';
import useCardOptions from './useCardOptions';
import useCardRelations from './useCardRelations';

const useRarity = () => {
  const { rarityId, stateSetter } = useCardOptions();
  const { rarity, type, subtype } = useCardRelations();

  const setRarity = useMemo(
    () => stateSetter<CardInterface['rarityId']>('rarityId'),
    [stateSetter],
  );

  useEffect(() => {
    if (!rarityId) return;
    if (
      !type.rarities.includes(rarityId) &&
      (!subtype || !subtype.rarities.includes(rarityId))
    ) {
      setRarity(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setRarity, subtype, type]);

  return {
    rarities,
    rarity,
    setRarity,
  };
};

export default useRarity;
