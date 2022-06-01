import types from '@data/cardOptions/types';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import { useEffect, useMemo } from 'react';
import { defaultRelations, defaultSupertypeTypes } from '@defaults/cardOptions';
import findById from '@utils/findById';
import { Type } from '@interfaces/cardOptions/type';
import useCardOptions from './useCardOptions';
import useSupertype from './useSupertype';

const useType = () => {
  const {
    state: { typeId },
    stateSetter,
  } = useCardOptions();
  const { supertype } = useSupertype();

  const pokemonTypes = useMemo<Type[]>(
    () => types.filter(t => t.logic?.isPokemonType),
    [],
  );

  const attackCostTypes = useMemo<Type[]>(
    () => types.filter(t => t.logic?.isAttackCostType),
    [],
  );

  const type = useMemo<RelationsInterface['type']>(
    () => findById(types, typeId, defaultRelations.type),
    [typeId],
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
