import { CardInterface, RelationsInterface } from '@interfaces/card';
import findById from '@utils/findById';
import { useCallback, useContext, useMemo } from 'react';
import { CardCreatorContext } from 'src/context/CardCreatorContext';
import { defaultRelations } from 'src/defaults/cardOptions';
import useType from './useType';

const useResistanceType = () => {
  const {
    state: { resistanceTypeId },
    setState,
  } = useContext(CardCreatorContext);
  const { attackCostTypes } = useType();

  const resistanceType = useMemo<RelationsInterface['resistanceType']>(
    () =>
      findById(
        attackCostTypes,
        resistanceTypeId,
        defaultRelations.resistanceType,
      ),
    [resistanceTypeId],
  );

  const setResistanceType = useCallback(
    (id: CardInterface['resistanceTypeId']) =>
      setState(prev => ({ ...prev, resistanceTypeId: id })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    resistanceType,
    setResistanceType,
  };
};

export default useResistanceType;
