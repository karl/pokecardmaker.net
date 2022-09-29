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
  const [showCardOverlay, setShowCardOverlay] = useState<boolean>(false);
  const [overlayOpacity, setOverlayOpacity] = useState<number>(50);
  const [overlayImgSrc, setOverlayImgSrc] = useState<string | undefined>(
    'https://images.pokemontcg.io/sm115/6_hires.png',
  );
  const [prevolveImgSrc, setPrevolveImgSrc] = useState<string | undefined>(
    'https://www.formica.com/nl-nl/-/media/formica/emea/products/swatch-images/f2253/f2253-swatch.jpg?rev=1604f0e24cab4299a2a076307dd98ccd',
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
