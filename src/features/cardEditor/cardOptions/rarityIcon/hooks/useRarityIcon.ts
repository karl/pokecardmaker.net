import { CardInterface, RelationsInterface } from '@cardEditor';
import findById from '@utils/findById';
import { useMemo } from 'react';
import { defaultRelations, useCardOptions } from '@cardEditor/cardOptions';
import { rarityIcons } from '../data';

const useRarityIcon = () => {
  const { rarityIconId, stateSetter } = useCardOptions();

  const rarityIcon = useMemo<RelationsInterface['rarityIcon']>(
    () => findById(rarityIcons, rarityIconId, defaultRelations.rarityIcon),
    [rarityIconId],
  );

  const setRarityIcon = useMemo(
    () => stateSetter<CardInterface['rarityIconId']>('rarityIconId'),
    [stateSetter],
  );

  return {
    rarityIcons,
    rarityIcon,
    setRarityIcon,
  };
};

export default useRarityIcon;
