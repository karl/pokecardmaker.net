import rarityIcons from 'src/features/cardEditor/cardOptions/rarityIcon/data';
import { CardInterface, RelationsInterface } from 'src/features/cardEditor/types';
import findById from '@utils/findById';
import { useMemo } from 'react';
import useCardOptions from '../../hooks/useCardOptions';
import { defaultRelations } from 'src/features/cardEditor/cardOptions';

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
