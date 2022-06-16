import React, { createContext, useMemo, useState } from 'react';
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
import dot from 'dot-object';

export type CardStylesState = RequiredIsh<CardStyles>;

interface CardStylesContextInterface {
  state: CardStylesState;
  setCardImgObj: (obj?: object) => void;
  cardImgSrc: string;
}

const initialState: CardStylesState = defaultCardStyles;

export const CardStylesContext = createContext<CardStylesContextInterface>({
  state: initialState,
  setCardImgObj: () => null,
  cardImgSrc: fallbackCard.src,
});

export const CardStylesProvider: React.FC = ({ children }) => {
  const [cardImgObj, setCardImgObj] = useState<{}>();
  const { baseSet, supertype, type, subtype, variation, rarity } =
    useCardRelations();

  const { state, cardImgSrc } = useMemo(() => {
    // Create merged cardStyles
    const styles: RequiredIsh<CardStyles> = merge(
      {},
      defaultCardStyles,
      baseSet.styles,
      supertype.styles,
      type.styles,
      subtype?.styles,
      variation?.styles,
      rarity?.styles,
    );

    // Create cardImgSrc
    const seperator = cardImgObj ? '.' : '/';
    const path = getCardImagePath(
      baseSet,
      supertype,
      type,
      subtype,
      variation,
      rarity,
      seperator,
    );
    let src: string;
    if (cardImgObj) {
      const base64: string | undefined = dot.pick(`${path}.image`, cardImgObj);
      if (base64) src = `data:image/png;base64,${base64}`;
      else src = fallbackCard.src;
    } else {
      src = `${Routes.Assets.Cards}/${path}.png`;
    }
    return {
      state: styles,
      cardImgSrc: src,
    };
  }, [cardImgObj, baseSet, supertype, type, subtype, variation, rarity]);

  return (
    <CardStylesContext.Provider
      value={{
        state,
        setCardImgObj,
        cardImgSrc,
      }}
    >
      {children}
    </CardStylesContext.Provider>
  );
};
