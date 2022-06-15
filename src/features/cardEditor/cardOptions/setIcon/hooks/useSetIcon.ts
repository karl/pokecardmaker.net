import { CardInterface, RelationsInterface } from '@cardEditor';
import findById from '@utils/findById';
import { useMemo } from 'react';
import { defaultRelations, useCardOptions } from '@cardEditor/cardOptions';
import { setIcons } from '../data';

const useSetIcon = () => {
  const { setIconId, stateSetter } = useCardOptions();

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
