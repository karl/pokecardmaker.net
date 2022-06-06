import types from '@data/cardOptions/types';
import { CardInterface } from '@interfaces/card';
import { useEffect, useMemo } from 'react';
import { defaultSupertypeTypes } from '@defaults/cardOptions';
import { Type } from '@interfaces/cardOptions/type';
import useCardOptions from './useCardOptions';
import useCardRelations from './useCardRelations';

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
