import { CardInterface } from '@interfaces/card';
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';
import { defaultCardOptions } from '@defaults/cardOptions';
import { defaultCardLogic } from '@defaults/cardLogic';
import useBaseSet from '@hooks/cardOptions/useBaseSet';
import useRarity from '@hooks/cardOptions/useRarity';
import useSubtype from '@hooks/cardOptions/useSubtype';
import useSupertype from '@hooks/cardOptions/useSupertype';
import useType from '@hooks/cardOptions/useType';
import useVariation from '@hooks/cardOptions/useVariation';
import { CardLogic } from '@interfaces/cardOptions/cardLogic';
import merge from 'lodash.merge';
import { defaultCardStyles } from '@defaults/cardStyles';
import { CardStyles } from '@interfaces/cardOptions/cardStyles';
import { RequiredIsh } from '@interfaces/utils';

export type CardCreatorState = CardInterface;

interface CardCreatorContextInterface {
  state: CardCreatorState;
  setState: Dispatch<SetStateAction<CardInterface>>;
  cardImgObj?: object;
  setCardImgObj: (obj?: object) => void;
  cardLogic: Required<CardLogic>;
  cardStyles: RequiredIsh<CardStyles>;
  debug: {
    showCardOverlay: boolean;
    setShowCardOverlay: Dispatch<SetStateAction<boolean>>;
    overlayOpacity: number;
    setOverlayOpacity: Dispatch<SetStateAction<number>>;
    overlayImgSrc?: string;
    setOverlayImgSrc: Dispatch<SetStateAction<string | undefined>>;
    prevolveImgSrc?: string;
    setPrevolveImgSrc: Dispatch<SetStateAction<string | undefined>>;
  };
}

const initialState: CardCreatorState = defaultCardOptions;

export const CardCreatorContext = createContext<CardCreatorContextInterface>({
  state: initialState,
  setState: () => null,
  cardImgObj: undefined,
  setCardImgObj: () => null,
  cardLogic: defaultCardLogic,
  cardStyles: defaultCardStyles,
  debug: {
    showCardOverlay: true,
    setShowCardOverlay: () => null,
    overlayOpacity: 5,
    setOverlayOpacity: () => null,
    overlayImgSrc: undefined,
    setOverlayImgSrc: () => null,
    prevolveImgSrc: undefined,
    setPrevolveImgSrc: () => null,
  },
});

export const CardCreatorProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<CardCreatorState>(initialState);
  const [cardImgObj, setCardImgObj] = useState<{}>();
  const [showCardOverlay, setShowCardOverlay] = useState<boolean>(true);
  const [overlayOpacity, setOverlayOpacity] = useState<number>(50);
  const [overlayImgSrc, setOverlayImgSrc] = useState<string | undefined>(
    'https://pokemonkaartenverkopen.nl/wp-content/themes/versatile-child/modules/pokemon-tcg/assets/cards/hi-garbodor-118-sword-shield-rebel-clash.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2',
  );
  const [prevolveImgSrc, setPrevolveImgSrc] = useState<string | undefined>(
    'https://64.media.tumblr.com/57fd7a6ad04b7bf1538e83474a2222a7/b6be2ee655897623-63/s1280x1920/6dd2fef19a466174889f6c65f4ab39b0263176a6.png',
  );
  const { baseSet } = useBaseSet();
  const { supertype } = useSupertype();
  const { type } = useType();
  const { subtype } = useSubtype();
  const { variation } = useVariation();
  const { rarity } = useRarity();

  const cardLogic = useMemo<Required<CardLogic>>(
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

  const cardStyles = useMemo<RequiredIsh<CardStyles>>(
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

  return (
    <CardCreatorContext.Provider
      value={{
        state,
        setState,
        cardImgObj,
        setCardImgObj,
        cardLogic,
        cardStyles,
        debug: {
          showCardOverlay,
          setShowCardOverlay,
          overlayOpacity,
          setOverlayOpacity,
          overlayImgSrc,
          setOverlayImgSrc,
          prevolveImgSrc,
          setPrevolveImgSrc,
        },
      }}
    >
      {children}
    </CardCreatorContext.Provider>
  );
};
