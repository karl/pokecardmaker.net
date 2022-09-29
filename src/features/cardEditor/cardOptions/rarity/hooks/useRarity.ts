import { useCardOptions, useCardRelations } from '@cardEditor/cardOptions';
import { rarities } from '@cardEditor/cardOptions/rarity';
import { CardInterface } from '@cardEditor';
import { useEffect, useMemo } from 'react';

const useRarity = () => {
  const { rarityId, stateSetter } = useCardOptions();
  const { rarity, baseSet, type, subtype, variation } = useCardRelations();

  const setRarity = useMemo(
    () => stateSetter<CardInterface['rarityId']>('rarityId'),
    [stateSetter],
  );

  useEffect(() => {
    if (!rarityId) return;
    if (
      !type.baseSetDependencies[baseSet.id]?.rarities.includes(rarityId) &&
      (variation && subtype
        ? !variation.baseSetDependencies[baseSet.id]?.subtypes[
            subtype.id
          ]?.rarities.includes(rarityId)
        : !subtype ||
          !subtype.baseSetDependencies[baseSet.id]
            ?.find(r => r.type === type.id)
            ?.rarities.includes(rarityId))
    ) {
      setRarity(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setRarity, subtype, type, variation, baseSet]);

  return {
    rarities,
    rarity,
    setRarity,
  };
};

export default useRarity;
