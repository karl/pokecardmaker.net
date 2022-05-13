import setIcons from '@data/cardOptions/setIcons';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useContext, useMemo } from 'react';
import { CardCreatorContext } from 'src/context/CardCreatorContext';
import { defaultRelations } from 'src/defaults/cardOptions';

const useSetIcon = () => {
  const {
    state: { setIconId },
    setState,
  } = useContext(CardCreatorContext);

  const setIcon = useMemo<RelationsInterface['setIcon']>(
    () => findById(setIcons, setIconId, defaultRelations.setIcon),
    [setIconId],
  );

  const setSetIcon = useCallback(
    (id: CardInterface['setIconId']) =>
      setState(prev => ({ ...prev, setIconId: id })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    setIcons,
    setIcon,
    setSetIcon,
  };
};

export default useSetIcon;
