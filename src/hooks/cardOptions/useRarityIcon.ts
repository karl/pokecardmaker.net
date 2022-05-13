import rarityIcons from '@data/cardOptions/rarityIcons';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useContext, useMemo } from 'react';
import { CardCreatorContext } from 'src/context/CardCreatorContext';
import { defaultRelations } from 'src/defaults/cardOptions';

const useRarityIcon = () => {
  const {
    state: { rarityIconId },
    setState,
  } = useContext(CardCreatorContext);

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
