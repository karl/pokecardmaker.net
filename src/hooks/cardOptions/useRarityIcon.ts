import rarityIcons from '@data/cardOptions/rarityIcons';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useMemo } from 'react';
import { defaultRelations } from 'src/defaults/cardOptions';
import useCardOptions from './useCardOptions';

const useRarityIcon = () => {
  const {
    state: { rarityIconId },
    setState,
  } = useCardOptions();

  const rarityIcon = useMemo<RelationsInterface['rarityIcon']>(
    () => findById(rarityIcons, rarityIconId, defaultRelations.rarityIcon),
    [rarityIconId],
  );

  const setRarityIcon = useCallback(
    (id: CardInterface['rarityIconId']) =>
      setState(prev => ({ ...prev, rarityIconId: id })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    rarityIcons,
    rarityIcon,
    setRarityIcon,
  };
};

export default useRarityIcon;
