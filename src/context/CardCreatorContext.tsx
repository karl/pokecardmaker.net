import { CardInterface } from '@interfaces/card';
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { defaultCardOptions } from 'src/defaults/cardOptions';

export type CardCreatorState = CardInterface;

interface CardCreatorContextInterface {
  state: CardCreatorState;
  setState: Dispatch<SetStateAction<CardInterface>>;
}

const initialState: CardCreatorState = defaultCardOptions;

export const CardCreatorContext = createContext<CardCreatorContextInterface>({
  state: initialState,
  setState: () => null,
});

export const CardCreatorProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<CardCreatorState>(initialState);

  return (
    <CardCreatorContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </CardCreatorContext.Provider>
  );
};
