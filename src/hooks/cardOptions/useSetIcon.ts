import setIcons from '@data/cardOptions/setIcons';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useMemo } from 'react';
import { defaultRelations } from '@defaults/cardOptions';
import useCardOptions from './useCardOptions';

const useSetIcon = () => {
  const {
    state: { setIconId },
    stateSetter,
  } = useCardOptions();

  const setIcon = useMemo<RelationsInterface['setIcon']>(
    () => findById(setIcons, setIconId, defaultRelations.setIcon),
    [setIconId],
  );

  const setSetIcon = useMemo(
    () => stateSetter<CardInterface['setIconId']>('setIconId'),
    [stateSetter],
  );

  return {
    setIcons,
    setIcon,
    setSetIcon,
  };
};

export default useSetIcon;
