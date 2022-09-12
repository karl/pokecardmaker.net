import { useCardOptions, useCardRelations } from '@cardEditor/cardOptions';
import { rarities } from '@cardEditor/cardOptions/rarity';
import { CardInterface } from '@cardEditor';
import { useEffect, useMemo } from 'react';

const useRarity = () => {
  const { rarityId, stateSetter } = useCardOptions();
  const { rarity, type, subtype, variation } = useCardRelations();

  const setRarity = useMemo(
    () => stateSetter<CardInterface['rarityId']>('rarityId'),
    [stateSetter],
  );

  useEffect(() => {
    if (!rarityId) return;
    if (
      !type.rarities.includes(rarityId) &&
      (!!variation
        ? !variation.rarities.includes(rarityId)
        : !subtype ||
          !subtype.relations
            .find(r => r.type === type.id)
            ?.rarities.includes(rarityId))
    ) {
      setRarity(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setRarity, subtype, type, variation]);

  return {
    rarities,
    rarity,
    setRarity,
  };
};

export default useRarity;
