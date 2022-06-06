import { useMemo } from 'react';
import merge from 'lodash.merge';
import { CardLogic } from '@interfaces/cardOptions/cardLogic';
import { defaultCardLogic } from '@defaults/cardLogic';
import useSupertype from './useSupertype';
import useRarity from './useRarity';
import useType from './useType';
import useSubtype from './useSubtype';
import useBaseSet from './useBaseSet';
import useVariation from './useVariation';

const useCardLogic = () => {
  const { baseSet } = useBaseSet();
  const { supertype } = useSupertype();
  const { type } = useType();
  const { subtype } = useSubtype();
  const { variation } = useVariation();
  const { rarity } = useRarity();

  const cardLogic = useMemo<CardLogic>(
    () =>
      merge(
        {},
        defaultCardLogic,
        baseSet.logic,
        supertype.logic,
        type.logic,
        subtype?.logic,
        variation?.logic,
        rarity?.logic,
      ),
    [baseSet, supertype, type, subtype, variation, rarity],
  );

  return cardLogic;
};

export default useCardLogic;
