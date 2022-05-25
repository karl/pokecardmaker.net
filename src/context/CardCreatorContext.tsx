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
  setCardImgObj: (obj: object) => void;
}

const initialState: CardCreatorState = defaultCardOptions;

export const CardCreatorContext = createContext<CardCreatorContextInterface>({
  state: initialState,
  setState: () => null,
  cardImgObj: undefined,
  setCardImgObj: () => null,
});

export const CardCreatorProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<CardCreatorState>(initialState);
  const [cardImgObj, setCardImgObj] = useState<{}>();

  return (
    <CardCreatorContext.Provider
      value={{
        state,
        setState,
        cardImgObj,
        setCardImgObj,
      }}
    >
      {children}
    </CardCreatorContext.Provider>
  );
};
