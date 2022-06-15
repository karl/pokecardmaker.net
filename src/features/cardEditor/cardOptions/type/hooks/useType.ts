import types from 'src/features/cardEditor/cardOptions/type/data';
import { CardInterface } from 'src/features/cardEditor/types';
import { useEffect, useMemo } from 'react';
import { Type } from 'src/features/cardEditor/cardOptions/type/types';
import { defaultSupertypeTypes } from 'src/features/cardEditor/cardOptions';
import useCardRelations from '../../hooks/useCardRelations';
import useCardOptions from '../../hooks/useCardOptions';

const useType = () => {
  const { stateSetter } = useCardOptions();
  const { supertype, type } = useCardRelations();

  const pokemonTypes = useMemo<Type[]>(
    () => types.filter(t => t.logic?.isPokemonType),
    [],
  );

  const attackCostTypes = useMemo<Type[]>(
    () => types.filter(t => t.logic?.isAttackCostType),
    [],
  );

  const setType = useMemo(
    () => stateSetter<CardInterface['typeId']>('typeId'),
    [stateSetter],
  );

  useEffect(() => {
    if (!type.supertypes.includes(supertype.id)) {
      setType(defaultSupertypeTypes[supertype.id]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setType, supertype]);

  return {
    attackCostTypes,
    pokemonTypes,
    types,
    type,
    setType,
  };
};

export default useType;
