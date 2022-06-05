import { useMemo } from 'react';
import merge from 'lodash.merge';
import { defaultSupertypeLogic } from '@defaults/supertypes';
import { defaultTypeLogic } from '@defaults/types';
import { defaultSubtypeLogic } from '@defaults/subtypes';
import { defaultRarityLogic } from '@defaults/raritities';
import { SupertypeLogic } from '@interfaces/cardOptions/supertype';
import { SubtypeLogic } from '@interfaces/cardOptions/subtype';
import { TypeLogic } from '@interfaces/cardOptions/type';
import { RarityLogic } from '@interfaces/cardOptions/rarity';
import useSupertype from './useSupertype';
import useRarity from './useRarity';
import useType from './useType';
import useSubtype from './useSubtype';

const useCardLogic = () => {
  const { supertype } = useSupertype();
  const { type } = useType();
  const { subtype } = useSubtype();
  const { rarity } = useRarity();

  const cardLogic = useMemo<
    SupertypeLogic & TypeLogic & SubtypeLogic & RarityLogic
  >(
    () =>
      merge(
        {},
        defaultSupertypeLogic,
        defaultTypeLogic,
        defaultSubtypeLogic,
        defaultRarityLogic.hasCardInfo,
        supertype.logic,
        type.logic,
        subtype?.logic,
        rarity?.logic,
      ),
    [supertype, type, subtype, rarity],
  );

  return cardLogic;
};

export default useCardLogic;
