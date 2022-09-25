import React, { createContext, useMemo } from 'react';
import merge from 'lodash.merge';
import {
  CardStyles,
  defaultCardStyles,
  getCardImagePath,
} from '@cardEditor/cardStyles';
import { RequiredIsh } from '@interfaces/utils';
import { useCardRelations } from '@cardEditor/cardOptions';
import Routes from '@routes';
import fallbackCard from '@assets/fallbackCard.png';

export type CardStylesState = RequiredIsh<CardStyles>;

interface CardStylesContextInterface {
  state: CardStylesState;
  cardImgSrc: string | undefined;
}

const initialState: CardStylesState = defaultCardStyles;

export const CardStylesContext = createContext<CardStylesContextInterface>({
  state: initialState,
  cardImgSrc: fallbackCard.src,
});

export const CardStylesProvider: React.FC = ({ children }) => {
  const { baseSet, supertype, type, subtype, variation, rarity } =
    useCardRelations();

  const { state, cardImgSrc } = useMemo(() => {
    // Create merged cardStyles
    const styles: RequiredIsh<CardStyles> = merge(
      {},
      defaultCardStyles,
      baseSet.styles,
      supertype.styles,
      supertype.baseSetOverwrites?.[baseSet.id]?.styles,
      type.styles,
      type.baseSetOverwrites?.[baseSet.id]?.styles,
      subtype?.styles,
      subtype?.baseSetOverwrites?.[baseSet.id]?.styles,
      variation?.styles,
      variation?.baseSetOverwrites?.[baseSet.id]?.styles,
      rarity?.styles,
      rarity?.baseSetOverwrites?.[baseSet.id]?.styles,
    );

    // Create cardImgSrc
    const path = getCardImagePath(
      baseSet,
      supertype,
      type,
      subtype,
      variation,
      rarity,
    );

    return {
      state: styles,
      cardImgSrc: path ? `${Routes.Assets.Cards}/${path}.png` : undefined,
    };
  }, [baseSet, supertype, type, subtype, variation, rarity]);

  return (
    <CardStylesContext.Provider
      value={{
        state,
        cardImgSrc,
      }}
    >
      {children}
    </CardStylesContext.Provider>
  );
};
