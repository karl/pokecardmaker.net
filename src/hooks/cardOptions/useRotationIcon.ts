import rotationIcons from '@data/cardOptions/rotationIcons';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useContext, useMemo } from 'react';
import { CardCreatorContext } from 'src/context/CardCreatorContext';
import { defaultRelations } from 'src/defaults/cardOptions';

const useRotationIcon = () => {
  const {
    state: { rotationIconId },
    setState,
  } = useContext(CardCreatorContext);

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
