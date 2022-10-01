import { useCardOptions, useCardRelations } from '@cardEditor/cardOptions';
import { CardInterface } from '@cardEditor';
import { useCallback, useEffect, useMemo } from 'react';
import { rarities } from '../data';

const useRarity = () => {
  const { rarityId, stateSetter } = useCardOptions();
  const { rarity, baseSet, type, subtype, variation } = useCardRelations();

  const setRarity = useMemo(
    () => stateSetter<CardInterface['rarityId']>('rarityId'),
    [stateSetter],
  );

  const typeRarities = useMemo(
    () => type.baseSetDependencies[baseSet.id]?.rarities,
    [type, baseSet],
  );

  const variationSubtypeRarities = useMemo(
    () =>
      subtype
        ? variation?.baseSetDependencies[baseSet.id]?.subtypes[subtype.id]
            ?.rarities
        : undefined,
    [variation, subtype, baseSet],
  );

  const subtypeRarities = useMemo(
    () =>
      subtype?.baseSetDependencies[baseSet.id]?.find(r => r.type === type.id)
        ?.rarities,
    [subtype, baseSet, type],
  );

  const typeHasVariation = useMemo(
    () =>
      !!variation?.baseSetDependencies[baseSet.id]?.types?.includes(type.id),
    [baseSet, type, variation],
  );

  const rarityIsAvailable = useCallback(
    (id: number) => {
      const typeIncludesRarity = typeRarities.includes(id);
      const variationSubtypeIncludesRarity =
        variation && subtype && variationSubtypeRarities?.includes(id);
      const subtypeIncludesRarity = subtypeRarities?.includes(id);

      if (
        variation && subtype
          ? variationSubtypeIncludesRarity
          : subtype && subtypeIncludesRarity
      )
        return true;
      if (!variation && !subtype && typeIncludesRarity) return true;
      return false;
    },
    [
      typeRarities,
      variationSubtypeRarities,
      subtypeRarities,
      variation,
      subtype,
    ],
  );

  const anyRarityAvailable = useMemo<boolean>(() => {
    const typeHasRarities = !!typeRarities.length;
    const variationSubtypeHasRarities =
      variation && subtype && variationSubtypeRarities?.length;
    const subtypeHasRarities = !!subtypeRarities?.length;

    if (typeHasVariation) return false;
    if (!variation && !subtype && typeHasRarities) return true;
    if (
      variation && subtype
        ? variationSubtypeHasRarities
        : subtype && subtypeHasRarities
    )
      return true;
    return false;
  }, [
    typeRarities,
    variation,
    subtype,
    variationSubtypeRarities,
    subtypeRarities,
    typeHasVariation,
  ]);

  useEffect(() => {
    if (!rarityId) return;
    if (!rarityIsAvailable(rarityId)) {
      setRarity(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subtype, type, variation, baseSet, setRarity, rarityIsAvailable]);

  return {
    rarities,
    rarity,
    anyRarityAvailable,
    setRarity,
    rarityIsAvailable,
  };
};

export default useRarity;
