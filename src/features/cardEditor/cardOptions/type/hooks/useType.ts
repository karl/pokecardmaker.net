import { CardInterface } from '@cardEditor';
import { useCallback, useEffect, useMemo } from 'react';
import {
  defaultSupertypeTypes,
  useCardOptions,
  useCardRelations,
} from '@cardEditor/cardOptions';
import findById from '@utils/findById';
import { Type } from '../types';
import { types } from '../data';

const useType = () => {
  const { stateSetter } = useCardOptions();
  const { baseSet, supertype, type } = useCardRelations();

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

  const getTypeById = useCallback((id: number) => findById(types, id), []);

  useEffect(() => {
    if (
      !type.baseSetDependencies[baseSet.id]?.supertypes.includes(supertype.id)
    ) {
      setType(defaultSupertypeTypes[supertype.id]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseSet, setType, supertype]);

  return {
    attackCostTypes,
    pokemonTypes,
    types,
    type,
    setType,
    getTypeById,
  };
};

export default useType;
