import { CardInterface, RelationsInterface } from '@cardEditor';
import findById from '@utils/findById';
import { useMemo } from 'react';
import { defaultRelations, useCardOptions } from '@cardEditor/cardOptions';
import { setIcons } from '../data';

const useSetIcon = () => {
  const { setIconId, stateSetter, customSetIconSrc } = useCardOptions();

  const setIcon = useMemo<RelationsInterface['setIcon']>(
    () => findById(setIcons, setIconId, defaultRelations.setIcon),
    [setIconId],
  );

  const setSetIcon = useMemo(
    () => stateSetter<CardInterface['setIconId']>('setIconId'),
    [stateSetter],
  );

  const setCustomSetIconSrc = useMemo(
    () => stateSetter<CardInterface['customSetIconSrc']>('customSetIconSrc'),
    [stateSetter],
  );

  return {
    setIcons,
    setIcon,
    setSetIcon,
    customSetIconSrc,
    setCustomSetIconSrc,
  };
};

export default useSetIcon;
