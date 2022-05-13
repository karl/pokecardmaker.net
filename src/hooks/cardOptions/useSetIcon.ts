import setIcons from '@data/cardOptions/setIcons';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useMemo } from 'react';
import { defaultRelations } from '@defaults/cardOptions';
import useCardOptions from './useCardOptions';

const useSetIcon = () => {
  const {
    state: { setIconId },
    setState,
  } = useCardOptions();

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
