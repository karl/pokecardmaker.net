import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from 'react';

interface CardDebugContextInterface {
  showDebug: boolean;
  showCardOverlay: boolean;
  setShowCardOverlay: Dispatch<SetStateAction<boolean>>;
  overlayOpacity: number;
  setOverlayOpacity: Dispatch<SetStateAction<number>>;
  overlayImgSrc?: string;
  setOverlayImgSrc: Dispatch<SetStateAction<string | undefined>>;
  prevolveImgSrc?: string;
  setPrevolveImgSrc: Dispatch<SetStateAction<string | undefined>>;
}

const showDebug = process.env.NODE_ENV === 'development';

export const CardDebugContext = createContext<CardDebugContextInterface>({
  showDebug,
  showCardOverlay: true,
  setShowCardOverlay: () => null,
  overlayOpacity: 5,
  setOverlayOpacity: () => null,
  overlayImgSrc: undefined,
  setOverlayImgSrc: () => null,
  prevolveImgSrc: undefined,
  setPrevolveImgSrc: () => null,
});

export const CardDebugProvider: React.FC = ({ children }) => {
  const [showCardOverlay, setShowCardOverlay] = useState<boolean>(true);
  const [overlayOpacity, setOverlayOpacity] = useState<number>(50);
  const [overlayImgSrc, setOverlayImgSrc] = useState<string | undefined>(
    'https://pokemonkaartenverkopen.nl/wp-content/themes/versatile-child/modules/pokemon-tcg/assets/cards/hi-garbodor-118-sword-shield-rebel-clash.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2',
  );
  const [prevolveImgSrc, setPrevolveImgSrc] = useState<string | undefined>(
    'https://64.media.tumblr.com/57fd7a6ad04b7bf1538e83474a2222a7/b6be2ee655897623-63/s1280x1920/6dd2fef19a466174889f6c65f4ab39b0263176a6.png',
  );

  return (
    <CardDebugContext.Provider
      value={{
        showDebug,
        showCardOverlay,
        setShowCardOverlay,
        overlayOpacity,
        setOverlayOpacity,
        overlayImgSrc,
        setOverlayImgSrc,
        prevolveImgSrc,
        setPrevolveImgSrc,
      }}
    >
      {children}
    </CardDebugContext.Provider>
  );
};
