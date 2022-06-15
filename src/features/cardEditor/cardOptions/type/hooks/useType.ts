import { CardInterface } from '@cardEditor';
import { useEffect, useMemo } from 'react';
import {
  defaultSupertypeTypes,
  useCardOptions,
  useCardRelations,
} from '@cardEditor/cardOptions';
import { Type } from '../types';
import { types } from '../data';

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
