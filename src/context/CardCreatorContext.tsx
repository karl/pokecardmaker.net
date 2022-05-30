import { CardInterface } from '@interfaces/card';
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { defaultCardOptions } from '@defaults/cardOptions';

export type CardCreatorState = CardInterface;

interface CardCreatorContextInterface {
  state: CardCreatorState;
  setState: Dispatch<SetStateAction<CardInterface>>;
  cardImgObj?: object;
  setCardImgObj: (obj?: object) => void;
  debug: {
    showCardOverlay: boolean;
    setShowCardOverlay: Dispatch<SetStateAction<boolean>>;
    overlayOpacity: number;
    setOverlayOpacity: Dispatch<SetStateAction<number>>;
    overlayImgSrc?: string;
    setOverlayImgSrc: Dispatch<SetStateAction<string | undefined>>;
  };
}

const initialState: CardCreatorState = defaultCardOptions;

export const CardCreatorContext = createContext<CardCreatorContextInterface>({
  state: initialState,
  setState: () => null,
  cardImgObj: undefined,
  setCardImgObj: () => null,
  debug: {
    showCardOverlay: true,
    setShowCardOverlay: () => null,
    overlayOpacity: 5,
    setOverlayOpacity: () => null,
    overlayImgSrc: undefined,
    setOverlayImgSrc: () => null,
  },
});

export const CardCreatorProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<CardCreatorState>(initialState);
  const [cardImgObj, setCardImgObj] = useState<{}>();
  const [showCardOverlay, setShowCardOverlay] = useState<boolean>(true);
  const [overlayOpacity, setOverlayOpacity] = useState<number>(5);
  const [overlayImgSrc, setOverlayImgSrc] = useState<string | undefined>(
    'https://pokemonkaartenverkopen.nl/wp-content/themes/versatile-child/modules/pokemon-tcg/assets/cards/hi-rillaboom-v-SWSH014-sword-shield-swsh-black-star-promos.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2',
  );

  return (
    <CardCreatorContext.Provider
      value={{
        state,
        setState,
        cardImgObj,
        setCardImgObj,
        debug: {
          showCardOverlay,
          setShowCardOverlay,
          overlayOpacity,
          setOverlayOpacity,
          overlayImgSrc,
          setOverlayImgSrc,
        },
      }}
    >
      {children}
    </CardCreatorContext.Provider>
  );
};
