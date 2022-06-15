import { CardInterface, RelationsInterface } from '@cardEditor';
import findById from '@utils/findById';
import { useMemo } from 'react';
import { defaultRelations, useCardOptions } from '@cardEditor/cardOptions';
import { rotationIcons } from '../data';

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
