import { useMemo } from 'react';
import { CardStyles } from '@interfaces/cardOptions/cardStyles';
import merge from 'lodash.merge';
import { defaultCardStyles } from '@defaults/cardStyles';
import useType from './useType';
import useSubtype from './useSubtype';
import useRarity from './useRarity';

const useCardStyles = () => {
  const { type } = useType();
  const { subtype } = useSubtype();
  const { rarity } = useRarity();

  const cardStyles = useMemo<CardStyles>(
    () =>
      merge(
        {},
        defaultCardStyles,
        type.styles,
        subtype?.styles,
        rarity?.styles,
      ),
    [type, subtype, rarity],
  );

  return {
    cardStyles,
  };
};

export default useCardStyles;
