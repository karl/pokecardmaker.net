import rarities from '@data/cardOptions/rarities';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useEffect, useMemo } from 'react';
import { defaultRelations } from '@defaults/cardOptions';
import useCardOptions from './useCardOptions';
import useSubtype from './useSubtype';
import useType from './useType';

const useRarity = () => {
  const {
    state: { rarityId },
    stateSetter,
  } = useCardOptions();
  const { type } = useType();
  const { subtype } = useSubtype();

  const rarity = useMemo<RelationsInterface['rarity']>(
    () => findById(rarities, rarityId, defaultRelations.rarity),
    [rarityId],
  );

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
