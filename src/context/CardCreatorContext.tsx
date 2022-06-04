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
    'https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH2/SWSH2_EN_118.png',
  );
  const [prevolveImgSrc, setPrevolveImgSrc] = useState<string | undefined>(
    'https://64.media.tumblr.com/57fd7a6ad04b7bf1538e83474a2222a7/b6be2ee655897623-63/s1280x1920/6dd2fef19a466174889f6c65f4ab39b0263176a6.png',
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
          prevolveImgSrc,
          setPrevolveImgSrc,
        },
      }}
    >
      {children}
    </CardCreatorContext.Provider>
  );
};
