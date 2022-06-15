import { CardInterface, RelationsInterface } from '@cardEditor';
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';
import { CardLogic, defaultCardLogic } from '@cardEditor/cardLogic';
import merge from 'lodash.merge';
import { CardStyles, defaultCardStyles } from '@cardEditor/cardStyles';
import { RequiredIsh } from '@interfaces/utils';
import findById from '@utils/findById';
import { defaultCardOptions, defaultRelations } from '@cardEditor/cardOptions';
import { baseSets } from '@cardEditor/cardOptions/baseSet';
import { rarities } from '@cardEditor/cardOptions/rarity';
import { subtypes } from '@cardEditor/cardOptions/subtype';
import { supertypes } from '@cardEditor/cardOptions/supertype';
import { variations } from '@cardEditor/cardOptions/variation';
import { types } from '@cardEditor/cardOptions/type';

export type CardCreatorState = CardInterface;

interface CardCreatorContextInterface {
  state: CardCreatorState;
  setState: Dispatch<SetStateAction<CardCreatorState>>;
  relations: RelationsInterface;
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
  relations: defaultRelations,
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

  const baseSet = useMemo<RelationsInterface['baseSet']>(
    () => findById(baseSets, state.baseSetId, defaultRelations.baseSet),
    [state.baseSetId],
  );

  const supertype = useMemo<RelationsInterface['supertype']>(
    () => findById(supertypes, state.supertypeId, defaultRelations.supertype),
    [state.supertypeId],
  );

  const type = useMemo<RelationsInterface['type']>(
    () => findById(types, state.typeId, defaultRelations.type),
    [state.typeId],
  );

  const subtype = useMemo<RelationsInterface['subtype']>(
    () => findById(subtypes, state.subtypeId, defaultRelations.subtype),
    [state.subtypeId],
  );

  const variation = useMemo<RelationsInterface['variation']>(
    () => findById(variations, state.variationId, defaultRelations.variation),
    [state.variationId],
  );

  const rarity = useMemo<RelationsInterface['rarity']>(
    () => findById(rarities, state.rarityId, defaultRelations.rarity),
    [state.rarityId],
  );

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
        baseSet.styles,
        supertype.styles,
        type.styles,
        subtype?.styles,
        variation?.styles,
        rarity?.styles,
      ),
    [baseSet, supertype, type, subtype, variation, rarity],
  );

  return (
    <CardCreatorContext.Provider
      value={{
        state,
        setState,
        relations: {
          baseSet,
          supertype,
          type,
          subtype,
          variation,
          rarity,
        },
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
