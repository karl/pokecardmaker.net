import setIcons from 'src/features/cardEditor/cardOptions/setIcon/data';
import { CardInterface, RelationsInterface } from 'src/features/cardEditor/types';
import findById from '@utils/findById';
import { useMemo } from 'react';
import useCardOptions from '../../hooks/useCardOptions';
import { defaultRelations } from 'src/features/cardEditor/cardOptions';

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
