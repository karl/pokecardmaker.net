import rotationIcons from '@data/cardOptions/rotationIcons';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useMemo } from 'react';
import { defaultRelations } from '@defaults/cardOptions';
import useCardOptions from './useCardOptions';

const useRotationIcon = () => {
  const {
    state: { rotationIconId },
    setState,
  } = useCardOptions();

  const rotationIcon = useMemo<RelationsInterface['rotationIcon']>(
    () =>
      findById(rotationIcons, rotationIconId, defaultRelations.rotationIcon),
    [rotationIconId],
  );

  const setRotationIcon = useCallback(
    (id: CardInterface['rotationIconId']) =>
      setState(prev => ({ ...prev, rotationIconId: id })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    rotationIcons,
    rotationIcon,
    setRotationIcon,
  };
};

export default useRotationIcon;
