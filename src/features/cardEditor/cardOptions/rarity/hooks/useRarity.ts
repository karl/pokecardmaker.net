import rarities from 'src/features/cardEditor/cardOptions/rarity/data';
import { CardInterface } from 'src/features/cardEditor/types';
import { useEffect, useMemo } from 'react';
import useCardOptions from '../../hooks/useCardOptions';
import useCardRelations from '../../hooks/useCardRelations';

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
