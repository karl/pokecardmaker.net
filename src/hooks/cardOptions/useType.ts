import types from '@data/cardOptions/types';
import { CardInterface, RelationsInterface } from '@interfaces/card';
import { useCallback, useContext, useMemo } from 'react';
import { CardCreatorContext } from 'src/context/CardCreatorContext';
import { defaultRelations } from 'src/defaults/cardOptions';
import findById from '@utils/findById';
import { Type } from '@interfaces/cardOptions/type';

const useType = () => {
  const {
    state: { typeId },
    setState,
  } = useContext(CardCreatorContext);

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

  const setType = useCallback(
    (id: CardInterface['typeId']) =>
      setState(prev => ({ ...prev, typeId: id })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    attackCostTypes,
    pokemonTypes,
    types,
    type,
    setType,
  };
};

export default useType;
