import rotationIcons from 'src/features/cardEditor/cardOptions/rotationIcon/data';
import { CardInterface, RelationsInterface } from 'src/features/cardEditor/types';
import findById from '@utils/findById';
import { useMemo } from 'react';
import useCardOptions from '../../hooks/useCardOptions';
import { defaultRelations } from 'src/features/cardEditor/cardOptions';

const useRotationIcon = () => {
  const { rotationIconId, stateSetter } = useCardOptions();

  const rotationIcon = useMemo<RelationsInterface['rotationIcon']>(
    () =>
      findById(rotationIcons, rotationIconId, defaultRelations.rotationIcon),
    [rotationIconId],
  );

  const setRotationIcon = useMemo(
    () => stateSetter<CardInterface['rotationIconId']>('rotationIconId'),
    [stateSetter],
  );

  return {
    rotationIcons,
    rotationIcon,
    setRotationIcon,
  };
};

export default useRotationIcon;
